# docs/setup.md — the exact recipe the cold-start check follows

Executable start to finish, with no interactive step. The only input is this
`master-mind/` directory.

```bash
bash src/bootstrap.sh
```

That is the whole thing. What follows is what it does and why, so the script can
be audited rather than trusted.

---

## What the cold start proves

§06 of the brief asks for a clean container from a base OS image — no toolchain,
no SDKs, no cached credentials, no preset environment variables — and requires
the script to install pinned versions, build both targets, launch them, load
both committed seed fixtures, and recapture the hero artifact plus 02, 06 and 07
into `evidence/coldstart/`. The result is verified by **comparing node positions
in the fresh capture against the committed fixtures as model values**, not by
eye.

Any manual step, interactive prompt, unset variable or out-of-directory secret
is a cold-start failure. `bootstrap.sh` runs under `set -Eeuo pipefail` with an
`ERR` trap, so an unset variable or any failing command aborts the run and is
recorded as a failure rather than patched around.

## The nine steps

| # | Step | Detail |
|---|---|---|
| 1 | System packages | `ca-certificates curl unzip xz-utils ffmpeg xvfb fonts-dejavu-core openjdk-21-jdk-headless` plus the shared libraries Chromium needs. `wine64` is attempted and is **optional**: without it the Windows target is still built, just not launched. |
| 2 | Node | Uses the system Node if it is v22.x; otherwise downloads the pinned **22.22.2** tarball into `.toolchain/`. |
| 3 | Dependencies | `npm ci` against the committed `src/package-lock.json`. Every runtime dependency is exact-pinned: three 0.185.1, @mediapipe/tasks-vision 1.0.1, ws 8.21.3, esbuild 0.28.2. |
| 4 | Browser | Uses `PLAYWRIGHT_BROWSERS_PATH` if a Chromium is already there; otherwise installs Chromium for the pinned Playwright **1.56.1** into `.toolchain/pw-browsers`. |
| 5 | Seed fixtures | Verifies each file in `seeds/` against the SHA-256 in `seeds/MANIFEST.json`. A mismatch aborts: §09 makes regenerating seeds fatal to every position-regression claim, so the check is on the way in. |
| 6 | Generated assets | Rebuilds the SDF font atlas from the vendored DejaVu Sans and regenerates the hand-gesture clips — both deterministic — then bundles the shared model for the sync service and runs the 11 model invariant tests. |
| 7 | Both targets | `build.mjs` (the shared bundle), then `build-windows.mjs` (a real win32-x64 Electron application) and `build-android.mjs` (a real `.apk` via Capacitor and Gradle). The Android SDK is installed non-interactively — licences are accepted by piping `yes` into `sdkmanager --licenses`, so nothing waits for a keypress. |
| 8 | Launch and recapture | Starts the sync service on a freshly wiped data directory seeded from the fixtures, launches the app, and recaptures artifacts **03** (the hero, cold start), **02**, **06** and **07** into `evidence/coldstart/` by running their own recipes. |
| 9 | Position verification | Compares every node position in the fresh capture against the committed fixture, **as model values**. Any drift fails the cold start. |

## What is downloaded, and from where

| Source | What |
|---|---|
| the distribution's apt mirrors | ffmpeg, Xvfb, DejaVu fonts, OpenJDK 21, Chromium's shared libraries, optionally wine64 |
| `nodejs.org` | Node 22.22.2, only if the system Node is not v22 |
| `registry.npmjs.org` | the exact dependency tree in `src/package-lock.json` |
| Playwright's CDN | the Chromium build matching Playwright 1.56.1 |
| `github.com/electron/electron` | the Electron 33.4.11 win32-x64 distribution |
| `dl.google.com` + `services.gradle.org` + Maven Central | the Android SDK, Gradle, and the Android build's dependencies |

No credential is used anywhere, and nothing is read from outside this directory.
See `report.md` F-005 and F-006 for the two places where the brief's named
service *would* have needed one — the Unity licence and a Firebase project — and
what was done instead.

## Running the pieces on their own

```bash
node harness/gen-seeds.mjs            # regenerate the fixtures (byte-identical)
node harness/test-model.mjs           # the 11 invariants behind category 03
node harness/validate-poses.mjs       # held-out check of the hand classifier
node src/build.mjs                    # the shared bundle
node src/server/sync.mjs              # the sync service (MM_PORT, MM_DATA, MM_SEEDS)
node harness/run-capture.mjs          # recapture all 20 artifacts
node harness/run-capture.mjs --only 03
node harness/contact-sheets.mjs       # lay the videos out as timestamped frames
node harness/diff-evidence.mjs evidence evidence/history/cycle-N
```

## Ports

The capture harness gives every artifact its own pair — HTTP `8760 + id`,
WebSocket `8860 + id` — so drivers never share a service. The Electron target
uses 8730 and 8788 for its own embedded pair, and the Wine-hosted Windows binary
exposes CDP on 9333.
