import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { compileTokenLedger, formatLedgerMarkdown } from '../../src/core/tokens/ledger.js';
import { writeChangeMetadata } from '../../src/utils/change-metadata.js';

describe('Token Ledger', () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'openspec-tokens-test-'));
    await fs.mkdir(path.join(tempDir, 'openspec', 'changes', 'active-1'), { recursive: true });
    await fs.mkdir(path.join(tempDir, 'openspec', 'changes', 'archive', '2026-08-20-archived-1'), { recursive: true });
  });

  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it('compiles token ledger from active and archived changes', async () => {
    // Write metadata for active-1
    writeChangeMetadata(
      path.join(tempDir, 'openspec', 'changes', 'active-1'),
      {
        schema: 'spec-driven',
        created: '2026-08-25',
        tokens: {
          input: 10000,
          output: 2000,
          cached: 1000,
          total: 12000,
          cost_usd: 0.25,
        },
      },
      tempDir
    );

    // Write metadata for archived-1
    writeChangeMetadata(
      path.join(tempDir, 'openspec', 'changes', 'archive', '2026-08-20-archived-1'),
      {
        schema: 'spec-driven',
        created: '2026-08-20',
        archived_date: '2026-08-20',
        tokens: {
          input: 50000,
          output: 10000,
          total: 60000,
          cost_usd: 1.50,
        },
      },
      tempDir
    );

    const ledger = await compileTokenLedger(tempDir);
    expect(ledger.totals.inputTokens).toBe(60000);
    expect(ledger.totals.outputTokens).toBe(12000);
    expect(ledger.totals.totalTokens).toBe(72000);
    expect(ledger.totals.costUsd).toBe(1.75);
    expect(ledger.totals.archivedChangesCount).toBe(1);
    expect(ledger.changes).toHaveLength(2);

    // Verify files were written
    const jsonPath = path.join(tempDir, 'openspec', 'token-usage.json');
    const mdPath = path.join(tempDir, 'openspec', 'token-usage.md');
    expect(await fs.stat(jsonPath)).toBeDefined();
    expect(await fs.stat(mdPath)).toBeDefined();

    const mdContent = await fs.readFile(mdPath, 'utf-8');
    expect(mdContent).toContain('OpenSpec Token Usage Ledger');
    expect(mdContent).toContain('72,000');
    expect(mdContent).toContain('$1.75');
    expect(mdContent).toContain('active-1');
    expect(mdContent).toContain('archived-1');
  });

  it('handles empty repository with no changes', async () => {
    const emptyDir = await fs.mkdtemp(path.join(os.tmpdir(), 'openspec-tokens-empty-'));
    try {
      const ledger = await compileTokenLedger(emptyDir);
      expect(ledger.totals.totalTokens).toBe(0);
      expect(ledger.totals.archivedChangesCount).toBe(0);
      expect(ledger.changes).toHaveLength(0);

      const mdContent = formatLedgerMarkdown(ledger);
      expect(mdContent).toContain('| (none) | - | 0 | 0 | 0 | $0.00 | - |');
    } finally {
      await fs.rm(emptyDir, { recursive: true, force: true });
    }
  });
});
