## Why

OpenSpec coordinates AI coding agents and autonomous workflows across planning, task execution, testing, verification, and archival. AI agents frequently consume hundreds of thousands or even millions of LLM tokens across the lifecycle of a single change.

Currently, neither the local Markdown workflow (`schema: spec-driven`) nor the GitHub Issues workflow (`schema: spec-driven-github`) provides standardized visibility into token consumption at the per-change level, nor is there a centralized ledger tracking aggregate token investment across the entire repository lifecycle.

Developers, teams, and repository maintainers need transparent token accounting, visual token badges (dynamic GitHub issue labels and CLI summaries), and a durable central ledger tracking project-wide token investments upon change archival.

## What Changes

- **Dual-Workflow Metadata Support**:
  - **Markdown Workflow (`spec-driven`)**: Extend `.openspec.yaml` change metadata schema to support optional token tracking (`tokens: { input, output, cached, total, cost_usd, updated_at }`).
  - **GitHub Issues Workflow (`spec-driven-github`)**: Extend OpenSpec issue metadata header JSON block to support optional token tracking (`tokens: { input, output, cached, total, costUsd, updatedAt }`).
- **Dynamic Labels & Visual Indicators**:
  - **GitHub Issues**: Introduce dynamic GitHub issue labels formatted as `tokens:<formatted_count>` (e.g., `tokens:<1k`, `tokens:25k`, `tokens:140k`, `tokens:1.2M`) that automatically refresh on each token update by removing previous token labels and applying the updated label.
  - **Markdown CLI**: Enhance `openspec list`, `openspec show`, and `openspec status` to display token usage summaries and compact formatted badge metrics.
- **Core CLI & Adapter Subcommands**:
  - **Core CLI (`openspec`)**: Add commands (`openspec change record-tokens` / `openspec tokens record`, `openspec tokens aggregate`, `openspec tokens get`) supporting local Markdown changes and delegating appropriately in GitHub issue mode.
  - **Adapter CLI (`tools/openspec-issue/openspec-issue.sh`)**: Add `record-tokens`, `get-tokens`, `refresh-token-label`, and `aggregate-tokens` subcommands with robust parameter validation, rollback on error, and dynamic label synchronization.
- **Central Project Ledger on Archival**:
  - Automatically compile and synchronize cumulative change token metrics into a central repository ledger at `openspec/token-usage.json` and a formatted markdown summary at `openspec/token-usage.md`.
  - Triggered during `openspec archive` / `openspec bulk-archive` for markdown changes, and during `set-lifecycle <issue> completed` / `openspec-archive-change` for GitHub issues.
- **Workflow & Skill Integration**:
  - Update OpenSpec skills and workflow templates (`openspec-propose`, `openspec-apply-change`, `openspec-archive-change`, `openspec-verify-change`) to instruct AI agents to record session token usage at the conclusion of workflow steps across both schemas.
- **Automated Validation & Test Suites**:
  - Add comprehensive Vitest test coverage for core token schemas, CLI token operations, markdown metadata updates, and ledger aggregation.
  - Expand `tools/openspec-issue/test/run.sh` to test adapter token metadata persistence, dynamic label refreshing, backward compatibility with unmetered issues, and central ledger aggregation.

## Capabilities

### New / Modified Capabilities
- `token-usage-tracking`: Define cross-schema token accounting, CLI commands, formatting standards, and central ledger generation.
- `github-issue-change-management`: Extend the issue schema, adapter CLI, label lifecycle, and completion workflow to support issue-level token accounting, dynamic issue labels, and central project ledger updates upon archival.
- `cli-archive`: Update the local markdown archive workflow to compile completed change tokens into `openspec/token-usage.json` and `openspec/token-usage.md`.

## Non-Goals
- Real-time token streaming mid-prompt generation (token metrics are committed atomically per command/turn or workflow step).
- Provider billing API credentials or hard-coded proprietary rate calculations (token accounting accepts raw token counts and optional user-supplied cost metrics).
- Requiring external SaaS databases or third-party observability vendor tie-ins.

## Impact
- **Core Metadata & CLI**: `src/core/change-metadata/`, `src/commands/`, `src/core/archive.ts`
- **Adapter & Contract**: `tools/openspec-issue/openspec-issue.sh`, `tools/openspec-issue/CONTRACT.md`
- **Durable Specifications**: `openspec/specs/token-usage-tracking/spec.md`, `openspec/specs/github-issue-change-management/spec.md`, `openspec/specs/cli-archive/spec.md`
- **Central Ledger**: `openspec/token-usage.json`, `openspec/token-usage.md`
- **OpenSpec Skills & Templates**: `src/core/templates/workflows/`, `skills/`, `.agents/skills/`
- **Test Suites**: `test/`, `tools/openspec-issue/test/run.sh`
