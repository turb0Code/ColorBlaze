import { writable } from "svelte/store";

let colors = writable(["#000000"]);

export { colors };
