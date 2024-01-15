<script>
  import { Button } from "flowbite-svelte";
  import {
    HslToRgb,
    HslToCmy,
    HslToYuv,
  } from "$lib/scripts/color-conversion.js";
  import { writable, derived } from "svelte/store";
  import { h, s, l } from "$lib/scripts/stores.js";
  import { Select, Label } from "flowbite-svelte";
  let selected;
  let countries = [
    { value: "yuv", name: "YUV" },
    { value: "yiq", name: "YIQ" },
    { value: "xyz", name: "XYZ" },
    { value: "xyz", name: "LAB" },
    { value: "xyz", name: "LUV" },
    { value: "xyz", name: "XYZ" },
  ];

  let rgb = writable({});
  let cmy = writable({});
  let yuv = writable({});

  let hsl = derived([h, s, l], ([$h, $s, $l]) => {
    return { h: $h, s: $s, l: $l };
  });

  hsl.subscribe(({ h, s, l }) => {
    rgb.set(HslToRgb(h, s, l));
    cmy.set(HslToCmy(h, s, l));
    yuv.set(HslToYuv(h, s, l));
  });
</script>

<div class="w-[14.5rem] flex flex-row mt-[12.5rem] justify-evenly">
  <Button color="alternative" class="w-16">{$rgb["R"]}</Button>
  <Button color="alternative" class="w-16">{$rgb["G"]}</Button>
  <Button color="alternative" class="w-16">{$rgb["B"]}</Button>
</div>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly">
  <Button color="alternative" class="w-16">{$cmy["C"]}</Button>
  <Button color="alternative" class="w-16">{$cmy["M"]}</Button>
  <Button color="alternative" class="w-16">{$cmy["Y"]}</Button>
</div>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly">
  <Button color="alternative" class="w-16">{$h}</Button>
  <Button color="alternative" class="w-16">{$s}</Button>
  <Button color="alternative" class="w-16">{$l}</Button>
</div>

<Label for="countries" class="w-[14.5rem] mt-4">Select an option</Label>
<Select
  id="countries"
  class="mt-2 w-[14.5rem]"
  bind:value={selected}
  placeholder=""
>
  {#each countries as { value, name }}
    <option {value} class="h-8">
      {name}
      <div class="h-4 flex"></div>
      <div></div>
      <div></div>
    </option>
  {/each}
</Select>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly">
  <Button color="alternative" class="w-16">{$yuv["Y"]}</Button>
  <Button color="alternative" class="w-16">{$yuv["U"]}</Button>
  <Button color="alternative" class="w-16">{$yuv["V"]}</Button>
</div>
