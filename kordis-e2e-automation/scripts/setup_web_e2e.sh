#!/usr/bin/env bash
set -euo pipefail

RUN_SMOKE="${SETUP_RUN_SMOKE:-0}"
SMOKE_SPEC="${SETUP_SMOKE_SPEC:-cypress/e2e/Login.cy.js}"
REPORT_DIR="${SETUP_REPORT_DIR:-.artifacts/setup-web-e2e}"

mkdir -p "$REPORT_DIR"

echo "== Web E2E setup bootstrap =="
echo "Project: $(basename "$PWD")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required but was not found in PATH."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found in PATH."
  exit 1
fi

NODE_VERSION="$(node -v)"
NPM_VERSION="$(npm -v)"

echo "Node version: $NODE_VERSION"
echo "npm version: $NPM_VERSION"
echo

echo "Installing dependencies..."
npm install

echo
echo "Verifying Cypress binary..."
npx cypress verify

echo
echo "Reading Cypress baseUrl..."
BASE_URL="$(node -e "const cfg=require('./cypress.config.js'); process.stdout.write((cfg.e2e&&cfg.e2e.baseUrl)||'')")"
if [ -z "$BASE_URL" ]; then
  echo "Could not read e2e.baseUrl from cypress.config.js"
  exit 1
fi
echo "Configured baseUrl: $BASE_URL"

shopt -s nullglob
SPECS=( cypress/e2e/*.cy.js )
shopt -u nullglob
SPEC_COUNT="${#SPECS[@]}"

if [ "$SPEC_COUNT" -eq 0 ]; then
  echo "No Cypress specs found in cypress/e2e/*.cy.js"
  exit 1
fi

echo "Discovered specs: $SPEC_COUNT"

SUMMARY_FILE="$REPORT_DIR/setup_summary.txt"
{
  echo "node=$NODE_VERSION"
  echo "npm=$NPM_VERSION"
  echo "base_url=$BASE_URL"
  echo "spec_count=$SPEC_COUNT"
  echo "smoke_enabled=$RUN_SMOKE"
  echo "smoke_spec=$SMOKE_SPEC"
} > "$SUMMARY_FILE"

echo "Wrote setup summary: $SUMMARY_FILE"

if [ "$RUN_SMOKE" = "1" ]; then
  echo
  echo "Running smoke spec: $SMOKE_SPEC"
  CYPRESS_SPEC="$SMOKE_SPEC" npm run --silent test:spec
fi

echo
echo "Web E2E setup complete."
