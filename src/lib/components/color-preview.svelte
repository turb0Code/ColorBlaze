<script>
    import autoAnimate from '@formkit/auto-animate';
    import ColorField from "$lib/components/color-field.svelte";
    import { harmony, h, s, l, distance, complement } from "$lib/scripts/stores.js";
    import { writable } from "svelte/store";
    import { HslContrast, HslSoftContrast, HslDoubleContrast, HslAnalogous } from "$lib/scripts/color-palette.js";
    import { HslToHex } from "$lib/scripts/color-conversion.js";
    import { colors } from "$lib/scripts/color-stores.js";

    let hsl;
    let hex1 = writable("#000000");
    let hex2 = writable("#000000");
    let hex3 = writable("#000000");
    let hex4 = writable("#000000");

    const generateColors = () => {
        switch ($harmony) {
            case "mono":
                $hex1 = HslToHex($h, $s, $l);
                $colors = [$hex1];
                break;
            case "cont":
                hsl = HslContrast($h, $s, $l);
                $hex1 = HslToHex($h, $s, $l);
                $hex2 = HslToHex(hsl["H"], hsl["S"], hsl["L"]);
                $colors = [$hex1, $hex2];
                break;
            case "soft":
                hsl = HslSoftContrast($h, $s, $l, $distance);
                $hex1 = HslToHex($h, $s, $l);
                $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]);
                $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]);
                $colors = [$hex1, $hex2, $hex3];
                break;
            case "dbct":
                hsl = HslDoubleContrast($h, $s, $l, $distance);
                $hex1 = HslToHex($h, $s, $l);
                $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]);
                $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]);
                $hex4 = HslToHex(hsl[2]["H"], hsl[2]["S"], hsl[2]["L"]);
                $colors = [$hex1, $hex2, $hex3, $hex4];
                break;
            case "anlg":
                hsl = HslAnalogous($h, $s, $l, $distance, $complement);
                $hex1 = HslToHex($h, $s, $l);
                $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]);
                $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]);
                $colors = [$hex1, $hex2, $hex3];
                if ($complement) {
                    $hex4 = HslToHex(hsl[2]["H"], hsl[2]["S"], hsl[2]["L"]);
                    $colors = [$hex1, $hex2, $hex3, $hex4];
                }
                break;
        }
    }

    h.subscribe(() => { generateColors(); })
    s.subscribe(() => { generateColors(); })
    l.subscribe(() => { generateColors(); })
    harmony.subscribe(() => { generateColors(); });
    distance.subscribe(() => { generateColors(); });

</script>


<div class="flex flex-row mt-2 ml-3">
    <div class="mr-[0.5rem]">
        <ColorField hex={$hex1} ></ColorField>
    </div>

    {#if $harmony == "cont"}
        <ColorField hex={$hex2}></ColorField>
    {:else if $harmony == "soft"}
        <ColorField hex={$hex2}></ColorField>
        <ColorField hex={$hex3}></ColorField>
    {:else if $harmony == "dbct"}
        <div class="mr-[0.5rem]"> <ColorField hex={$hex2}></ColorField> </div> 
        <div class="mr-[0.5rem]"><ColorField hex={$hex3}></ColorField></div>    
        <ColorField hex={$hex4}></ColorField>
    {:else if $harmony == "anlg"}
        <div class="mr-[0.5rem]"><ColorField hex={$hex2}></ColorField></div>
        <div class="mr-[0.5rem]"><ColorField hex={$hex3}></ColorField></div>
        {#if $complement}
            <ColorField hex={$hex4}></ColorField>
        {/if}
    {/if}
</div>