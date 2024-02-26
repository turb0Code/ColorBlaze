<script>
    import autoAnimate from '@formkit/auto-animate';
    import { saveJson } from "$lib/scripts/exporting.js";
    import { Button } from "flowbite-svelte";
    import { ArrowDownToBraketSolid, ArrowUpFromBracketSolid } from "flowbite-svelte-icons";
    import { colors } from "$lib/scripts/color-stores.js";
    import { h, s, l, distance, complement, harmony, callUpdatePosition } from "$lib/scripts/stores.js";

    let files;

    const readJson = (file) => {
        if (!file) return;
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;

            try {
                const jsonData = JSON.parse(content);
                $colors = jsonData.colors;
                console.log($colors);
                h.set(jsonData.main.h);
                s.set(jsonData.main.s);
                l.set(jsonData.main.l);
                harmony.set(jsonData.harmony);
                complement.set(jsonData.complement);
                distance.set(jsonData.distance);
                callUpdatePosition.set(!$callUpdatePosition);
            } catch (error) { console.error('Error while reading JSON:', error); }
        };
        reader.readAsText(file);
    }

    $: if(files) {
        for (const file of files) {
            console.log(file);
            readJson(file);
        }
        files = null;
    }

    export const assignValues = (H, S, L) => {
        h.set(H);
        s.set(S);
        l.set(L);
    }
</script>

<Button on:click={() => document.getElementById("file-picker").click()} class="clear-left mt-[1.25rem] ml-2 mr-0">
    <ArrowDownToBraketSolid />
</Button>

<Button on:click={saveJson($colors)} class="clear-left mt-[1.25rem] ml-1 w-[4rem] h-[2.5rem] p-0" >
    <ArrowUpFromBracketSolid />
</Button>

<input type="file" style="display: none;" id="file-picker" bind:files/>
