// Standalone MediaPipe detection probe over the real getUserMedia path.
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { classify } from './app/input/hands.js';
const TIPI=[4,8,12,16,20], PIPI=[3,6,10,14,18];
const dd=(a:any,b:any)=>Math.hypot(a.x-b.x,a.y-b.y);
declare global { interface Window { runProbe: (secs: number) => Promise<unknown> } }
window.runProbe = async (secs: number) => {
  const v = document.createElement('video');
  v.muted = true; (v as HTMLVideoElement).playsInline = true;
  document.body.appendChild(v);
  const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
  v.srcObject = stream; await v.play();
  const fs = await FilesetResolver.forVisionTasks('./assets/mp-wasm');
  const lm = await HandLandmarker.createFromOptions(fs, {
    baseOptions: { modelAssetPath: './assets/hand_landmarker.task', delegate: 'CPU' },
    runningMode: 'VIDEO', numHands: 1,
    minHandDetectionConfidence: 0.35, minHandPresenceConfidence: 0.35, minTrackingConfidence: 0.35,
  });
  const trace: { t: number; pose: string; ext: number; sp: number; pi: number; flags?: string }[] = [];
  let frames = 0, hits = 0; let last = -1;
  const t0 = performance.now();
  while (performance.now() - t0 < secs * 1000) {
    await new Promise(r => requestAnimationFrame(() => r(null)));
    if (v.currentTime === last) continue;
    last = v.currentTime; frames++;
    const res = lm.detectForVideo(v, performance.now());
    const l = res.landmarks?.[0];
    if (l && l.length >= 21) {
      hits++; const c = classify(l as any);
      const w = l[0] as any;
      const flags = [0,1,2,3,4].map(f => dd(w, l[TIPI[f]] as any) > dd(w, l[PIPI[f]] as any) * (f===0?1.06:1.14) ? 1 : 0).join('');
      const spanN = Math.max(dd(w, l[9] as any), 1e-4);
      const far = [0,1,2,3,4].filter(f => dd(w, l[TIPI[f]] as any)/spanN > 1.5).length;
      trace.push({ t: +v.currentTime.toFixed(2), pose: c.pose, ext: c.extended,
                   sp: +c.spreadRatio.toFixed(3), pi: c.reach, flags } as any);
    } else trace.push({ t: +v.currentTime.toFixed(2), pose: 'NO_HAND', ext: -1, sp: -1, pi: -1, flags: '-----' });
  }
  return { frames, hits, detectionRate: +(hits / Math.max(frames,1)).toFixed(3), trace };
};
