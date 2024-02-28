

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/images/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.36ddcdc0.js","_app/immutable/chunks/scheduler.25f84ff8.js","_app/immutable/chunks/index.c592e685.js","_app/immutable/chunks/food.b94c3116.js","_app/immutable/chunks/color-stores.ca7386b0.js","_app/immutable/chunks/index.b531825d.js"];
export const stylesheets = [];
export const fonts = [];
