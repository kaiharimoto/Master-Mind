// Master Mind — application shell.
//
// One live map state; three lenses over it; two surfaces. The surface decides
// which lenses exist: Windows gets canvas + mind expansion, Android gets canvas
// + AR. Both run this same bundle.
import * as THREE from 'three';
import {
  type MapDoc, type NodeId, type ColorKey, COLOR_KEYS, PALETTE,
  holdingNodes, searchMatches, nodeList,
} from './core/model.js';
import { Store, newId } from './core/store.js';
import { SyncClient, type MapSummary } from './core/syncClient.js';
import { Scene, type LensKind } from './render/scene.js';
import { TEXT_COLOR } from './render/world.js';
import { Controls } from './lens/controls.js';
import { HandTracker, type HandFrame } from './input/hands.js';
import { TOUCH_VOCAB, HAND_VOCAB, type HandPoseId } from './input/vocab.js';
import { buildPrompt, parseReply, applySuggestion, describe, type Suggestion, type ParseResult } from './finder/finder.js';
import { CSS } from './ui/style.js';

type Surface = 'windows' | 'android';

const $ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector(sel) as T;
const el = (tag: string, attrs: Record<string, string> = {}, html = '') => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (html) n.innerHTML = html;
  return n;
};
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const ago = (t: number) => {
  const m = Math.max(0, Math.round((Date.now() - t) / 60000));
  if (m < 1) return 'just now';
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);
  return d < 30 ? `${d} d ago` : `${Math.round(d / 30)} mo ago`;
};

export class App {
  surface: Surface;
  lens: LensKind = 'canvas';
  scene!: Scene;
  store!: Store;
  sync!: SyncClient;
  controls!: Controls;
  hands!: HandTracker;

  maps: MapSummary[] = [];
  selected: NodeId | null = null;
  hits: NodeId[] = [];
  hitIndex = 0;
  suggestions: Suggestion[] = [];
  sugIndex = 0;
  lastParse: ParseResult | null = null;
  handsOn = false;
  /** Frozen clock for diffable captures. When null, the wall clock runs. */
  frozenClock: number | null = null;
  /** When set, the app runs on virtual time: deterministic, frame-stepped capture. */
  virtualNow: number | null = null;
  private uiUntil = { toast: 0, gesture: 0, turning: 0 };
  ready = false;
  private raf = 0;
  private lastGesture = { id: '', detail: '', at: 0 };
  private handGrab: { ids: NodeId[]; x: number; y: number } | null = null;
  /** Rate limit for continuous hand operations, on the app clock. */
  private lastHandOp = 0;
  /** Last orientation the app actually received. Public so a capture can verify it. */
  gyro: { alpha: number; beta: number; gamma: number } | null = null;

  constructor(surface: Surface) { this.surface = surface; }

  lenses(): LensKind[] { return this.surface === 'windows' ? ['canvas', 'expansion'] : ['canvas', 'ar']; }

  async boot(opts: { mapId: string; wsUrl: string; account: string; actor: string }) {
    document.head.appendChild(el('style', {}, CSS));
    document.body.appendChild(el('canvas', { id: 'world' }));
    this.buildChrome();

    const meta = await (await fetch('./assets/font-sdf.json')).json();
    const atlas = await new Promise<THREE.Texture>((res, rej) =>
      new THREE.TextureLoader().load('./assets/font-sdf.png', res, undefined, rej));
    this.scene = new Scene($('#world') as HTMLCanvasElement, meta, atlas);

    const doc: MapDoc = await (await fetch(`./maps/${opts.mapId}.json`)).json();
    this.store = new Store(doc, opts.actor);
    this.sync = new SyncClient(opts.wsUrl, opts.actor, opts.account);
    this.sync.onSnapshot((d, o) => {
      this.store.replaceDoc(d); this.scene.setDoc(d); this.refresh(); this.frameAll();
      this.showOrigin(o);
    });
    this.sync.onMaps(m => { this.maps = m; if ($('#maps')) this.renderMaps(); });
    this.sync.onStatus(() => this.renderSyncStatus());
    this.store.attach(this.sync);
    this.store.subscribe(() => { this.scene.markDirty(); this.refresh(); });
    this.sync.connect(opts.mapId);

    this.scene.setDoc(this.store.doc);
    this.controls = new Controls(this.scene, this.store, {
      onSelect: id => this.select(id),
      onQuickAdd: () => this.quickAdd(''),
      onGestureFired: (id, detail) => this.showGesture(id, detail),
      onDragEnd: () => this.refresh(),
    });
    this.controls.now = () => this.now();
    this.hands = new HandTracker('./assets/mp-wasm', './assets/hand_landmarker.task');
    this.hands.onFrame = f => this.onHand(f);

    this.setLens(this.lenses()[0]);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.attachInput();
    this.frameAll();
    this.refresh();
    this.loop();
    this.ready = true;
  }

  // -- chrome --------------------------------------------------------------

  private buildChrome() {
    const top = el('div', { id: 'top' });
    top.innerHTML = `
      <span class="name" data-t="map-name"></span>
      <span class="tabs" data-t="lens-tabs"></span>
      <input id="capture" data-t="capture-text" placeholder="type a thought…" size="22">
      <button data-t="capture" title="One action: lands in holding, unplaced">+ Capture</button>
      <span class="sp"></span>
      <input id="search" data-t="search" placeholder="search this map…">
      <span class="chip" data-t="holding-chip">holding <b data-t="holding-count">0</b></span>
      <button data-t="hands-chip" class="ghost" title="Hand tracking toggle and live status">Hands: off</button>
      <button data-t="open-states" class="ghost">States</button>
      <button data-t="open-finder" class="ghost">Finder</button>
      <button data-t="open-maps" class="ghost">Maps</button>
      <button data-t="open-settings" class="ghost">Settings</button>`;
    document.body.append(top,
      el('div', { id: 'lenstag', 'data-t': 'lens-tag' }),
      el('div', { id: 'gesture', 'data-t': 'gesture-hud' }),
      el('div', { id: 'argyro', 'data-t': 'ar-gyro' }),
      el('div', { id: 'toast', 'data-t': 'toast' }),
      el('div', { id: 'tools', 'data-t': 'tools' }));

    $('[data-t=capture]').addEventListener('click', () => this.quickAdd($<HTMLInputElement>('#capture').value));
    $<HTMLInputElement>('#capture').addEventListener('keydown', e => {
      if (e.key === 'Enter') this.quickAdd($<HTMLInputElement>('#capture').value);
    });
    $('[data-t=open-states]').addEventListener('click', () => this.toggleStates());
    $('[data-t=hands-chip]').addEventListener('click', () => this.toggleHands(!this.handsOn));
    $('[data-t=open-maps]').addEventListener('click', () => this.openMapsHome());
    $('[data-t=open-settings]').addEventListener('click', () => this.openSettings());
    $('[data-t=open-finder]').addEventListener('click', () => this.toggleFinder());
    const s = $<HTMLInputElement>('#search');
    s.addEventListener('input', () => this.search(s.value));
    s.addEventListener('keydown', e => { if (e.key === 'Enter') this.flyToHit(e.shiftKey ? -1 : +1); });

    const tabs = $('[data-t=lens-tabs]');
    for (const k of this.lenses()) {
      const b = el('button', { 'data-t': `lens-${k}` }, k === 'expansion' ? 'Mind expansion' : k === 'ar' ? 'AR' : 'Canvas');
      b.addEventListener('click', () => this.setLens(k));
      tabs.appendChild(b);
    }
    // Mouse equivalents for every hand operation, so mind expansion stays fully
    // operable if tracking misbehaves live (§07/05).
    const tools = $('#tools');
    for (const p of HAND_VOCAB) {
      const SHORT: Record<string, string> = { fist: 'Grab', spread: 'Spread', gather: 'Gather', two: 'Select' };
      const b = el('button', { 'data-t': `tool-${p.id}`, title: `${p.name} — ${p.mouse}` }, SHORT[p.id] ?? p.name);
      b.addEventListener('click', () => this.runHandOperation(p.id, true));
      tools.appendChild(b);
    }
  }

  private attachInput() {
    const c = $('#world');
    if (this.surface === 'windows') this.controls.attachMouse(c);
    else this.controls.attachTouch(c);
    window.addEventListener('keydown', e => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'n' || e.key === 'N') { e.preventDefault(); this.quickAdd(''); }
      if (e.key === 'Escape') { this.select(null); this.closeOverlays(); }
    });
    // Gyroscopic orientation for the AR lens. The app listens for the real
    // DeviceOrientationEvent; nothing else feeds the camera in AR.
    window.addEventListener('deviceorientation', (e) => {
      if (this.lens !== 'ar' || e.alpha === null) return;
      const prev = this.gyro;
      this.gyro = { alpha: e.alpha ?? 0, beta: e.beta ?? 90, gamma: e.gamma ?? 0 };
      // While the device is actually turning, the readout comes forward. It is
      // the one input in the vocabulary that is not a touch, and at the scale a
      // reviewer reads a contact sheet at, a small chip at the frame edge was
      // indistinguishable from a pan. It settles back on its own.
      if (prev && Math.abs(this.gyro.alpha - prev.alpha) + Math.abs(this.gyro.beta - prev.beta) > 1.5)
        this.uiUntil.turning = this.now() + 1400;
      this.controls.applyOrientation(this.gyro.alpha, this.gyro.beta, this.gyro.gamma);
      this.renderGyro();
    });
  }

  // -- lens ----------------------------------------------------------------

  setLens(k: LensKind) {
    this.lens = k;
    this.scene.applyLens(k);
    for (const l of this.lenses()) $(`[data-t=lens-${l}]`).classList.toggle('on', l === k);
    $('#tools').classList.toggle('show', k === 'expansion');
    // AR is a view-and-refind lens on a handheld surface: the controls that
    // belong to a desk - the capture field, the finder, the maps list - are not
    // shown there. What remains is look, search, inspect and capture.
    document.body.classList.toggle('ar', k === 'ar');
    this.controls.gyroDriven = k === 'ar';
    if (k === 'ar') this.controls.resetGyroBase();
    // The surface tag says what this process actually is, read from the runtime,
    // and — in AR — what is real and what is absent. The twin composite already
    // carries that disclosure; the two artifacts most likely to be shown on
    // their own (the AR hero and the touch vocabulary) carried only a bare chip.
    const p = this.provenance();
    const engine = p.isElectron ? `${p.runtime} · ${p.platform}`
      : this.surface === 'android' ? `${p.runtime} · android device profile`
      : `${p.runtime} · ${p.platform}`;
    $('#lenstag').innerHTML =
      `<b>${this.surface === 'windows' ? 'Windows' : 'Android'}</b> · <b>${k === 'expansion' ? 'mind expansion' : k}</b>` +
      ` <span class="prov">${esc(engine)}</span>` +
      (k === 'ar'
        ? ` <span class="prov">real orientation + touch events · <b class="absent">no camera pass-through</b></span>`
        : '');
    if (k === 'expansion') this.frameAll();
    this.renderGyro();
    this.scene.markDirty();
  }

  /**
   * The AR reticle: what the device is pointed AT.
   *
   * A handheld surface has a direction, and the thing at the centre of the view
   * is the thing you are asking about — an affordance a desk lens has no use
   * for and the one thing that makes a still read as AR rather than as a second
   * canvas. It names the node nearest the view centre and how far away it is.
   */
  private renderReticle() {
    let r = document.getElementById('reticle');
    if (this.lens !== 'ar') { r?.remove(); return; }
    if (!r) {
      r = el('div', { id: 'reticle', 'data-t': 'ar-reticle' });
      r.innerHTML = '<div class="x"></div><div class="n" data-t="reticle-node"></div>';
      document.body.appendChild(r);
    }
    const el0 = this.scene.renderer.domElement;
    const cx = el0.width / 2, cy = el0.height / 2;
    let best: { id: string; d: number } | null = null;
    for (const s of this.scene.screenPositions()) {
      const d = Math.hypot(s.x - cx, s.y - cy);
      if (!best || d < best.d) best = { id: s.id, d };
    }
    const n = best ? this.store.doc.nodes[best.id] : null;
    const label = $('[data-t=reticle-node]', r);
    r.classList.toggle('on', !!n && best!.d < el0.width * 0.22);
    label.textContent = n && best!.d < el0.width * 0.22
      ? `${n.text}${n.placed ? '' : ' · in holding'}`
      : 'pointing at open space';
  }

  /** Live orientation readout: what the AR lens is actually being pointed at. */
  private renderGyro() {
    const g = document.getElementById('argyro');
    if (!g) return;
    g.classList.toggle('show', this.lens === 'ar');
    if (this.lens !== 'ar') return;
    const o = this.gyro;
    g.classList.toggle('turning', this.now() < this.uiUntil.turning);
    g.innerHTML = o
      ? `gyro live · heading <b>${o.alpha.toFixed(0)}°</b> · tilt <b>${o.beta.toFixed(0)}°</b> · roll <b>${o.gamma.toFixed(0)}°</b>`
      : 'gyro · waiting for orientation';
  }

  /**
   * The safe area: the fraction of the viewport each edge's chrome occupies,
   * measured from the elements actually on screen rather than assumed. A map
   * that "fits" underneath the pose bar does not fit.
   */
  private safeInsets() {
    const h = Math.max(window.innerHeight, 1), w = Math.max(window.innerWidth, 1);
    const of = (sel: string) => {
      const e = document.querySelector(sel) as HTMLElement | null;
      if (!e || !e.offsetParent && getComputedStyle(e).position !== 'fixed') return 0;
      const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0 ? r.height : 0;
    };
    // One line of label clearance beyond the bar itself, so text is not cut
    // against the chrome either.
    const line = 22;
    const bottom = Math.max(of('#tools'), of('#lenstag'), of('#argyro'), of('#gesture')) + 12;
    const top = of('#top');
    // Open panels are chrome too. The editor sits on the right, the legend and
    // the finder on the left; a map framed to the whole viewport while one is
    // open is a map with a region behind a panel.
    let left = 12, right = 12;
    for (const sel of ['#finder', '#states']) {
      const e = document.querySelector(sel) as HTMLElement | null;
      if (e) left = Math.max(left, e.getBoundingClientRect().right + 14);
    }
    const ed = document.getElementById('editor');
    if (ed) right = Math.max(right, w - ed.getBoundingClientRect().left + 14);
    return { top: Math.min((top + line) / h, 0.22), bottom: Math.min((bottom + line) / h, 0.22),
             left: Math.min(left / w, 0.38), right: Math.min(right / w, 0.38) };
  }

  /**
   * Frame a chosen set of nodes rather than the whole map, in the band the open
   * panels leave. Framing everything and then panning to clear a panel centres
   * the MAP in that band, which is not the same as putting the two nodes you
   * are working on in it.
   */
  frameNodes(ids: NodeId[], margin = 1.3) {
    const doc = this.store.doc;
    const ns = ids.map(i => doc.nodes[i]).filter(Boolean);
    if (!ns.length) return;
    const f = this.scene.fitAll(ns, margin, this.safeInsets(), false);
    this.scene.pose.target.copy(f.target);
    this.scene.pose.dist = f.dist;
  }

  frameAll(margin = 1.04) {
    const f = this.scene.fitAll(nodeList(this.store.doc), margin, this.safeInsets());
    this.scene.pose.target.copy(f.target);
    this.scene.pose.dist = f.dist;
    // Bound how far any continuous input can travel from a framed view, so a
    // held gesture cannot walk the camera off the map.
    this.controls.minDist = Math.max(f.dist * 0.22, 4);
    this.controls.maxDist = f.dist * 2.1;
  }

  resize() {
    const w = Math.floor(window.innerWidth), h = Math.floor(window.innerHeight);
    this.scene.setSize(w, h);
    const c = $('#world');
    c.style.width = w + 'px'; c.style.height = h + 'px';
  }

  // -- actions -------------------------------------------------------------

  quickAdd(text: string) {
    const t = (text || '').trim();
    const id = this.store.quickAdd(t || 'New thought');
    $<HTMLInputElement>('#capture').value = '';
    this.select(id);
    this.toast(`Captured into holding — ${this.store.holdingCount()} waiting. Drag it out to place it.`);
    return id;
  }

  select(id: NodeId | null) {
    const opening = id !== null && this.selected === null;
    this.selected = id;
    this.scene.setSelection(id);
    this.renderEditor();
    if (opening) this.clearOfPanels(id!);
  }

  /**
   * Panels sit over the world on both sides — the legend and the finder on the
   * left, the node editor on the right. When one opens, slide the view into the
   * band that is still visible, so a panel never buries the thing it is about.
   * Called only when a panel opens, never on every frame: panning the map on
   * each selection is disorienting and moves it out from under the next touch.
   */
  clearOfPanels(id?: NodeId) {
    const el = this.scene.renderer.domElement;
    const scale = el.width / Math.max(window.innerWidth, 1);
    let left = 0, right = 0;
    for (const sel of ['#finder', '#states']) {
      const p = document.querySelector(sel) as HTMLElement | null;
      if (p) left = Math.max(left, (p.getBoundingClientRect().right + 16) * scale);
    }
    const ed = document.getElementById('editor');
    if (ed) right = Math.max(right, (el.width / scale - ed.getBoundingClientRect().left + 16) * scale);
    if (!left && !right) return;
    // Centre what is actually on screen in the band that is still visible,
    // rather than shifting by a fixed amount — a fixed shift only moves the
    // clipping from one edge to the other. Labels count: they are what ends up
    // under a panel, not the node dots.
    const { lo, hi } = this.scene.contentBoundsX();
    if (!isFinite(lo) || !isFinite(hi)) return;
    const bandCentre = (left + (el.width - right)) / 2;
    const dx = bandCentre - (lo + hi) / 2;
    if (Math.abs(dx) < 4) return;
    this.controls.panTarget(dx, 0);
  }

  search(q: string) {
    this.hits = searchMatches(this.store.doc, q).map(n => n.id);
    this.hitIndex = 0;
    this.scene.setHits(this.hits);
    this.refresh();
  }

  /** Search flies the view to the node in its actual place, in every lens. */
  flyToHit(step = 0) {
    if (!this.hits.length) return;
    if (step) this.hitIndex = (this.hitIndex + step + this.hits.length) % this.hits.length;
    const id = this.hits[this.hitIndex];
    // Deliberately does NOT select: the node you flew to wears the search-hit
    // signature, which is the state the flight was about. Clicking selects it.
    this.select(null);
    this.controls.flyTo(id, 1300, this.lens === 'expansion' ? 15 : 12);
  }

  // -- hand tracking -------------------------------------------------------

  async toggleHands(on: boolean) {
    this.handsOn = on;
    // The panel carries the <video> the tracker attaches the stream to, so it
    // has to exist before the tracker starts.
    this.renderHandPanel();
    if (on) {
      const v = document.getElementById('handvid') as HTMLVideoElement | null;
      if (!v) { this.handsOn = false; this.toast('Hand tracking unavailable: no video surface', true); return; }
      try { await this.hands.start(v); }
      catch (e) { this.handsOn = false; this.toast(`Hand tracking unavailable: ${(e as Error).message}`, true); }
    } else this.hands.stop();
    this.renderHandPanel();
  }

  private onHand(f: HandFrame) {
    this.drawLandmarks(f);
    this.renderHandPanel();
    if (!f.present || f.pose === 'none') { this.handGrab = null; return; }
    this.runHandOperation(f.pose, false, f);
  }

  /**
   * The four map-scale operations. Reached identically from a recognised hand
   * pose and from its mouse equivalent — one implementation, so a live demo
   * never depends on tracking succeeding.
   */
  runHandOperation(pose: Exclude<HandPoseId, 'none'>, byMouse: boolean, f?: HandFrame) {
    const p = HAND_VOCAB.find(h => h.id === pose)!;
    this.showGesture(byMouse ? `mouse:${pose}` : pose, p.operation.split(' — ')[0]);
    // A held pose is a continuous instruction, not a per-frame one: applying it
    // every frame would walk the camera off the map within a second or two.
    const now = this.now();
    const throttled = !byMouse && now - this.lastHandOp < 250;
    if (pose === 'spread' || pose === 'gather') {
      if (throttled) return;
      this.lastHandOp = now;
      this.controls.zoom(pose === 'spread' ? (byMouse ? 1 / 1.12 : 0.985)
                                           : (byMouse ? 1.12 : 1.015));
    } else if (pose === 'two') {
      const c = this.scene.renderer.domElement;
      const sx = f ? (1 - f.x) * c.width : c.width / 2, sy = f ? f.y * c.height : c.height / 2;
      this.select(this.scene.pick(sx, sy, 26));
    } else if (pose === 'fist') {
      const c = this.scene.renderer.domElement;
      const sx = f ? (1 - f.x) * c.width : c.width / 2, sy = f ? f.y * c.height : c.height / 2;
      if (!this.handGrab) {
        // Only grab what the hand is actually over. A fist in empty space does
        // nothing, rather than dragging whatever happened to be selected.
        const id = this.scene.pick(sx, sy, 70);
        if (!id) return;
        this.handGrab = { ids: this.controls.clusterOf(id), x: sx, y: sy };
        return;
      }
      // Rigid translation: every member moves by the same delta, so the
      // cluster's internal arrangement is preserved exactly.
      const anchor = this.store.node(this.handGrab.ids[0]);
      if (!anchor) { this.handGrab = null; return; }
      const at = new THREE.Vector3(...anchor.pos);
      const from = this.scene.screenToWorld(this.handGrab.x, this.handGrab.y, at);
      const to = this.scene.screenToWorld(sx, sy, at);
      const d = to.sub(from);
      if (d.length() > 0.02) {
        this.store.moveCluster(this.handGrab.ids, [d.x, d.y, d.z]);
        this.handGrab.x = sx; this.handGrab.y = sy;
      }
    }
    this.scene.markDirty();
  }

  private drawLandmarks(f: HandFrame) {
    const cv = document.getElementById('handlm') as HTMLCanvasElement | null;
    if (!cv) return;
    if (cv.width !== 288) { cv.width = 288; cv.height = 216; }
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, cv.width, cv.height);
    if (!f.present) return;
    const EDGES = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],
                   [9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
    const X = (p: {x:number}) => (1 - p.x) * cv.width, Y = (p: {y:number}) => p.y * cv.height;
    g.strokeStyle = '#FFB020'; g.lineWidth = 2;
    for (const [a, b] of EDGES) {
      const p = f.landmarks[a], q = f.landmarks[b];
      if (!p || !q) continue;
      g.beginPath(); g.moveTo(X(p), Y(p)); g.lineTo(X(q), Y(q)); g.stroke();
    }
    g.fillStyle = '#EFE6D8';
    for (const p of f.landmarks) { g.beginPath(); g.arc(X(p), Y(p), 2.6, 0, 7); g.fill(); }
  }

  // -- render loop ---------------------------------------------------------

  now(): number { return this.virtualNow ?? performance.now(); }

  /** One frame: timers, fly-to, then draw. Identical for live and stepped runs. */
  renderFrame() {
    const t = this.now();
    this.controls.tickTimers(t);
    this.controls.tickFly(t);
    this.tickUi(t);
    this.scene.clock = this.frozenClock ?? t / 1000;
    this.scene.render();
    // These read the frame that was just drawn — where the device is pointed,
    // and how many names the arbiter could not place — so they belong here
    // rather than on the chrome refresh, which does not run every frame.
    this.renderReticle();
    this.renderHidden();
    this.renderClusterProof();
  }

  /** Render at a given virtual time. The capture harness steps this at 1/30 s. */
  renderAt(ms: number) { this.virtualNow = ms; this.renderFrame(); }

  private tickUi(t: number) {
    if (this.uiUntil.toast && t >= this.uiUntil.toast) { $('#toast').className = ''; this.uiUntil.toast = 0; }
    if (this.uiUntil.gesture && t >= this.uiUntil.gesture) { $('#gesture').classList.remove('show'); this.uiUntil.gesture = 0; }
  }

  private loop = () => {
    this.renderFrame();
    this.raf = requestAnimationFrame(this.loop);
  };
  stop() { cancelAnimationFrame(this.raf); }
  start() { cancelAnimationFrame(this.raf); this.raf = requestAnimationFrame(this.loop); }

  // -- chrome refresh ------------------------------------------------------

  refresh() {
    $('[data-t=map-name]').textContent = this.store.doc.name;
    $('[data-t=holding-count]').textContent = String(this.store.holdingCount());
    const chip = $('[data-t=holding-chip]');
    chip.classList.toggle('on', this.store.holdingCount() > 0);
    this.renderEditor();
    if ($('#finder')) this.renderFinder();
    if ($('#settings')) this.renderSyncStatus();
  }

  /**
   * The first-launch provenance note and the activity chip share the top-left
   * region with the modal panels. A panel drew across them and left a half
   * rendered hash fragment on screen, which reads as a rendering bug in an
   * evidence frame. They are a note about the session, not permanent chrome,
   * so they stand down while a panel is open rather than being bisected by it.
   */
  private panelOpen() {
    return !!document.querySelector('#finder, #states, .overlay');
  }

  private reflowSessionChips() {
    const hide = this.panelOpen();
    for (const id of ['origin', 'activity']) {
      const e = document.getElementById(id);
      if (e) e.style.visibility = hide ? 'hidden' : '';
    }
  }

  /** Says whether this launch rehydrated from the committed seed or live state. */
  private showOrigin(o: { from: string; file?: string; sha256?: string }) {
    let chip = document.getElementById('origin');
    if (!chip) {
      chip = el('div', { id: 'origin', 'data-t': 'map-origin' });
      document.body.appendChild(chip);
    }
    chip.className = o.from === 'seed' ? 'seed' : '';
    chip.innerHTML = o.from === 'seed'
      ? `first launch · restored from the committed seed <b>${esc((o.file ?? '').replace('seeds/', ''))}</b>` +
        (o.sha256 ? ` <span class="mono">${esc(o.sha256.slice(0, 12))}</span>` : '')
      : 'live state';
  }

  /**
   * Who last changed this map, and whether the change was made here or arrived
   * from another surface. On a shared map that is worth knowing on its own; on
   * two surfaces of one map it is also what distinguishes a propagated change
   * from the same edit made twice.
   */
  /**
   * What the overview is not showing. The label arbiter drops a name it cannot
   * place clear of another; saying how many, and that zooming recovers them,
   * turns a silent omission into a stated one.
   */
  private renderHidden() {
    let chip = document.getElementById('hidden');
    if (!chip) {
      chip = el('div', { id: 'hidden', 'data-t': 'labels-hidden' });
      document.body.appendChild(chip);
    }
    const n = this.scene.suppressed;
    chip.className = n > 0 && !this.panelOpen() ? 'show' : '';
    chip.textContent = n > 0 ? `${n} label${n === 1 ? '' : 's'} hidden at this zoom — move closer to read them` : '';
  }

  /**
   * What a cluster move actually did. A district move writes many positions at
   * once — the only act in the build that does — and its guarantee is that the
   * members keep their arrangement exactly. The numbers are shown rather than
   * promised: how far the district travelled, and the largest distance any one
   * member moved relative to the others.
   */
  private renderClusterProof() {
    let chip = document.getElementById('clusterproof');
    const m = this.controls?.lastClusterMove ?? null;
    if (!m) { chip?.remove(); return; }
    if (!chip) {
      chip = el('div', { id: 'clusterproof', 'data-t': 'cluster-proof' });
      document.body.appendChild(chip);
    }
    chip.className = this.panelOpen() ? '' : 'show';
    chip.innerHTML =
      `cluster <b>${esc(m.label)}</b> · ${m.members} nodes moved together<br>` +
      `travelled <b>${m.travelled.toFixed(2)}</b> · internal arrangement drift <b>${m.drift.toFixed(6)}</b>`;
  }

  private renderActivity() {
    let chip = document.getElementById('activity');
    if (!chip) {
      chip = el('div', { id: 'activity', 'data-t': 'last-change' });
      document.body.appendChild(chip);
    }
    const c = this.store.lastChange;
    if (!c) { chip.className = ''; chip.textContent = ''; return; }
    chip.className = 'show' + (c.remote ? ' remote' : '');
    chip.innerHTML = c.remote
      ? `last change arrived from <b>${esc(c.actor)}</b> — ${esc(c.what)}`
      : `last change made here — ${esc(c.what)}`;
  }

  toast(msg: string, bad = false) {
    const t = $('#toast');
    t.textContent = msg;
    t.className = 'show' + (bad ? ' bad' : '');
    this.uiUntil.toast = this.now() + (bad ? 9000 : 4200);
  }

  showGesture(id: string, detail: string) {
    this.lastGesture = { id, detail, at: performance.now() };
    const g = $('#gesture');
    const touch = TOUCH_VOCAB.find(t => t.id === id);
    const hand = HAND_VOCAB.find(h => h.id === id || `mouse:${h.id}` === id);
    const name = touch?.name ?? hand?.name ?? (id === 'gyro' ? 'Gyroscope' : id);
    const label = id.startsWith('mouse') ? `${name} (mouse equivalent)` : name;
    g.innerHTML = `<span class="n">${esc(label)}</span> <span class="o">— ${esc(detail)}</span>`;
    g.classList.add('show');
    this.uiUntil.gesture = this.now() + 2600;
  }
  get lastGestureFired() { return this.lastGesture; }

  // -- node editor ---------------------------------------------------------

  private renderEditor() {
    const existing = document.getElementById('editor');
    const n = this.selected ? this.store.node(this.selected) : undefined;
    if (!n) { existing?.remove(); return; }
    const panel = existing ?? (() => { const p = el('div', { class: 'panel', id: 'editor', 'data-t': 'editor' }); document.body.appendChild(p); return p; })();
    const armed = this.controls.linkArmed === n.id;
    panel.innerHTML = `
      <h3>Node${n.placed ? '' : ' · unplaced, in holding'}</h3>
      <label>Text</label><input data-t="ed-text" value="${esc(n.text)}">
      <label>Label</label><input data-t="ed-label" value="${esc(n.label)}">
      <label>Colour</label><div class="swatches" data-t="ed-colours">
        ${COLOR_KEYS.map(k => `<button class="sw${k === n.color ? ' on' : ''}" data-t="ed-colour-${k}" style="background:${PALETTE[k]}" title="${k}"></button>`).join('')}
      </div>
      <div class="row">
        <button data-t="ed-link" class="${armed ? 'on' : ''}">${armed ? 'Pick a node…' : 'Connect'}</button>
        <button data-t="ed-flyto">Fly to</button>
      </div>
      <div class="row"><button data-t="ed-delete">Delete</button><button data-t="ed-close">Close</button></div>
      <div class="note mono">${n.id} · ${n.pos.map(v => v.toFixed(1)).join(', ')}</div>`;
    const id = n.id;
    $<HTMLInputElement>('[data-t=ed-text]', panel).addEventListener('input', e => this.store.setText(id, (e.target as HTMLInputElement).value));
    $<HTMLInputElement>('[data-t=ed-label]', panel).addEventListener('input', e => this.store.setLabel(id, (e.target as HTMLInputElement).value));
    for (const k of COLOR_KEYS) $(`[data-t=ed-colour-${k}]`, panel).addEventListener('click', () => this.store.setColor(id, k as ColorKey));
    $('[data-t=ed-link]', panel).addEventListener('click', () => { this.controls.armLink(id); this.toast('Now click the node to connect to.'); this.renderEditor(); });
    $('[data-t=ed-flyto]', panel).addEventListener('click', () => this.controls.flyTo(id));
    $('[data-t=ed-delete]', panel).addEventListener('click', () => { this.store.remove(id); this.select(null); });
    $('[data-t=ed-close]', panel).addEventListener('click', () => this.select(null));
  }

  // -- overlays ------------------------------------------------------------

  closeOverlays() { for (const id of ['maps', 'settings']) document.getElementById(id)?.remove(); }

  openMapsHome() {
    this.closeOverlays();
    const o = el('div', { class: 'overlay', id: 'maps', 'data-t': 'maps-home' });
    document.body.appendChild(o);
    this.sync.request({ t: 'maps.list' });
    this.renderMaps();
  }

  private renderMaps() {
    const o = document.getElementById('maps');
    if (!o) return;
    o.innerHTML = `
      <button class="close" data-t="maps-close">Close</button>
      <h1>Maps</h1><p class="sub">Unlimited maps. Open one to reach every lens on this surface.</p>
      <div class="row" style="max-width:520px;margin:0 0 16px">
        <input data-t="maps-new-name" placeholder="name a new map…" style="flex:2">
        <button data-t="maps-create" style="flex:0 0 auto">Create map</button>
      </div>
      <table><thead><tr><th>Map</th><th>Nodes</th><th>Last opened</th><th style="width:210px"></th></tr></thead>
      <tbody>${this.maps.map(m => `
        <tr class="map maprow" data-t="map-row-${m.id}">
          <td>${esc(m.name)}</td>
          <td class="num" data-t="map-nodes-${m.id}">${m.nodes}</td>
          <td class="num">${ago(m.lastOpenedAt)}</td>
          <td><div style="display:flex;gap:5px">
            <button data-t="map-open-${m.id}">Open</button>
            <button data-t="map-rename-${m.id}" class="ghost">Rename</button>
            <button data-t="map-delete-${m.id}" class="ghost">Delete</button>
          </div></td></tr>`).join('')}</tbody></table>`;
    $('[data-t=maps-close]', o).addEventListener('click', () => this.closeOverlays());
    $('[data-t=maps-create]', o).addEventListener('click', () => {
      const name = $<HTMLInputElement>('[data-t=maps-new-name]', o).value.trim() || 'Untitled map';
      this.sync.request({ t: 'maps.create', id: newId('map-'), name });
      this.toast(`Created “${name}”.`);
    });
    for (const m of this.maps) {
      $(`[data-t=map-open-${m.id}]`, o).addEventListener('click', () => this.openMap(m.id));
      $(`[data-t=map-rename-${m.id}]`, o).addEventListener('click', () => {
        const name = window.prompt('Rename map', m.name);
        if (name) this.sync.request({ t: 'maps.rename', id: m.id, name });
      });
      $(`[data-t=map-delete-${m.id}]`, o).addEventListener('click', () => {
        this.sync.request({ t: 'maps.delete', id: m.id });
        this.toast(`Deleted “${m.name}”.`);
      });
    }
  }

  openMap(id: string) {
    this.closeOverlays();
    this.select(null);
    this.sync.close();
    this.sync.connect(id);
    this.store.touchOpened();
  }

  openSettings() {
    this.closeOverlays();
    const o = el('div', { class: 'overlay', id: 'settings', 'data-t': 'settings' });
    o.innerHTML = `
      <button class="close" data-t="settings-close">Close</button>
      <h1>Settings</h1><p class="sub">The controls that keep the tool honest and demoable.</p>
      <h2>Hand tracking</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <button data-t="hand-toggle">Hand tracking: off</button>
        <span class="chip" data-t="hand-status">status: off</span>
        <span class="note">Webcam only — no special hardware. Every hand operation also has a mouse equivalent.</span>
      </div>
      <h2>Account and sync</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <span class="chip">signed in as <b data-t="account">—</b></span>
        <span class="chip" data-t="sync-status">sync: —</span>
        <span class="note">All maps sync: positions, text, colours, labels, connections and holding state.</span>
      </div>
      <h2>Touch gestures — Android</h2>
      <table data-t="touch-reference"><thead><tr><th>Gesture</th><th>How</th><th>Operation</th><th>Spans</th></tr></thead><tbody>
      ${TOUCH_VOCAB.map(g => `<tr><td><b>${esc(g.name)}</b></td><td>${esc(g.how)}</td><td>${esc(g.operation)}</td><td class="num">${g.span}</td></tr>`).join('')}
      </tbody></table>
      <h2>Hand poses — Windows, mind expansion</h2>
      <table data-t="hand-reference"><thead><tr><th>Pose</th><th>How</th><th>Operation</th><th>Mouse equivalent</th></tr></thead><tbody>
      ${HAND_VOCAB.map(g => `<tr><td><b>${esc(g.name)}</b></td><td>${esc(g.how)}</td><td>${esc(g.operation)}</td><td>${esc(g.mouse)}</td></tr>`).join('')}
      </tbody></table>`;
    document.body.appendChild(o);
    $('[data-t=settings-close]', o).addEventListener('click', () => this.closeOverlays());
    $('[data-t=hand-toggle]', o).addEventListener('click', () => this.toggleHands(!this.handsOn));
    this.renderSyncStatus();
    this.renderActivity();
    this.reflowSessionChips();
    this.renderHandPanel();
  }

  private renderSyncStatus() {
    const o = document.getElementById('settings');
    if (!o) return;
    $('[data-t=account]', o).textContent = this.sync.account;
    const s = $('[data-t=sync-status]', o);
    s.innerHTML = `sync: <b>${this.sync.status}</b> — ${esc(this.sync.detail)}`;
  }

  private renderHandPanel() {
    let p = document.getElementById('hands');
    if (!this.handsOn && !this.hands.enabled) { p?.remove(); }
    else {
      if (!p) {
        p = el('div', { id: 'hands', 'data-t': 'hand-panel' });
        p.innerHTML = `<div class="hd"><span class="dot"></span><span data-t="hand-source">capture · hand tracking</span></div>
          <div id="handwrap"><video id="handvid" data-t="hand-video" muted playsinline></video><canvas id="handlm"></canvas></div>
          <div id="handpose"><div class="p" data-t="hand-pose">—</div><div class="o" data-t="hand-op"></div><div class="g" data-t="hand-geom"></div></div>`;
        document.body.appendChild(p);
      }
      const f = this.hands.frame;
      const v = HAND_VOCAB.find(h => h.id === f.pose);
      const src = $('[data-t=hand-source]', p);
      if (src) {
        const base = (this.hands.sourceLabel || '').split('/').pop() || '';
        src.textContent = this.hands.synthetic
          ? `synthesised capture${base ? ` · ${base}` : ''} · real handlandmarker`
          : 'webcam · hand tracking';
        src.setAttribute('title', this.hands.sourceLabel || '');
      }
      $('.dot', p).classList.toggle('live', this.hands.enabled && f.present);
      $('[data-t=hand-pose]', p).textContent = f.present ? (v?.name ?? 'unrecognised') : 'no hand';
      $('[data-t=hand-op]', p).textContent = v ? v.operation.split(' — ')[0] : (f.present ? 'hold a pose' : 'show a hand to the camera');
      // The view distance travels with the pose, so spread, gather and grab are
      // distinguishable as numbers even at a framing where the map is too small
      // to read node names — which is the framing those operations need in
      // order to have room to happen at all.
      $('[data-t=hand-geom]', p).textContent =
        `tips out ${f.reach}  fan ${f.spreadRatio.toFixed(2)}  extended ${f.extended}  ` +
        `conf ${f.confidence.toFixed(2)}  view ${this.scene.pose.dist.toFixed(1)}`;
    }
    // The same toggle and the same live status, surfaced in the top bar so the
    // map and the tracker's state can be read in one glance.
    const chip = document.querySelector('[data-t=hands-chip]');
    if (chip) {
      const f = this.hands.frame;
      const v2 = HAND_VOCAB.find(h => h.id === f.pose);
      chip.textContent = `Hands: ${this.handsOn ? 'on' : 'off'}` +
        (this.handsOn ? ` · ${this.hands.status}${f.present && v2 ? ` · ${v2.name}` : ''}` : '');
      chip.classList.toggle('on', this.handsOn && this.hands.enabled);
    }
    const b = document.querySelector('[data-t=hand-toggle]');
    if (b) { b.textContent = `Hand tracking: ${this.handsOn ? 'on' : 'off'}`; b.classList.toggle('on', this.handsOn); }
    const st = document.querySelector('[data-t=hand-status]');
    if (st) st.textContent = `status: ${this.hands.status}` + (this.hands.frame.present ? ` · ${this.hands.frame.pose}` : '');
  }

  /** The node-state legend. The five signatures, named, so the map's language
   *  is learnable without leaving the canvas. */
  toggleStates() {
    const p = document.getElementById('states');
    if (p) { p.remove(); this.reflowSessionChips(); return; }
    const rows: [string, string, string][] = [
      ['Plain',                  'bare core, quiet',                    'placed, nothing selected near it'],
      ['Connected to selection', 'one thin outer ring',                 'linked to the node you have selected'],
      ['Unplaced, in holding',   'dashed ring, slow pulse of light',    'captured but not yet given a home'],
      ['Search hit',             'four ticks at north, east, south, west', 'matches the current search'],
      ['Selected',               'solid heavy ring',                    'the node you are working on'],
    ];
    const n = el('div', { class: 'panel', id: 'states', 'data-t': 'states-legend',
                          style: 'top:56px;left:12px;width:590px;padding:12px' });
    n.innerHTML = `<h3 style="margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)">Node states</h3>
      <table>${rows.map(([a, b, c]) => `<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td><td class="num">${esc(c)}</td></tr>`).join('')}</table>
      <div class="note">Brightness rises down this list; every state also carries its own ring, so the two read together.</div>
      <div class="note"><b>Colour</b> names the district. <b>Chroma</b> names age: muted = settled, full chroma = recently touched — so the frontier of a map reads as its most saturated region.</div>
      <div class="row"><button data-t="states-close">Close</button></div>`;
    document.body.appendChild(n);
    this.clearOfPanels(this.selected ?? undefined);
    this.reflowSessionChips();
    $('[data-t=states-close]', n).addEventListener('click', () => { n.remove(); this.reflowSessionChips(); });
  }

  // -- finder --------------------------------------------------------------

  toggleFinder() {
    const p = document.getElementById('finder');
    if (p) { p.remove(); this.reflowSessionChips(); return; }
    const n = el('div', { class: 'panel', id: 'finder', 'data-t': 'finder' });
    document.body.appendChild(n);
    this.renderFinder();
    this.reflowSessionChips();
  }

  private renderFinder() {
    const p = document.getElementById('finder');
    if (!p) return;
    const cur = this.suggestions[this.sugIndex];
    const keepPrompt = ($('[data-t=finder-prompt]', p) as HTMLTextAreaElement | null)?.value ?? '';
    const keepReply = ($('[data-t=finder-reply]', p) as HTMLTextAreaElement | null)?.value ?? '';
    p.innerHTML = `
      <h3>Connection finder · JSON prompt harness</h3>
      <div class="row" style="margin-top:0">
        <button data-t="finder-generate">Generate prompt</button>
        <button data-t="finder-copy" class="ghost">Copy</button>
        <button data-t="finder-close" class="ghost" style="flex:0 0 70px">Close</button>
      </div>
      <label class="note">Paste-ready prompt — carries the map JSON including every position</label>
      <textarea data-t="finder-prompt" rows="7" spellcheck="false"></textarea>
      <label class="note">Paste the AI's reply back here</label>
      <textarea data-t="finder-reply" rows="6" spellcheck="false" placeholder="paste the reply…"></textarea>
      <div class="row"><button data-t="finder-parse">Parse reply</button></div>
      <div class="tail">
      ${this.lastParse && !this.lastParse.ok ? `<div class="err" data-t="finder-error">${esc(this.lastParse.error ?? 'parse failed')}</div>` : ''}
      ${this.lastParse?.dropped.length ? `<div class="note" data-t="finder-dropped">${this.lastParse.dropped.length} entr${this.lastParse.dropped.length === 1 ? 'y' : 'ies'} rejected: ${esc(
        // A rejection that PROTECTED A POSITION is the most important one to
        // surface: it is the map's central invariant being enforced, and it was
        // being pushed off the end of a three-item list by ordinary parse
        // rejections.
        [...this.lastParse.dropped]
          .sort((a, b) => (/placed/.test(b.why) ? 1 : 0) - (/placed/.test(a.why) ? 1 : 0))
          .slice(0, 4).map(d => `${d.what} — ${d.why}`).join(' · '))}${this.lastParse.dropped.length > 4 ? ` · +${this.lastParse.dropped.length - 4} more` : ''}</div>` : ''}
      ${this.suggestions.length ? `
        <div class="note" data-t="finder-progress">Suggestion ${this.sugIndex + 1} of ${this.suggestions.length} · nothing is applied until you accept</div>
        ${cur ? `<div class="sug" data-t="finder-current">
          <div class="k" data-t="finder-kind">${cur.kind}</div>
          <div class="d">${esc(describe(cur, this.store.doc))}</div>
          <div class="w">${esc(cur.why || '—')}</div>
          <div class="row"><button data-t="finder-accept">Accept</button><button data-t="finder-reject" class="ghost">Reject</button></div>
        </div>` : ''}
        <div class="note">Staged, one at a time: ${this.suggestions.map(s => s.kind).join(' · ')}</div>
      ` : ''}
      </div>`;
    ($('[data-t=finder-prompt]', p) as HTMLTextAreaElement).value = keepPrompt;
    ($('[data-t=finder-reply]', p) as HTMLTextAreaElement).value = keepReply;
    $('[data-t=finder-close]', p).addEventListener('click', () => p.remove());
    $('[data-t=finder-generate]', p).addEventListener('click', () => {
      ($('[data-t=finder-prompt]', p) as HTMLTextAreaElement).value = buildPrompt(this.store.doc);
      this.toast('Prompt built from the current map — paste it into any AI chat.');
    });
    $('[data-t=finder-copy]', p).addEventListener('click', async () => {
      const t = ($('[data-t=finder-prompt]', p) as HTMLTextAreaElement);
      t.select();
      try { await navigator.clipboard.writeText(t.value); this.toast('Prompt copied.'); }
      catch { document.execCommand('copy'); this.toast('Prompt copied.'); }
    });
    $('[data-t=finder-parse]', p).addEventListener('click', () => {
      const reply = ($('[data-t=finder-reply]', p) as HTMLTextAreaElement).value;
      this.parseFinderReply(reply);
    });
    // A parse result belongs to the text it was produced from. Editing the
    // reply clears the banner and the staged queue, so an error can never be
    // read against a reply it did not come from.
    ($('[data-t=finder-reply]', p) as HTMLTextAreaElement).addEventListener('input', () => {
      if (!this.lastParse && !this.suggestions.length) return;
      const keep = ($('[data-t=finder-reply]', p) as HTMLTextAreaElement).value;
      this.lastParse = null; this.suggestions = []; this.sugIndex = 0;
      this.renderFinder();
      const t = document.querySelector('[data-t=finder-reply]') as HTMLTextAreaElement | null;
      if (t) { t.value = keep; t.focus(); }
    });
    const acc = document.querySelector('[data-t=finder-accept]');
    if (acc) acc.addEventListener('click', () => this.acceptSuggestion());
    const rej = document.querySelector('[data-t=finder-reject]');
    if (rej) rej.addEventListener('click', () => this.rejectSuggestion());
  }

  parseFinderReply(reply: string) {
    const r = parseReply(reply, this.store.doc);
    this.lastParse = r;
    if (!r.ok) {
      // A parse failure shows a visible error and changes nothing.
      this.suggestions = []; this.sugIndex = 0;
      this.toast(r.error ?? 'Could not read that reply. Nothing was changed.', true);
    } else {
      this.suggestions = r.suggestions; this.sugIndex = 0;
      this.toast(`${r.suggestions.length} suggestions staged. Nothing is applied until you accept.`);
    }
    this.renderFinder();
    return r;
  }

  acceptSuggestion() {
    const s = this.suggestions[this.sugIndex];
    if (!s) return;
    applySuggestion(this.store, s);
    this.toast(`Applied: ${describe(s, this.store.doc)}`);
    this.suggestions.splice(this.sugIndex, 1);
    if (this.sugIndex >= this.suggestions.length) this.sugIndex = Math.max(0, this.suggestions.length - 1);
    this.scene.markDirty();
    this.renderFinder();
  }

  rejectSuggestion() {
    const s = this.suggestions[this.sugIndex];
    if (!s) return;
    // Rejection leaves no trace: the suggestion is dropped and nothing is written.
    this.suggestions.splice(this.sugIndex, 1);
    if (this.sugIndex >= this.suggestions.length) this.sugIndex = Math.max(0, this.suggestions.length - 1);
    this.toast('Rejected — no trace left on the map.');
    this.renderFinder();
  }

  // -- introspection for the capture harness -------------------------------

  stats() {
    const doc = this.store.doc;
    return {
      map: doc.id, name: doc.name, lens: this.lens, surface: this.surface,
      nodes: Object.keys(doc.nodes).length, links: Object.keys(doc.links).length,
      holding: holdingNodes(doc).length, selected: this.selected, hits: this.hits.length,
      sync: this.sync.status, hands: this.hands.status, pose: this.hands.frame.pose,
      suggestions: this.suggestions.length,
      positions: Object.fromEntries(nodeList(doc).map(n => [n.id, n.pos])),
    };
  }

  /**
   * Which process is this, and over which connection. Every field is read from
   * the running runtime or handed down by the sync service — nothing here is a
   * constant a capture script could set. A composite of two surfaces can then
   * show that it holds two connected processes rather than one rendered twice.
   */
  provenance() {
    const ua = navigator.userAgent;
    const el = /Electron\/([0-9.]+)/.exec(ua);
    const ch = /Chrome\/([0-9.]+)/.exec(ua);
    return {
      runtime: el ? `electron ${el[1]}` : ch ? `chromium ${ch[1]}` : 'unknown runtime',
      isElectron: !!el,
      platform: (navigator as unknown as { platform?: string }).platform ?? 'unknown',
      surface: this.surface,
      transport: this.sync.url,
      socket: this.sync.connId,
      serverPid: this.sync.serverPid,
      actor: this.sync.actor,
      status: this.sync.status,
    };
  }
}

declare global { interface Window { mm: App; TEXT_COLOR: string } }

const params = new URLSearchParams(location.search);
const surface = (params.get('surface') === 'android' ? 'android' : 'windows') as Surface;
const app = new App(surface);
window.mm = app;
window.TEXT_COLOR = TEXT_COLOR;
app.boot({
  mapId: params.get('map') || 'map-fermentation',
  wsUrl: params.get('ws') || `ws://127.0.0.1:${params.get('port') || 8788}`,
  account: params.get('account') || 'kai@master-mind.local',
  actor: params.get('actor') || `${surface}-${Math.random().toString(36).slice(2, 8)}`,
}).catch(e => {
  document.body.appendChild(el('pre', { style: 'color:#FF6B4A;padding:24px' }, String(e && e.stack || e)));
});
