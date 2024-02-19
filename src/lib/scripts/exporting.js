import { h, s, l, harmony, distance, complement } from "$lib/scripts/stores.js";
import { get } from "svelte/store";

export const saveJson = (colorsArray) => {
    const jsonContent = JSON.stringify({ colors: colorsArray, main: {h: get(h), s: get(s), l: get(l)}, harmony: get(harmony), distance: get(distance), complement: get(complement) }, null, 2);
    const encodedUri = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'color-pallete.json');
    document.body.appendChild(link);
    link.click();
}