<script>
import Abstract from "./editable-svg/abstract.svelte";
import MilkSmile from "./editable-svg/smile1.svelte";
import Smile from "./editable-svg/smile2.svelte";
import Food from "./editable-svg/food.svelte";
import { colors } from "$lib/scripts/color-stores.js";

let mainColor = "#000000";
let accentColor = "#000000";
let accent2Color = "#000000";
let accent3Color = "#000000";

colors.subscribe(() => {
  mainColor = $colors[0];
  if (!$colors[1]) {
    accentColor = mainColor;
    accent2Color = mainColor;
    accent3Color = mainColor;
  }
  else if (!$colors[2]) {
    accentColor = $colors[1];
    accent2Color = mainColor;
    accent3Color = $colors[1];
  }
  else if (!$colors[3]) {
    accentColor = $colors[1];
    accent2Color = $colors[2];
    accent3Color = $colors[1];
  }
  else {
    accentColor = $colors[1];
    accent2Color = $colors[2];
    accent3Color = $colors[3];
  }
});
</script>

<div class="grid grid-rows-2 grid-cols-2 w-[30rem] h-[22.5rem] items-center justify-items-center justify-end ml-3">

  <div class="w-[13rem] h-[13rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-start">
    <Abstract mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Abstract>
  </div>

  <div class="w-40 flex justify-center h-40 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
    <MilkSmile mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></MilkSmile>
  </div>

  <div class="w-[13rem] flex justify-center h-[13rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-start">
    <Smile mainColor={mainColor} accentColor={accentColor} class="w-20"></Smile>
  </div>

  <div class="w-[13rem] flex justify-center h-[13rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-end">
    <Food mainColor={mainColor} class=""></Food>
  </div>

</div>