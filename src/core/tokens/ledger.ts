import { promises as fs } from 'fs';
import path from 'path';
import { readChangeMetadata } from '../../utils/change-metadata.js';
import { formatTokenCount, formatCostUsd } from '../../utils/token-format.js';

export interface TokenLedgerChange {
  id: string;
  issueNumber?: number | null;
  name: string;
  lifecycle: string;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  costUsd?: number;
  archivedDate?: string | null;
}

export interface TokenLedgerTotals {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  costUsd: number;
  archivedChangesCount: number;
}

export interface TokenLedgerData {
  lastUpdated: string;
  totals: TokenLedgerTotals;
  changes: TokenLedgerChange[];
}

export interface LedgerOptions {
  outputJson?: string;
  outputMd?: string;
  changes?: TokenLedgerChange[];
}

/**
 * Generate formatted Markdown table from ledger data.
 */
export function formatLedgerMarkdown(data: TokenLedgerData): string {
  const lines: string[] = [
    '# OpenSpec Token Usage Ledger',
    '',
    `**Last Updated:** ${data.lastUpdated}`,
    '',
    '## Summary Totals',
    `- **Total Input Tokens:** ${formatTokenCount(data.totals.inputTokens)}`,
    `- **Total Output Tokens:** ${formatTokenCount(data.totals.outputTokens)}`,
    `- **Total Tokens:** ${formatTokenCount(data.totals.totalTokens)}`,
    `- **Total Cost (USD):** ${formatCostUsd(data.totals.costUsd)}`,
    `- **Archived Changes:** ${data.totals.archivedChangesCount}`,
    '',
    '## Changes Breakdown',
    '| Change / Issue | Lifecycle | Input Tokens | Output Tokens | Total Tokens | Cost (USD) | Archived Date |',
    '| --- | --- | --- | --- | --- | --- | --- |',
  ];

  if (data.changes.length === 0) {
    lines.push('| (none) | - | 0 | 0 | 0 | $0.00 | - |');
  } else {
    for (const change of data.changes) {
      const displayName = change.issueNumber ? `${change.name} (#${change.issueNumber})` : change.name;
      const lifecycle = change.lifecycle;
      const input = formatTokenCount(change.inputTokens);
      const output = formatTokenCount(change.outputTokens);
      const total = formatTokenCount(change.totalTokens);
      const cost = formatCostUsd(change.costUsd ?? 0);
      const date = change.archivedDate || '-';
      lines.push(`| ${displayName} | ${lifecycle} | ${input} | ${output} | ${total} | ${cost} | ${date} |`);
    }
  }

  lines.push('');
  return lines.join('\n');
}

/**
 * Scans local filesystem (archive and active changes) or aggregates provided changes,
 * computes totals, and writes token-usage.json and token-usage.md.
 */
export async function compileTokenLedger(
  projectRoot: string,
  options: LedgerOptions = {}
): Promise<TokenLedgerData> {
  const changes: TokenLedgerChange[] = options.changes ? [...options.changes] : [];

  if (!options.changes) {
    const archiveDir = path.join(projectRoot, 'openspec', 'changes', 'archive');
    const activeDir = path.join(projectRoot, 'openspec', 'changes');

    // Read archived changes
    try {
      const entries = await fs.readdir(archiveDir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const changeDir = path.join(archiveDir, entry.name);
        const meta = readChangeMetadata(changeDir, projectRoot);
        const match = entry.name.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
        const archivedDate = match ? match[1] : (meta?.created ?? null);
        const rawName = match ? match[2] : entry.name;

        if (meta?.tokens) {
          const input = meta.tokens.input;
          const output = meta.tokens.output;
          const total = meta.tokens.total ?? (input + output);
          changes.push({
            id: entry.name,
            name: rawName,
            lifecycle: 'completed',
            inputTokens: input,
            outputTokens: output,
            totalTokens: total,
            costUsd: meta.tokens.cost_usd,
            archivedDate,
          });
        }
      }
    } catch {
      // Archive directory might not exist yet
    }

    // Read active changes
    try {
      const entries = await fs.readdir(activeDir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory() || entry.name === 'archive') continue;
        const changeDir = path.join(activeDir, entry.name);
        const meta = readChangeMetadata(changeDir, projectRoot);
        if (meta?.tokens) {
          const input = meta.tokens.input;
          const output = meta.tokens.output;
          const total = meta.tokens.total ?? (input + output);
          changes.push({
            id: entry.name,
            name: entry.name,
            lifecycle: 'in-progress',
            inputTokens: input,
            outputTokens: output,
            totalTokens: total,
            costUsd: meta.tokens.cost_usd,
            archivedDate: null,
          });
        }
      }
    } catch {
      // Active dir might not exist
    }
  }

  // Calculate totals
  let totalInput = 0;
  let totalOutput = 0;
  let totalCost = 0;
  let archivedCount = 0;

  for (const c of changes) {
    totalInput += c.inputTokens;
    totalOutput += c.outputTokens;
    if (c.costUsd) {
      totalCost += c.costUsd;
    }
    if (c.lifecycle === 'completed') {
      archivedCount += 1;
    }
  }

  const ledgerData: TokenLedgerData = {
    lastUpdated: new Date().toISOString(),
    totals: {
      inputTokens: totalInput,
      outputTokens: totalOutput,
      totalTokens: totalInput + totalOutput,
      costUsd: Math.round(totalCost * 100) / 100,
      archivedChangesCount: archivedCount,
    },
    changes,
  };

  // Paths
  const jsonPath = options.outputJson
    ? path.resolve(options.outputJson)
    : path.join(projectRoot, 'openspec', 'token-usage.json');
  const mdPath = options.outputMd
    ? path.resolve(options.outputMd)
    : path.join(projectRoot, 'openspec', 'token-usage.md');

  // Ensure target directories exist
  await fs.mkdir(path.dirname(jsonPath), { recursive: true });
  await fs.mkdir(path.dirname(mdPath), { recursive: true });

  await fs.writeFile(jsonPath, JSON.stringify(ledgerData, null, 2), 'utf-8');
  await fs.writeFile(mdPath, formatLedgerMarkdown(ledgerData), 'utf-8');

  return ledgerData;
}
