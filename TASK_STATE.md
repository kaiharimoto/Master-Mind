# TASK_STATE.md — resume note

**Read `brief/MISSION_BRIEF.md`, then `DIRECTION.md`, then this file.**
Open the newest `checkpoints/` entry and continue from **NEXT ACTION**.

---

## Where the run is

| | |
|---|---|
| Phase | bootstrap → build |
| Build-order step | STEP 01 — environment census + pipelines |
| Review cycle | 0 (no cycle has run) |
| Rubric score | 0 — no critic has scored anything |
| Artifacts captured | 0 of 20 |

## Completed

- Environment census run and recorded (`report.md`, findings F-001 … F-009).
- Brief frozen and hashed (`brief/LOCKED.md`, sha256 `1ac57cfb…`).
- Design contract recorded (`DIRECTION.md` D-000 … D-009). D-004 is the one
  `PENDING` entry — the Art Director rules on organic-vs-holographic in cycle 1.
- `PLAN.md`, `INVENTORY.md` written. Repo skeleton created.
- Pinned deps installed: three 0.185.1, @mediapipe/tasks-vision 1.0.1, ws 8.21.3,
  esbuild 0.28.2. MediaPipe hand_landmarker model fetched.

## Last successful commands

```
ls /dev/dri /dev/kvm /dev/video*          # all absent — F-002, F-003, F-004
grep -cE '(vmx|svm)' /proc/cpuinfo        # 0
node p2.cjs                               # WebGL2 OK under ANGLE/SwiftShader
curl services.api.unity.com/.../releases  # Unity reachable, 4.42 GB — F-005
npm i --save-exact three@0.185.1 @mediapipe/tasks-vision@1.0.1 ws@8.21.3 esbuild@0.28.2
```

## Worst problems

1. **CPU-only rasteriser** (F-002). The whole renderer is budgeted to 4 draw
   calls because of it. Unproven until measured at 140 nodes / 1920×1080.
2. **Hand clips must be detectable by real MediaPipe** (F-004/D-003). No real
   hand footage exists here, so the clips are synthesised. If MediaPipe cannot
   detect the synthetic hand, that is a finding, not a reason to fake the pose
   path.
3. **Android and Windows binaries cannot be executed** (F-003, F-007). Both are
   still built for real; the surfaces are driven in Chromium.

## Known failures

*None yet.*

## NEXT ACTION

Build the SDF font atlas generator and the core renderer, then measure frame
time at 140 nodes / 1920×1080 to confirm the draw-call budget in `PLAN.md`.
