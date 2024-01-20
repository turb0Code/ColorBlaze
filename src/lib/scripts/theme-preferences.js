import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let dark;

if (browser) {
    if ("dark" in localStorage)
        localStorage.dark === true ? dark = true : dark = false;
    else
        window.matchMedia("(prefers-color-scheme: dark)").matches ? dark = true : dark = null;
}

export const darkMode = writable(dark);

darkMode.subscribe((arg) => {
    if (browser) {
        if (arg!==null) arg ? localStorage.dark = "true" : localStorage.dark = "false";
    }
});
