import { writable } from "svelte/store";

// it stores values to share them between components

// it stores H, S, L values of main color
let h = writable(0);
let s = writable(0);
let l = writable(0);

export {h, s, l};

// it stores hex value of main color
let hex = writable("#000000");

export { hex };

// stores color harmony picked on website
let harmony = writable("mono");

export { harmony };

// stores distance between colors
let distance = writable(0);

export { distance };

// stores information if complement color is selected for analogous color harmony
let complement = writable(false);

export { complement };

// it's created to call update position of color picker
let callUpdatePosition = writable(false);

export { callUpdatePosition };

// stores selected color space
let space = writable("yuv");

export { space };

// saves if main route is visited first time
let firstVisit = writable(true);

export { firstVisit };