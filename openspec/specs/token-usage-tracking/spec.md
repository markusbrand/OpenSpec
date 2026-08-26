# token-usage-tracking Specification

## Purpose
Define LLM token usage tracking, badge formatting, change recording, and central ledger aggregation across both local markdown and GitHub issues backends.

## Requirements

### Requirement: Token Usage Metadata Schema

The system SHALL validate token usage metadata associated with OpenSpec changes.

#### Scenario: Valid token usage schema
- **WHEN** change metadata contains a `tokens` object
- **THEN** validate that `input` is a non-negative integer
- **AND** validate that `output` is a non-negative integer
- **AND** validate that `cached` (if provided) is a non-negative integer
- **AND** validate that `total` is a non-negative integer equal to input + output
- **AND** validate that `cost_usd` / `costUsd` (if provided) is a non-negative number
- **AND** validate that `updated_at` / `updatedAt` (if provided) is an ISO 8601 string

#### Scenario: Invalid token usage schema rejection
- **WHEN** token values contain negative numbers, non-integers, or invalid types
- **THEN** reject validation with a descriptive validation error

### Requirement: Token Usage Recording

The system SHALL support recording token metrics incrementally or via replacement on active changes.

#### Scenario: Record tokens for local change
- **WHEN** executing `openspec change record-tokens <change-name> --input <N> --output <M>`
- **THEN** update `.openspec.yaml` under the change directory
- **AND** calculate total tokens and update timestamp
- **AND** output confirmation with formatted token badge

#### Scenario: Record tokens with cached count and cost
- **WHEN** executing `openspec change record-tokens <change-name> --input <N> --output <M> --cached <K> --cost <USD>`
- **THEN** record the cached tokens and estimated cost in USD in the metadata

#### Scenario: Incremental recording mode
- **WHEN** executing token recording without `--replace` (default)
- **THEN** add new input, output, cached, and cost values to existing recorded metrics

#### Scenario: Replace recording mode
- **WHEN** executing token recording with `--replace`
- **THEN** overwrite existing recorded token metrics with the new values

### Requirement: GitHub Issue Adapter Token Operations

The GitHub issue adapter SHALL support token recording, retrieval, label refresh, and aggregation.

#### Scenario: Record tokens on GitHub issue
- **WHEN** executing `openspec-issue.sh record-tokens <issue> --input <N> --output <M>`
- **THEN** update the JSON metadata block in the issue body
- **AND** replace any existing `tokens:*` badge label with the updated badge label
- **AND** ensure transactional rollback on failure

#### Scenario: Dynamic token badge labels
- **WHEN** token usage badge is computed:
  - For total < 1,000 tokens: badge is `tokens:<1k` (color `#cfd3d7`)
  - For 1,000 <= total < 100,000 tokens: badge is `tokens:XXk` (color `#0e8a16`)
  - For 100,000 <= total < 1,000,000 tokens: badge is `tokens:XXXk` (color `#fbca04`)
  - For total >= 1,000,000 tokens: badge is `tokens:X.XM` (color `#d93f0b`)
- **THEN** create or update the label on the repository

### Requirement: Central Token Usage Ledger

The system SHALL maintain a central ledger aggregating token metrics across all changes.

#### Scenario: Compile token ledger
- **WHEN** executing `openspec tokens aggregate` or archiving a change
- **THEN** scan all active and archived changes (or GitHub issues)
- **AND** write `openspec/token-usage.json` with machine-readable totals and breakdown
- **AND** write `openspec/token-usage.md` with human-readable summary table
