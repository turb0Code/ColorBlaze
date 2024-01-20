<script>
import { l } from "$lib/scripts/stores.js";

export let hex = "#0e483c";

let textColor = "#efefef";

l.subscribe(() => { textColor = $l > 50 ? "#0e0e0f" : "#efefef"; });
</script>

<div class="border-2 border-dark dark:border-light text-center h-40 w-40 rounded-md flex align-middle items-center justify-center mt-4" style="background-color: {hex};">
    <button class="p-0" style="color: {textColor}">{hex}</button>
</div>