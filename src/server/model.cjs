"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/core/model.ts
var model_exports = {};
__export(model_exports, {
  COLOR_KEYS: () => COLOR_KEYS,
  NODE_PROPS: () => NODE_PROPS,
  PALETTE: () => PALETTE,
  applyOp: () => applyOp,
  emptyDoc: () => emptyDoc,
  holdingNodes: () => holdingNodes,
  linkList: () => linkList,
  neighbours: () => neighbours,
  nodeList: () => nodeList,
  placedNodes: () => placedNodes,
  recencyOf: () => recencyOf,
  resolveStates: () => resolveStates,
  searchMatches: () => searchMatches
});
module.exports = __toCommonJS(model_exports);
var PALETTE = {
  amber: "#FFB020",
  coral: "#FF6B4A",
  magenta: "#E85C9A",
  violet: "#9B7BFF",
  azure: "#4FA8FF",
  teal: "#2FD0C0",
  lime: "#9BD648",
  bone: "#E8DCC8"
};
var COLOR_KEYS = Object.keys(PALETTE);
var NODE_PROPS = ["text", "label", "color", "pos", "placed", "createdAt", "lastTouchedAt"];
function emptyDoc(id, name, now) {
  return {
    id,
    name,
    createdAt: now,
    lastOpenedAt: now,
    nodes: {},
    links: {},
    holding: { origin: [0, -14, 0], radius: 5.2 },
    clocks: {},
    removedLinks: {}
  };
}
function applyOp(doc, op) {
  let changed = false;
  const win = (key, ts, actor) => {
    const cur = doc.clocks[key];
    if (cur === void 0 || ts > cur) {
      doc.clocks[key] = ts;
      doc.clocks[key + "#a"] = hashActor(actor);
      return true;
    }
    if (ts === cur) {
      const a = hashActor(actor);
      if (a > (doc.clocks[key + "#a"] ?? -1)) {
        doc.clocks[key + "#a"] = a;
        return true;
      }
    }
    return false;
  };
  switch (op.t) {
    case "node.set": {
      const existing = doc.nodes[op.id];
      const n = existing ?? {
        id: op.id,
        text: "",
        label: "",
        color: "bone",
        pos: [0, 0, 0],
        placed: false,
        createdAt: op.ts,
        lastTouchedAt: op.ts
      };
      for (const p of NODE_PROPS) {
        if (!(p in op.fields)) continue;
        if (win(`n:${op.id}:${p}`, op.ts, op.actor)) {
          n[p] = op.fields[p];
          changed = true;
        }
      }
      if (!existing) {
        doc.nodes[op.id] = n;
        changed = true;
      }
      if (existing === void 0 && doc.clocks[`n:${op.id}:#del`] !== void 0) {
        delete doc.clocks[`n:${op.id}:#del`];
      }
      return changed;
    }
    case "node.del": {
      const blocked = NODE_PROPS.some((p) => (doc.clocks[`n:${op.id}:${p}`] ?? -1) > op.ts);
      if (blocked) return false;
      if (doc.nodes[op.id]) {
        delete doc.nodes[op.id];
        for (const id of Object.keys(doc.links)) {
          if (doc.links[id].a === op.id || doc.links[id].b === op.id) {
            doc.removedLinks[id] = op.ts;
            delete doc.links[id];
          }
        }
        doc.clocks[`n:${op.id}:#del`] = op.ts;
        changed = true;
      }
      return changed;
    }
    case "link.add": {
      if (doc.removedLinks[op.id] !== void 0 && doc.removedLinks[op.id] >= op.ts) return false;
      if (!doc.links[op.id]) {
        doc.links[op.id] = { id: op.id, a: op.a, b: op.b, createdAt: op.ts };
        delete doc.removedLinks[op.id];
        doc.clocks[`l:${op.id}`] = op.ts;
        changed = true;
      }
      return changed;
    }
    case "link.del": {
      if ((doc.clocks[`l:${op.id}`] ?? -1) > op.ts) return false;
      if (doc.links[op.id]) {
        delete doc.links[op.id];
        doc.removedLinks[op.id] = op.ts;
        changed = true;
      }
      return changed;
    }
    case "map.set": {
      for (const k of Object.keys(op.fields)) {
        if (win(`m:${k}`, op.ts, op.actor)) {
          doc[k] = op.fields[k];
          changed = true;
        }
      }
      return changed;
    }
  }
}
function hashActor(a) {
  let h = 2166136261;
  for (let i = 0; i < a.length; i++) {
    h ^= a.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function nodeList(doc) {
  return Object.values(doc.nodes).sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}
function linkList(doc) {
  return Object.values(doc.links).sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}
function holdingNodes(doc) {
  return nodeList(doc).filter((n) => !n.placed);
}
function placedNodes(doc) {
  return nodeList(doc).filter((n) => n.placed);
}
function neighbours(doc, id) {
  const s = /* @__PURE__ */ new Set();
  for (const l of Object.values(doc.links)) {
    if (l.a === id) s.add(l.b);
    else if (l.b === id) s.add(l.a);
  }
  return s;
}
function recencyOf(doc, n) {
  let lo = Infinity, hi = -Infinity;
  for (const m of Object.values(doc.nodes)) {
    if (m.createdAt < lo) lo = m.createdAt;
    if (m.createdAt > hi) hi = m.createdAt;
  }
  if (!isFinite(lo) || hi <= lo) return 1;
  return (n.createdAt - lo) / (hi - lo);
}
function resolveStates(doc, selected, searchHits) {
  const out = /* @__PURE__ */ new Map();
  const conn = selected ? neighbours(doc, selected) : /* @__PURE__ */ new Set();
  for (const n of Object.values(doc.nodes)) {
    out.set(
      n.id,
      n.id === selected ? "selected" : searchHits.has(n.id) ? "searchHit" : !n.placed ? "unplaced" : conn.has(n.id) ? "connected" : "plain"
    );
  }
  return out;
}
function searchMatches(doc, q) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return nodeList(doc).map((n) => {
    const t = n.text.toLowerCase(), l = n.label.toLowerCase();
    let score = -1;
    if (t === needle) score = 0;
    else if (t.startsWith(needle)) score = 1;
    else if (l === needle) score = 2;
    else if (t.includes(needle)) score = 3;
    else if (l.includes(needle)) score = 4;
    return { n, score };
  }).filter((r) => r.score >= 0).sort((a, b) => a.score - b.score || (a.n.id < b.n.id ? -1 : 1)).map((r) => r.n);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COLOR_KEYS,
  NODE_PROPS,
  PALETTE,
  applyOp,
  emptyDoc,
  holdingNodes,
  linkList,
  neighbours,
  nodeList,
  placedNodes,
  recencyOf,
  resolveStates,
  searchMatches
});
