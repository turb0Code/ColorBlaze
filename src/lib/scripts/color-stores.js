import { writable } from "svelte/store";

// table of colors in hex format to provide preview and exporting
let colors = writable(["#000000"]);

export { colors };
