<script>
  import { Select, Label, Input, Helper } from "flowbite-svelte";
  import { writable } from "svelte/store";
  import {HslContrast} from "$lib/scripts/color-palette.js";
  import {HslSoftContrast} from "$lib/scripts/color-palette.js"
  import {HslDoubleContrast} from "$lib/scripts/color-palette.js"
  import {HslAnalogous} from "$lib/scripts/color-palette.js"
  import {h, s, l} from "$lib/scripts/stores.js"

  let selected;
  let distance = 0 ;
  let countries = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ];
  let opened = false;

  const distanceLimit = (event) => {
    let value = parseInt(event.target.value);
    if (value < 0 || isNaN(value)) {
      value = 0;
    } else if (value > 360) {
      value = 360;
    }
    event.target.value = value;
  };

  const updateColorHarmony = () => {
    if (selected == "soft" || selected == "dbct" || selected == "anlg")
      opened = true;
    else opened = false;

    if (selected == "soft"){
      console.log(HslSoftContrast($h, $s, $l, distance))
    }
    else if (selected == "dbct"){
      console.log(HslDoubleContrast($h, $s, $l, distance))
    }
    else if(selected == "anlg"){
      console.log(HslAnalogous($h, $s, $l, distance, true))
    }
  };

</script>

<div class="flex felx-row">
  <div class="mr-1">
    <Label for="countries" class="w-[14.5rem]">Select an option</Label>
    <Select
      id="countries"
      class="w-[14.5rem]"
      bind:value={selected}
      placeholder=""
      on:change={updateColorHarmony}
    >
      {#each countries as { value, name }}
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
