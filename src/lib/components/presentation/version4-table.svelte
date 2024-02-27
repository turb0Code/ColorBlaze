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

<div class="flex w-[22rem] lg:w-96 h-56 rounded-md" style={`background-color: ${accentColor}; border: solid 8px ${accent2Color};`}>

    <div class="absolute w-28 ml-[7rem] lg:ml-32 text-center text-3xl mt-2" style={`border: solid 4px ${mainColor}; color: ${mainColor};`}>TITLE</div>

    <table class="w-72 h-36 border-4 border-accent ml-6 lg:ml-10 mt-14 text-sm text-center " style={`border: solid 4px ${mainColor};`}>

        <tr style={`border: solid 4px ${mainColor}; background-color: ${accentColor}; color: ${mainColor};`}>
          <th>Header 1</th>
          <th style={`border: solid 4px ${mainColor};`}>Header 2</th>
          <th>Header 3</th>
        </tr>

        <tr class="border-4 border-accent bg-accent2" style={`border: solid 4px ${mainColor}; background-color: ${accent3Color}; color: ${accentColor};`}>
          <td>Lorem ipsum</td>
          <td style={`border: solid 4px ${mainColor};`}>Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr class=" bg-accent4 " style={`border: solid 4px ${mainColor}; background-color: ${mainColor}; color: ${accentColor};`}>
          <td>Lorem ipsum</td>
          <td style={`border: solid 4px ${mainColor};`}>Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr class="border-4 border-accent bg-accent2" style={`border: solid 4px ${mainColor}; background-color: ${accent3Color}; color: ${accentColor};`}>
            <td>Lorem ipsum</td>
            <td style={`border: solid 4px ${mainColor};`}>Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>

      </table>

</div>