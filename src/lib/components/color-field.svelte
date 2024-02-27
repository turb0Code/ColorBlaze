<script>
    import autoAnimate from '@formkit/auto-animate';

    import { l } from "$lib/scripts/stores.js";

    export let hex = "#0e483c";

    let textColor = "#efefef";

    l.subscribe(() => { textColor = $l >= 50 ? "#0e0e0f" : "#efefef"; });

    const copyColor = () => {
        navigator.clipboard.writeText(hex);
        alert("Copied the text: " + hex);
    }
</script>

<div
    class="border-2 border-gray-200 dark:border-gray-600 text-center text-xs h-[4.8rem] w-[4.8rem] lg:text-base lg:h-[7.1rem] lg:w-[7.1rem] rounded-md flex align-middle items-center justify-center clear-left mt-1"
    style="background-color: {hex};" use:autoAnimate
>
    <button class="p-0" style="color: {textColor}" on:click={copyColor}  use:autoAnimate>{hex}</button>
</div>
