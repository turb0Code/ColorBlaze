<!--
  @component

  This component allows to pick color.
 -->

<script lang="js">
  import { onMount } from "svelte";
  import ColorSpace from "$lib/components/color-space.svelte";
  import { RgbToHsl } from "$lib/scripts/color-conversion.js";
  import { h, s, l, hex, callUpdatePosition, harmony, distance, firstVisit } from "$lib/scripts/stores.js";
  import "$lib/scripts/toolcool-color-picker.min.js";

  let picker1;

  const randomHsl = () => {
    const hue = Math.floor(Math.random() *  360);
    const saturation = Math.floor(Math.random() *  30) + 41;
    const lightness = Math.floor(Math.random() *  80) + 21;

    $h = hue;
    $s = saturation;
    $l = lightness;
    $harmony = "dbct";
    $distance = Math.floor(Math.random() * 45) + 45;

    return `hsl(${hue}, ${saturation}, ${lightness})`;
  }

  onMount(() => {
    picker1 = document.getElementById("color-picker-1");

    if ($firstVisit) {
      picker1.color = randomHsl();
      picker1.opened = true;
      $firstVisit = false;
    }

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
