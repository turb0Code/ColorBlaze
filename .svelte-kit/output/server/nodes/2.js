import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.3a2b51a1.js","_app/immutable/chunks/scheduler.25f84ff8.js","_app/immutable/chunks/index.c592e685.js","_app/immutable/chunks/version3-title.f0e2534b.js","_app/immutable/chunks/bundle-mjs.3695a85f.js","_app/immutable/chunks/color-stores.ca7386b0.js","_app/immutable/chunks/index.b531825d.js","_app/immutable/chunks/Button.913438f1.js","_app/immutable/chunks/ChevronDownSolid.2dc0b9d2.js","_app/immutable/chunks/exporting.216a92d7.js","_app/immutable/chunks/food.b94c3116.js"];
export const stylesheets = ["_app/immutable/assets/2.e75bd0db.css","_app/immutable/assets/version3-title.79427b00.css"];
export const fonts = [];
