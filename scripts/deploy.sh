#!/usr/bin/env bash
# ============================================================
# deploy.sh — compile the CV from the Overleaf source repo and
# sync the resulting PDF into this site repository.
#
# Usage:
#   scripts/deploy.sh [--dry-run] [commit-message]
#
#   --dry-run       print every planned step without executing
#                   anything (no temp dir, no file changes)
#   commit-message  optional note appended to "Update CV: "
#                   (default: current UTC timestamp)
#
# Pipeline (4 steps):
#   1. compile — xelatex -interaction=nonstopmode on the CV
#                source, twice, inside a fresh TEMPORARY dir
#                (never inside the CV source repo)
#   2. copy    — cp main.pdf -> assets/resume.pdf, ONLY when
#                the compile exited 0 AND main.pdf exists
#   3. commit  — git add assets/resume.pdf
#                git commit -m "Update CV: <note>"
#   4. push    — git push origin main
# ============================================================
set -euo pipefail

SITE_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
CV_SRC_DIR="/home/altair/personal/resume/repo/English"
CV_TEX="$CV_SRC_DIR/main.tex"
PDF_DEST="$SITE_DIR/assets/resume.pdf"
# Per-pass timeout for xelatex (guards against hangs); override via env.
COMPILE_TIMEOUT="${DEPLOY_COMPILE_TIMEOUT:-900}"

DRY_RUN=0
COMMIT_NOTE=""
for arg in "$@"; do
    case "$arg" in
        --dry-run) DRY_RUN=1 ;;
        *) COMMIT_NOTE="$arg" ;;
    esac
done
if [ -z "$COMMIT_NOTE" ]; then
    COMMIT_NOTE="$(date -u +'%Y-%m-%d %H:%M:%S UTC')"
fi
COMMIT_MSG="Update CV: $COMMIT_NOTE"
TMP_BUILD_DIR=""

info() { printf '%s\n' "$*"; }

cleanup() {
    if [ -n "$TMP_BUILD_DIR" ] && [ -d "$TMP_BUILD_DIR" ]; then
        rm -rf "$TMP_BUILD_DIR"
        info "cleaned up temp dir: $TMP_BUILD_DIR"
    fi
}

run_cmd() {
    if [ "$DRY_RUN" -eq 1 ]; then
        info "  [dry-run] would execute: $*"
    else
        "$@"
    fi
}

step_compile() {
    info "STEP 1/4 — compile (xelatex, 2 passes, temp dir)"
    if [ "$DRY_RUN" -eq 1 ]; then
        info "  [dry-run] create fresh temp dir via mktemp -d"
        info "  [dry-run] copy main.tex + resume.cls + fontawesome.sty + fonts/ + images/ into temp dir"
        info "  [dry-run] xelatex -interaction=nonstopmode main.tex   (pass 1/2, timeout ${COMPILE_TIMEOUT}s)"
        info "  [dry-run] xelatex -interaction=nonstopmode main.tex   (pass 2/2, timeout ${COMPILE_TIMEOUT}s)"
        info "  [dry-run] require exit 0 AND main.pdf present"
        return 0
    fi

    TMP_BUILD_DIR="$(mktemp -d "${TMPDIR:-/tmp}/deploy-cv.XXXXXX")"
    info "  temp build dir: $TMP_BUILD_DIR"

    # Copy only sources — never stale build artifacts (main.pdf/aux/log).
    cp "$CV_TEX" "$TMP_BUILD_DIR/main.tex"
    cp "$CV_SRC_DIR/resume.cls" "$TMP_BUILD_DIR/"
    cp "$CV_SRC_DIR/fontawesome.sty" "$TMP_BUILD_DIR/"
    cp -r "$CV_SRC_DIR/fonts" "$TMP_BUILD_DIR/"
    cp -r "$CV_SRC_DIR/images" "$TMP_BUILD_DIR/"

    local start elapsed pass
    start="$(date +%s)"
    for pass in 1 2; do
        if ! ( cd "$TMP_BUILD_DIR" && timeout "$COMPILE_TIMEOUT" xelatex -interaction=nonstopmode main.tex ); then
            info "  ERROR: xelatex pass $pass failed (see log above)"
            return 1
        fi
    done
    elapsed="$(( $(date +%s) - start ))"
    info "  xelatex: 2 passes OK (elapsed ${elapsed}s, timeout ${COMPILE_TIMEOUT}s per pass)"

    # Guard against misleading success: xelatex exit 0 but no PDF.
    if [ ! -f "$TMP_BUILD_DIR/main.pdf" ]; then
        info "  ERROR: xelatex exited 0 but produced no main.pdf"
        return 1
    fi
    info "  main.pdf exists ($(stat -c %s "$TMP_BUILD_DIR/main.pdf") bytes)"
}

step_copy() {
    info "STEP 2/4 — copy compiled PDF into site assets"
    if [ "$DRY_RUN" -eq 1 ]; then
        info "  [dry-run] would execute: cp <tmpdir>/main.pdf $PDF_DEST"
        info "  [dry-run] assets/resume.pdf sha256 stays: $(sha256sum "$PDF_DEST" | cut -d' ' -f1)"
        return 0
    fi
    cp "$TMP_BUILD_DIR/main.pdf" "$PDF_DEST"
    info "  copied main.pdf -> $PDF_DEST"
}

step_commit() {
    info "STEP 3/4 — commit new PDF"
    run_cmd git -C "$SITE_DIR" add assets/resume.pdf
    run_cmd git -C "$SITE_DIR" commit -m "$COMMIT_MSG"
    if [ "$DRY_RUN" -eq 1 ]; then
        info "  [dry-run] commit message would be: $COMMIT_MSG"
    fi
}

step_push() {
    info "STEP 4/4 — push to origin"
    run_cmd git -C "$SITE_DIR" push origin main
}

main() {
    if [ "$DRY_RUN" -eq 1 ]; then
        info "=== deploy.sh: DRY RUN (plan only, nothing will change) ==="
    else
        info "=== deploy.sh: REAL RUN ==="
    fi
    info "commit message: $COMMIT_MSG"

    if [ ! -f "$CV_TEX" ]; then
        info "ERROR: CV source not found: $CV_TEX"
        return 1
    fi

    trap cleanup EXIT
    step_compile
    step_copy
    step_commit
    step_push
    info "=== deploy complete ==="
}

main
