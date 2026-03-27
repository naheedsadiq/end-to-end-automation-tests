# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This repository (`kordis-e2e-automation/`) is a **Cypress E2E test suite** that runs against an external staging app at `https://stage.app.kordis.io`. There is no local application to build or run — all tests target the remote staging server.

### Running tests

All commands below run from the `kordis-e2e-automation/` directory:

| Command | Description |
|---|---|
| `npm test` | Run all specs headless (Electron) |
| `npm run test:open` | Open Cypress interactive runner (requires display) |
| `npm run test:chrome` | Run all specs in Chrome |
| `npx cypress run --spec "cypress/e2e/<file>.cy.js"` | Run a single spec |

### Important caveats

- **Cypress system dependencies** must be installed on the Linux host (`xvfb`, `libgtk2.0-0t64`, `libgtk-3-0t64`, `libgbm-dev`, `libnotify-dev`, `libnss3`, `libxss1`, `libasound2t64`, `libxtst6`, `xauth`). These are pre-installed in the VM snapshot.
- **No linter or build step** is configured in this project. The only meaningful validation is running the Cypress specs themselves.
- **Test credentials** are stored in `cypress/fixtures/example.json`. Tests read them via `cy.fixture('example')`.
- **`testIsolation: false`** in `cypress.config.js` means tests within a spec share browser state (e.g. login persists across `it` blocks within a single spec file).
- **Network access** to `https://stage.app.kordis.io` is required. Tests will fail if the staging server is unreachable or down.
- Video recordings are saved to `cypress/videos/` after each `cypress run`.
