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
    // THE WAY BACK FROM A MOVE, and the only undo this build has. It sits with
    // the map-scale operations because that is what it undoes: the grab that
    // took the wrong district, the drag that overshot. Disabled, with its own
    // label, when there is nothing to put back — so it says what it can do
    // rather than looking available and doing nothing.
    const u = el('button', { 'data-t': 'tool-undo', class: 'ghost',
                             title: 'Put the last move back — Ctrl+Z' }, 'Undo move');
    u.addEventListener('click', () => this.undoMove());
    tools.appendChild(u);
  }

  /**
   * Put the last move back and say what went back.
   *
   * Not silent: a position changing without a visible cause is the one thing
   * the avoid-list names first, and an undo is a position changing. The toast
   * names the act and how many thoughts it covered.
   */
  undoMove() {
    const r = this.store.undoMove();
    if (!r) { this.toast('Nothing to put back — no move has been made on this map'); return; }
    this.toast(`Put back: ${r.what} — ${r.nodes} thought${r.nodes === 1 ? '' : 's'} returned to where they were`);
    this.scene.markDirty();
    this.refresh();
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
      if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); this.undoMove(); }
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
  /**
   * Which thought the pin/selection tag is naming this frame, if any.
   *
   * One source of truth, because two things need the answer: the tag that draws
   * it, and the count of thoughts the frame is NOT naming. The cycle-11 Auditor
   * found those two disagreeing — artifact 08's panel said "4 thoughts on
   * screen without room for a label" and listed one whose text was displayed
   * 30 px away in this very tag; artifact 12 said 2 and listed one for the same
   * reason. A frame that miscounts what it is withholding is worse than one
   * that withholds more.
   */
  private tagNames(): NodeId | null {
    const suppressed = this.selected !== null &&
      (this.scene.labelRects.get(this.selected)?.alpha ?? 0) <= 0.02;
    return this.pinned ?? (suppressed ? this.selected : null);
  }

  /**
   * Thoughts whose text this frame is showing somewhere OTHER than the label
   * layer: the pin or selection tag, the AR reticle's readout, the editor's own
   * Text field. Their names are on the frame, so they are not names the frame
   * is failing to give.
   */
  namedElsewhere(): Set<NodeId> {
    const out = new Set<NodeId>();
    if (this.pinned) out.add(this.pinned);
    if (this.aimedAt) out.add(this.aimedAt);
    const tag = this.tagNames();
    if (tag) out.add(tag);
    if (this.selected && document.getElementById('editor')) out.add(this.selected);
    return out;
  }

  /**
   * The thoughts on screen this frame genuinely leaves unnamed — the arbiter's
   * suppressed set less anything the chrome names. This is what the badge
   * counts and what the recovery column lists; nothing else may count them.
   */
  unnamedOnScreen(): NodeId[] {
    const other = this.namedElsewhere();
    return this.scene.suppressedIds.filter(i => !other.has(i));
  }

  private renderPin() {
    // THE THOUGHT UNDER EDIT IS NAMED ON THE MAP, not only in a form field.
    //
    // Artifact 08's headline is "the same node at its permanent dropped spot"
    // and cycle 10 drew that node as a bare ringed dot with its name in the
    // hidden count — identity recoverable only from the editor's Text input.
    // A before/after composite about one node has to name that node. If the
    // arbiter could not place its label clear, the tag draws instead: same
    // mechanism as the pin, for the same reason, and it costs no other label
    // its ground because the tag is a reserved rectangle like any panel.
    const id = this.tagNames();
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
    const tag = $('[data-t=pin-name]', r) as HTMLElement;
    tag.textContent = this.store.doc.nodes[id].text;
    this.placeTag(tag, s, rad, dpr, id);
  }

  /**
   * THE TAG GOES WHERE IT BURIES THE LEAST.
   *
   * It was pinned below the ring unconditionally, and on artifact 04 that put
   * it straight over the densest part of a search-hit cluster: the cycle-11
   * Auditor measured three of the nineteen hits falling from 0.62 relative
   * luminance to 0.19, 0.23 and 0.27 — from lit hit to near-background, on the
   * one frame whose subject is that the hits read at a glance. The label
   * arbiter has solved this problem for every automatic label since cycle 5;
   * the tag was simply not going through it.
   *
   * Eight placements around the ring, scored by how many node markers the tag's
   * own rectangle would cover, with the default below-centre winning ties so a
   * frame with room everywhere looks exactly as it did. Markers, not labels:
   * the tag is drawn above the label layer and a name it covers is recoverable
   * from the recovery column, while a buried marker is a state the reader
   * cannot see at all.
   */
  private placeTag(tag: HTMLElement, s: { x: number; y: number }, rad: number,
                   dpr: number, own: NodeId) {
    tag.style.left = ''; tag.style.top = ''; tag.style.transform = '';
    const w = tag.offsetWidth, h = tag.offsetHeight;
    if (!w || !h) return;
    const cx = s.x / dpr, cy = s.y / dpr;
    const G = 6;
    // left/top of the tag's box, in page pixels, for each candidate.
    const cands: [number, number][] = [
      [cx - w / 2, cy + rad + G],           // below   — the default
      [cx - w / 2, cy - rad - G - h],       // above
      [cx + rad + G, cy - h / 2],           // right
      [cx - rad - G - w, cy - h / 2],       // left
      [cx + rad * 0.7, cy + rad * 0.7],     // below-right
      [cx - rad * 0.7 - w, cy + rad * 0.7], // below-left
      [cx + rad * 0.7, cy - rad * 0.7 - h], // above-right
      [cx - rad * 0.7 - w, cy - rad * 0.7 - h],
    ];
    const marks = this.scene.screenPositions()
      .filter(q => q.id !== own)
      .map(q => ({ x: q.x / dpr, y: q.y / dpr, r: Math.max(q.r / dpr, 2) }));
    const W = window.innerWidth, H = window.innerHeight;
    let best = 0, bestScore = Infinity;
    for (let i = 0; i < cands.length; i++) {
      const [x0, y0] = cands[i];
      const x1 = x0 + w, y1 = y0 + h;
      // Off-frame is worse than crowded: a tag half outside the picture names
      // nothing. Counted as heavily as a dozen buried markers.
      let score = (x0 < 4 || y0 < 4 || x1 > W - 4 || y1 > H - 4) ? 12 : 0;
      for (const m of marks)
        if (m.x + m.r > x0 && m.x - m.r < x1 && m.y + m.r > y0 && m.y - m.r < y1) score++;
      if (score < bestScore) { bestScore = score; best = i; if (!score) break; }
    }
    if (best === 0) return;                 // the stylesheet already does this
    const [x0, y0] = cands[best];
    tag.style.left = `${Math.round(x0 - (cx - rad))}px`;
    tag.style.top = `${Math.round(y0 - (cy - rad))}px`;
    tag.style.transform = 'none';
  }

  /** Keep a thought identified while the view moves. Toggled from the editor. */
  togglePin(id: NodeId | null) {
    this.pinned = this.pinned === id ? null : id;
    this.scene.setPinned(this.pinned);
    this.refresh();
  }
  pinned: NodeId | null = null;

  /**
   * THE LABEL LAYER DOES NOT RE-FLOW WHILE YOU EDIT.
   *
   * One owner for the set of thoughts the chrome is naming, because it had two
   * callers replacing each other's answer. It also now includes the thought
   * that is OPEN IN THE EDITOR — the cycle-11 Audience found artifact 09's
   * label layer re-flowing between its panels, `Sweet vs savoury paths` hidden
   * in Before and drawn in After, purely because the edited node's own label
   * grew to two lines and took different ground. Positions are sacred and held;
   * labels are what a reader navigates by, and they were not.
   *
   * A thought open in the editor has its name in the Text field and on the tag,
   * so its canvas run stands down — and a name that is not in the layer cannot
   * push anything else out of it. Editing a thought's words can no longer move
   * another thought's name.
   */
  private updateNamedByChrome() {
    const ids: NodeId[] = [];
    if (this.aimedAt) ids.push(this.aimedAt);
    if (this.selected && document.getElementById('editor')) ids.push(this.selected);
    this.scene.setNamedByChrome(ids);
  }

  private renderReticle() {
    let r = document.getElementById('reticle');
    if (this.lens !== 'ar') {
      r?.remove();
      // Leaving the aimed node in the named-by-chrome set would keep its label
      // suppressed on a lens that has no reticle to name it.
      if (this.aimedAt) { this.aimedAt = null; }
      this.updateNamedByChrome();
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
    this.updateNamedByChrome();
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
    // breakdown existed and no reader could see it. It is measured into place:
    // under the input it explains, then through the one placement rule, which
    // knows a panel can open on either side. Its own copy of that rule assumed
    // the right and left this chip ten pixels above the node-states legend on
    // artifact 07, reading as a clipped fragment.
    const box = document.getElementById('search')?.getBoundingClientRect();
    if (box) {
      chip.style.right = ''; chip.style.left = '';
      chip.style.top = `${Math.round(box.bottom + 8)}px`;
      const blockers = this.badgeBlockers();
      const o = document.getElementById('origin');
      if (o && getComputedStyle(o).display !== 'none' && o.textContent) {
        const r = o.getBoundingClientRect();
        if (r.width > 2 && r.height > 2) blockers.push(r);
      }
      this.placeBadge(chip, blockers);
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
    } else {
      // A grab is released by the hand leaving. Switching tracking off is the
      // hand leaving for good, and it must close the act rather than leaving it
      // open for the next one to inherit.
      this.releaseHandGrab();
      this.hands.stop();
    }
    this.renderHandPanel();
  }

  /**
   * The fist opens. Whatever the hold moved becomes ONE undoable act — the
   * district went as one, so it comes back as one.
   */
  private releaseHandGrab() {
    if (!this.handGrab) return;
    const n = this.handGrab.ids.length;
    this.handGrab = null;
    this.store.endMove(`grabbed ${n} thought${n === 1 ? '' : 's'}`);
    this.refresh();
  }

  private onHand(f: HandFrame) {
    this.drawLandmarks(f);
    this.renderHandPanel();
    if (!f.present || f.pose === 'none') { this.releaseHandGrab(); return; }
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
        // The whole hold is one act, however many frames it lasts.
        this.store.beginMove();
        return;
      }
      // Rigid translation: every member moves by the same delta, so the
      // cluster's internal arrangement is preserved exactly.
      const anchor = this.store.node(this.handGrab.ids[0]);
      if (!anchor) { this.releaseHandGrab(); return; }
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
    this.renderGestureLiveness();
  }

  /**
   * A CAPTION MUST NOT OUTLIVE ITS EVIDENCE. The operation caption holds for
   * 2.6 s so it can be read, and the cycle-11 Audience found three frames of
   * artifact 17 — 7 % of the take — where it asserted `Closed fist — Grab the
   * nearest cluster` while the hand panel in the SAME FRAME read `no hand ·
   * show a hand to the camera · conf 0.00`. The caption was then the only
   * thing on screen making the claim, which is exactly the shape of a staged
   * demo whether or not it was one.
   *
   * So while a hand-pose caption is up and the detector is not, at that
   * moment, reading that same pose, the caption says what it actually is: the
   * last pose, held. Runs every frame, because the detector's state changes
   * between chrome refreshes.
   */
  /**
   * What the operation caption asserted on the frame just drawn, and what the
   * detector was reading when it asserted it. Read by the capture harness.
   */
  captionState: { id: string | null; fromHand: boolean; held: boolean;
                  present: boolean; pose: string; conf: number } | null = null;

  private renderGestureLiveness() {
    const g = document.getElementById('gesture');
    if (!g || !g.classList.contains('show')) { this.captionState = null; return; }
    const lg = this.lastGesture;
    const fromHand = !!lg && !lg.id.startsWith('mouse:') && HAND_VOCAB.some(h => h.id === lg.id);
    const live = fromHand && this.hands.enabled && this.hands.frame.present
                 && this.hands.frame.pose === lg!.id;
    const held = fromHand && !live;
    // RECORDED BY THE FRAME THAT DREW IT. The audit used to read the caption's
    // class from the DOM and the detector's pose from `hands.frame` — but the
    // detector runs between renders, so it was comparing a decision made at
    // render time against a state read later, and reported 35 disagreements
    // that were its own. What the frame decided, and what it decided it
    // against, are written down together here.
    this.captionState = { id: lg ? lg.id : null, fromHand, held,
                          present: this.hands.frame.present, pose: this.hands.frame.pose,
                          conf: +this.hands.frame.confidence.toFixed(2) };
    g.classList.toggle('held', held);
    let tag = g.querySelector('.h') as HTMLElement | null;
    if (!held) { tag?.remove(); return; }
    if (!tag) { tag = el('span', { class: 'h', 'data-t': 'gesture-held' }) as HTMLElement; g.appendChild(tag); }
    tag.textContent = ' · last pose, held';
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
    {
      // The control states what it would put back, or that there is nothing.
      const u = document.querySelector('[data-t=tool-undo]') as HTMLButtonElement | null;
      const m = this.store.undoableMove;
      this.renderUndoRow();
      if (u) {
        u.disabled = !m;
        u.textContent = m ? `Undo: ${m.what}` : 'Nothing to undo';
        u.title = m ? `Put back: ${m.what} — Ctrl+Z` : 'No move has been made on this map';
      }
    }
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

  /**
   * WHERE A SMALL CHROME BADGE GOES WHEN SOMETHING IS ALREADY THERE.
   *
   * Two badges — the labels-hidden count and the search breakdown — each carried
   * their own copy of the rule "shift left of any open panel", and the rule was
   * wrong in the same way in both: it assumed panels open on the RIGHT. On
   * artifact 07 the node-states legend opens on the LEFT at x = 12, so the shift
   * computed an inset of 1916 px and put the labels-hidden badge at
   * **x = -76** — the statement of what the frame is withholding, itself almost
   * entirely outside the frame. In the same frame the search breakdown sat ten
   * pixels above the legend's top edge and was read by the cycle-11 Art
   * Director as a clipped, unreadable fragment.
   *
   * One rule, in one place, tried in order and always clamped into the picture:
   * the natural place; else shifted clear horizontally, but only if that lands
   * it inside the frame; else dropped below whatever it hit. A badge that
   * cannot be read is worth less than a badge in an unexpected corner.
   */
  private placeBadge(e: HTMLElement, blockers: DOMRect[]) {
    const W = window.innerWidth, H = window.innerHeight, M = 8;
    const r = e.getBoundingClientRect();
    const w = r.width, h = r.height;
    const hits = (x: number, y: number) => blockers.filter(b =>
      x < b.right + M && x + w > b.left - M && y < b.bottom + M && y + h > b.top - M);
    let x = r.left, y = r.top;
    let clash = hits(x, y);
    if (clash.length) {
      // Clear it horizontally, to whichever side has room.
      const leftOf = Math.min(...clash.map(b => b.left)) - M - w;
      const rightOf = Math.max(...clash.map(b => b.right)) + M;
      const tryX = leftOf >= M ? leftOf : rightOf + w <= W - M ? rightOf : null;
      if (tryX !== null && !hits(tryX, y).length) x = tryX;
      else y = Math.max(...clash.map(b => b.bottom)) + M;
    }
    x = Math.min(Math.max(x, M), Math.max(M, W - w - M));
    y = Math.min(Math.max(y, M), Math.max(M, H - h - M));
    e.style.left = `${Math.round(x)}px`;
    e.style.right = 'auto';
    e.style.top = `${Math.round(y)}px`;
    blockers.push(new DOMRect(x, y, w, h));
  }

  /**
   * EVERY OPAQUE OVERLAY, MEASURED AGAINST EVERY OTHER ONE.
   *
   * Three cycles running, a critic found one piece of chrome sitting on
   * another: the search readout under the labels-hidden badge in cycle 10, the
   * recovery column's count line under the same badge in cycle 11, and the
   * search breakdown protruding above the node-states legend as an unreadable
   * fragment. Each was fixed where it was found, and the next one appeared
   * somewhere else, because the rule lived in the element rather than in a
   * check. This asks the shipped DOM the general question, so an artifact can
   * declare it and a capture can fail on it.
   *
   * Reports overlapping pairs with the area, and anything with text that is not
   * wholly inside the frame — the labels-hidden badge was at x = -76.
   */
  chromeAudit() {
    const SEL = ['#top', '#states', '#editor', '#finder', '#hands', '#tools', '#unlabelled',
                 '#hidden', '#hitbreak', '#origin', '#lenstag', '#toast', '#gesture',
                 '#argyro', '#reticle', '#pinmark', '#grabmark', '#grabcand'];
    const boxes: { id: string; x0: number; y0: number; x1: number; y1: number }[] = [];
    for (const sel of SEL) {
      const e = document.querySelector(sel) as HTMLElement | null;
      if (!e) continue;
      const st = getComputedStyle(e);
      if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) < 0.05) continue;
      if (!(e.textContent || '').trim()) continue;
      const r = e.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      boxes.push({ id: sel, x0: r.left, y0: r.top, x1: r.right, y1: r.bottom });
    }
    const W = window.innerWidth, H = window.innerHeight;
    const offFrame = boxes.filter(b => b.x0 < -0.5 || b.y0 < -0.5 || b.x1 > W + 0.5 || b.y1 > H + 0.5)
      .map(b => ({ id: b.id, x: Math.round(b.x0), y: Math.round(b.y0),
                   past: Math.round(Math.max(-b.x0, -b.y0, b.x1 - W, b.y1 - H)) }));
    const pairs: { a: string; b: string; areaPx: number }[] = [];
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i], b = boxes[j];
      // The pin and grab marks are drawn ON the map, at their node, and the
      // reticle sits at the frame's centre by definition. They are excluded
      // from each other and from nothing else.
      const w = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0);
      const h = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
      if (w > 0.5 && h > 0.5) pairs.push({ a: a.id, b: b.id, areaPx: Math.round(w * h) });
    }
    pairs.sort((x, y) => y.areaPx - x.areaPx);
    return { checked: boxes.length, overlapping: pairs.length, worstOverlapPx: pairs[0]?.areaPx ?? 0,
             pairs: pairs.slice(0, 8), offFrame,
             noTwoChromePanelsOverlap: pairs.length === 0,
             everyChromeBadgeInsideTheFrame: offFrame.length === 0 };
  }

  /** The panels a badge must not sit on: they are the frame's subject. */
  private badgeBlockers(): DOMRect[] {
    const out: DOMRect[] = [];
    for (const sel of ['#top', '#states', '#editor', '#finder', '#hands', '#tools', '#unlabelled']) {
      const e = document.querySelector(sel) as HTMLElement | null;
      if (!e || getComputedStyle(e).display === 'none') continue;
      const r = e.getBoundingClientRect();
      if (r.width > 2 && r.height > 2) out.push(r);
    }
    return out;
  }

  private renderHidden() {
    let chip = document.getElementById('hidden');
    if (!chip) {
      chip = el('div', { id: 'hidden', 'data-t': 'labels-hidden' });
      document.body.appendChild(chip);
    }
    const n = this.unnamedOnScreen().length;
    const cut = this.scene.shortened;
    // The badge exists to declare what the frame is not showing, so it must not
    // itself be the thing that is hidden: it stands down when the editor would
    // draw over it rather than being clipped to "1 label hid".
    chip.className = (n > 0 || cut > 0 || this.scene.compressed > 0) ? 'show' : '';
    // Both kinds of omission, named separately. Saying only the first let a
    // frame declare "0 labels hidden" while 42 of its 150 names were shortened
    // to an ellipsis — a true sentence a reader would take for a false one.
    const parts: string[] = [];
    if (n > 0) parts.push(`${n} label${n === 1 ? '' : 's'} hidden`);
    if (cut > 0) parts.push(`${cut} shortened`);
    // Named apart from "shortened", because they are different omissions: a
    // shortened name has lost its tail, a compressed one was never said — it
    // identifies the thought and leaves the words to the list.
    const abbr = this.scene.compressed;
    if (abbr > 0) parts.push(`${abbr} named by their first letters`);
    // "MOVE CLOSER TO READ THEM" WAS A PROMISE THE FRAME COULD BREAK. The
    // cycle-11 Audience put artifact 05's two panels side by side: after the
    // open-palm move-closer the chip read `118 labels hidden` where before it
    // read 113 — a frame instructing the reader to do the thing that had just
    // made it worse. Swept across view distance on the 150-node map the drawn
    // count does climb with proximity (28 names at 193 units, 39 at 116) but it
    // is not monotone step to step: the greedy arbiter's output jitters by
    // about three names, and a 1.15x dolly is inside that jitter.
    //
    // So the chip states what it can see and stops instructing. Where the names
    // it is holding back are actually recoverable — the list of unnamed
    // thoughts, which is on screen in both the canvas and expansion lenses — it
    // says so, because that is a route to the name that always works.
    const listed = !!document.getElementById('unlabelled');
    chip.textContent = parts.length
      ? `${parts.join(' · ')} at this framing${listed ? ' · listed at right' : ''}` : '';
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
      // ONE RULE, IN ONE PLACE. This badge and the search breakdown each used to
      // carry their own "shift left of any open panel", which put this one at
      // x = -76 the moment a panel opened on the left. See placeBadge().
      chip.style.top = ''; chip.style.right = ''; chip.style.left = '';
      const blockers = this.badgeBlockers();
      for (const sel of ['#origin', '#hitbreak']) {
        const e = document.getElementById(sel.slice(1));
        if (!e || getComputedStyle(e).display === 'none' || !e.textContent) continue;
        const r = e.getBoundingClientRect();
        if (r.width > 2 && r.height > 2) blockers.push(r);
      }
      this.placeBadge(chip, blockers);
    }
    this.renderUnlabelled();
    this.renderLeaders();
    this.renderHitBreakdown();
    this.renderPin();
    this.renderGrab();
  }

  /**
   * WHAT THE FIST HAS HOLD OF.
   *
   * The closed fist grabs a whole district and moves it rigidly, and nothing on
   * the frame said which district — so even when the operation worked, a viewer
   * could not see it working, and the cycle-10 Audience could not tell the pose
   * apart from the mouse equivalent that followed it. A ring around the grabbed
   * members, sized to contain them, drawn only while the grab is held.
   */
  private renderGrab() {
    let el0 = document.getElementById('grabmark');
    const g = this.handGrab;
    if (!g || !g.ids.length) { el0?.remove(); this.renderGrabCandidate(); return; }
    this.renderGrabCandidate();
    if (!el0) {
      el0 = el('div', { id: 'grabmark', 'data-t': 'grab-mark' });
      el0.innerHTML = '<div class="ring"></div><div class="tag" data-t="grab-name"></div>';
      document.body.appendChild(el0);
    }
    const dpr = this.scene.renderer.domElement.width / Math.max(window.innerWidth, 1);
    const held = new Set(g.ids);
    const pts = this.scene.screenPositions().filter(q => held.has(q.id));
    if (!pts.length) { el0.className = ''; return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const q of pts) {
      x0 = Math.min(x0, q.x - q.r); x1 = Math.max(x1, q.x + q.r);
      y0 = Math.min(y0, q.y - q.r); y1 = Math.max(y1, q.y + q.r);
    }
    const pad = 16;
    el0.className = 'on';
    el0.style.left = `${Math.round(x0 / dpr - pad)}px`;
    el0.style.top = `${Math.round(y0 / dpr - pad)}px`;
    el0.style.width = `${Math.round((x1 - x0) / dpr + pad * 2)}px`;
    el0.style.height = `${Math.round((y1 - y0) / dpr + pad * 2)}px`;
    const label = this.store.doc.nodes[g.ids[0]]?.label ?? '';
    $('[data-t=grab-name]', el0).textContent =
      `holding ${g.ids.length} thought${g.ids.length === 1 ? '' : 's'}${label ? ` · ${label}` : ''}`;
  }

  /**
   * WHAT A FIST WOULD TAKE, BEFORE IT TAKES IT.
   *
   * The vocabulary says the closed fist grabs the NEAREST cluster, and until
   * cycle 12 the frame gave a viewer no way to know which one that was: the
   * target was revealed only once the amber box had landed on it, so every
   * grab in artifact 17 read as arbitrary. The cycle-11 Audience asked for a
   * candidate outline while the hand is tracked, and they are right that it is
   * the difference between an operation you aim and an operation that happens
   * to you.
   *
   * It is the SAME pick the fist itself runs — same screen point, same radius,
   * same clusterOf — so the cue cannot promise a district the pose would not
   * take. Faint, dashed and unlabelled: it is a candidate, not a state, and it
   * disappears the instant a grab is live and the real mark takes over.
   */
  private renderGrabCandidate() {
    let el0 = document.getElementById('grabcand');
    const f = this.hands.frame;
    const live = this.hands.enabled && f.present && !this.handGrab;
    if (!live) { el0?.remove(); return; }
    const c = this.scene.renderer.domElement;
    const sx = (1 - f.x) * c.width, sy = f.y * c.height;
    const id = this.scene.pick(sx, sy, 70);
    const ids = id ? this.controls.clusterOf(id) : [];
    if (!ids.length) { el0?.remove(); return; }
    if (!el0) {
      el0 = el('div', { id: 'grabcand', 'data-t': 'grab-candidate' });
      el0.innerHTML = '<div class="ring"></div><div class="tag" data-t="grab-candidate-name"></div>';
      document.body.appendChild(el0);
    }
    const dpr = c.width / Math.max(window.innerWidth, 1);
    const want = new Set(ids);
    const pts = this.scene.screenPositions().filter(q => want.has(q.id));
    if (!pts.length) { el0.className = ''; return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const q of pts) {
      x0 = Math.min(x0, q.x - q.r); x1 = Math.max(x1, q.x + q.r);
      y0 = Math.min(y0, q.y - q.r); y1 = Math.max(y1, q.y + q.r);
    }
    const pad = 14;
    el0.className = 'on';
    el0.style.left = `${Math.round(x0 / dpr - pad)}px`;
    el0.style.top = `${Math.round(y0 / dpr - pad)}px`;
    el0.style.width = `${Math.round((x1 - x0) / dpr + pad * 2)}px`;
    el0.style.height = `${Math.round((y1 - y0) / dpr + pad * 2)}px`;
    const label = this.store.doc.nodes[ids[0]]?.label ?? '';
    $('[data-t=grab-candidate-name]', el0).textContent =
      `a fist takes ${ids.length} thought${ids.length === 1 ? '' : 's'}${label ? ` · ${label}` : ''}`;
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
      // AMBIGUITY IS THE TEST, AND IT IS A MARGIN, NOT A TIE.
      //
      // A leader used to be drawn only when the nearest node to a label's box
      // was outright not its own, and only for held or far-placed labels. The
      // cycle-10 Art Director's binding ruling is that this is too weak:
      // a label can be nearest to its own node and still unreadable as a
      // binding when several identical markers sit at almost the same distance
      // — measured nearest/second-nearest ratios of 0.84, 0.67 and 0.71 on
      // artifact 10, all of them ambiguous, none of them getting a line.
      //
      // So the trigger is the RATIO. A label whose second-nearest marker is
      // within 0.6 of its nearest gets a leader, whoever the nearest is.
      const near = (p: { x: number; y: number }) => {
        const px = Math.min(Math.max(p.x, r.x0), r.x1), py = Math.min(Math.max(p.y, r.y0), r.y1);
        return Math.hypot(p.x - px, p.y - py);
      };
      const own = near(s);
      let best = Infinity, closest = s;
      for (const q of scr) {
        if (q.id === s.id) continue;
        const d = near(q);
        if (d < best) { best = d; closest = q; }
      }
      const ratio = best > 0 ? own / best : 1;
      const ambiguous = closest.id !== s.id && best < own ? true : ratio > 0.6;
      if (!far && !ambiguous) continue;
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
    // The set the audit measures ambiguity against is the set that was drawn.
    this.scene.setDrawnLeaders(this.leaderFor);
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
    const ids = this.unnamedOnScreen();
    // THE CANVAS LENS GETS IT TOO. The recovery column existed on mind
    // expansion only, so the same map at the same loss offered a way back to
    // the hidden names in one lens and nothing at all in the other — and the
    // canvas lens is where the cap-and-drop ruling hides the most. Same loss,
    // same recovery.
    // THE RECOVERY COLUMN SURVIVES AN OPEN EDITOR. Standing it down whenever a
    // right-hand panel opened meant that selecting a node — which artifact 04
    // now does, to show all five states at density — silently removed the only
    // way back to the hidden names, taking artifact 04 from 113 of 150 nodes
    // identifiable to 45. The editor occupies the top of the right rail; the
    // column starts below it.
    const show = (this.lens === 'expansion' || this.lens === 'canvas') && ids.length > 0 &&
                 !this.panelOpen();
    col.className = show ? 'show' : '';
    if (!show) { col.innerHTML = ''; col.style.top = ''; return; }
    // BELOW EVERYTHING ALREADY IN THE RIGHT RAIL, not only the editor.
    //
    // The badge-stacking fix went in per-artifact in cycle 11 and the cycle-11
    // Auditor found where it had not been generalised: on artifacts 05 and 12
    // this column's FIRST line — the one carrying the count — sat entirely
    // behind the "labels hidden" badge, so the panel began mid-sentence at
    // "for a label". The rule belongs here, once, against every rail occupant
    // that actually overlaps this column.
    {
      col.style.top = '';
      const own = col.getBoundingClientRect();
      let top = 0;
      for (const sel of ['#editor', '#hidden', '#hitbreak', '#origin', '#states']) {
        const e = document.querySelector(sel) as HTMLElement | null;
        if (!e || getComputedStyle(e).display === 'none' || !e.textContent) continue;
        const r = e.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        if (r.right + 6 > own.left && r.left < own.right) top = Math.max(top, r.bottom + 10);
      }
      col.style.top = top ? `${Math.round(top)}px` : '';
    }
    // As many as the column can hold, longest-settled first so the order is a
    // property of the map rather than of the arbiter's iteration.
    const named = ids.map(i => this.store.doc.nodes[i]).filter(Boolean)
      .sort((a, b) => a.createdAt - b.createdAt);
    // GROUPED BY DISTRICT, because a list stripped of place is the wrong
    // disposal for a product whose story is that space is the memory.
    //
    // The Art Director's binding ruling: the flat list is 109 items long, names
    // 43 % of them, and discards the one attribute this build treats as sacred.
    // The colour dash on every row proves the district is already known at
    // render time, so grouping costs nothing and turns an unreadable 109 into a
    // handful of scannable neighbourhoods that still say WHERE.
    const row = (n: MMNode) => `<li>${esc(n.text)}</li>`;
    const head = (k: number) =>
      `<h4>${k} thought${k === 1 ? '' : 's'} on screen without room for a label</h4>`;
    const group = (ns: MMNode[]) => {
      const by = new Map<string, MMNode[]>();
      for (const n of ns) {
        const k = n.label || '—';
        (by.get(k) ?? by.set(k, []).get(k)!).push(n);
      }
      return [...by.entries()].sort((a, b) => b[1].length - a[1].length || (a[0] < b[0] ? -1 : 1));
    };
    const groupHead = (name: string, col: string, k: number) =>
      `<h5><i style="background:${col}"></i>${esc(name)} <b>${k}</b></h5>`;
    const render = (ns: MMNode[], tail = '') => {
      const parts: string[] = [head(named.length)];
      for (const [label, members] of group(ns)) {
        const col = PALETTE[members[0].color as ColorKey] ?? '#8A7C70';
        parts.push(groupHead(label, col, members.length));
        parts.push(members.map(row).join(''));
      }
      return parts.join('') + tail;
    };
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
    col.innerHTML = render(named);
    let shown = named.length;
    const fits = () => {
      const last = col!.lastElementChild as HTMLElement | null;
      return !last || last.getBoundingClientRect().bottom <= col!.getBoundingClientRect().bottom - 2;
    };
    if (!fits()) {
      // One extra off the end so the marker itself has a line to sit on.
      while (shown > 1 && !fits()) {
        shown--;
        col.innerHTML = render(named.slice(0, shown),
          `<li class="more">…and ${named.length - shown} more</li>`);
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
      </tbody></table>
      <h2>Putting a move back</h2>
      <div style="display:flex;align-items:center;gap:12px">
        <span class="chip">Undo move · <b>Ctrl+Z</b></span>
        <span class="chip" data-t="undo-depth">—</span>
        <span class="note">Moves only, and only your own explicit ones: a drag, a closed-fist grab, a
        placement out of holding. Each act goes back as one, to the exact coordinates it started from.
        Text, colours, labels and connections are not undoable — and nothing here ever tidies a layout.</span>
      </div>`;
    document.body.appendChild(o);
    $('[data-t=settings-close]', o).addEventListener('click', () => this.closeOverlays());
    $('[data-t=hand-toggle]', o).addEventListener('click', () => this.toggleHands(!this.handsOn));
    this.renderSyncStatus();
    this.renderActivity();
    this.reflowSessionChips();
    this.renderHandPanel();
    this.renderUndoRow();
  }

  /** What the reference table says is undoable, kept level with what is. */
  private renderUndoRow() {
    const o = document.getElementById('settings');
    if (!o) return;
    const c = o.querySelector('[data-t=undo-depth]');
    if (!c) return;
    const m = this.store.undoableMove;
    c.textContent = m
      ? `${this.store.undoDepth} move${this.store.undoDepth === 1 ? '' : 's'} can be put back — next: ${m.what}`
      : 'no move has been made on this map';
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
        // EVERY REJECTION, not four of them. The log is the strongest safety
        // evidence in the build — it is where "placed positions are not the
        // finder's to change" stops being a promise and becomes a refusal — and
        // it was truncating at four with a "+2 more" that had no expansion
        // control in frame, so the two most interesting drops of an
        // adversarially messy reply were the ones a reader could not see.
        return `<div class="rejected" data-t="finder-dropped">` +
          `<h5>${d.length} entr${d.length === 1 ? 'y' : 'ies'} rejected</h5>` +
          d.map(x => `<div class="r"><b>${esc(x.what)}</b> <span>${esc(x.why)}</span></div>`).join('') +
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
