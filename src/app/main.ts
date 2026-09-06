// Master Mind — application shell.
//
// One live map state; three lenses over it; two surfaces. The surface decides
// which lenses exist: Windows gets canvas + mind expansion, Android gets canvas
// + AR. Both run this same bundle.
import * as THREE from 'three';
import {
  type MapDoc, type MMNode, type NodeId, type ColorKey, COLOR_KEYS, PALETTE,
  holdingNodes, searchHits, nodeList, recencyOf,
} from './core/model.js';
import { Store, newId } from './core/store.js';
import { SyncClient, type MapSummary } from './core/syncClient.js';
import { Scene, type LensKind } from './render/scene.js';
import { TEXT_COLOR } from './render/world.js';
import { Controls } from './lens/controls.js';
import { HandTracker, type HandFrame } from './input/hands.js';
import { TOUCH_VOCAB, HAND_VOCAB, MOUSE_VOCAB, type HandPoseId } from './input/vocab.js';
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
  /** The hand and touch vocabularies, so nothing outside the app rewrites them. */
  handVocab = HAND_VOCAB;
  touchVocab = TOUCH_VOCAB;
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
      const SHORT: Record<string, string> = { fist: 'Grab', spread: 'Closer', gather: 'Back', two: 'Select' };
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
  /**
   * The ring on a pinned thought, so the name and the mark are one thing.
   *
   * Drawn in the DOM at the node's projected position rather than as a sixth
   * node state — the ladder stays at five. It is a small ring plus the name in
   * full, and it survives a turn of the device, which is the whole point of it
   * in the AR lens.
   */
  private renderPin() {
    const id = this.pinned;
    let r = document.getElementById('pinmark');
    if (!id || !this.store.doc.nodes[id]) { r?.remove(); return; }
    if (!r) {
      r = el('div', { id: 'pinmark', 'data-t': 'pin-mark' });
      r.innerHTML = '<div class="ring"></div><div class="tag" data-t="pin-name"></div>';
      document.body.appendChild(r);
    }
    const s = this.scene.screenPositions().find(q => q.id === id);
    if (!s) { r.className = ''; return; }
    const dpr = this.scene.renderer.domElement.width / Math.max(window.innerWidth, 1);
    const rad = Math.max(14, s.r / dpr + 9);
    r.className = 'on';
    r.style.left = `${Math.round(s.x / dpr - rad)}px`;
    r.style.top = `${Math.round(s.y / dpr - rad)}px`;
    r.style.width = r.style.height = `${Math.round(rad * 2)}px`;
    $('[data-t=pin-name]', r).textContent = this.store.doc.nodes[id].text;
  }

  /** Keep a thought identified while the view moves. Toggled from the editor. */
  togglePin(id: NodeId | null) {
    this.pinned = this.pinned === id ? null : id;
    this.scene.setPinned(this.pinned);
    this.refresh();
  }
  pinned: NodeId | null = null;

  private renderReticle() {
    let r = document.getElementById('reticle');
    if (this.lens !== 'ar') {
      r?.remove();
      // Leaving the aimed node in the named-by-chrome set would keep its label
      // suppressed on a lens that has no reticle to name it.
      if (this.aimedAt) { this.aimedAt = null; this.scene.setNamedByChrome([]); }
      return;
    }
    if (!r) {
      r = el('div', { id: 'reticle', 'data-t': 'ar-reticle' });
      r.innerHTML = '<div class="lead" data-t="reticle-lead"></div>' +
                    '<div class="x"></div><div class="n" data-t="reticle-node"></div>';
      document.body.appendChild(r);
    }
    const el0 = this.scene.renderer.domElement;
    const cx = el0.width / 2, cy = el0.height / 2;
    let best: { id: string; d: number; x: number; y: number } | null = null;
    for (const s of this.scene.screenPositions()) {
      const d = Math.hypot(s.x - cx, s.y - cy);
      if (!best || d < best.d) best = { id: s.id, d, x: s.x, y: s.y };
    }
    const reach = el0.width * 0.22;
    const on = !!best && best.d < reach;
    const n = on ? this.store.doc.nodes[best!.id] : null;
    // WHAT YOU ARE AIMED AT IS LIT. An AR frame is a dense field of names at
    // any distance, and without this nothing in it was designed to be looked at
    // first — the reticle named a thought and the thought looked like every
    // other thought. The aimed node takes the top rung of the ladder and brings
    // its filaments live, which is the same treatment a selected node gets,
    // WITHOUT opening the editor: aiming is not selecting, and a panel would
    // cover the thing it is about.
    const aimed = on ? best!.id : null;
    if (aimed !== this.aimedAt) {
      this.aimedAt = aimed;
      this.scene.setSelection(aimed ?? this.selected);
    }
    // The readout NAMES this node, so its canvas label stands down — the same
    // rule the pin tag follows. Drawing both put the reticle's chip straight
    // across the label it duplicates in the cycle-9 hero.
    this.scene.setNamedByChrome(aimed ? [aimed] : []);
    const label = $('[data-t=reticle-node]', r);
    r.classList.toggle('on', on);
    label.textContent = n
      ? `${n.text}${n.placed ? '' : ' · in holding'}`
      : 'pointing at open space';
    // DRAW THE ASSOCIATION. The ring is fixed at the frame's centre — that is
    // what an aiming reticle is — but the readout names the NEAREST thought,
    // which measured as much as 149 px away with nothing joining the two, so
    // the chip appeared to name a node the ring was plainly not on. The leader
    // runs from the ring's edge to the node the chip names.
    const lead = $('[data-t=reticle-lead]', r) as HTMLElement;
    const dpr = el0.width / Math.max(window.innerWidth, 1);
    if (on && best) {
      const dx = (best.x - cx) / dpr, dy = (best.y - cy) / dpr;
      const len = Math.hypot(dx, dy);
      const RING = 13;                       // the ring's own radius, in CSS px
      lead.style.width = `${Math.max(len - RING, 0).toFixed(1)}px`;
      lead.style.transform = `rotate(${(Math.atan2(dy, dx) * 180 / Math.PI).toFixed(2)}deg) ` +
                             `translateX(${RING}px)`;
      lead.style.opacity = len > RING + 4 ? '' : '0';
    } else {
      lead.style.width = '0px';
    }
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
    // Move the LEAST that clears the panel, not enough to re-centre.
    //
    // Centring the whole map in the remaining band shifted a 150-node view by
    // about 120 px for the sake of opening one node's editor. Nothing had
    // moved — the camera panned — but a reader cannot tell those apart by eye,
    // and a map that jumps when you select something in it reads as a map whose
    // positions are not sacred. Labels count in the bounds: they are what ends
    // up under a panel, not the node dots.
    const { lo, hi } = this.scene.contentBoundsX();
    if (!isFinite(lo) || !isFinite(hi)) return;
    const bandLo = left, bandHi = el.width - right;
    let dx = 0;
    if (hi - lo <= bandHi - bandLo) {
      // The content fits beside the panels: nudge it in, no further.
      if (lo < bandLo) dx = bandLo - lo;
      else if (hi > bandHi) dx = bandHi - hi;
    } else {
      // It does not fit. Then the only thing that must be clear is the node the
      // panel is about; the rest of the map stays where the reader left it.
      const s = id ? this.scene.screenPositions().find(p => p.id === id) : undefined;
      const r = id ? this.scene.labelRects.get(id) : undefined;
      const nlo = Math.min(s ? s.x - s.r : Infinity, r ? r.x0 : Infinity);
      const nhi = Math.max(s ? s.x + s.r : -Infinity, r ? r.x1 : -Infinity);
      if (!isFinite(nlo) || !isFinite(nhi)) {
        dx = (bandLo + bandHi) / 2 - (lo + hi) / 2;
      } else if (nlo < bandLo) dx = bandLo - nlo;
      else if (nhi > bandHi) dx = bandHi - nhi;
    }
    if (Math.abs(dx) < 4) return;
    this.controls.panTarget(dx, 0);
  }

  search(q: string) {
    const found = searchHits(this.store.doc, q);
    this.hits = found.map(r => r.n.id);
    // WHICH FIELD each hit matched on, kept so the frame can say it. Search
    // reads a node's district label as well as its text — a reader looking for
    // "koji" wants the Koji district, not only the notes that spell it out —
    // but artifact 10 lit nineteen nodes, several of whose visible words
    // contain no "koji", with nothing on screen explaining the match. The
    // behaviour was right and the frame was silent, which a reader cannot tell
    // apart from the behaviour being wrong.
    this.hitLabelMatches = found.filter(r => r.field === 'label').map(r => r.n.id);
    this.hitQuery = q.trim();
    this.hitIndex = 0;
    this.scene.setHits(this.hits);
    this.refresh();
  }

  /** Hits that matched on the district label rather than on the thought's text. */
  hitLabelMatches: NodeId[] = [];
  private hitQuery = '';

  /**
   * The match, broken down by where it was found.
   *
   * "19 hits · 6 in the text, 13 in the label 'Koji'" — so a reader who cannot
   * see the query in a lit node's words is told why it is lit rather than left
   * to conclude the search is wrong.
   */
  private renderHitBreakdown() {
    let chip = document.getElementById('hitbreak');
    if (!chip) {
      chip = el('div', { id: 'hitbreak', 'data-t': 'search-breakdown' });
      document.body.appendChild(chip);
    }
    const n = this.hits.length;
    if (!n || !this.hitQuery) { chip.className = ''; chip.textContent = ''; return; }
    const lab = this.hitLabelMatches.length, txt = n - lab;
    const labels = [...new Set(this.hitLabelMatches
      .map(id => this.store.doc.nodes[id]?.label).filter(Boolean))];
    const parts = [`${n} hit${n === 1 ? '' : 's'}`];
    if (txt) parts.push(`${txt} in the text`);
    if (lab) parts.push(`${lab} in the label ${labels.map(l => `“${l}”`).join(', ')}`);
    chip.textContent = parts.join(' · ');
    chip.className = 'show';
    // ANCHORED UNDER THE SEARCH BOX, and kept clear of whatever panel is open.
    // Pinned to the top right it was drawn underneath the editor — which the
    // flight opens, every time, because flying to a hit selects it — so the
    // breakdown existed and no reader could see it. It is measured into place
    // instead: under the input it explains, shifted left of any open panel.
    const box = document.getElementById('search')?.getBoundingClientRect();
    if (box) {
      chip.style.top = `${Math.round(box.bottom + 8)}px`;
      const w = chip.getBoundingClientRect().width;
      let right = window.innerWidth - box.right;
      for (const sel of ['#editor', '#finder', '#states']) {
        const e = document.querySelector(sel) as HTMLElement | null;
        if (!e) continue;
        const r = e.getBoundingClientRect();
        if (r.width > 2 && r.height > 2) right = Math.max(right, window.innerWidth - r.left + 10);
      }
      chip.style.right = `${Math.round(Math.min(right, Math.max(8, window.innerWidth - w - 8)))}px`;
    }
  }

  /** Search flies the view to the node in its actual place, in every lens. */
  flyToHit(step = 0) {
    if (!this.hits.length) return;
    if (step) this.hitIndex = (this.hitIndex + step + this.hits.length) % this.hits.length;
    const id = this.hits[this.hitIndex];
    // FLYING TO A HIT SELECTS IT. It used to deliberately not, on the reasoning
    // that the search-hit signature was the state the flight was about — but
    // with a query that matches nineteen thoughts, thirteen of them in frame,
    // every one wore the identical signature and the one the camera had flown
    // to was neither the brightest nor the largest thing on screen. Selecting
    // puts it on the top rung of the ladder, brings its filaments live, and
    // opens it for editing, which is what a person who just found a thought
    // wants next. Selection first, then the flight, so the panel-clearing pan
    // is absorbed by the flight rather than fighting it.
    this.select(id);
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

  /** Anything that would draw over a chip anchored top-right. */
  private rightPanelOpen() {
    return !!document.querySelector('#editor, .overlay');
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
    const cut = this.scene.shortened;
    // The badge exists to declare what the frame is not showing, so it must not
    // itself be the thing that is hidden: it stands down when the editor would
    // draw over it rather than being clipped to "1 label hid".
    chip.className = (n > 0 || cut > 0) ? 'show' : '';
    // Both kinds of omission, named separately. Saying only the first let a
    // frame declare "0 labels hidden" while 42 of its 150 names were shortened
    // to an ellipsis — a true sentence a reader would take for a false one.
    const parts: string[] = [];
    if (n > 0) parts.push(`${n} label${n === 1 ? '' : 's'} hidden`);
    if (cut > 0) parts.push(`${cut} shortened`);
    chip.textContent = parts.length
      ? `${parts.join(' · ')} at this zoom — move closer to read them` : '';
    // KEPT WHOLE AND KEPT VISIBLE. This chip is how the frame stays honest
    // about how much text it is withholding, and in cycle 9 it was the first
    // thing sacrificed twice over: in artifact 05's half-width panels the seed
    // banner overpainted its leading ~100 px so it read "els hidden" with the
    // count destroyed, and in artifact 17 the editor clipped it mid-word at
    // "37 shorte". Standing it down when a panel opens was the old answer and
    // it is the wrong one — the number stops being stated exactly when the
    // frame is busiest. It is placed instead: right-inset past any open side
    // panel, and dropped below the seed banner rather than across it.
    if (chip.className === 'show') {
      chip.style.top = ''; chip.style.right = '';
      const own = chip.getBoundingClientRect();
      let right = 12;
      for (const sel of ['#editor', '#finder', '#states', '#hands']) {
        const e = document.querySelector(sel) as HTMLElement | null;
        if (!e) continue;
        const r = e.getBoundingClientRect();
        if (r.width > 2 && r.height > 2 && r.top < own.bottom && r.bottom > own.top)
          right = Math.max(right, window.innerWidth - r.left + 8);
      }
      chip.style.right = `${Math.round(right)}px`;
      const banner = document.getElementById('origin');
      const b = banner && getComputedStyle(banner).display !== 'none'
        ? banner.getBoundingClientRect() : null;
      const now = chip.getBoundingClientRect();
      chip.style.top = b && b.right + 8 > now.left && b.bottom > now.top && b.top < now.bottom
        ? `${Math.round(b.bottom + 8)}px` : '';
    }
    this.renderUnlabelled();
    this.renderLeaders();
    this.renderHitBreakdown();
    this.renderPin();
  }

  /**
   * A line from each held thought to its own name.
   *
   * The holding ring packs unplaced nodes close together and their labels
   * radiate outward, so a name can finish nearer a neighbour's dot than its
   * own: measured on artifact 06, four of eight held labels had some other
   * dot as their nearest. The count is small — it is one ring — and the line
   * carries attribution rather than decoration, so it is drawn rather than
   * left to the reader to guess. Placed nodes get none: their labels sit
   * against open ground and the pairing is not in doubt.
   */
  private renderLeaders() {
    let svg = document.getElementById('leaders') as unknown as SVGSVGElement | null;
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('id', 'leaders');
      svg.setAttribute('data-t', 'label-leaders');
      document.body.appendChild(svg);
    }
    const el0 = this.scene.renderer.domElement;
    const dpr = el0.width / Math.max(window.innerWidth, 1);
    const scr = this.scene.screenPositions();
    const parts: string[] = [];
    this.leaderFor.clear();
    for (const s of scr) {
      const n = this.store.doc.nodes[s.id];
      if (!n) continue;
      const r = this.scene.labelRects.get(s.id);
      if (!r || r.alpha <= 0.02) continue;
      // A label pushed out to the far ring ALWAYS gets a leader: it is out in
      // open canvas by design, and without the line it names nothing. Held
      // thoughts get one when their name is nearer a neighbour's dot than
      // their own. Every other label sits against its node and needs none.
      const far = this.scene.labelNeedsLeader.has(s.id);
      if (!far && !n.placed) { /* held: fall through to the ambiguity test */ }
      else if (!far) continue;
      // AMBIGUITY IS THE TEST, not distance. A leader is drawn exactly when the
      // node nearest this label's box is NOT the node it names — which is the
      // only case a reader can get wrong. Everywhere else the pairing is plain
      // and a line would be decoration.
      const near = (p: { x: number; y: number }) => {
        const px = Math.min(Math.max(p.x, r.x0), r.x1), py = Math.min(Math.max(p.y, r.y0), r.y1);
        return Math.hypot(p.x - px, p.y - py);
      };
      let closest = s, cd = near(s);
      for (const q of scr) { const d = near(q); if (d < cd) { cd = d; closest = q; } }
      if (!far && closest.id === s.id) continue;
      this.leaderFor.add(s.id);
      const x = s.x / dpr, y = s.y / dpr;
      const tx = Math.min(Math.max(x, r.x0 / dpr), r.x1 / dpr);
      const ty = Math.min(Math.max(y, r.y0 / dpr), r.y1 / dpr);
      const len = Math.hypot(tx - x, ty - y) || 1;
      const rad = Math.max(s.r / dpr, 3) + 2;
      const k = Math.min(rad / len, 0.9);
      parts.push(`<line x1="${(x + (tx - x) * k).toFixed(1)}" y1="${(y + (ty - y) * k).toFixed(1)}" ` +
                 `x2="${tx.toFixed(1)}" y2="${ty.toFixed(1)}"></line>`);
    }
    svg.innerHTML = parts.join('');
  }

  /** Which labels needed a leader this frame, for anything checking the frame. */
  readonly leaderFor = new Set<NodeId>();

  /** The node the AR reticle is currently aimed at, if any. */
  private aimedAt: NodeId | null = null;

  /**
   * The names the frame could not label, listed in the margin it cannot fill.
   *
   * At whole-map framing the node cloud is near-square — 826x829 px measured on
   * the 150-node map — so a 16:9 frame leaves about 470 px of empty margin on
   * each side that no camera angle can fill without cropping the map. The badge
   * above says how many thoughts are unlabelled; this says which, in each
   * thought's own district colour, so "the whole map at once" means every
   * thought is accounted for rather than every thought is drawn.
   *
   * Only in the whole-map lens, only when nothing else is using the margin.
   */
  private renderUnlabelled() {
    let col = document.getElementById('unlabelled');
    if (!col) {
      col = el('div', { id: 'unlabelled', 'data-t': 'unlabelled-list' });
      document.body.appendChild(col);
    }
    const ids = this.scene.suppressedIds;
    // THE CANVAS LENS GETS IT TOO. The recovery column existed on mind
    // expansion only, so the same map at the same loss offered a way back to
    // the hidden names in one lens and nothing at all in the other — and the
    // canvas lens is where the cap-and-drop ruling hides the most. Same loss,
    // same recovery.
    const show = (this.lens === 'expansion' || this.lens === 'canvas') && ids.length > 0 &&
                 !this.panelOpen() && !this.rightPanelOpen();
    col.className = show ? 'show' : '';
    if (!show) { col.innerHTML = ''; return; }
    // As many as the column can hold, longest-settled first so the order is a
    // property of the map rather than of the arbiter's iteration.
    const named = ids.map(i => this.store.doc.nodes[i]).filter(Boolean)
      .sort((a, b) => a.createdAt - b.createdAt);
    const row = (n: MMNode) =>
      `<li><i style="background:${PALETTE[n.color as ColorKey] ?? '#8A7C70'}"></i>${esc(n.text)}</li>`;
    const head = (k: number) =>
      `<h4>${k} thought${k === 1 ? '' : 's'} on screen without room for a label</h4>`;
    // TRIMMED AGAINST WHAT WAS ACTUALLY RENDERED, not against an estimate.
    //
    // The row count was derived from clientHeight divided by an assumed 18 px
    // line, measured BEFORE the content was written — so it over-counted, the
    // "…and N more" branch was never reached because `rest` came out zero, and
    // the surplus was silently clipped by the column's own overflow. The frame
    // announced 87 thoughts and listed about 50 with nothing saying so: an
    // honesty affordance quietly failing to be honest. It is laid out and then
    // measured, and rows come off the end until the last one fits with room for
    // the overflow line.
    col.innerHTML = head(named.length) + named.map(row).join('');
    let shown = named.length;
    const fits = () => {
      const last = col!.lastElementChild as HTMLElement | null;
      return !last || last.getBoundingClientRect().bottom <= col!.getBoundingClientRect().bottom - 2;
    };
    if (!fits()) {
      // One extra off the end so the marker itself has a line to sit on.
      while (shown > 1 && !fits()) {
        shown--;
        col.innerHTML = head(named.length) + named.slice(0, shown).map(row).join('') +
          `<li style="opacity:.6">…and ${named.length - shown} more</li>`;
      }
    }
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
    // Stack under the seed-provenance chip rather than on top of it. Both were
    // pinned to the same corner, so the cluster proof covered the line naming
    // the committed seed the map was restored from — one piece of evidence
    // hiding another.
    // offsetParent is null for a position:fixed element, which is what #origin
    // is — testing it left the chip exactly where it had been.
    const above = document.getElementById('origin');
    const shown = above && getComputedStyle(above).display !== 'none';
    const r = shown ? above!.getBoundingClientRect() : null;
    chip.style.top = r && r.height > 1 ? `${Math.round(r.bottom + 8)}px` : '';
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

  /** Take a toast down now, rather than waiting out its dwell. */
  dismissToast() {
    const t = document.getElementById('toast');
    if (t) { t.className = ''; t.textContent = ''; }
    this.uiUntil.toast = 0;
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
    const mouse = MOUSE_VOCAB[id];
    const name = touch?.name ?? hand?.name ?? mouse?.name ?? (id === 'gyro' ? 'Gyroscope' : id);
    // A mouse-equivalent caption names the INPUT, not the pose it stands in for.
    // Three of the four read "Open palm (mouse equivalent)" and so never said
    // what a mouse user actually does; the vocabulary already knows.
    //
    // Only a pose STOOD IN FOR by the mouse gets the equivalence clause. The
    // desk's own inputs — a drag, a click, a scroll — are not equivalents of
    // anything, and appending the clause to them produced the tautology
    // "mouse-alt-drag — the mouse-alt-drag equivalent" on artifacts 08, 09
    // and 17.
    const standIn = id.startsWith('mouse:')
      ? hand
      : mouse?.standsIn ? HAND_VOCAB.find(h => h.id === mouse.standsIn) : undefined;
    const label = !standIn ? name
      : id.startsWith('mouse:')
        ? `${standIn.mouse.split(', or ')[0]} — the ${standIn.name} equivalent`
        : `${name} — the ${standIn.name} equivalent`;
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
        <button data-t="ed-pin" class="${this.pinned === n.id ? 'on' : ''}">${this.pinned === n.id ? 'Kept in view' : 'Keep in view'}</button>
      </div>
      <div class="row"><button data-t="ed-delete">Delete</button><button data-t="ed-close">Close</button></div>
      <div class="note" data-t="ed-recency">${esc(this.recencyLine(n))}</div>
      <div class="note mono">${n.id} · ${n.pos.map(v => v.toFixed(1)).join(', ')}</div>`;
    const id = n.id;
    $<HTMLInputElement>('[data-t=ed-text]', panel).addEventListener('input', e => this.store.setText(id, (e.target as HTMLInputElement).value));
    $<HTMLInputElement>('[data-t=ed-label]', panel).addEventListener('input', e => this.store.setLabel(id, (e.target as HTMLInputElement).value));
    for (const k of COLOR_KEYS) $(`[data-t=ed-colour-${k}]`, panel).addEventListener('click', () => this.store.setColor(id, k as ColorKey));
    $('[data-t=ed-link]', panel).addEventListener('click', () => { this.controls.armLink(id); this.toast('Now click the node to connect to.'); this.renderEditor(); });
    $('[data-t=ed-flyto]', panel).addEventListener('click', () => this.controls.flyTo(id));
    // Keeping a thought in view survives closing the editor and turning the
    // device — that is what it is for.
    $('[data-t=ed-pin]', panel).addEventListener('click', () => this.togglePin(id));
    $('[data-t=ed-delete]', panel).addEventListener('click', () => { this.store.remove(id); this.select(null); });
    $('[data-t=ed-close]', panel).addEventListener('click', () => this.select(null));
  }

  /**
   * A node's age, in the terms the chroma channel uses.
   *
   * The legend states that chroma names age; until now nothing in the app let a
   * reader check that against any particular node, so the one modelled property
   * with a declared visual channel (§06) could only be taken on trust. The rank
   * is what the channel actually encodes — recency is normalised across the map,
   * so 'newer than 84 % of this map' is the number the colour is drawn from,
   * and the date is what makes it legible.
   */
  private recencyLine(n: MMNode): string {
    const all = nodeList(this.store.doc);
    const rec = recencyOf(this.store.doc, n);
    const older = all.filter(m => m.createdAt < n.createdAt).length;
    const pct = all.length > 1 ? Math.round(100 * older / (all.length - 1)) : 100;
    const when = new Date(n.createdAt).toISOString().slice(0, 10);
    const band = rec >= 0.8 ? 'full chroma — recently touched'
      : rec >= 0.45 ? 'mid chroma'
      : 'muted — settled';
    return `Captured ${when} · newer than ${pct}% of this map · ${band}`;
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
    // WHAT YOU HAVE TYPED SURVIVES A REDRAW. The whole overlay is rebuilt
    // whenever the map list arrives from the service, which can happen between
    // a person typing a name and pressing Create — and the new input started
    // empty, so the map was created as 'Untitled map' and the name was gone.
    // Artifact 01's capture failed on exactly that.
    const typed = (o.querySelector('[data-t=maps-new-name]') as HTMLInputElement | null)?.value ?? '';
    o.innerHTML = `
      <button class="close" data-t="maps-close">Close</button>
      <h1>Maps</h1><p class="sub">Unlimited maps. Open one to reach every lens on this surface.</p>
      <div class="row" style="max-width:520px;margin:0 0 16px">
        <input data-t="maps-new-name" placeholder="name a new map…" style="flex:2" value="${esc(typed)}">
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
      <div class="note"><b>Colour</b> names the district. <b>Chroma</b> names age: muted = settled, full chroma = recently touched — so <b>within a district</b>, its frontier reads as its most saturated region. Saturation is not comparable between districts: a hue's own gamut sets its ceiling.</div>
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
      ${this.lastParse?.dropped.length ? (() => {
        // A rejection that PROTECTED A POSITION is the most important one to
        // surface: it is the map's central invariant being enforced, and it was
        // being pushed off the end of a three-item list by ordinary parse
        // rejections.
        //
        // Set as a LIST, not a run-on. This is the strongest safety evidence in
        // the build and it was the least legible block on the panel — five
        // lines of middot-separated prose at 3.53:1, under a headline at
        // 14.93:1. One rejection per line, the subject at reading contrast and
        // the reason a step below it, and the overflow as a count rather than
        // trailing text.
        const d = [...this.lastParse.dropped]
          .sort((a, b) => (/placed/.test(b.why) ? 1 : 0) - (/placed/.test(a.why) ? 1 : 0));
        const shown = d.slice(0, 4);
        return `<div class="rejected" data-t="finder-dropped">` +
          `<h5>${d.length} entr${d.length === 1 ? 'y' : 'ies'} rejected</h5>` +
          shown.map(x => `<div class="r"><b>${esc(x.what)}</b> <span>${esc(x.why)}</span></div>`).join('') +
          (d.length > 4 ? `<div class="r more">+${d.length - 4} more</div>` : '') +
          `</div>`;
      })() : ''}
      ${this.suggestions.length ? `
        <div class="note" data-t="finder-progress">Suggestion ${this.sugIndex + 1} of ${this.suggestions.length} · nothing is applied until you accept</div>
        ${cur ? `<div class="sug" data-t="finder-current">
          <div class="k" data-t="finder-kind">${cur.kind}</div>
          <div class="d">${esc(describe(cur, this.store.doc))}</div>
          <div class="w">${esc(cur.why || '—')}</div>
          <div class="row"><button data-t="finder-accept" class="affirm">Accept</button><button data-t="finder-reject" class="ghost">Reject</button></div>
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
      // AND THE TOAST, which outlives its own banner. The inline result was
      // being cleared here and the red toast over the map was not, so the
      // cycle-8 Art Director found "No JSON found in that reply. Nothing was
      // changed." still on screen while the next, well-formed reply was being
      // typed underneath it — an error still shouting about a reply that no
      // longer existed.
      this.dismissToast();
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
    // WHAT IT WAS BEFORE, so accepting a grouping shows its effect.
    //
    // A grouping rewrites node.label, which the canvas does not draw — only the
    // editor's Label field shows it — so the one suggestion kind whose result
    // appeared on no frame was this one: the cycle-8 Art Director could prove
    // the connection pixel-for-pixel and the placement three ways, and had to
    // take the grouping on the manifest's word. The toast names both states now,
    // which is where a person looks for what just happened anyway.
    const was = s.kind === 'grouping'
      ? s.nodes.map(i => this.store.doc.nodes[i]?.label).filter(Boolean)
      : null;
    applySuggestion(this.store, s);
    this.toast(was && was.length
      ? `Applied: ${describe(s, this.store.doc)} — labels were ${was.map(l => `“${l}”`).join(', ')}`
      : `Applied: ${describe(s, this.store.doc)}`);
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
  /** The renderer string this process's own WebGL context reports. */
  private glRenderer(): string {
    try {
      const gl = this.scene.renderer.getContext() as WebGL2RenderingContext;
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      const r = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
      return String(r ?? 'unknown');
    } catch { return 'unavailable'; }
  }

  provenance() {
    const ua = navigator.userAgent;
    const el = /Electron\/([0-9.]+)/.exec(ua);
    const ch = /Chrome\/([0-9.]+)/.exec(ua);
    return {
      runtime: el ? `electron ${el[1]}` : ch ? `chromium ${ch[1]}` : 'unknown runtime',
      // WHICH RASTERISER DREW THIS. The cycle-8 Auditor split the twin
      // composite at x=960 and found the two panels' map regions identical to
      // the byte, and concluded — reasonably — that two Chromium majors on two
      // platforms could not rasterise 768,000 pixels of antialiased geometry
      // identically, so the pixels could not corroborate two renders. The
      // premise is what is wrong: both processes drive the SAME software
      // rasteriser, and for the same GL commands it is deterministic. That is a
      // fact about the frame a reader should not have to take on trust, so each
      // process now reports the renderer string its own context returns.
      gl: this.glRenderer(),
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
// The vocabularies, reachable from outside the app.
//
// Captions in the evidence set were writing the operation names beside the app
// rather than reading them from it, and when the vocabulary was renamed one
// caption kept the old words — asserting an operation the build no longer had.
// There is one copy of these strings and anything that names an operation takes
// them from here.
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
