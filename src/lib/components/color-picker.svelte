<script lang="js">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import ColorSpace from "$lib/components/color-space.svelte";
  import { RgbToHsl } from "$lib/scripts/color-conversion.js";
  import { h, s, l, hex } from "$lib/scripts/stores.js";

  let picker1;
  let picker;
  onMount(() => {
    picker1.opened = true;
    picker = writable(picker1);

    picker1.addEventListener("change", (e) => {
      let hsl = RgbToHsl(
        Math.round(picker1.color.r),
        Math.round(picker1.color.g),
        Math.round(picker1.color.b),
      );
      h.set(hsl["H"]);
      s.set(hsl["S"]);
      l.set(hsl["L"]);
      hex.set(picker1.hex);
    });
  });

  import "$lib/scripts/toolcool-color-picker.min.js";
</script>

<toolcool-color-picker
  bind:this={picker1}
  id="color-picker-1"
  color="rgb(90, 60, 90)"
  button-width="0rem"
  button-height="0rem"
  class="z-1 w-10"
></toolcool-color-picker>

<ColorSpace></ColorSpace>
