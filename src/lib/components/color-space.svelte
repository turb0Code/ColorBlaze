<script>
  import { Button } from "flowbite-svelte";
  import {
    HslToRgb,
    HslToCmy,
    HslToYuv,
    HslToYiq,
    HslToXyz,
    HslToLab,
    HslToLuv,
  } from "$lib/scripts/color-conversion.js";
  import { writable, derived } from "svelte/store";
  import { h, s, l } from "$lib/scripts/stores.js";
  import { Select, Label } from "flowbite-svelte";

  let selected;
  let countries = [
    { value: "yuv", name: "YUV" },
    { value: "yiq", name: "YIQ" },
    { value: "xyz", name: "XYZ" },
    { value: "lab", name: "LAB" },
    { value: "luv", name: "LUV" },
  ];

  let rgb = writable({});
  let cmy = writable({});
  let yuv = writable({});
  let result = writable({ A: 0, B: 0, C: 0 });

  let tmp;

  let hsl = derived([h, s, l], ([$h, $s, $l]) => {
    return { h: $h, s: $s, l: $l };
  });

  const updateColorSpaces = (h, s, l) => {
    switch (selected) {
      case "yuv":
        tmp = HslToYuv(h, s, l);
        result.set({ A: tmp["Y"], B: tmp["U"], C: tmp["V"] });
        break;
      case "yiq":
        tmp = HslToYiq(h, s, l);
        result.set({ A: tmp["Y"], B: tmp["I"], C: tmp["Q"] });
        break;
      case "xyz":
        tmp = HslToXyz(h, s, l);
        result.set({ A: tmp["X"], B: tmp["Y"], C: tmp["Z"] });
        break;
      case "lab":
        tmp = HslToLab(h, s, l);
        result.set({ A: tmp["L"], B: tmp["A"], C: tmp["B"] });
        break;
      case "luv":
        tmp = HslToLuv(h, s, l);
        result.set({ A: tmp["L"], B: tmp["U"], C: tmp["V"] });
        break;
    }
  };

  hsl.subscribe(({ h, s, l }) => {
    rgb.set(HslToRgb(h, s, l));
    cmy.set(HslToCmy(h, s, l));
    yuv.set(HslToYuv(h, s, l));

    updateColorSpaces(h, s, l);
  });
</script>

<div class="w-[14.5rem] flex flex-row mt-[12.3rem] justify-evenly glass rounded-md pb-1">
  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">R</div>
    <Button color="alternative" class="w-16">{$rgb["R"]}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">G</div>
    <Button color="alternative" class="w-16">{$rgb["G"]}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">B</div>
    <Button color="alternative" class="w-16">{$rgb["B"]}</Button>
  </div>
</div>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly glass rounded-md pb-1">
  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">H</div>
    <Button color="alternative" class="w-16">{$h}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">S</div>
    <Button color="alternative" class="w-16">{$s}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">L</div>
    <Button color="alternative" class="w-16">{$l}</Button>
  </div>
</div>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly glass rounded-md pb-1">
  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">C</div>
    <Button color="alternative" class="w-16">{$cmy["C"]}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">M</div>
    <Button color="alternative" class="w-16">{$cmy["M"]}</Button>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">Y</div>
    <Button color="alternative" class="w-16">{$cmy["Y"]}</Button>
  </div>
</div>

<Label for="countries" class="w-[14.5rem] mt-4">Select an option</Label>
<Select
  id="countries"
  class="mt-2 w-[14.5rem] glass"
  bind:value={selected}
  on:change={updateColorSpaces($h, $s, $l)}
  placeholder=""
>
  {#each countries as { value, name }}
    <option {value} class="h-8">
      {name}
      <div class="h-4 flex glass"></div>
      <div></div>
      <div></div>
    </option>
  {/each}
</Select>

<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly">
  <Button color="alternative" class="w-16">{$result["A"]}</Button>
  <Button color="alternative" class="w-16">{$result["B"]}</Button>
  <Button color="alternative" class="w-16">{$result["C"]}</Button>
</div>
