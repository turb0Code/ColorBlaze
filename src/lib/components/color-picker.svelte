<script lang="js">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { Button } from "flowbite-svelte";

  let picker1;
  let picker;
  onMount(() => {
    picker1.opened = true;
    picker = writable(picker1);
    console.log(picker1.state.isPopupVisible);
    picker.subscribe(() => {
      console.log(picker1);
    });
  });

  import "$lib/scripts/toolcool-color-picker.min.js";
</script>

<toolcool-color-picker
  bind:this={picker1}
  id="color-picker-1"
  color="rgb(90, 60, 90)"
  button-width="0rem"
  button-height="0rem"
  class="z-1"
></toolcool-color-picker>

<Button color="alternative" class="mt-60">R</Button>
