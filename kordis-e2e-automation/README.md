# Kordis Cypress E2E Automation

This project contains Cypress end-to-end tests for the Kordis stage environment.

## Prerequisites

- Node.js 18+ (Node 22 is supported)
- npm

## Install dependencies

```bash
npm install
```

## One-command setup

Bootstrap and verify the Web E2E environment:

```bash
npm run setup:web-e2e
```

Run setup + smoke login test:

```bash
SETUP_RUN_SMOKE=1 npm run setup:web-e2e
```

## Run tests

From the project root (`kordis-e2e-automation`):

- Run all specs (headless):

  ```bash
  npm test
  ```

- Open Cypress UI:

  ```bash
  npm run test:open
  ```

- Run all specs in headed mode:

  ```bash
  npm run test:headed
  ```

- Run all specs in Chrome:

  ```bash
  npm run test:chrome
  ```

- Run a single spec (defaults to login spec):

  ```bash
  npm run test:spec
  ```

  Override the target spec path:

  ```bash
  CYPRESS_SPEC=cypress/e2e/Reports.cy.js npm run test:spec
  ```

## Environment

- Base URL is configured in `cypress.config.js` as:
  - `https://stage.app.kordis.io`