<script>
    import { saveJson } from "$lib/scripts/exporting.js";
    import { Button } from "flowbite-svelte";
    import { ArrowDownToBraketSolid, ArrowUpFromBracketSolid } from "flowbite-svelte-icons";
    import { colors } from "$lib/scripts/color-stores.js";
</script>

<Button on:click={saveJson($colors)} class="clear-left mt-[1.25rem] ml-2 mr-0">
    <ArrowDownToBraketSolid />
</Button>

<Button class="clear-left mt-[1.25rem] ml-1">
    <ArrowUpFromBracketSolid />
</Button>
