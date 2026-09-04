// Shared driver helpers.
export const POSE = (page, p) => page.evaluate(q => {
  const s = window.mm.scene.pose;
  if (q.target) s.target.set(q.target[0], q.target[1], q.target[2]);
  if (q.yaw !== undefined) s.yaw = q.yaw;
  if (q.pitch !== undefined) s.pitch = q.pitch;
  if (q.dist !== undefined) s.dist = q.dist;
}, p);

export const FRAME_ALL = (page, margin = 1.04) => page.evaluate(m => window.mm.frameAll(m), margin);

export const SELECT = (page, text) => page.evaluate(t => {
  const d = window.mm.store.doc;
  const n = Object.values(d.nodes).find(x => x.text === t);
  if (n) window.mm.select(n.id);
  return n ? n.id : null;
}, text);

export const NODE_ID = (page, text) => page.evaluate(t => {
  const n = Object.values(window.mm.store.doc.nodes).find(x => x.text === t);
  return n ? n.id : null;
}, text);

export const SCREEN_OF = (page, id) => page.evaluate(i => {
  const s = window.mm.scene.screenPositions().find(p => p.id === i);
  return s ? { x: s.x, y: s.y, r: s.r } : null;
}, id);

/** Real gyro: browser sensor override where available, a real DOM event otherwise. */
export async function orient(page, cdp, { alpha, beta, gamma }) {
  try {
    await cdp.send('DeviceOrientation.setDeviceOrientationOverride', { alpha, beta, gamma });
  } catch {
    await page.evaluate(o => window.dispatchEvent(
      new DeviceOrientationEvent('deviceorientation', { alpha: o.alpha, beta: o.beta, gamma: o.gamma, absolute: true })
    ), { alpha, beta, gamma });
  }
}

/** Touch primitives dispatched through the browser's real input pipeline. */
export const touch = {
  async start(cdp, x, y, id = 1) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y, id }] });
  },
  async move(cdp, pts) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pts });
  },
  async end(cdp) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  },
  async tap(cdp, x, y) {
    await touch.start(cdp, x, y);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  },
};

export const sleepFrames = async (page, from, n, fps = 30) => {
  for (let i = 0; i < n; i++) await page.evaluate(t => window.mm.renderAt(t), from + (i / fps) * 1000);
  return from + (n / fps) * 1000;
};

/** Scale a page-space point to CSS pixels (the canvas is 1:1 here, but be explicit). */
export const css = (v) => Math.round(v);
