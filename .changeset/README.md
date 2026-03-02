# Changesets

This repo uses Changesets for versioning and releases.

## Add a changeset

```bash
pnpm changeset
```

Select the package, choose a bump type, and fill in the summary.

## Release flow

- Push changesets to `main`.
- The Release workflow opens a version PR.
- Merge the PR to publish to npm.
