<script>
  import { Select, Label, Input, Checkbox } from "flowbite-svelte";
  import { distance, harmony, complement, h } from "$lib/scripts/stores.js";

  let opened = false;
  let colorTypes = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ];

  const distanceLimit = async (event) => {
    let value = parseInt(event.target.value);
    if (value == 420)
    {
      $h = 0;
      for (let i = 0; i < 1080; i++)
      {
        if (i %3 == 0) { $h++; }
        await new Promise(resolve => setTimeout(resolve, 0.1));
      }
    }
    switch ($harmony) {
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
    if ($harmony == "soft" || $harmony == "dbct" || $harmony == "anlg")
      opened = true;
    else opened = false;
  }

  distance.subscribe(() => updateColorHarmony());
</script>

<div class="flex felx-row float-left">
  <div class="mr-1">
    <Label for="countries" class="w-[14.5rem]">Select color harmony</Label>
    <Select
      id="countries"
      class="w-[14.5rem] glass"
      bind:value={$harmony}
      placeholder=""
      on:change={updateColorHarmony}
    >
      {#each colorTypes as { value, name }}
        <option {value} class="h-8 bg-light hover:bg-main dark:bg-dark">
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
        bind:value={$distance}
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

  {#if $harmony=="anlg"}
    <Checkbox class="h-9 w-9 mt-[0.9rem] ml-1 mr-1" bind:checked={$complement}></Checkbox>
  {/if}
</div>
