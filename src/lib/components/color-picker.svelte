<script lang="js">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import ColorSpace from "$lib/components/color-space.svelte";
  import { RgbToHsl } from "$lib/scripts/color-conversion.js";
  import { h, s, l, hex, callUpdatePosition } from "$lib/scripts/stores.js";
  import "$lib/scripts/toolcool-color-picker.min.js";

  let picker1;

  onMount(() => {
    picker1 = document.getElementById("color-picker-1");

    picker1.color = "rgb(20, 15, 43)";
    picker1.opened = true;

    console.log(picker1);                 // I HAVE NO IDEA HOW TO DO THIS... (refering to position changing)
                                          // ALL MY IDEAS ARE BAD OR FUCKING HARD
    picker1.color = "hsl(40, 42, 10)";    // NOW I HAVE IDEA
    picker1.opened = true;                // STUPID BUT WORKS... (YEYYY) [ACUTALLY 4 HOURS FOR 2 LINES OF CODE - FUCK ME!!!]

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

    callUpdatePosition.subscribe(() => {
        picker1.color = `hsl(${$h}, ${$s}, ${$l})`;
        picker1.opened = true;
      })
  });
</script>

<toolcool-color-picker
  id="color-picker-1"
  button-width="0rem"
  button-height="0rem"
  class="z-1"
></toolcool-color-picker>

<ColorSpace></ColorSpace>

<style>
  #color-picker-1 {
    --tool-cool-color-picker-popup-width: 14rem;
  }

  @media (max-width: 779px) {
    #color-picker-1 {
      --tool-cool-color-picker-popup-width: 20.3rem;
    }
  }
</style>
