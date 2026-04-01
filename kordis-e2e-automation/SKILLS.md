# Codex Skills for Kordis E2E

This file defines reusable skills (SOPs) for agent-driven work in this repo.

## Skill: Web E2E Automation Setup Bootstrap

### When to use
- Use this skill when setting up a new machine/agent for Cypress web E2E.
- Use this before first-time execution of `test:spec` or `test:bulk`.

### Goal
- Ensure dependencies are installed and Cypress binary is ready.
- Validate baseline config (`baseUrl`) and spec discovery.
- Optionally run a smoke spec to confirm end-to-end setup.

### Commands
From `kordis-e2e-automation`:

1) Bootstrap setup only:
```bash
npm run setup:web-e2e
```

2) Setup + smoke run:
```bash
SETUP_RUN_SMOKE=1 npm run setup:web-e2e
```

3) Setup + custom smoke spec:
```bash
SETUP_RUN_SMOKE=1 SETUP_SMOKE_SPEC=cypress/e2e/Login.negative.scenario.cy.js npm run setup:web-e2e
```

### Runtime controls
- `SETUP_RUN_SMOKE` (default: `0`)
- `SETUP_SMOKE_SPEC` (default: `cypress/e2e/Login.cy.js`)
- `SETUP_REPORT_DIR` (default: `.artifacts/setup-web-e2e`)

### Success criteria
- Script exits `0`.
- Cypress verify succeeds.
- Setup summary file is created at `.artifacts/setup-web-e2e/setup_summary.txt`.
- If smoke is enabled, smoke spec passes with `Failing: 0`.

### Failure handling
- If dependencies fail to install: fix npm/network issues and rerun.
- If Cypress verify fails: rerun `npx cypress verify`; if needed reinstall deps.
- If smoke fails: rerun the same spec with `npm run test:spec` and inspect test output.

### Output
- `.artifacts/setup-web-e2e/setup_summary.txt` with node/npm/baseUrl/spec count and smoke settings.

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
