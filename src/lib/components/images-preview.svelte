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

<div class="grid grid-rows-2 grid-cols-2 w-[27rem] items-center justify-items-center">

  <div class="w-40">
    <Abstract mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Abstract>
  </div>

  <div class="w-40 flex justify-center">
    <MilkSmile mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></MilkSmile>
  </div>

  <div class="w-40 flex justify-center">
    <Smile mainColor={mainColor} accentColor={accentColor} class="w-20"></Smile>
  </div>

  <div class="w-40 flex justify-center">
    <Food mainColor={mainColor} class="w-20"></Food>
  </div>

</div>