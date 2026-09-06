// Shared driver helpers.
export const POSE = (page, p) => page.evaluate(q => {
  const s = window.mm.scene.pose;
  if (q.target) s.target.set(q.target[0], q.target[1], q.target[2]);
  if (q.yaw !== undefined) s.yaw = q.yaw;
  if (q.pitch !== undefined) s.pitch = q.pitch;
  if (q.dist !== undefined) s.dist = q.dist;
}, p);

/**
 * FRAMED TWICE, WITH A RENDER BETWEEN.
 *
 * The framing reserves room for whatever chrome is open, and one of those
 * panels — the recovery column listing the thoughts the frame cannot name —
 * only APPEARS once a frame has been laid out and found some. So a single fit
 * framed the map against the chrome that existed before it, the column then
 * opened over the result, and on artifact 05 it covered forty-seven thoughts.
 * The second fit sees the column and frames clear of it. It converges because
 * clearing the column can only reduce what is hidden, never add to it.
 */
export const FRAME_ALL = async (page, margin = 1.04) => {
  await page.evaluate(m => window.mm.frameAll(m), margin);
  await page.evaluate(() => window.mm.renderAt(window.mm.now()));
  await page.evaluate(m => window.mm.frameAll(m), margin);
  await page.evaluate(() => window.mm.renderAt(window.mm.now()));
};

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

/**
 * Real gyro. The browser's sensor override is tried first; if the app does not
 * actually receive an orientation from it, a real DeviceOrientationEvent is
 * dispatched instead. Either way the app's own `deviceorientation` listener is
 * what moves the camera - nothing writes the pose directly.
 */
export async function orient(page, cdp, { alpha, beta, gamma }) {
  // The browser's sensor override is asked for first, but it does not deliver
  // deviceorientation events in this headless build, so a real
  // DeviceOrientationEvent is always dispatched as well. The app's own
  // listener is what moves the camera either way; nothing writes the pose.
  try { await cdp.send('DeviceOrientation.setDeviceOrientationOverride', { alpha, beta, gamma }); }
  catch { /* the DOM event below is the path that actually carries it */ }
  await page.evaluate(o => window.dispatchEvent(new DeviceOrientationEvent('deviceorientation',
    { alpha: o.alpha, beta: o.beta, gamma: o.gamma, absolute: true })), { alpha, beta, gamma });
  return page.evaluate(() => (window.mm.gyro ? { ...window.mm.gyro } : null));
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
