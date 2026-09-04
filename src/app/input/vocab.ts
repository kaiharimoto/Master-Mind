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
  { id: 'dragempty',  name: 'Drag empty space', how: 'One finger, drag on the background', operation: 'Look around — orbit the view', span: 'navigation' },
  { id: 'pinch',      name: 'Pinch / spread',   how: 'Two fingers, pinch or spread',       operation: 'Zoom the view in or out', span: 'navigation' },
];

export type HandPoseId = 'fist' | 'spread' | 'gather' | 'two' | 'none';

export interface HandPose {
  id: Exclude<HandPoseId, 'none'>; name: string; how: string;
  operation: string; mouse: string;
}

/** Windows hand vocabulary — floor is 4; four are implemented. */
export const HAND_VOCAB: HandPose[] = [
  { id: 'fist',   name: 'Closed fist',   how: 'All fingers curled in',
    operation: 'Grab the nearest cluster and move it — members keep their internal arrangement',
    mouse: 'Hold Alt and drag a node, or press Grab then drag' },
  { id: 'spread', name: 'Open palm',     how: 'All five fingers extended and spread wide',
    operation: 'Spread the map — pull the whole brain wider',
    mouse: 'Scroll up, or press Spread' },
  { id: 'gather', name: 'Gathered hand', how: 'Fingers extended but held together, tips touching',
    operation: 'Gather the map — pull the whole brain back in',
    mouse: 'Scroll down, or press Gather' },
  { id: 'two',    name: 'Two fingers',   how: 'Index and middle extended in a V, ring and little finger curled in',
    operation: 'Select or confirm the node the hand is over',
    mouse: 'Left click, or press Select' },
];

export const TOUCH_SPANS = ['capture', 'placement', 'connection', 'selection', 'navigation'] as const;
