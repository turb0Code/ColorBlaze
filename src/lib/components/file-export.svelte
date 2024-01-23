<script>
    import { saveJson } from "$lib/scripts/exporting.js";
    import { Button } from "flowbite-svelte";
    import { ArrowDownToBraketSolid, ArrowUpFromBracketSolid } from "flowbite-svelte-icons";
</script>

<Button on:click={saveJson} class="clear-left mt-[1.25rem] ml-2 mr-0">
    <ArrowDownToBraketSolid />
</Button>

<Button class="clear-left mt-[1.25rem] ml-1">
    <ArrowUpFromBracketSolid />
</Button>
