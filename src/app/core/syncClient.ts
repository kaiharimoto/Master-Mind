// WebSocket sync client. One live map state, shared across surfaces.
import type { MapDoc, Op } from './model.js';
import type { Transport } from './store.js';

export type SyncStatus = 'offline' | 'connecting' | 'live' | 'error';

export interface MapSummary { id: string; name: string; nodes: number; lastOpenedAt: number; createdAt: number; }

/** Where the open map was loaded from. A cold start reads the committed seed. */
export interface MapOrigin { from: 'seed' | 'live'; file?: string; sha256?: string; }

type ServerMsg =
  | { t: 'snapshot'; doc: MapDoc; origin?: MapOrigin; conn?: number; serverPid?: number }
  | { t: 'op'; op: Op }
  | { t: 'maps'; maps: MapSummary[] }
  | { t: 'error'; message: string };

export class SyncClient implements Transport {
  private ws: WebSocket | null = null;
  private queue: Op[] = [];
  private remoteFns: ((op: Op) => void)[] = [];
  private snapFns: ((doc: MapDoc, origin: MapOrigin) => void)[] = [];
  origin: MapOrigin = { from: 'live' };
  /** The socket number this client was given by the sync service, and the
   *  service's own pid. Two surfaces on one map are two numbers here. */
  connId: number | null = null;
  serverPid: number | null = null;
  private mapsFns: ((m: MapSummary[]) => void)[] = [];
  private statusFns: ((s: SyncStatus, detail: string) => void)[] = [];
  status: SyncStatus = 'offline';
  detail = 'not connected';
  /** Signed-in identity. Shown in settings alongside sync status. */
  account: string;

  constructor(readonly url: string, readonly actor: string, account: string) { this.account = account; }

  connect(mapId: string) {
    this.setStatus('connecting', `connecting to ${this.url}`);
    const ws = new WebSocket(`${this.url}?map=${encodeURIComponent(mapId)}&actor=${encodeURIComponent(this.actor)}&account=${encodeURIComponent(this.account)}`);
    this.ws = ws;
    ws.onopen = () => {
      this.setStatus('live', `live · ${this.account}`);
      for (const op of this.queue.splice(0)) ws.send(JSON.stringify({ t: 'op', op }));
    };
    ws.onclose = () => { if (this.status !== 'error') this.setStatus('offline', 'disconnected'); };
    ws.onerror = () => this.setStatus('error', 'connection failed');
    ws.onmessage = ev => {
      const m: ServerMsg = JSON.parse(ev.data as string);
      if (m.t === 'op') for (const f of this.remoteFns) f(m.op);
      else if (m.t === 'snapshot') {
        this.origin = m.origin ?? { from: 'live' };
        if (m.conn !== undefined) this.connId = m.conn;
        if (m.serverPid !== undefined) this.serverPid = m.serverPid;
        for (const f of this.snapFns) f(m.doc, this.origin);
      }
      else if (m.t === 'maps') for (const f of this.mapsFns) f(m.maps);
      else if (m.t === 'error') this.setStatus('error', m.message);
    };
  }
  close() { this.ws?.close(); this.ws = null; }

  send(op: Op) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify({ t: 'op', op }));
    else this.queue.push(op);
  }
  request(msg: Record<string, unknown>) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(msg));
  }
  onRemote(fn: (op: Op) => void) { this.remoteFns.push(fn); }
  onSnapshot(fn: (doc: MapDoc, origin: MapOrigin) => void) { this.snapFns.push(fn); }
  onMaps(fn: (m: MapSummary[]) => void) { this.mapsFns.push(fn); }
  onStatus(fn: (s: SyncStatus, d: string) => void) { this.statusFns.push(fn); fn(this.status, this.detail); }
  private setStatus(s: SyncStatus, d: string) {
    this.status = s; this.detail = d;
    for (const f of this.statusFns) f(s, d);
  }
}
