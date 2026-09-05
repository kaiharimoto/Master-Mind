// The two gesture vocabularies, defined once.
//
// The in-app reference in Settings renders straight from these tables, so what
// the reference lists and what the code does cannot drift apart.

export interface TouchGesture {
  id: string; name: string; how: string; operation: string;
  span: 'capture' | 'placement' | 'connection' | 'selection' | 'navigation';
}

/** Android touch vocabulary — floor is 5; six are implemented. */
export const TOUCH_VOCAB: TouchGesture[] = [
  { id: 'tap',        name: 'Tap',              how: 'One finger, tap a node',             operation: 'Select and inspect the node', span: 'selection' },
  { id: 'doubletap',  name: 'Double-tap',       how: 'Two quick taps on a node, then on a second node', operation: 'Connect the two nodes with a filament', span: 'connection' },
  { id: 'longpress',  name: 'Long-press',       how: 'Hold half a second on empty space',  operation: 'Quick-add a node into the holding cluster', span: 'capture' },
  { id: 'dragnode',   name: 'Drag a node',      how: 'Press a node and drag',              operation: 'Place it, or move an already-placed node', span: 'placement' },
  { id: 'dragempty',  name: 'Drag empty space', how: 'One finger, drag on the background', operation: 'Re-aim the vantage — offset where the device heading points', span: 'navigation' },
  { id: 'pinch',      name: 'Pinch / spread',   how: 'Two fingers, pinch or spread',       operation: 'Zoom the view in or out', span: 'navigation' },
];

export type HandPoseId = 'fist' | 'spread' | 'gather' | 'two' | 'none';

/**
 * The desk inputs the controls fire directly, named the way a person would say
 * them. Without this table a caption fell back to the raw event id and read
 * "mouse-alt-drag — the mouse-alt-drag equivalent": a tautology that told a
 * viewer neither what was pressed nor what it stood in for.
 */
export const MOUSE_VOCAB: Record<string, { name: string; standsIn?: HandPoseId }> = {
  'mouse-drag':        { name: 'Drag' },
  // These four ARE the documented mouse equivalents of the four hand poses (see
  // HAND_VOCAB.mouse), and the caption should say so whichever path fired them:
  // pressing the Grab button and holding Alt while dragging are the same
  // operation, and only one of them was naming the pose it stood in for.
  'mouse-alt-drag':    { name: 'Alt-drag', standsIn: 'fist' },
  'mouse-click':       { name: 'Click', standsIn: 'two' },
  'mouse-scroll-up':   { name: 'Scroll up', standsIn: 'spread' },
  'mouse-scroll-down': { name: 'Scroll down', standsIn: 'gather' },
};

export interface HandPose {
  id: Exclude<HandPoseId, 'none'>; name: string; how: string;
  operation: string; mouse: string;
}

/** Windows hand vocabulary — floor is 4; four are implemented. */
export const HAND_VOCAB: HandPose[] = [
  { id: 'fist',   name: 'Closed fist',   how: 'All fingers curled in',
    operation: 'Grab the nearest cluster and move it — members keep their internal arrangement',
    mouse: 'Hold Alt and drag a node, or press Grab then drag' },
  // NAMED FOR WHAT THEY DO. These two move the VANTAGE, not the map: measured
  // across artifact 05's two panels the node cloud scales uniformly by 1.142
  // against a view-distance ratio of 1.146, so nothing in the world moved. On a
  // map whose whole premise is that positions are sacred, calling that
  // 'spread the map' invites exactly the reading the premise forbids.
  { id: 'spread', name: 'Open palm',     how: 'All five fingers extended and spread wide',
    operation: 'Move closer — the map fills more of the frame; no thought moves',
    mouse: 'Scroll up, or press Closer' },
  { id: 'gather', name: 'Gathered hand', how: 'Fingers extended but held together, tips touching',
    operation: 'Pull back — the map recedes in the frame; no thought moves',
    mouse: 'Scroll down, or press Back' },
  { id: 'two',    name: 'Two fingers',   how: 'Index and middle extended in a V, ring and little finger curled in',
    operation: 'Select or confirm the node the hand is over',
    mouse: 'Left click, or press Select' },
];

export const TOUCH_SPANS = ['capture', 'placement', 'connection', 'selection', 'navigation'] as const;
