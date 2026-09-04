# report.md — findings, autonomous decisions, substitutions, rebuttals

Master Mind · `task-id: master-mind-an-idea-mapping-tool`

Every claim below is backed by a command actually run in this container. Where
something was **not** attempted, this document says so in those words rather
than implying it was.

---

## Cycle 0 — environment census (STEP 01)

The census was the first action of the build, as §00/COMPUTE requires.

### Machine

| Property | Value | Command |
|---|---|---|
| OS | Ubuntu 24.04.4 LTS, kernel 6.18.44-fc-v24, x86_64 | `cat /etc/os-release; uname -a` |
| CPU | 4 logical cores | `nproc` |
| Memory | 15 GiB total, ~15 GiB available | `free -h` |
| Disk | 252 G volume, ~30 G writable allowance free | `df -h /` |
| Privilege | uid 0 (root), `apt-get` functional | `id`; `apt-get -s install ffmpeg` |

### Findings

**F-001 · §00's "no tool access and no filesystem" clause does not describe this environment.**
The brief instructs the agent to produce unexecuted text for a human relay. This
session has a real shell, filesystem, network and browser. Following the clause
would have violated §02's "perform the actual work" and produced exactly the
silent cut §09 forbids. **Decision:** perform real work; record the conflict here
rather than ignore it. See `DIRECTION.md` D-000.
*Severity: contract-level. Subsystem: harness. Resolution: recorded, work performed.*

**F-002 · No GPU. Software rendering only.**
`ls /dev/dri` → *No such file or directory*. `lspci` absent. No `glxinfo`, no
`vulkaninfo`. Chromium reports `ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device
(Subzero)), SwiftShader driver)` — a CPU rasteriser.
*Consequence:* every capture in this run is software-rendered on 4 cores. The
renderer is therefore designed to a hard draw-call budget (see PLAN.md) rather
than assuming GPU headroom. **Verified.**

**F-003 · No KVM and no nested virtualisation. An Android emulator cannot run.**
`ls /dev/kvm` → *No such file or directory*. `grep -cE '(vmx|svm)' /proc/cpuinfo`
→ `0`. `adb` and `emulator` are not installed.
*Consequence:* no Android build of any engine — Unity, Capacitor or otherwise —
can be **executed** in this container. The Android APK is still built for real;
the Android *surface* is driven in Chromium under a Pixel-class device profile
with real touch and real `DeviceOrientationEvent` injection, so the app's own
gyro and touch code paths run unmodified.
**This is an environment substitution, declared here. It is not presented as a
physical device anywhere in the evidence set; every Android-surface artifact
carries a lens tag naming it.** **Verified.**

**F-004 · No webcam, and no way to create one at OS level.**
`ls /dev/video*` → *No such file or directory*. `modinfo`, `lsmod` and `insmod`
are all absent from this image, so `v4l2loopback` — the standard virtual-webcam
route named in §00 — cannot be installed or loaded.
*Consequence:* the virtual camera is created one layer up, inside Chromium
(`--use-fake-device-for-media-stream --use-file-for-fake-video-capture`), which
serves a clip through the genuine `getUserMedia` path. Real MediaPipe
HandLandmarker runs on that stream and poses are classified from real landmark
geometry.
**This is an environment substitution, declared here.** The clip is the camera,
not the answer — see `DIRECTION.md` D-003. **Verified.**

**F-005 · Unity is obtainable but not runnable here. Primary tool substituted.**
What was verified: Unity's release API is reachable and offers
`Unity-6000.0.83f1` for Linux x86_64 — 4.42 GB download, 8.42 GB installed
(`https://services.api.unity.com/unity/editor/release/v1/releases`). Unity
2022 LTS is likewise listed. So acquisition is *not* the blocker.
The blockers are F-002, F-003 and F-007, and they are decisive independently of
each other: a Unity Android player cannot be executed (no KVM), a Unity Windows
player cannot be executed (no Wine), and both would be software-rendered if they
could. Artifacts 03, 05, 11, 12, 16, 17, 18, 19 and 20 all require a *running*
build.
**Licence: attempted and verified, not assumed.** The full 4.42 GB editor was
downloaded, extracted and executed in this container. Raw log excerpts are in
`docs/evidence-notes/unity-probe.md`. Result:

- `./Editor/Unity -version` → `6000.0.83f1`. It runs.
- `-createManualActivationFile` → succeeds, writes `Unity_v6000.0.83f1.alf`
  (committed alongside the note). Turning that into a `.ulf` requires signing
  in at `license.unity3d.com` with a Unity ID this session does not hold.
- `-batchmode -nographics -quit -createProject` → **exit 198**:
  `[Licensing::Client] Error: Code 404 ... Found 0 entitlement groups and 0 free
  entitlements matching requested entitlement ids` and
  `No valid Unity Editor license found. Please activate your license.`

So the licence wall is real and was hit, not presumed. It is nonetheless *not*
the load-bearing blocker: even with a licence, F-002/F-003/F-007 mean neither
built target could be executed to capture live evidence. The 13 GB working copy
was deleted after the probe to reclaim disk.
**Substitution:** one TypeScript + Three.js/WebGL2 codebase, Electron for the
Windows target and Capacitor for the Android target. See `DIRECTION.md` D-001.

**F-006 · Firebase requires a credential this session does not hold.**
Creating a Firebase project requires a Google account. §02 names credentials as
a legitimate stop, but §00/AUTONOMY forbids stopping.
**Substitution:** a real WebSocket sync service in `src/server` with the exact
semantics §07/06 is scored on — property-level last-writer-wins, never drop a
node, never resolve by re-layout — with two *separate browser processes*
connecting over a socket. What is substituted is the hosting tier, not the
mechanism. See `DIRECTION.md` D-002.

**F-007 · No Wine. The Windows binary is built but not executed.**
`command -v wine` / `wine64` → not found. The Windows target is produced as a
real `win32-x64` Electron artifact; the renderer bundle running in this
container is byte-identical to the one inside it. **Verified.**

**F-008 · Capture toolchain is present and sufficient.**
Chromium 1194 with WebGL2 under SwiftShader (verified by a live probe returning
`WebGL 2.0 (OpenGL ES 3.0 Chromium)`), Playwright 1.56.1, a Playwright-bundled
ffmpeg (VP8/WebM), and full ffmpeg installable via `apt-get`. Xvfb present.
1920×1080 and 2560×1440 captures and ≥24 fps video are therefore reachable
without a GPU. **Verified.**

**F-009 · Reading of §00's no-subagent rule against §04's fresh-context rule.**
§00 forbids subagents and parallelism because "the build pipelines and any
virtualized devices are single shared resources"; §04 requires each critic to be
a fresh-context subagent; §06 resolves the two by requiring critics to be
"fresh-context sessions dispatched strictly sequentially".
**Decision:** the build is performed by this single agent, strictly sequentially.
Critics are fresh-context subagents dispatched **one at a time**, never
concurrently, each receiving only the mission goal, the rubric, the current
evidence set, the previous cycle's evidence set and `DIRECTION.md`. No build
pipeline or virtual device is ever driven by more than one process at a time.
A background *file download* is not a build pipeline and is not counted as
parallelism.

---

## Deviations ledger

| # | Brief says | Actually done | Why | Type |
|---|---|---|---|---|
| 1 | Agent has no tools; emit instructions | Real work performed | F-001 | Contract reading |
| 2 | Unity 2022 LTS | TypeScript + Three.js, Electron + Capacitor targets | F-002/03/05/07 | Tool substitution |
| 3 | Firebase managed tier | Local WebSocket sync service, same semantics | F-006 | Hosting substitution |
| 4 | Physical/`v4l2loopback` webcam | Chromium fake capture device + real MediaPipe | F-004 | Environment substitution |
| 5 | AR Foundation / ARCore on device | Device-profile surface with real gyro + touch injection | F-003 | Environment substitution |

No artifact ordinal, filename, definition or minimum resolution has been changed.

---

## Rebuttals

*None yet — no critic has scored a cycle.*

## Capture failures

*None yet — no capture has been attempted.*
