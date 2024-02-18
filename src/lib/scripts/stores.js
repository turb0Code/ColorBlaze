import { writable } from "svelte/store";

let h = writable(0);
let s = writable(0);
let l = writable(0);

export {h, s, l};

let hex = writable("#000000");

export { hex };

let harmony = writable("mono");

export { harmony };

let distance = writable(0);

export { distance };

let complement = writable(false);

export { complement };

let callUpdatePosition = writable(false);

export { callUpdatePosition };

let space = writable("yuv");

export { space };