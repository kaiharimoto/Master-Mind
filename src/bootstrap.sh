#!/usr/bin/env bash
# bootstrap.sh — cold start from a base OS image.
#
# The only input is the delivered master-mind/ directory. This installs the
# pinned toolchain, verifies the committed seed fixtures by hash, builds the
# app and BOTH platform targets, launches them, and recaptures the designated
# cold-start artifact plus 02, 06 and 07 into evidence/coldstart/ — then
# compares node positions in the fresh capture against the committed fixtures
# as model values, not by eye.
#
# There is no interactive prompt, no manual step, no unset variable and no
# secret from outside this directory. Run it from anywhere:
#     bash src/bootstrap.sh
set -Eeuo pipefail

# ---- pinned versions -------------------------------------------------------
NODE_VERSION="22.22.2"
PLAYWRIGHT_VERSION="1.56.1"
ANDROID_PLATFORM="android-34"
ANDROID_BUILD_TOOLS="34.0.0"

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "${HERE}/.." && pwd)"
LOG="${ROOT}/evidence/coldstart/bootstrap.log"
mkdir -p "${ROOT}/evidence/coldstart"
: > "${LOG}"

say() { printf '\n\033[1m==> %s\033[0m\n' "$*" | tee -a "${LOG}"; }
note() { printf '    %s\n' "$*" | tee -a "${LOG}"; }
fail() { printf '\n\033[1;31m!!! COLD-START FAILURE: %s\033[0m\n' "$*" | tee -a "${LOG}"; exit 1; }
trap 'fail "aborted at line ${LINENO}"' ERR

say "master-mind cold start"
note "root      ${ROOT}"
note "log       ${LOG}"

# ---- 1. system packages ----------------------------------------------------
say "1/9  system packages"
if command -v apt-get >/dev/null 2>&1; then
  export DEBIAN_FRONTEND=noninteractive
  apt-get update -qq >>"${LOG}" 2>&1 || true
  apt-get install -y -qq --no-install-recommends \
    ca-certificates curl unzip xz-utils ffmpeg xvfb \
    fonts-dejavu-core openjdk-21-jdk-headless \
    libnss3 libatk1.0-0t64 libatk-bridge2.0-0t64 libcups2t64 libdrm2 libxkbcommon0 \
    libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2t64 libpango-1.0-0 \
    >>"${LOG}" 2>&1 || fail "apt-get could not install the base packages"
  # Optional: lets the built Windows binary be launched here as well.
  apt-get install -y -qq wine64 >>"${LOG}" 2>&1 || note "wine64 unavailable — the Windows target will be built but not launched"
else
  note "no apt-get; assuming ffmpeg, xvfb, unzip, curl, a JDK and DejaVu fonts are present"
fi
for bin in curl unzip ffmpeg ffprobe java; do
  command -v "$bin" >/dev/null 2>&1 || fail "required tool missing after install: $bin"
done
note "ffmpeg    $(ffmpeg -version 2>/dev/null | head -1)"

# ---- 2. node ---------------------------------------------------------------
say "2/9  node ${NODE_VERSION}"
NODE_DIR="${ROOT}/.toolchain/node-v${NODE_VERSION}-linux-x64"
if node --version 2>/dev/null | grep -q "^v${NODE_VERSION%%.*}\."; then
  note "using system node $(node --version)"
else
  mkdir -p "${ROOT}/.toolchain"
  if [ ! -x "${NODE_DIR}/bin/node" ]; then
    note "fetching node ${NODE_VERSION}"
    curl -sSLf -o "${ROOT}/.toolchain/node.tar.xz" \
      "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" \
      || fail "could not download node ${NODE_VERSION}"
    tar -xJf "${ROOT}/.toolchain/node.tar.xz" -C "${ROOT}/.toolchain"
  fi
  export PATH="${NODE_DIR}/bin:${PATH}"
  note "using pinned node $(node --version)"
fi

# ---- 3. dependencies -------------------------------------------------------
say "3/9  npm dependencies (exact-pinned)"
cd "${HERE}"
if [ -f package-lock.json ]; then
  npm ci --no-audit --no-fund >>"${LOG}" 2>&1 || fail "npm ci failed"
else
  npm install --no-audit --no-fund >>"${LOG}" 2>&1 || fail "npm install failed"
fi
note "three $(node -p "require('./node_modules/three/package.json').version")"
note "mediapipe $(node -p "require('./node_modules/@mediapipe/tasks-vision/package.json').version")"

# ---- 4. browser ------------------------------------------------------------
say "4/9  chromium for playwright ${PLAYWRIGHT_VERSION}"
if [ -n "${PLAYWRIGHT_BROWSERS_PATH:-}" ] && [ -x "${PLAYWRIGHT_BROWSERS_PATH}/chromium/chrome-linux/chrome" ]; then
  note "using the browser already at ${PLAYWRIGHT_BROWSERS_PATH}"
else
  export PLAYWRIGHT_BROWSERS_PATH="${ROOT}/.toolchain/pw-browsers"
  npx --yes playwright@${PLAYWRIGHT_VERSION} install chromium >>"${LOG}" 2>&1 \
    || fail "playwright could not install chromium"
  note "chromium installed under ${PLAYWRIGHT_BROWSERS_PATH}"
fi

# ---- 5. seed fixtures ------------------------------------------------------
say "5/9  verifying the committed seed fixtures"
node - <<'NODE' | tee -a "${LOG}"
const { readFileSync } = require('node:fs');
const { createHash } = require('node:crypto');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const man = JSON.parse(readFileSync(path.join(root, 'seeds/MANIFEST.json'), 'utf8'));
let bad = 0;
for (const e of man) {
  const raw = readFileSync(path.join(root, e.file), 'utf8');
  const got = createHash('sha256').update(raw).digest('hex');
  const ok = got === e.sha256;
  if (!ok) bad++;
  console.log(`    ${ok ? 'ok  ' : 'BAD '} ${e.file}  ${e.nodes} nodes (${e.holding} in holding), ${e.links} links`);
}
if (bad) { console.error(`    ${bad} fixture(s) do not match the committed hash`); process.exit(1); }
NODE
[ "${PIPESTATUS[0]}" -eq 0 ] || fail "seed fixtures do not match seeds/MANIFEST.json"

# ---- 6. generated assets ---------------------------------------------------
say "6/9  generating deterministic assets"
node "${ROOT}/harness/build-font.mjs" | tee -a "${LOG}"
node "${ROOT}/harness/gen-hand-clips.mjs" | tee -a "${LOG}"
./node_modules/.bin/esbuild app/core/model.ts --bundle --format=cjs --platform=node \
  --outfile=server/model.cjs --log-level=warning
node "${ROOT}/harness/test-model.mjs" | tee -a "${LOG}" || fail "model invariant tests failed"

# ---- 7. build both targets -------------------------------------------------
say "7/9  building both platform targets"
node build.mjs | tee -a "${LOG}"
node build-windows.mjs 2>&1 | tee -a "${LOG}" || fail "the Windows target failed to build"
node build-android.mjs 2>&1 | tee -a "${LOG}" || fail "the Android target failed to build"

# ---- 8. launch and recapture ----------------------------------------------
say "8/9  launching and recapturing the cold-start artifacts"
rm -rf "${ROOT}/.capture-tmp"
node "${ROOT}/harness/run-capture.mjs" --only 03,02,06,07 --out evidence/coldstart --cycle cold \
  2>&1 | tee -a "${LOG}"

# ---- 9. verify positions against the committed fixtures --------------------
say "9/9  comparing captured positions against the committed fixtures"
node - <<'NODE' | tee -a "${LOG}"
const { readFileSync, existsSync } = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const capFile = path.join(root, 'evidence/coldstart/positions.json');
if (!existsSync(capFile)) { console.error('    no positions.json in the cold-start capture'); process.exit(1); }
const cap = JSON.parse(readFileSync(capFile, 'utf8'));
let bad = 0, checked = 0;
for (const e of JSON.parse(readFileSync(path.join(root, 'seeds/MANIFEST.json'), 'utf8'))) {
  const fixture = JSON.parse(readFileSync(path.join(root, e.file), 'utf8'));
  const got = cap[e.id];
  if (!got) { console.error(`    BAD  ${e.id} missing from the capture`); bad++; continue; }
  for (const n of Object.values(fixture.nodes)) {
    checked++;
    if (JSON.stringify(got[n.id]) !== JSON.stringify(n.pos)) {
      console.error(`    BAD  ${e.id}/${n.id} ${JSON.stringify(n.pos)} -> ${JSON.stringify(got[n.id])}`);
      bad++;
    }
  }
  console.log(`    ok   ${e.id}: ${Object.keys(fixture.nodes).length} node positions match the committed fixture`);
}
console.log(`    ${checked} positions compared as model values, ${bad} mismatched`);
if (bad) process.exit(1);
NODE
[ "${PIPESTATUS[0]}" -eq 0 ] || fail "cold-start positions do not match the committed fixtures"

say "cold start complete"
note "artifacts  ${ROOT}/evidence/coldstart/"
note "log        ${LOG}"
