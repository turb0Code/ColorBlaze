

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7fa86be6.js","_app/immutable/chunks/scheduler.25f84ff8.js","_app/immutable/chunks/index.c592e685.js","_app/immutable/chunks/stores.840903cd.js","_app/immutable/chunks/singletons.dd0ea556.js","_app/immutable/chunks/index.b531825d.js"];
export const stylesheets = [];
export const fonts = [];
