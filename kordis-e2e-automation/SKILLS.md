# Codex Skills for Kordis E2E

This file defines reusable skills (SOPs) for agent-driven work in this repo.

## Skill: Bulk Cypress E2E Stable Runner

### When to use
- Use this skill when you need to run many Cypress specs in one go and reduce flaky failures.
- Use this for pre-merge sanity runs or nightly style checks against stage.

### Goal
- Execute a bulk set of specs deterministically.
- Retry each failed spec once (configurable) to absorb transient flakiness.
- Produce a concrete failure list for targeted reruns.

### Commands
From `kordis-e2e-automation`:

1) Install deps (if needed):
```bash
npm install
```

2) Run bulk suite with defaults:
```bash
npm run test:bulk
```

3) Run a custom subset:
```bash
BULK_SPEC_PATTERN="cypress/e2e/Login*.cy.js" npm run test:bulk
```

4) Increase retries per spec:
```bash
BULK_RETRIES=2 npm run test:bulk
```

5) Stop at first failing spec:
```bash
BULK_STOP_ON_FAILURE=1 npm run test:bulk
```

### Runtime controls
- `BULK_SPEC_PATTERN` (default: `cypress/e2e/*.cy.js`)
- `BULK_RETRIES` (default: `1`)
- `BULK_STOP_ON_FAILURE` (default: `0`)
- `BULK_REPORT_DIR` (default: `.artifacts/bulk-e2e`)

### Success criteria
- Script exits `0`.
- Summary prints `Failed specs: 0`.
- `.artifacts/bulk-e2e/failures.txt` is empty.

### Failure handling
If any spec still fails after retries:
- Script exits non-zero.
- Failed spec paths are written to `.artifacts/bulk-e2e/failures.txt`.
- Rerun only those specs with:
```bash
CYPRESS_SPEC="<path-from-failures.txt>" npm run test:spec
```

### Notes
- Keep `cypress.config.js` base URL on stage (`https://stage.app.kordis.io`).
- Prefer stable `data-*` selectors when creating/updating tests.
