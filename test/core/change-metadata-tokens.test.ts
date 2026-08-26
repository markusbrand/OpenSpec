import { describe, it, expect } from 'vitest';
import { ChangeMetadataSchema, TokenUsageSchema } from '../../src/core/change-metadata/schema.js';
import { formatTokenBadge, getTokenBadgeColor, formatTokenCount, formatCostUsd } from '../../src/utils/token-format.js';

describe('TokenUsageSchema', () => {
  it('validates a correct token usage object', () => {
    const valid = {
      input: 1200,
      output: 800,
      cached: 400,
      total: 2000,
      cost_usd: 0.05,
      updated_at: '2026-08-26T20:00:00Z',
    };
    const parsed = TokenUsageSchema.parse(valid);
    expect(parsed.input).toBe(1200);
    expect(parsed.output).toBe(800);
    expect(parsed.cached).toBe(400);
    expect(parsed.total).toBe(2000);
    expect(parsed.cost_usd).toBe(0.05);
  });

  it('rejects negative tokens or non-integer tokens', () => {
    expect(() => TokenUsageSchema.parse({ input: -5, output: 10 })).toThrow();
    expect(() => TokenUsageSchema.parse({ input: 10.5, output: 10 })).toThrow();
    expect(() => TokenUsageSchema.parse({ input: 10, output: -1 })).toThrow();
    expect(() => TokenUsageSchema.parse({ input: 10, output: 10, cached: -1 })).toThrow();
    expect(() => TokenUsageSchema.parse({ input: 10, output: 10, cost_usd: -0.01 })).toThrow();
  });

  it('integrates into ChangeMetadataSchema as optional tokens field', () => {
    const metadata = {
      schema: 'spec-driven',
      created: '2026-08-26',
      tokens: {
        input: 5000,
        output: 2000,
        total: 7000,
      },
    };
    const parsed = ChangeMetadataSchema.parse(metadata);
    expect(parsed.tokens?.total).toBe(7000);
  });
});

describe('token-format utilities', () => {
  it('formats badges correctly according to threshold rules', () => {
    expect(formatTokenBadge(500)).toBe('tokens:<1k');
    expect(formatTokenBadge(999)).toBe('tokens:<1k');
    expect(formatTokenBadge(1000)).toBe('tokens:1k');
    expect(formatTokenBadge(25400)).toBe('tokens:25k');
    expect(formatTokenBadge(99900)).toBe('tokens:100k');
    expect(formatTokenBadge(150000)).toBe('tokens:150k');
    expect(formatTokenBadge(999999)).toBe('tokens:1000k');
    expect(formatTokenBadge(1000000)).toBe('tokens:1.0M');
    expect(formatTokenBadge(1250000)).toBe('tokens:1.3M');
    expect(formatTokenBadge(2000000)).toBe('tokens:2.0M');
  });

  it('maps badge colors correctly', () => {
    expect(getTokenBadgeColor(500).hex).toBe('cfd3d7');
    expect(getTokenBadgeColor(15000).hex).toBe('0e8a16');
    expect(getTokenBadgeColor(250000).hex).toBe('fbca04');
    expect(getTokenBadgeColor(1500000).hex).toBe('d93f0b');
  });

  it('formats token count with commas', () => {
    expect(formatTokenCount(1234567)).toBe('1,234,567');
    expect(formatTokenCount(500)).toBe('500');
  });

  it('formats USD currency correctly', () => {
    expect(formatCostUsd(0)).toBe('$0.00');
    expect(formatCostUsd(1.5)).toBe('$1.50');
    expect(formatCostUsd(0.045)).toBe('$0.05');
  });
});
