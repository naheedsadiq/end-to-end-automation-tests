#!/usr/bin/env bash
set -uo pipefail

SPEC_PATTERN="${BULK_SPEC_PATTERN:-cypress/e2e/*.cy.js}"
MAX_RETRIES="${BULK_RETRIES:-1}"
STOP_ON_FAILURE="${BULK_STOP_ON_FAILURE:-0}"
REPORT_DIR="${BULK_REPORT_DIR:-.artifacts/bulk-e2e}"

mkdir -p "$REPORT_DIR"

shopt -s nullglob
SPECS=( $SPEC_PATTERN )
shopt -u nullglob

if [ "${#SPECS[@]}" -eq 0 ]; then
  echo "No specs matched pattern: $SPEC_PATTERN"
  exit 1
fi

IFS=$'\n' SPECS=($(printf "%s\n" "${SPECS[@]}" | sort))
unset IFS

FAILURES=()
TOTAL=${#SPECS[@]}

echo "Starting bulk Cypress run"
echo "Spec pattern: $SPEC_PATTERN"
echo "Specs found: $TOTAL"
echo "Retries per spec: $MAX_RETRIES"
echo

for spec in "${SPECS[@]}"; do
  echo "============================================================"
  echo "Running spec: $spec"
  attempt=0
  passed=0

  while [ "$attempt" -le "$MAX_RETRIES" ]; do
    attempt=$((attempt + 1))
    echo "Attempt $attempt/$((MAX_RETRIES + 1))"

    if CYPRESS_SPEC="$spec" npm run --silent test:spec; then
      passed=1
      break
    fi

    echo "Attempt $attempt failed for $spec"
  done

  if [ "$passed" -eq 1 ]; then
    echo "PASS: $spec"
  else
    echo "FAIL: $spec"
    FAILURES+=("$spec")
    if [ "$STOP_ON_FAILURE" = "1" ]; then
      echo "Stopping early because BULK_STOP_ON_FAILURE=1"
      break
    fi
  fi
done

FAILURE_FILE="$REPORT_DIR/failures.txt"
if [ "${#FAILURES[@]}" -gt 0 ]; then
  printf "%s\n" "${FAILURES[@]}" > "$FAILURE_FILE"
else
  : > "$FAILURE_FILE"
fi

echo
echo "==================== Bulk Run Summary ======================"
echo "Total specs attempted: $TOTAL"
echo "Failed specs: ${#FAILURES[@]}"
echo "Failure list: $FAILURE_FILE"

if [ "${#FAILURES[@]}" -gt 0 ]; then
  exit 1
fi

echo "All bulk specs passed."
