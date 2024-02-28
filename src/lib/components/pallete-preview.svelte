<!--
  @component

  Small palette preview displayed on Header.
-->

<script>
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
    accentColor = mainColor;
    accent2Color = $colors[1];
    accent3Color = $colors[1];
  }
  else if (!$colors[3]) {
    accentColor = $colors[1];
    accent2Color = $colors[1];
    accent3Color = $colors[2];
  }
  else {
    accentColor = $colors[1];
    accent2Color = $colors[2];
    accent3Color = $colors[3];
  }
});
</script>

<div class="w-40 h-10 flex flex-row">
    <div class="w-10 h-10 rounded-l-md" style={`background-color: ${mainColor}`}></div>
    <div class="w-10 h-10" style={`background-color: ${accentColor}`}></div>
    <div class="w-10 h-10" style={`background-color: ${accent2Color}`}></div>
    <div class="w-10 h-10 rounded-r-md" style={`background-color: ${accent3Color}`}></div>
</div>