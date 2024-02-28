<!--
  @component

  It calls calculations for each color space and displays values in different formats.
-->

<script>
  import { Button } from "flowbite-svelte";
  import { HslToRgb, HslToCmy, HslToYuv, HslToYiq, HslToXyz, HslToLab, HslToLuv, RgbToHsl } from "$lib/scripts/color-conversion.js";
  import { writable, derived } from "svelte/store";
  import { h, s, l, space } from "$lib/scripts/stores.js";
  import { Select, Label, Input } from "flowbite-svelte";
  import ColorConverter from 'simple-color-converter';
  import { onMount } from "svelte";
  import { callHslToNcs } from "$lib/scripts/ncs.js";

  let isMobile = false;
  let rgb = writable({});
  let cmy = writable({});
  let yuv = writable({});
  let result = writable({ A: 0, B: 0, C: 0 });
  let ral, ralCode, ralName, tmp;
  let ncs = "NCS COLOR"
  let currentDate = new Date();
  let time = currentDate.getTime();
  let options = [
    { value: "yuv", name: "YUV" },
    { value: "yiq", name: "YIQ" },
    { value: "xyz", name: "XYZ" },
    { value: "lab", name: "LAB" },
    { value: "luv", name: "LUV" },
    { value: "ral", name: "RAL" },
    { value: "ncs", name: "NCS" },
  ];

  let hsl = derived([h, s, l], ([$h, $s, $l]) => {
    return { h: $h, s: $s, l: $l };
  });

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
      options = [
        { value: "hsl", name: "HSL" },
        { value: "cmy", name: "CMY" },
        { value: "yuv", name: "YUV" },
        { value: "yiq", name: "YIQ" },
        { value: "xyz", name: "XYZ" },
        { value: "lab", name: "LAB" },
        { value: "luv", name: "LUV" },
        { value: "ral", name: "RAL" },
        { value: "ncs", name: "NCS" },
      ];
    }
  });

  const updateColorValues = () => {
    $rgb["R"] = $rgb["R"] >=  0 && $rgb["R"] <=  255 ? $rgb["R"] :  0;
    $rgb["G"] = $rgb["G"] >=  0 && $rgb["G"] <=  255 ? $rgb["G"] :  0;
    $rgb["B"] = $rgb["B"] >=  0 && $rgb["B"] <=  255 ? $rgb["B"] :  0;

    try {
      $rgb["R"] = parseInt($rgb["R"]);
      $rgb["G"] = parseInt($rgb["G"]);
      $rgb["B"] = parseInt($rgb["B"]);
      let tmpHsl = RgbToHsl($rgb["R"], $rgb["G"], $rgb["B"]);
      $h = tmpHsl["H"];
      $s = tmpHsl["S"];
      $l = tmpHsl["L"];
    } catch (e) { return; }
  }

  const checkDelay = (h, s, l) => {
    currentDate = new Date();
    let diff = currentDate.getTime() - time;
    time = currentDate.getTime();
    if (diff >= 700) {
      updateColorSpaces(h, s, l, true);
    }
    else {
      updateColorSpaces(h, s, l, false);
    }
  }

  const updateColorSpaces = async (h, s, l, calcNcs) => {
    switch ($space) {
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
      case "ral":
        ral = new ColorConverter({
          hsl: {h: h, s: s, l: l},
          to: 'ral'
        });
        ralCode = ral.color.ral;
        ralName = ral.color.name;
        break;
      case "hsl":
        tmp = HslToCmy(h, s, l);
        result.set({ A: tmp["C"], B: tmp["M"], C: tmp["Y"] });
        break;
      case "cmy":
        result.set({ A: h, B: s, C: l });
        break;
      case "ncs":
        if (calcNcs) {
          ncs = await callHslToNcs(h, s, l);
        }
        break;
    }
  };

  hsl.subscribe(({ h, s, l }) => {
    rgb.set(HslToRgb(h, s, l));
    cmy.set(HslToCmy(h, s, l));
    yuv.set(HslToYuv(h, s, l));
    checkDelay(h, s, l);
  });
</script>

<div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-[12.3rem] lg:mt-[12.3rem] justify-evenly glass rounded-md pb-1">
  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">R</div>
    <Input type="text" bind:value={$rgb["R"]} on:change={updateColorValues} class="w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center"/>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">G</div>
    <Input type="text" bind:value={$rgb["G"]} on:change={updateColorValues} class="w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center"/>
  </div>

  <div class="text-center p-1">
    <div class="text-[0.8rem] font-bold">B</div>
    <Input type="text" bind:value={$rgb["B"]} on:change={updateColorValues} class="w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center"/>
  </div>
</div>

{#if !isMobile}
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
{/if}

<Label for="countries" class="w-[21.3rem] lg:w-[14.5rem] mt-4">Color space</Label>
<Select
  id="countries"
  class="mt-2 w-[21.3rem] lg:w-[14.5rem] glass"
  bind:value={$space}
  on:change={updateColorSpaces($h, $s, $l)}
  placeholder=""
>
  {#each options as { value, name }}
    <option {value} class="h-8 bg-light dark:bg-dark">
      {name}
    </option>
  {/each}
</Select>



{#if $space!="ral" && $space!="ncs"}
  <div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly">
    <Button color="alternative" class="w-16 glass">{$result["A"]}</Button>
    <Button color="alternative" class="w-16 glass">{$result["B"]}</Button>
    <Button color="alternative" class="w-16 glass">{$result["C"]}</Button>
  </div>
{:else if $space=="ral"}
  <div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly glass h-10 items-center rounded-md">
    <div>{ralCode}</div>
    <div>{ralName}</div>
  </div>
{:else if $space=="ncs"}
  <div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly glass h-10 items-center rounded-md">
    <div>{ncs}</div>
  </div>
{/if}
