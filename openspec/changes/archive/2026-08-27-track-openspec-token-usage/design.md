## Context

OpenSpec supports dual-source spec-driven workflows:
1. **Markdown Files (`schema: spec-driven`)**: Stored locally under `openspec/changes/<change-id>/` with metadata in `.openspec.yaml`.
2. **GitHub Issues (`schema: spec-driven-github`)**: Stored as machine-managed GitHub issues via `tools/openspec-issue/openspec-issue.sh`.

AI coding agents (e.g. Antigravity, Claude Code, Copilot, Cursor, Devin) spend substantial token budgets across planning, task execution, testing, and verification. Currently, neither workflow provides a unified mechanism to record per-change token consumption, display at-a-glance badges, or aggregate total project-wide token investment upon change completion.

## Goals & Non-Goals

### Goals
- Store machine-readable token metrics (`input`, `output`, `cached`, `total`, `costUsd`/`cost_usd`, `updatedAt`/`updated_at`) in both `.openspec.yaml` (Markdown workflow) and issue metadata blocks (GitHub Issues workflow).
- Provide visual token indicators: dynamic color-coded `tokens:<formatted_count>` GitHub labels and CLI summary outputs.
- Maintain a durable, central repository ledger at `openspec/token-usage.json` and human-readable table at `openspec/token-usage.md`, automatically updated upon change archival/completion.
- Provide CLI subcommands in both the core `openspec` CLI and `tools/openspec-issue/openspec-issue.sh` to record, query, refresh, and aggregate token counts.
- Support both incremental addition (`--incremental`) and replacement (`--replace`) modes.

### Non-Goals
- Fine-grained per-turn streaming telemetry during prompt execution.
- Direct integration with proprietary LLM provider billing APIs.
- Mandatory external SaaS observability vendors.

## Technical Decisions

### 1. Metadata Schema Definitions

#### Local Markdown Changes (`.openspec.yaml`)
```yaml
schema: spec-driven
created: '2026-08-26'
tokens:
  input: 124500
  output: 18200
  cached: 45000
  total: 142700
  cost_usd: 0.32
  updated_at: '2026-08-26T10:45:00Z'
```

#### GitHub Issues Metadata (Header JSON Block)
```json
{
  "schemaVersion": 1,
  "changeName": "track-openspec-token-usage",
  "specSchema": "spec-driven",
  "lifecycle": "implementing",
  "created": "2026-08-26",
  "archivedDate": null,
  "tokens": {
    "input": 124500,
    "output": 18200,
    "cached": 45000,
    "total": 142700,
    "costUsd": 0.32,
    "updatedAt": "2026-08-26T10:45:00Z"
  }
}
```

Validation rules:
- `tokens` is optional; if present, `input`, `output`, and `total` must be non-negative integers.
- If `total` is omitted during input, it defaults to `input + output`.
- Existing changes and issues without `tokens` remain 100% valid.

### 2. Label Naming & Formatting Scheme
Format: `tokens:<compact_number>`
- `< 1,000`: `tokens:<1k` (Color: `#cfd3d7` Light grey)
- `1,000 - 99,999`: `tokens:XXk` (e.g. `tokens:25k`, `tokens:84k`, Color: `#0e8a16` Green)
- `100,000 - 999,999`: `tokens:XXXk` (e.g. `tokens:120k`, `tokens:650k`, Color: `#fbca04` Yellow)
- `1,000,000+`: `tokens:X.XM` (e.g. `tokens:1.2M`, `tokens:3.5M`, Color: `#d93f0b` Orange / `#6f42c1` Purple)

When updating tokens on a GitHub issue, all existing labels matching `tokens:*` are removed before attaching the new badge label.

### 3. Central Token Ledger Architecture
Upon change completion (`openspec archive` for markdown or `set-lifecycle <issue> completed` for GitHub issues), or via manual aggregation (`openspec tokens aggregate` or `openspec-issue.sh aggregate-tokens`):

- `openspec/token-usage.json`:
  ```json
  {
    "lastUpdated": "2026-08-26T12:00:00Z",
    "totals": {
      "inputTokens": 2450000,
      "outputTokens": 380000,
      "totalTokens": 2830000,
      "costUsd": 5.42,
      "archivedChangesCount": 18
    },
    "changes": [
      {
        "id": "track-openspec-token-usage",
        "issueNumber": 93,
        "name": "track-openspec-token-usage",
        "lifecycle": "completed",
        "inputTokens": 180000,
        "outputTokens": 25000,
        "totalTokens": 205000,
        "costUsd": 0.45,
        "archivedDate": "2026-08-26"
      }
    ]
  }
  ```

- `openspec/token-usage.md`: Auto-generated markdown table displaying cumulative totals and per-change breakdown.

### 4. CLI Subcommand Interfaces

#### Core CLI (`openspec`)
- `openspec change record-tokens <change-name> --input <N> --output <M> [--cached <K>] [--cost <USD>] [--incremental|--replace]`
- `openspec tokens aggregate [--output-json <path>] [--output-md <path>]`
- `openspec tokens show [change-name]`

#### Adapter CLI (`tools/openspec-issue/openspec-issue.sh`)
- `record-tokens <issue> --input <N> --output <M> [--cached <K>] [--cost <USD>] [--incremental|--replace]`
- `get-tokens <issue>` (returns structured JSON token metrics)
- `refresh-token-label <issue>`
- `aggregate-tokens [--output-json <path>] [--output-md <path>]`

## Risks and Trade-offs

- **Cross-Platform Compatibility**: File paths (`openspec/token-usage.json`, `openspec/token-usage.md`) must use `path.join()` / `path.resolve()` across Linux, macOS, and Windows.
- **GitHub API Rate Limits / Latency**: GitHub issue aggregation uses paginated caching (`load_openspec_issues`) to minimize REST calls.
- **Atomic State Consistency**: Rollback handlers guarantee that failed token updates or label assignments restore the prior valid state without leaving corrupted metadata or dangling labels.
