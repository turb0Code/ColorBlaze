<script>
  import { Select, Label, Input, Checkbox } from "flowbite-svelte";
  import { distance, harmony, complement } from "$lib/scripts/stores.js";

  let selected;
  let localDistance = 0;
  let opened = false;
  let colorTypes = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ];

  const distanceLimit = (event) => {
    let value = parseInt(event.target.value);
    switch (selected) {
      case "soft":
        value = value < 0 ? 0 : value;
        value = value > 60 ? 60 : value;
        break;
      case "dbct":
        value = value < 0 ? 0 : value;
        value = value > 90 ? 90 : value;
        break;
      case "anlg":
        value = value < 0 ? 0 : value;
        value = value > 60 ? 60 : value;
        break;
    }
    if (value < 0 || isNaN(value)) {
      value = 0;
    } else if (value > 360) {
      value = 360;
    }
    event.target.value = value;
    distance.set(value);
    updateColorHarmony();
  };

  const updateColorHarmony = () => {
    if (selected == "soft" || selected == "dbct" || selected == "anlg")
      opened = true;
    else opened = false;
    harmony.set(selected);
  }
</script>

<div class="flex felx-row float-left">
  <div class="mr-1">
    <Label for="countries" class="w-[14.5rem]">Select color harmony</Label>
    <Select
      id="countries"
      class="w-[14.5rem] glass"
      bind:value={selected}
      placeholder=""
      on:change={updateColorHarmony}
    >
      {#each colorTypes as { value, name }}
        <option {value} class="h-8 bg-light dark:bg-dark hover:bg-main">
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
        class="w-24 glass"
        max="360"
        on:input={distanceLimit}
        bind:value={localDistance}
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

  {#if selected=="anlg"}
    <Checkbox class="h-9 w-9 mt-[0.9rem] ml-1 mr-1" bind:checked={$complement}></Checkbox>
  {/if}
</div>
