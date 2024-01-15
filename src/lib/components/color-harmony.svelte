<script>
  import { Select, Label } from "flowbite-svelte";
  let selected;
  let countries = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" },
  ];
</script>

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
