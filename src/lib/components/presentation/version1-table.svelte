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

<div class="flex w-96 h-56 bg-white">

    <div class="absolute w-[22rem] lg:w-96 text-center text-3xl mt-2" style={`color: ${mainColor};`}>TITLE</div>

    <table class="w-80 h-40 border-2 border-solid border-white ml-4 lg:ml-8 mt-12 text-sm text-center">

        <tr class="border-2 border-solid border-white bg-gray-400" style={`color: ${accentColor};`}>
          <th>Header 1</th>
          <th class="border-2 border-solid border-white">Header 2</th>
          <th>Header 3</th>
        </tr>

        <tr class="border-2 border-solid border-white bg-gray-200" style={`color: ${accent2Color};`}>
          <td>Lorem ipsum</td>
          <td class="border-2 border-solid border-white">Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr class=" bg-gray-300 " style={`color: ${accent2Color};`}>
          <td>Lorem ipsum</td>
          <td class="border-2 border-solid border-white">Lorem ipsum</td>
          <td>Lorem ipsum</td>
        </tr>

        <tr class="border-2 border-solid border-white bg-gray-200" style={`color: ${accent2Color};`}>
            <td>Lorem ipsum</td>
            <td class="border-2 border-solid border-white">Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>

      </table>

</div>