# token-usage-tracking Specification

## Requirements

### Requirement: Cross-workflow token accounting metadata
The OpenSpec framework SHALL support tracking structured token usage metrics within both local Markdown change metadata (`.openspec.yaml`) and GitHub issue metadata blocks, while maintaining full backward compatibility with changes that do not contain token data.

#### Scenario: Record token consumption on a local Markdown change
- **WHEN** `openspec change record-tokens <change-name> --input <N> --output <M>` (or equivalent CLI command) is executed
- **THEN** OpenSpec SHALL update `openspec/changes/<change-name>/.openspec.yaml` with `input`, `output`, `total`, and timestamp values under the `tokens` key
- **AND** preserve all existing fields in `.openspec.yaml`.

#### Scenario: Record token consumption on a GitHub issue
- **WHEN** `openspec-issue.sh record-tokens <issue> --input <N> --output <M>` is executed
- **THEN** the adapter SHALL update the issue metadata block with updated `input`, `output`, and computed `total` token counts and a timestamp
- **AND** preserve all other metadata fields, managed sections, and user-authored text.

#### Scenario: Parse changes without token metadata
- **WHEN** a change contains valid metadata without a `tokens` block (in `.openspec.yaml` or GitHub issue metadata)
- **THEN** structural validation SHALL pass successfully
- **AND** token queries and aggregation SHALL treat missing metrics as zero.

### Requirement: Dynamic token label and CLI visual indicator synchronization
OpenSpec SHALL provide clear visual indicators of token consumption: dynamic GitHub issue badge labels for the GitHub Issues workflow and formatted summaries in CLI output for the Markdown workflow.

#### Scenario: Applying and refreshing GitHub issue token labels
- **WHEN** token counts are recorded or refreshed on a GitHub issue
- **THEN** the adapter SHALL format the total token count into a standard compact badge label (e.g. `tokens:<1k`, `tokens:25k`, `tokens:140k`, `tokens:1.2M`)
- **AND** remove any previously attached `tokens:*` label before attaching the new label.

#### Scenario: CLI change list and show visual token summary
- **WHEN** `openspec list` or `openspec show <change-name>` is executed in a Markdown workspace
- **THEN** the output SHALL display the total tokens and formatted badge summary for changes that have recorded token usage.

#### Scenario: Refresh labels across all open GitHub issues
- **WHEN** `openspec-issue.sh refresh-token-labels` is invoked
- **THEN** the adapter SHALL inspect all OpenSpec issues and synchronize each issue's token label to its metadata token count.

### Requirement: Central project token aggregation upon archival
When an OpenSpec change is archived (via `openspec archive` for Markdown changes or `openspec-issue.sh set-lifecycle <issue> completed` for GitHub issues), OpenSpec SHALL compile cumulative token metrics across all completed changes and update the central repository token ledger.

#### Scenario: Archiving a local Markdown change updates the central ledger
- **WHEN** a local change is archived via `openspec archive <change-name>` or `openspec bulk-archive`
- **THEN** OpenSpec SHALL write the aggregated project token summary and per-change breakdown to `openspec/token-usage.json` and a formatted summary in `openspec/token-usage.md`
- **AND** include total input tokens, total output tokens, overall tokens, and total estimated cost.

#### Scenario: Archiving a GitHub issue updates the central ledger
- **WHEN** an issue is completed via `openspec-issue.sh set-lifecycle <issue> completed` or the archive workflow
- **THEN** the workflow SHALL write the aggregated project token summary and per-change breakdown to `openspec/token-usage.json` and a formatted summary in `openspec/token-usage.md`.

#### Scenario: Manual aggregation across repository changes
- **WHEN** `openspec tokens aggregate` or `openspec-issue.sh aggregate-tokens` is executed
- **THEN** OpenSpec SHALL scan all active and archived changes (or open and closed issues), compute cumulative totals, and regenerate `openspec/token-usage.json` and `openspec/token-usage.md`.

### Requirement: Classified error handling and atomic rollback for token operations
Token recording and aggregation operations SHALL fail explicitly with classified error codes when filesystem, permissions, network, or structural issues occur, leaving local files and remote state in their prior valid state.

#### Scenario: Mutation failure during GitHub issue token recording
- **WHEN** a token update fails during GitHub label assignment or body editing
- **THEN** the adapter SHALL roll back the issue body and labels to their previous valid state
- **AND** report the classified error without claiming success.

#### Scenario: Mutation failure during local metadata update
- **WHEN** writing `.openspec.yaml` fails due to filesystem errors or schema validation failure
- **THEN** OpenSpec SHALL preserve the existing `.openspec.yaml` without partial corruption
- **AND** report a classified `ChangeMetadataError`.
