import { JSDOM } from "jsdom";
import { H as HslToCmyk } from "../../../../chunks/color-conversion.js";
async function POST({ request }) {
  const data = await request.json();
  const { h, s, l } = data;
  let ncsColor = await HslToNcs(h, s, l);
  return new Response(JSON.stringify({
    color: ncsColor.toString()
  }, {
    status: 200
  }));
}
const fetchAndFindColor = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dom = new JSDOM(await response.text());
    const document = dom.window.document;
    const ncsRegex = /NCS Color value: <b>(.*?)<\/b>/;
    const ncsMatch = document.body.innerHTML.match(ncsRegex);
    if (ncsMatch && ncsMatch[1]) {
      return ncsMatch[1];
    } else {
      throw new Error("NCS color value not found");
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
};
const HslToNcs = (h, s, l) => {
  let cmyk = HslToCmyk(h, s, l);
  let c = cmyk["C"];
  let m = cmyk["M"];
  let y = cmyk["Y"];
  let k = cmyk["K"];
  const url = `https://cmyktool.com/cmyk-to-ncs-conversion/${c}-${m}-${y}-${k}/`;
  return fetchAndFindColor(url).then((colorValue) => {
    if (colorValue) {
      return colorValue;
    } else {
      console.log("No NCS color value found or an error occurred during fetch.");
      return "Failed.";
    }
  });
};
export {
  POST
};
