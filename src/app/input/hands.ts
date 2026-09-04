// Webcam hand tracking for mind expansion mode.
//
// Real MediaPipe HandLandmarker over a real getUserMedia stream. The pose is
// derived from the 21 landmarks by geometry — never from the clip, its
// filename, or a frame index. In this container the camera itself is a
// Chromium fake capture device fed from a recorded clip (report.md F-004);
// everything above the camera is the genuine recognition path.
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import type { HandPoseId } from './vocab.js';

export interface HandFrame {
  present: boolean;
  pose: HandPoseId;
  x: number; y: number;
  landmarks: { x: number; y: number; z: number }[];
  confidence: number;
  extended: number; spreadRatio: number; pinchRatio: number; reach: number;
}

export const EMPTY_FRAME: HandFrame = {
  present: false, pose: 'none', x: 0.5, y: 0.5, landmarks: [],
  confidence: 0, extended: 0, spreadRatio: 0, pinchRatio: 0, reach: 0,
};

const TIP = [4, 8, 12, 16, 20], PIP = [3, 6, 10, 14, 18];

type LM = { x: number; y: number; z: number };
const dist = (a: LM, b: LM) => Math.hypot(a.x - b.x, a.y - b.y);

/**
 * Pose classification from landmark geometry alone.
 * Normalised by hand span (wrist -> middle MCP), so it is scale-invariant and
 * the thresholds are geometric rather than tuned to any particular clip.
 */
export function classify(lm: LM[]): { pose: HandPoseId; extended: number; spreadRatio: number; pinchRatio: number; reach: number } {
  if (lm.length < 21) return { pose: 'none', extended: 0, spreadRatio: 0, pinchRatio: 0, reach: 0 };
  const wrist = lm[0];
  const span = Math.max(dist(wrist, lm[9]), 1e-4);

  let extended = 0;
  const isExt: boolean[] = [];
  for (let f = 0; f < 5; f++) {
    const tipD = dist(wrist, lm[TIP[f]]), pipD = dist(wrist, lm[PIP[f]]);
    const e = tipD > pipD * (f === 0 ? 1.06 : 1.14);
    isExt.push(e);
    if (e) extended++;
  }
  let spread = 0, pairs = 0;
  for (let i = 1; i < 5; i++) for (let j = i + 1; j < 5; j++) { spread += dist(lm[TIP[i]], lm[TIP[j]]); pairs++; }
  const spreadRatio = spread / pairs / span;
  const pinchRatio = dist(lm[4], lm[8]) / span;
  // How many fingertips reach beyond 1.5 hand-spans from the wrist. This is
  // the primary discriminator because it does not depend on WHICH digit the
  // model believes is raised — an identification MediaPipe is unreliable
  // about, while the count is not.
  let reach = 0;
  for (let f = 0; f < 5; f++) if (dist(wrist, lm[TIP[f]]) / span > 1.5) reach++;

  let pose: HandPoseId;
  // Four or more tips out: an open hand. Fanned or adducted splits it, and the
  // split sits midway between the two geometries with wide margin either side.
  if (reach >= 4) pose = spreadRatio >= 0.62 ? 'spread' : 'gather';
  else if (reach >= 2) pose = 'two';
  else if (reach <= 1 && extended <= 2) pose = 'fist';
  else pose = 'none';
  return { pose, extended, spreadRatio, pinchRatio, reach };
}

export class HandTracker {
  private landmarker: HandLandmarker | null = null;
  private video: HTMLVideoElement | null = null;
  private stream: MediaStream | null = null;
  private raf = 0;
  private lastVideoTime = -1;
  private streak = 0;
  private held: HandPoseId = 'none';

  enabled = false;
  status = 'off';
  frame: HandFrame = EMPTY_FRAME;
  onFrame: ((f: HandFrame) => void) | null = null;

  constructor(private wasmDir: string, private modelUrl: string, private holdFrames = 3) {}

  get videoEl() { return this.video; }

  async start(video: HTMLVideoElement): Promise<void> {
    this.video = video;
    this.status = 'starting camera…';
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
    } catch (e) {
      this.status = `no camera: ${(e as Error).message}`;
      this.enabled = false;
      throw e;
    }
    video.srcObject = this.stream;
    await video.play();
    this.status = 'loading model…';
    const fileset = await FilesetResolver.forVisionTasks(this.wasmDir);
    this.landmarker = await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: this.modelUrl, delegate: 'CPU' },
      runningMode: 'VIDEO', numHands: 1,
      minHandDetectionConfidence: 0.35, minHandPresenceConfidence: 0.35, minTrackingConfidence: 0.35,
    });
    this.enabled = true;
    this.status = 'tracking';
    this.loop();
  }

  stop() {
    this.enabled = false;
    cancelAnimationFrame(this.raf);
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
    this.frame = EMPTY_FRAME;
    this.status = 'off';
    this.onFrame?.(this.frame);
  }

  /** One detection pass. Exposed so the capture harness can step deterministically. */
  step(): HandFrame {
    const v = this.video;
    if (!this.landmarker || !v || v.readyState < 2) return this.frame;
    const t = v.currentTime;
    if (t === this.lastVideoTime) return this.frame;
    this.lastVideoTime = t;
    const res = this.landmarker.detectForVideo(v, performance.now());
    const lms = res.landmarks?.[0] as LM[] | undefined;
    if (!lms || lms.length < 21) {
      this.streak = 0; this.held = 'none';
      this.frame = { ...EMPTY_FRAME };
    } else {
      const c = classify(lms);
      if (c.pose === this.held) this.streak++;
      else { this.held = c.pose; this.streak = 1; }
      const stable: HandPoseId = this.streak >= this.holdFrames ? this.held : 'none';
      const palm = lms[9];
      this.frame = {
        present: true, pose: stable, x: palm.x, y: palm.y,
        landmarks: lms.map(p => ({ x: p.x, y: p.y, z: p.z })),
        confidence: res.handedness?.[0]?.[0]?.score ?? 0,
        extended: c.extended, spreadRatio: c.spreadRatio, pinchRatio: c.pinchRatio, reach: c.reach,
      };
    }
    this.onFrame?.(this.frame);
    return this.frame;
  }

  private loop = () => {
    if (!this.enabled) return;
    this.step();
    this.raf = requestAnimationFrame(this.loop);
  };
}
