# OpenSpec Agent Guidance

This repository contains OpenSpec, an AI-native spec-driven development framework that supports both local Markdown-based specs and GitHub-issue-based spec workflows.

## Core Architectural Principles

1. **Dual-Source Workflow Support**:
   - **Markdown Files (`schema: spec-driven`)**: Changes and specifications live directly in the repository under `openspec/changes/<change-id>/` and `openspec/specs/<capability>/spec.md`.
   - **GitHub Issues (`schema: spec-driven-github`)**: Changes and active specifications are stored as machine-managed GitHub Issues using `tools/openspec-issue/openspec-issue.sh`.

2. **Single Source of Truth**:
   - `openspec init` lets users choose their single source of truth via `--schema spec-driven` (alias: `--spec-source markdown`) or `--schema spec-driven-github` (alias: `--spec-source github-issues`), or via interactive prompt.
   - The choice is recorded in `openspec/config.yaml` as `schema: <name>`.

3. **Adapter Tooling (`tools/openspec-issue`)**:
   - For `spec-driven-github`, all issue creation, section management, lifecycle transitions, and validation MUST go through `tools/openspec-issue/openspec-issue.sh` rather than raw `gh` calls.
   - The contract is specified in `tools/openspec-issue/CONTRACT.md`.
   - A migration script is provided at `tools/openspec-issue/migrate-local-changes.sh` to transition from local markdown changes to GitHub Issues.

4. **Cross-Platform Compatibility**:
   - All code must run on macOS, Linux, and Windows.
   - Use `path.join()`, `path.resolve()`, and explicit path normalizers — never assume forward or backward slashes.
   - Shell scripts must use POSIX/bash idioms compatible with macOS BSD tools and Linux GNU tools.

## Developer Workflows & Commands

### Building and Testing

```bash
# Build the TypeScript project
pnpm run build

# Run unit and integration tests (Vitest)
pnpm test

# Run the GitHub issue adapter and migration test suite
pnpm run test:adapter

# Run linter
pnpm run lint
```

### Initializing and Updating OpenSpec in Projects

```bash
# Initialize with markdown specs
openspec init --tools <tool-ids> --schema spec-driven

# Initialize with GitHub Issues specs
openspec init --tools <tool-ids> --schema spec-driven-github

# Refresh generated skills and commands after config changes
openspec update
```

### Working with Changes

- **Propose**: Draft a change proposal, specs, technical design, and task list.
- **Apply**: Execute tasks sequentially, updating checklist checkboxes.
- **Verify**: Confirm all requirements and test scenarios pass.
- **Archive**: Archive the change and integrate specifications into the main capability specs.
