import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { TokensCommand } from '../../src/commands/tokens.js';
import { ChangeCommand } from '../../src/commands/change.js';
import { writeChangeMetadata } from '../../src/utils/change-metadata.js';

describe('Tokens Command', () => {
  let tempDir: string;
  let logSpy: any;
  let originalCwd: string;

  beforeEach(async () => {
    originalCwd = process.cwd();
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'openspec-tokens-cmd-'));
    process.chdir(tempDir);
    await fs.mkdir(path.join(tempDir, 'openspec', 'changes', 'my-feature'), { recursive: true });
    await fs.writeFile(path.join(tempDir, 'openspec', 'changes', 'my-feature', 'proposal.md'), '# Change: My Feature\n');
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(async () => {
    process.chdir(originalCwd);
    logSpy.mockRestore();
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('records tokens incrementally and in replace mode via ChangeCommand.recordTokens', async () => {
    const changeCmd = new ChangeCommand(path.join(tempDir, 'openspec', 'changes'));
    (changeCmd as any).rootPath = tempDir;

    // Record initial tokens
    await changeCmd.recordTokens('my-feature', {
      input: 1000,
      output: 500,
      cached: 200,
      cost: 0.05,
    });

    // Verify metadata
    const changeDir = path.join(tempDir, 'openspec', 'changes', 'my-feature');
    const metaContent = await fs.readFile(path.join(changeDir, '.openspec.yaml'), 'utf-8');
    expect(metaContent).toContain('input: 1000');
    expect(metaContent).toContain('output: 500');
    expect(metaContent).toContain('total: 1500');

    // Incremental add
    await changeCmd.recordTokens('my-feature', {
      input: 2000,
      output: 1000,
      incremental: true,
    });

    const metaContent2 = await fs.readFile(path.join(changeDir, '.openspec.yaml'), 'utf-8');
    expect(metaContent2).toContain('input: 3000');
    expect(metaContent2).toContain('output: 1500');
    expect(metaContent2).toContain('total: 4500');

    // Replace mode
    await changeCmd.recordTokens('my-feature', {
      input: 500,
      output: 200,
      replace: true,
    });

    const metaContent3 = await fs.readFile(path.join(changeDir, '.openspec.yaml'), 'utf-8');
    expect(metaContent3).toContain('input: 500');
    expect(metaContent3).toContain('output: 200');
    expect(metaContent3).toContain('total: 700');
  });

  it('executes tokens aggregate and tokens show', async () => {
    const changeDir = path.join(tempDir, 'openspec', 'changes', 'my-feature');
    writeChangeMetadata(
      changeDir,
      {
        schema: 'spec-driven',
        created: '2026-08-26',
        tokens: {
          input: 8000,
          output: 2000,
          total: 10000,
          cost_usd: 0.15,
        },
      },
      tempDir
    );

    const tokensCmd = new TokensCommand();
    (tokensCmd as any).rootPath = tempDir;

    // Aggregate
    await tokensCmd.aggregate({});
    expect(await fs.stat(path.join(tempDir, 'openspec', 'token-usage.json'))).toBeDefined();
    expect(await fs.stat(path.join(tempDir, 'openspec', 'token-usage.md'))).toBeDefined();

    // Show JSON
    logSpy.mockClear();
    await tokensCmd.show(undefined, { json: true });
    expect(logSpy).toHaveBeenCalled();
    const loggedJson = JSON.parse(logSpy.mock.calls[0][0]);
    expect(loggedJson.changes[0].tokens.total).toBe(10000);
    expect(loggedJson.changes[0].tokens.cost_usd).toBe(0.15);
  });
});
