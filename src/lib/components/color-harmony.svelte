<script>
  import { Select, Label, Input, Helper } from "flowbite-svelte";
  
  let selected;
  let countries = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ]; 
</script>

<div class="flex felx-row">
  <div class="mr-1">
    <Label for="countries" class="w-[14.5rem]">Select an option</Label>
    <Select
      id="countries"
      class="w-[14.5rem]"
      bind:value={selected}
      placeholder=""
    >
      {#each countries as { value, name }}
        <option {value} class="h-8">
          {name}
        </option>
      {/each}
    </Select>
  </div>

  <div class="ml-1">
    <Label class="space-y-2 w-24">
      <span>Distance</span>
    </Label>
    <Input type="number" placeholder="Distance" size="md" class="w-24" />
  </div>
</div>
