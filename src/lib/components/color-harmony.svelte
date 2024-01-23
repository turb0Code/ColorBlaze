<script>
  import { Select, Label, Input } from "flowbite-svelte";
  import { HslContrast, HslSoftContrast, HslDoubleContrast, HslAnalogous } from "$lib/scripts/color-palette.js";
  import { h, s, l } from "$lib/scripts/stores.js";

  let selected;
  let distance = 0;
  let opened = false;
  let colors = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ];

  const distanceLimit = (event) => {
    let value = parseInt(event.target.value);
    if (value < 0 || isNaN(value)) {
      value = 0;
    } else if (value > 360) {
      value = 360;
    }
    event.target.value = value;
    updateColorHarmony();
  };

  const updateColorHarmony = () => {
    if (selected == "soft" || selected == "dbct" || selected == "anlg")
      opened = true;
    else opened = false;

    switch (selected) {
      case "cont": console.log(HslContrast($h, $s, $l)); break;
      case "soft": console.log(HslSoftContrast($h, $s, $l, distance)); break;
      case "dbct": console.log(HslDoubleContrast($h, $s, $l, distance)); break;
      case "anlg": console.log(HslAnalogous($h, $s, $l, distance, true)); break;
    }
  };
</script>

<div class="flex felx-row float-left">
  <div class="mr-1">
    <Label for="countries" class="w-[14.5rem]">Select an option</Label>
    <Select
      id="countries"
      class="w-[14.5rem]"
      bind:value={selected}
      placeholder=""
      on:change={updateColorHarmony}
    >
      {#each colors as { value, name }}
        <option {value} class="h-8">
          {name}
        </option>
      {/each}
    </Select>
  </div>

  {#if opened}
    <div class="ml-1">
      <Label class="space-y-2 w-24">
        <span>Distance</span>
      </Label>
      <Input
        type="number"
        placeholder="Distance"
        size="md"
        class="w-24"
        max="360"
        on:input={distanceLimit}
        bind:value={distance}
      />
    </div>
  {:else}
    <div class="ml-1">
      <Label class="space-y-2 w-24 text-slate-500">
        <span>Distance</span>
      </Label>
      <Input
        disabled
        type="number"
        placeholder="Distance"
        size="md"
        class="w-24"
      />
    </div>
  {/if}
</div>
