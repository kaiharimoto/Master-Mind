# PLAN.md — dimensions, structure, coverage, required parts

## Dimensions

One TypeScript codebase, one shared map model, **three lenses** over it, **two
platform targets**, **one sync service**.

```
                      ┌──────────────── sync service (WebSocket, property LWW) ────────────────┐
                      │                                                                        │
   Windows target (Electron)                                            Android target (Capacitor)
   ├── lens: canvas          (edit)                                     ├── lens: canvas   (edit)
   ├── lens: mind expansion  (whole-brain, hands)                       └── lens: AR       (view + refind)
   └── inputs: mouse ∥ webcam hand poses                                    inputs: touch ∥ gyro
```

Every lens renders the **same** `MapDoc`. `node.pos` has exactly one writer.

## Draw-call budget (forced by F-002: CPU rasteriser, 4 cores)

| Pass | Draw calls | Technique |
|---|---:|---|
| Nodes + all five state rings | 1 | instanced billboard quads, state encoded per-instance, rings drawn analytically in the fragment shader |
| Filaments | 1 | one `LineSegments` with per-vertex colour |
| Text | 1 | instanced glyph quads against a single-channel SDF atlas |
| Holding-cluster shell + count | 1 | instanced, same shader family |
| **Total world** | **4** | no post-processing, no shadow pass, no bloom |

Target ≥30 fps at 1920×1080 with 140 nodes so 24 fps video has headroom.

## Structure

```
src/app/core/      model.ts  store.ts  syncClient.ts  ids.ts  hash.ts
src/app/render/    scene.ts  nodes.ts  filaments.ts  text/{sdf.ts,atlas.ts}  camera.ts  states.ts
src/app/lens/      canvas.ts  expansion.ts  ar.ts
src/app/input/     touch.ts  hands.ts  mouse.ts  gyro.ts  gestures.ts
src/app/ui/        mapsHome.ts  settings.ts  search.ts  finderReview.ts  shell.ts
src/app/finder/    prompt.ts  parse.ts  suggestions.ts
src/server/        sync.ts    (WebSocket, property-level LWW, never drops a node)
src/electron/      main.cjs   (Windows target)
src/android/       capacitor config + gradle (Android target)
seeds/             two committed deterministic JSON fixtures + content hashes
harness/drivers/   one scripted driver per artifact, 20 of them
```

## Coverage — required part → where it lives → which artifacts prove it

| # | Required part | Module | Proved by |
|---|---|---|---|
| 01 | Map canvas | `lens/canvas.ts` | 02, 08, 09, 19 |
| 02 | Holding cluster | `render/holding` in `scene.ts` + model | 06, 08, 19 |
| 03 | AR projection (Android) | `lens/ar.ts` + `input/gyro.ts`,`touch.ts` | 03, 16 |
| 04 | Mind expansion (Windows) | `lens/expansion.ts` | 04, 14, 17 |
| 05 | Hand tracking input | `input/hands.ts` | 05, 17, 15 |
| 06 | Cloud sync | `server/sync.ts` + `core/syncClient.ts` | 11, 12, 15 |
| 07 | Search and refind | `ui/search.ts` (all three lenses) | 10, 18 |
| 08 | Finder harness | `finder/*` | 13, 14, 20 |
| 09 | Maps home | `ui/mapsHome.ts` | 01 |
| 10 | Settings | `ui/settings.ts` | 15, 05 |

## Component families and their floors

| Family | Floor | Members |
|---|---:|---|
| Android touch gestures | 5 | long-press quick-add · drag-to-place · two-finger link draw · tap select+inspect · one-finger orbit / two-finger pan-zoom navigation |
| Windows hand poses | 4 | closed fist = grab cluster · open palm spread = spread map · gather (fingers pinched inward) = gather · index-thumb pinch = select / confirm |
| Node visual states | 5 | plain · connected-to-selection · unplaced · search hit · selected (see DIRECTION.md D-006) |
| Suggestion types | 3 | connection · grouping · placement |
| Seeded maps | 2 | 140-node "Fermentation" map · 11-node mid-workflow personal map |

## Build order status (§03)

| Step | Description | Status |
|---|---|---|
| 01 | Environment census + pipelines + AR probe | in progress |
| 02 | Shared model + holding cluster + seed maps | not started |
| 03 | Canvas editing | not started |
| 04 | Sync twin proof | not started |
| 05 | AR lens | not started |
| 06 | Hand tracking + mind expansion | not started |
| 07 | Search fly-to in every lens | not started |
| 08 | Finder harness | not started |
| 09 | Polish + final evidence | not started |

## Artifact reachability by build step

An artifact not yet reachable is `not yet buildable` — distinct from an
environment substitution, and not counted against category 04 (§06).

| First capturable at | Artifacts |
|---|---|
| STEP 02 | 01, 06, 07 |
| STEP 03 | 02, 08, 09, 19 |
| STEP 04 | 11, 12, 15 |
| STEP 05 | 03, 16 |
| STEP 06 | 04, 05, 17 |
| STEP 07 | 10, 18 |
| STEP 08 | 13, 14, 20 |
