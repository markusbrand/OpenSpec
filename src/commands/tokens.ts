import { Command } from 'commander';
import path from 'path';
import { promises as fs } from 'fs';
import chalk from 'chalk';
import { resolveRootForCommand, toRootOutput } from '../core/root-selection.js';
import { readChangeMetadata } from '../utils/change-metadata.js';
import { getActiveChangeIds } from '../utils/item-discovery.js';
import { compileTokenLedger, formatLedgerMarkdown } from '../core/tokens/ledger.js';
import { formatTokenBadge, formatTokenCount, formatCostUsd } from '../utils/token-format.js';
import { isInteractive } from '../utils/interactive.js';

export interface TokensShowOptions {
  json?: boolean;
  store?: string;
  storePath?: string;
  noInteractive?: boolean;
}

export interface TokensAggregateOptions {
  outputJson?: string;
  outputMd?: string;
  json?: boolean;
  store?: string;
  storePath?: string;
}

export class TokensCommand {
  async show(changeName?: string, options: TokensShowOptions = {}): Promise<void> {
    const root = await resolveRootForCommand(options, { json: options.json });
    if (!root) return;

    const projectRoot = root.path;
    const changesDir = path.join(projectRoot, 'openspec', 'changes');

    if (!changeName) {
      const changes = await getActiveChangeIds(projectRoot);
      if (changes.length === 0) {
        if (options.json) {
          console.log(JSON.stringify({ changes: [], ...(options.json ? { root: toRootOutput(root) } : {}) }, null, 2));
        } else {
          console.log('No active changes found.');
        }
        return;
      }

      const results = [];
      for (const name of changes) {
        const changeDir = path.join(changesDir, name);
        const meta = readChangeMetadata(changeDir, projectRoot);
        if (meta?.tokens) {
          const total = meta.tokens.total ?? (meta.tokens.input + meta.tokens.output);
          results.push({
            name,
            tokens: meta.tokens,
            badge: formatTokenBadge(total),
          });
        }
      }

      if (options.json) {
        console.log(JSON.stringify({ changes: results, ...(options.json ? { root: toRootOutput(root) } : {}) }, null, 2));
        return;
      }

      if (results.length === 0) {
        console.log('No token usage recorded for active changes.');
        return;
      }

      console.log(chalk.bold('Active Changes Token Usage:'));
      for (const r of results) {
        const t = r.tokens;
        const total = t.total ?? (t.input + t.output);
        const costStr = t.cost_usd !== undefined ? ` | Cost: ${formatCostUsd(t.cost_usd)}` : '';
        console.log(`  ${chalk.cyan(r.name)} [${chalk.yellow(r.badge)}] - Input: ${formatTokenCount(t.input)}, Output: ${formatTokenCount(t.output)}, Total: ${formatTokenCount(total)}${costStr}`);
      }
      return;
    }

    const changeDir = path.join(changesDir, changeName);
    const meta = readChangeMetadata(changeDir, projectRoot);

    if (!meta || !meta.tokens) {
      if (options.json) {
        console.log(JSON.stringify({ name: changeName, tokens: null, ...(options.json ? { root: toRootOutput(root) } : {}) }, null, 2));
      } else {
        console.log(`No token usage recorded for change "${changeName}".`);
      }
      return;
    }

    const t = meta.tokens;
    const total = t.total ?? (t.input + t.output);
    const badge = formatTokenBadge(total);

    if (options.json) {
      console.log(JSON.stringify({
        name: changeName,
        tokens: t,
        badge,
        ...(options.json ? { root: toRootOutput(root) } : {}),
      }, null, 2));
      return;
    }

    console.log(chalk.bold(`Token Usage for "${changeName}":`));
    console.log(`  Badge:       ${chalk.yellow(badge)}`);
    console.log(`  Input:       ${formatTokenCount(t.input)}`);
    console.log(`  Output:      ${formatTokenCount(t.output)}`);
    if (t.cached !== undefined) {
      console.log(`  Cached:      ${formatTokenCount(t.cached)}`);
    }
    console.log(`  Total:       ${formatTokenCount(total)}`);
    if (t.cost_usd !== undefined) {
      console.log(`  Cost (USD):  ${formatCostUsd(t.cost_usd)}`);
    }
    if (t.updated_at) {
      console.log(`  Updated:     ${t.updated_at}`);
    }
  }

  async aggregate(options: TokensAggregateOptions = {}): Promise<void> {
    const root = await resolveRootForCommand(options, { json: options.json });
    if (!root) return;

    const projectRoot = root.path;
    const data = await compileTokenLedger(projectRoot, {
      outputJson: options.outputJson,
      outputMd: options.outputMd,
    });

    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
      return;
    }

    console.log(chalk.green('✔ Token ledger compiled successfully:'));
    console.log(`  JSON: ${options.outputJson ?? 'openspec/token-usage.json'}`);
    console.log(`  Markdown: ${options.outputMd ?? 'openspec/token-usage.md'}`);
    console.log(`  Total Tokens: ${formatTokenCount(data.totals.totalTokens)} | Total Cost: ${formatCostUsd(data.totals.costUsd)} | Changes: ${data.changes.length}`);
  }
}

export function registerTokensCommand(program: Command): void {
  const tokensCmd = program
    .command('tokens')
    .description('Manage and aggregate token usage across OpenSpec changes');

  tokensCmd
    .command('show [change-name]')
    .description('Show token metrics for a change or all active changes')
    .option('--json', 'Output as JSON')
    .option('--store <id>', 'Target store ID')
    .action(async (changeName?: string, options?: TokensShowOptions) => {
      try {
        const cmd = new TokensCommand();
        await cmd.show(changeName, options);
      } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exitCode = 1;
      }
    });

  tokensCmd
    .command('aggregate')
    .description('Aggregate token usage ledger into openspec/token-usage.json and openspec/token-usage.md')
    .option('--output-json <path>', 'Custom path for output JSON ledger')
    .option('--output-md <path>', 'Custom path for output Markdown ledger')
    .option('--json', 'Output ledger data as JSON to stdout')
    .option('--store <id>', 'Target store ID')
    .action(async (options?: TokensAggregateOptions) => {
      try {
        const cmd = new TokensCommand();
        await cmd.aggregate(options);
      } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exitCode = 1;
      }
    });
}
