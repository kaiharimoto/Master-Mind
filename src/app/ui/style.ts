// Matte, flat, opaque. No glass, no chrome, no reflective cards, no rounded
// panels floating in world space (DIRECTION.md D-008).
export const CSS = `
:root{
  --ground:#120E0B; --panel:#191410; --panel2:#221B16; --line:#2E2620;
  --ink:#EFE6D8; --ink-dim:#A2968A; --ink-faint:#6E645B;
  --hot:#FFB020; --bad:#FF6B4A; --ok:#2FD0C0;
}
*{box-sizing:border-box}
/* Overflow scrollbars are chrome the app does not own and does not want in a
   frame: artifact 01 carried a 50x3px scrollbar thumb in each of its three
   composited panels. Hidden everywhere; the panels that scroll still scroll. */
*::-webkit-scrollbar{width:0;height:0}
*{scrollbar-width:none}
html,body{margin:0;height:100%;background:var(--ground);overflow:hidden;
  font:13px/1.45 "DejaVu Sans",system-ui,sans-serif;color:var(--ink);
  -webkit-font-smoothing:antialiased}
canvas#world{position:fixed;inset:0;display:block}
button,input,textarea,select{font:inherit;color:var(--ink);background:var(--panel2);
  border:1px solid var(--line);padding:6px 10px;outline:none}
button{cursor:pointer}
button:hover{background:#2B231C}
button.ghost{background:transparent}
/* after .ghost, so a ghost button that is ON still paints its background and
   does not end up with near-black text on the dark ground */
button.on,button.ghost.on{background:var(--hot);color:#1A1206;border-color:var(--hot)}
span.chip.on{border-color:var(--hot);color:var(--ink)}
input:focus,textarea:focus{border-color:#4A3E34}
textarea{resize:none;width:100%;font:11px/1.4 "DejaVu Sans Mono",monospace}

#top{position:fixed;top:0;left:0;right:0;height:44px;display:flex;align-items:center;
  gap:8px;padding:0 12px;background:var(--panel);border-bottom:1px solid var(--line);z-index:20}
#top .name{font-weight:bold;letter-spacing:.2px;margin-right:4px;white-space:nowrap}
#top .sp{flex:1}
body.ar #capture,body.ar [data-t=open-finder],body.ar [data-t=open-maps],
body.ar [data-t=open-states]{display:none}
body.ar #top{height:40px}
body.ar #search{width:300px}
/* Between a desk and a phone: keep every control, give up spacing first, so a
   half-width composite panel never cuts a button mid-word. */
@media (max-width:1460px){
  #top{gap:5px;padding:0 8px}
  #top button{padding:6px 8px}
  #search{width:190px}
  #capture{width:150px}
}
@media (max-width:1200px){
  #capture,[data-t=open-finder],[data-t=open-maps],[data-t=open-states]{display:none}
  #search{width:150px}
  #top{gap:6px;padding:0 8px}
}
.tabs{display:flex;border:1px solid var(--line)}
.tabs button{border:0;border-right:1px solid var(--line);padding:6px 12px;background:transparent}
.tabs button:last-child{border-right:0}
.tabs button.on{background:var(--hot);color:#1A1206}
.chip{padding:5px 9px;border:1px solid var(--line);color:var(--ink-dim);white-space:nowrap}
.chip b{color:var(--ink)}
#search{width:230px}

.panel{position:fixed;background:var(--panel);border:1px solid var(--line);z-index:30}
#editor{top:56px;right:12px;width:274px;padding:12px}
#editor h3{margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
#editor label{display:block;margin:10px 0 4px;font-size:11px;color:var(--ink-dim)}
#editor input{width:100%}
.swatches{display:flex;gap:5px;flex-wrap:wrap}
.sw{width:24px;height:24px;border:2px solid transparent;padding:0;cursor:pointer}
.sw.on{border-color:var(--ink)}
.row{display:flex;gap:6px;margin-top:12px}
.row button{flex:1}
/* THE COMMITTING ACTION LOOKS LIKE ONE. Accept and Reject were the same
   neutral outline token — fills a single level of red apart, labels at the
   same contrast — in a feature whose whole claim is that nothing is applied
   until you accept. Accept takes the amber the kind tag already uses; Reject
   keeps the outline. Same size, same place: the pair still reads as a matched
   choice, not a warning. */
/* The rejection log: the strongest safety evidence in the build, set to be
   read. One entry per line, the subject at reading contrast, the reason a step
   below it, and the overflow as a count. */
.rejected{margin-top:10px;border-left:2px solid #4A3A2A;padding:6px 0 6px 10px}
.rejected h5{margin:0 0 5px;font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ink)}
.rejected .r{font-size:12px;line-height:1.5;color:var(--ink);margin-bottom:2px}
.rejected .r b{font-weight:600}
.rejected .r span{color:var(--ink-dim)}
.rejected .r.more{color:var(--ink-dim)}
button.affirm{background:var(--hot);border-color:var(--hot);color:#1A1206;font-weight:600}
button.affirm:hover{background:#FFC44D;border-color:#FFC44D}

/* The panel never grows past the band between the top bar and the bottom bar,
   and it does NOT scroll as a whole: the prompt and reply bodies scroll inside
   it, so Generate / Copy / Parse are on screen whatever the prompt's length. */
#finder{top:56px;left:12px;width:430px;max-height:calc(100vh - 124px);overflow:hidden;padding:12px;
  display:flex;flex-direction:column}
#finder>*{flex:0 0 auto}
#finder textarea{flex:1 1 auto;min-height:64px}
#finder .tail{flex:1 1 auto;min-height:0;overflow:auto}
#finder h3{margin:0 0 8px;font-size:12px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
.sug{border:1px solid var(--line);padding:10px;margin-top:8px;background:var(--panel2)}
.sug .k{font-size:10px;letter-spacing:.8px;text-transform:uppercase;color:var(--hot)}
.sug .d{margin:4px 0 2px;font-weight:bold}
.sug .w{color:var(--ink-dim);font-size:12px}
.err{border:1px solid var(--bad);color:var(--bad);padding:9px 10px;margin-top:8px;background:#20120E}
.note{color:var(--ink-faint);font-size:11px;margin-top:6px}

.overlay{position:fixed;inset:0;background:var(--ground);z-index:40;overflow:auto;padding:56px 40px 40px}
.overlay h1{font-size:19px;letter-spacing:.4px;margin:0 0 4px}
.overlay h2{font-size:12px;letter-spacing:.8px;text-transform:uppercase;color:var(--ink-dim);
  margin:26px 0 8px;border-bottom:1px solid var(--line);padding-bottom:6px}
.overlay .sub{color:var(--ink-dim);margin:0 0 18px}
table{border-collapse:collapse;width:100%}
th,td{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}
th{font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim);font-weight:normal}
td.num{color:var(--ink-dim);white-space:nowrap}
tr.map:hover{background:var(--panel)}
.maprow td:first-child{font-weight:bold}
.close{position:fixed;top:10px;right:12px;z-index:41}

#hands{position:fixed;right:12px;bottom:12px;width:288px;background:var(--panel);
  border:1px solid var(--line);z-index:25}
#hands .hd{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid var(--line);
  font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:var(--ink-dim)}
#hands .dot{width:8px;height:8px;background:var(--ink-faint)}
#hands .dot.live{background:var(--ok)}
#handwrap{position:relative;width:288px;height:216px;background:#000}
#handvid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
#handlm{position:absolute;inset:0;width:100%;height:100%}
#handpose{padding:8px 10px;border-top:1px solid var(--line)}
#handpose .p{font-size:16px;font-weight:bold;color:var(--hot)}
#handpose .o{color:var(--ink-dim);font-size:12px}
#handpose .g{color:var(--ink-faint);font-size:10px;font-family:"DejaVu Sans Mono",monospace;margin-top:3px}

/* Clear of the mouse-equivalent bar, which sits at bottom:12 on the same
   centre line and was drawing over the operation caption's lower half — in the
   one still where that caption should be the most legible thing on screen. */
#gesture{position:fixed;left:50%;transform:translateX(-50%);bottom:64px;z-index:27;
  background:var(--panel);border:1px solid var(--line);padding:9px 16px;display:none}
#gesture.show{display:block}
#gesture .n{font-weight:bold;color:var(--hot)}
#gesture .o{color:var(--ink-dim)}
/* Held: the caption is still readable but is no longer asserting anything the
   detector is seeing right now, and it must not look like it is. */
#gesture.held{border-style:dashed;opacity:.72}
#gesture.held .n{color:var(--ink-dim)}
#gesture .h{color:var(--ink-dim);font-style:italic}

#toast{position:fixed;left:50%;transform:translateX(-50%);top:56px;z-index:50;
  background:var(--panel);border:1px solid var(--line);padding:9px 14px;display:none;max-width:640px}
#toast.show{display:block}
#toast.bad{border-color:var(--bad);color:var(--bad)}

#argyro{position:fixed;right:12px;bottom:12px;z-index:25;background:var(--panel);border:1px solid var(--line);
  padding:7px 11px;font-size:11px;letter-spacing:.4px;color:var(--ink-dim);display:none}
#argyro.show{display:block}
#argyro b{color:var(--ink);font-family:"DejaVu Sans Mono",monospace}
/* Turning: the readout comes forward while the device is actually moving. */
#argyro.turning{padding:12px 18px;font-size:17px;letter-spacing:.6px;color:var(--ink);
  border-color:var(--hot)}
#argyro.turning b{font-size:24px}
#origin{position:fixed;left:12px;top:56px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#origin.seed{display:block;color:var(--ink-dim);border-color:#3A2F26}
#origin b{color:var(--ink)}
#activity{position:fixed;left:12px;top:86px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#activity.show{display:block}
#activity.remote{border-color:#3A2F26;color:var(--ink-dim)}
#activity b{color:var(--ink)}
/* AR reticle: a handheld surface points at something. */
#reticle{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:23;pointer-events:none;
  display:flex;flex-direction:column;align-items:center;gap:8px}
#reticle .x{width:26px;height:26px;border:1px solid #6E6157;border-radius:50%;position:relative}
#reticle.on .x{border-color:#C9A227}
#reticle .x::before,#reticle .x::after{content:"";position:absolute;background:#6E6157}
#reticle .x::before{left:50%;top:-7px;width:1px;height:7px}
#reticle .x::after{left:50%;bottom:-7px;width:1px;height:7px}
#reticle.on .x::before,#reticle.on .x::after{background:#C9A227}
#reticle .n{font-size:11px;letter-spacing:.3px;color:var(--ink-faint);background:var(--panel);
  border:1px solid var(--line);padding:4px 9px;white-space:nowrap}
#reticle.on .n{color:var(--ink)}
/* The leader: what the readout is naming, shown rather than asserted. A
   fixed aiming ring names the nearest thought, which was as much as 149 px
   away with nothing connecting the two — so the one affordance that makes
   this read as AR pointed at nothing. Anchored at the ring's centre and
   rotated to the node; it carries state, so it is not chrome. */
#reticle .lead{position:absolute;left:50%;top:50%;height:1px;background:#C9A227;opacity:0;
  transform-origin:0 50%;pointer-events:none}
#reticle.on .lead{opacity:.62}
#reticle .lead::after{content:"";position:absolute;right:-2px;top:-2px;width:5px;height:5px;
  border-radius:50%;background:#C9A227}
#clusterproof{position:fixed;left:12px;top:56px;z-index:25;background:var(--panel);border:1px solid #3A2F26;
  padding:8px 11px;font-size:11px;letter-spacing:.3px;color:var(--ink-dim);display:none;line-height:1.55}
#clusterproof.show{display:block}
/* The unlabelled column. At whole-map framing the node cloud is near-square
   (826x829 px measured) and a 16:9 frame leaves about 470 px of margin either
   side that no camera angle can fill. The frame already admits how many names
   it is not showing; this spends the empty margin on saying WHICH, in each
   thought's own district colour. Fixed width whatever the count, so it is a
   stable occluder for the label arbiter rather than one that resizes in
   response to its own effect. */
/* AN OPAQUE GROUND, not a transparent overlay. The roster was drawn straight
   over the live map: on artifact 05 its rows sat on top of azure district nodes
   and their filaments, and its own colour bullets are the same size and shape
   as the map's dots, so the two channels were confusable — and "UI surfaces
   matte and minimal" was not being honoured by the one surface that lists what
   the map is not showing. It is matte and opaque now, and the arbiter already
   reserves its rectangle, so no label runs beneath it either. */
#unlabelled{position:fixed;right:0;top:96px;bottom:64px;width:300px;z-index:22;display:none;
  padding:10px 14px 10px 16px;border-left:1px solid var(--line);pointer-events:none;
  background:var(--panel);
  font-size:12px;line-height:1.55;letter-spacing:.2px;color:var(--ink-dim);overflow:hidden}
#unlabelled.show{display:block}
#unlabelled h4{margin:0 0 7px;font-size:11px;font-weight:600;letter-spacing:.4px;
  color:var(--ink-dim);text-transform:none}
/* NOT THE DIMMEST TEXT IN THE BUILD. The rows measured 2.3:1 modal against the
   panel ground while the node labels they stand in for measure 9.2:1 in the
   same frame — the disposal surface was less legible than the thing it was
   disposing of. Rows take the reading ink; the district heads carry the colour
   and the count. */
#unlabelled li{list-style:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  color:var(--ink);padding-left:11px}
#unlabelled li.more{color:var(--ink-dim);padding-left:0;margin-top:5px}
#unlabelled h5{margin:8px 0 2px;font-size:11px;font-weight:600;letter-spacing:.2px;
  color:var(--ink-dim);text-transform:none}
#unlabelled h5 b{color:var(--ink-faint);font-weight:400;margin-left:3px}
/* A short bar, not a dot: the bullets were the same size and shape as node
   markers, so a reader scanning the column could take a list row for a thing in
   the world. Same hue, different form. */
#unlabelled i{display:inline-block;width:9px;height:3px;border-radius:1px;margin-right:6px;
  vertical-align:middle}
/* Leaders for held thoughts. In the holding ring the dots are close together
   and the names radiate outward, so a label can end up nearer a neighbour's
   dot than its own — measured on artifact 06, only four of eight labels had
   their own dot as the nearest. The line joins each name to the thought it
   belongs to. It carries attribution, so it is not decoration. */
/* width/height explicitly: an <svg> is a REPLACED element, so inset:0 with
   auto sizing leaves it at its intrinsic 300x150 and every line outside that
   box is clipped away — which is why the first attempt drew eight lines and
   showed none of them. */
/* The fist's grip, shown while it is held. Amber like every other live
   affordance, and a rounded rectangle rather than a ring so it does not read as
   a sixth node signature. */
#grabmark{position:fixed;z-index:21;display:none;pointer-events:none}
#grabmark.on{display:block}
#grabmark .ring{position:absolute;inset:0;border:2px dashed var(--hot);border-radius:14px;
  box-shadow:0 0 0 1px rgba(0,0,0,0.5)}
#grabmark .tag{position:absolute;left:50%;top:-10px;transform:translate(-50%,-100%);
  white-space:nowrap;font-size:11px;color:#1A1206;background:var(--hot);
  border-radius:4px;padding:2px 8px;font-weight:600}
#pinmark{position:fixed;z-index:20;display:none;pointer-events:none}
#pinmark.on{display:block}
#pinmark .ring{position:absolute;inset:0;border:2px solid var(--hot);border-radius:50%;
  box-shadow:0 0 0 1px rgba(0,0,0,0.55)}
#pinmark .tag{position:absolute;left:50%;top:100%;transform:translate(-50%,6px);
  white-space:nowrap;font-size:12px;color:var(--ink);background:rgba(14,12,10,0.9);
  border:1px solid var(--hot);border-radius:5px;padding:2px 7px}
#hitbreak{position:fixed;top:52px;right:16px;z-index:23;display:none;
  padding:5px 10px;border-radius:6px;background:rgba(14,12,10,0.92);
  border:1px solid rgba(255,255,255,0.14);font-size:12px;letter-spacing:0.01em;
  color:var(--ink);white-space:nowrap;pointer-events:none}
#hitbreak.show{display:block}
#leaders{position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:21;pointer-events:none}
#leaders line{stroke:#6E6157;stroke-width:1;opacity:.5}
#clusterproof b{color:var(--ink);font-family:"DejaVu Sans Mono",monospace}
#hidden{position:fixed;right:12px;top:56px;z-index:24;background:var(--panel);border:1px solid var(--line);
  padding:6px 10px;font-size:11px;letter-spacing:.3px;color:var(--ink-faint);display:none}
#hidden.show{display:block}
#lenstag{position:fixed;left:12px;bottom:12px;z-index:24;background:var(--panel);
  border:1px solid var(--line);padding:6px 10px;font-size:11px;letter-spacing:.5px;color:var(--ink-dim)}
#lenstag b{color:var(--ink);text-transform:uppercase;letter-spacing:.8px}
#lenstag .prov{display:block;margin-top:3px;color:var(--ink-faint);text-transform:none;letter-spacing:.2px;font-size:10px}
#lenstag .prov b{color:var(--ink-dim);text-transform:none;letter-spacing:.2px;font-size:10px}
#lenstag .absent{color:#C08A5A}

#tools{position:fixed;left:252px;bottom:12px;z-index:26;display:none;gap:6px}
#tools.show{display:flex}
#tools button{min-width:78px}
.mono{font-family:"DejaVu Sans Mono",monospace;font-size:11px}
`;
