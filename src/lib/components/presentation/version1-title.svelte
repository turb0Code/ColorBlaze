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

<div class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center bg-white rounded-md">

    <div class="text-5xl" style={`color: ${mainColor};`}>TITLE</div>

    <div class="flex" style={`color: ${accentColor};`}>Subtitle</div>

</div>