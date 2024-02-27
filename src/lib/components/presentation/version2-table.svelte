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

<div class="flex w-[22rem] lg:w-96 h-56 rounded-md" style={`background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`}>

    <div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2" style={`color: ${mainColor}; border-color: ${accentColor};`}>TITLE</div>

    <table class="w-80 h-40 border-2 border-solid border-black ml-4 lg:ml-8 mt-14 text-sm text-center">

        <tr class="border-2 border-solid border-black" style={`background-color: ${accentColor}; color: ${mainColor};`}>
          <th>Header 1</th>
          <th class="border-2 border-solid border-accent">Header 2</th>
          <th>Header 3</th>
        </tr>

        <tr class="border-2 border-solid border-black" style={`background-color: ${accent3Color}; color: ${accentColor};`}>
          <td>Lorem ipsum</td>
          <td class="border-2 border-solid border-accent">Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr style={`background-color: ${mainColor}; color: ${accentColor};`}>
          <td>Lorem ipsum</td>
          <td class="border-2 border-solid border-accent">Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr class="border-2 border-solid border-accent" style={`background-color: ${accent3Color}; color: ${accentColor};`}>
            <td>Lorem ipsum</td>
            <td class="border-2 border-solid border-accent">Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>

      </table>

</div>