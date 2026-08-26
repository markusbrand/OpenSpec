---
name: release-openspec
description: >-
  Use this skill when releasing OpenSpec: audit merged work and Conventional
  Commits, verify or prepare the Release Please PR, merge releases, verify
  npm publishing via OIDC, and polish GitHub release notes.
---

# Release OpenSpec

Run the OpenSpec release workflow as a resumable state machine using [Release Please](https://github.com/googleapis/release-please). Inspect live GitHub state on every invocation and take only the next safe action. Do not assume an earlier invocation completed.

## Principles

- Treat `Fission-AI/OpenSpec` and `origin/main` as the release source of truth.
- Conventional Commits (`feat:`, `fix:`, `perf:`, `docs:`, `refactor:`, `chore:`, `BREAKING CHANGE:`) drive automated version calculation and changelog generation.
- Default to a read-only audit when the user asks for status, readiness, or advice.
- Treat a request to release, prepare a release, continue, or resume as authorization to perform the applicable release actions.
- Preserve the user's checkout.
- Never approve your own PR. Human review is a deliberate gate.
- Treat merge-queue entry as an intermediate state, not a merge. Advance only after GitHub reports `mergedAt` and the commit is present on `main`.
- Never create the automated Release Please PR manually. The Release Please action owns it.
- Report URLs, the state reached, and the exact human action needed whenever pausing.

## The Release PR

- **Release Please PR**: The automated `release-please--branches--main` PR. Merging conventional commits to `main` updates this PR. Merging it tags the release, creates the GitHub release, and publishes to npm.

## Release Audit & Execution

1. Verify the repository and tools:
   - Resolve the GitHub repository with `gh repo view --json nameWithOwner,url`.
   - Require authenticated `gh`, `git`, and `pnpm` before write actions.
   - Stop before release mutations if the canonical repository is not `Fission-AI/OpenSpec`.
2. Refresh without modifying the worktree:

   ```bash
   git fetch origin main
   ```

3. Find the latest stable GitHub release:

   ```bash
   gh release list --repo Fission-AI/OpenSpec \
     --exclude-drafts --exclude-pre-releases --limit 100 \
     --json tagName,publishedAt \
     --jq 'max_by(.publishedAt) | {tagName, publishedAt}'
   ```

4. Find open Release Please PRs:

   ```bash
   gh pr list --repo Fission-AI/OpenSpec --state open \
     --head release-please--branches--main \
     --json number,title,headRefName,baseRefName,url,reviewDecision,statusCheckRollup
   ```

5. List first-parent commits since the latest stable tag:

   ```bash
   git log --first-parent --date=short \
     --pretty=format:'%h%x09%ad%x09%s' <stable-tag>..origin/main
   ```

6. Validate the Release PR:
   - Check proposed version in `package.json` and `.release-please-manifest.json`.
   - Verify `CHANGELOG.md` reflects the Conventional Commits on `main`.

7. Once approved and checks are green, merge the Release PR.

8. Verify publishing:
   - Check GitHub Actions run for `release-please.yml` on `main`.
   - `npm view @fission-ai/openspec@<version> version`
   - Remote tag `v<version>` exists.
   - `gh release view v<version>` exists.

## Completion Report

Report:
- released version;
- Release PR URL;
- release workflow run status;
- npm package, tag, and GitHub Release verification;
- release-notes status.
