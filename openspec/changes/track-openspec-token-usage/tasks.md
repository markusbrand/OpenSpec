## 1. Core Schema & Metadata Token Support
- [ ] 1.1 Extend `ChangeMetadataSchema` in `src/core/change-metadata/schema.ts` with optional `tokens` schema (`input`, `output`, `cached`, `total`, `cost_usd`, `updated_at`).
- [ ] 1.2 Extend `validate_metadata_json` and `rewrite_metadata_field` in `tools/openspec-issue/openspec-issue.sh` to validate and manipulate optional `tokens` metadata.
- [ ] 1.3 Update `tools/openspec-issue/CONTRACT.md` with schema documentation for the `tokens` object and backward compatibility guarantees.

## 2. Core CLI Token Operations & Formatting
- [ ] 2.1 Implement shared token formatting helpers (badge formatting, token rounding, cost calculation) in `src/utils/token-format.ts`.
- [ ] 2.2 Implement core CLI commands for token recording and querying (`openspec change record-tokens`, `openspec tokens`).
- [ ] 2.3 Update `openspec list` and `openspec show` to display formatted token badges and summaries.

## 3. GitHub Issue Adapter Token Operations & Dynamic Labels
- [ ] 3.1 Implement token formatting helper (`format_token_badge`) and token label color mapping in `tools/openspec-issue/openspec-issue.sh`.
- [ ] 3.2 Implement `record-tokens` subcommand in `openspec-issue.sh` supporting incremental and replacement modes with atomic rollback.
- [ ] 3.3 Implement `get-tokens` subcommand in `openspec-issue.sh` to return JSON metrics for an issue.
- [ ] 3.4 Implement dynamic label synchronization logic to remove obsolete `tokens:*` labels and apply the current formatted badge label.

## 4. Central Token Ledger & Archival Integration
- [ ] 4.1 Implement token ledger aggregation module in `src/core/tokens/ledger.ts` to compile `openspec/token-usage.json` and `openspec/token-usage.md`.
- [ ] 4.2 Integrate token ledger generation into `src/core/archive.ts` and `openspec archive` / `openspec bulk-archive` workflows.
- [ ] 4.3 Implement `aggregate-tokens` subcommand in `tools/openspec-issue/openspec-issue.sh` and hook into `cmd_set_lifecycle` on `completed`.
- [ ] 4.4 Create initial baseline `openspec/token-usage.json` and `openspec/token-usage.md`.

## 5. OpenSpec Skills & Workflow Guidance Integration
- [ ] 5.1 Update workflow templates in `src/core/templates/workflows/` (`apply-change.ts`, `archive-change.ts`, `propose.ts`, `verify-change.ts`) to guide agents on recording tokens.
- [ ] 5.2 Update skills in `skills/` and `.agents/skills/` to document dual-schema token recording instructions.
- [ ] 5.3 Create durable specification `openspec/specs/token-usage-tracking/spec.md` and update `openspec/specs/github-issue-change-management/spec.md` and `openspec/specs/cli-archive/spec.md`.

## 6. Automated Testing & Verification
- [ ] 6.1 Add Vitest unit and integration tests for `ChangeMetadataSchema` token validation, CLI token recording, and ledger compilation.
- [ ] 6.2 Expand `tools/openspec-issue/test/run.sh` with fixture tests for `record-tokens`, dynamic label replacement, backward compatibility, and rollback on failure.
- [ ] 6.3 Add test cases for `aggregate-tokens` verifying `openspec/token-usage.json` and `openspec/token-usage.md` generation across multiple mock issues and markdown changes.
- [ ] 6.4 Run full test suite (`pnpm test` and `pnpm run test:adapter`) and verify clean pass.
