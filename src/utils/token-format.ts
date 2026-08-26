/**
 * Shared token formatting helpers for badge formatting, token rounding,
 * color mapping, and cost calculation.
 */

export interface TokenBadgeColor {
  hex: string;
  name: string;
}

/**
 * Format total tokens into a compact badge string:
 * - < 1,000: 'tokens:<1k'
 * - 1,000 - 99,999: 'tokens:XXk' (e.g. 'tokens:25k')
 * - 100,000 - 999,999: 'tokens:XXXk' (e.g. 'tokens:120k')
 * - >= 1,000,000: 'tokens:X.XM' (e.g. 'tokens:1.2M')
 */
export function formatTokenBadge(totalTokens: number): string {
  if (totalTokens < 1000) {
    return 'tokens:<1k';
  }
  if (totalTokens < 1_000_000) {
    const k = Math.round(totalTokens / 1000);
    return `tokens:${k}k`;
  }
  const m = (totalTokens / 1_000_000).toFixed(1);
  return `tokens:${m}M`;
}

/**
 * Returns the hex and label color name corresponding to a token count:
 * - < 1,000: '#cfd3d7' (Light grey)
 * - 1,000 - 99,999: '#0e8a16' (Green)
 * - 100,000 - 999,999: '#fbca04' (Yellow)
 * - >= 1,000,000: '#d93f0b' (Orange)
 */
export function getTokenBadgeColor(totalTokens: number): TokenBadgeColor {
  if (totalTokens < 1000) {
    return { hex: 'cfd3d7', name: 'Light grey' };
  }
  if (totalTokens < 100_000) {
    return { hex: '0e8a16', name: 'Green' };
  }
  if (totalTokens < 1_000_000) {
    return { hex: 'fbca04', name: 'Yellow' };
  }
  return { hex: 'd93f0b', name: 'Orange' };
}

/**
 * Format numbers with comma separators (e.g. 1,234,567).
 */
export function formatTokenCount(tokens?: number | null): string {
  if (tokens === undefined || tokens === null) return '0';
  return new Intl.NumberFormat('en-US').format(tokens);
}

/**
 * Format cost in USD (e.g. $0.32 or $5.42).
 */
export function formatCostUsd(cost?: number | null): string {
  if (cost === undefined || cost === null) return '$0.00';
  const rounded = (Math.round((cost + Number.EPSILON) * 100) / 100).toFixed(2);
  return `$${rounded}`;
}
