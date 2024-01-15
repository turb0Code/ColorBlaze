import { writable } from "svelte/store";

let h = writable(0);
let s = writable(0);
let l = writable(0);

export {h, s, l};