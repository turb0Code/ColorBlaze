// function to generate contrast color to provided color
export const HslContrast = (h, s, l) => {
    let hue = (h + 180) % 360;
    return {"H": hue, "S": s, "L": l}
}

//--------------

// fuction to generate two colors evenly distant from contrast
export const HslSoftContrast = (h, s, l, distance) => {
    let contrast = HslContrast(h, s, l);
    let hue1 = (contrast["H"] + distance/2) % 360;
    let hue2 = (contrast["H"] - distance/2) % 360;
    return [{"H": Math.round(hue1), "S": Math.round(s), "L": Math.round(l)}, {"H": Math.round(hue2), "S": Math.round(s), "L": Math.round(l)}]
}

//--------------

// generates two colors evenly distant from contrast and color in same distance from provided
export const HslDoubleContrast = (h, s, l, distance) => {
    let mainColor = {"H": h, "S": s, "L": l};
    let hue1 = (h + distance) % 360;
    let secondColor = {"H": hue1, "S": s, "L": l};
    let mainContrast = HslContrast(h, s, l);
    let secondContrast = HslContrast(secondColor["H"], s, l);
    return [mainContrast, secondColor, secondContrast]
}

//--------------

// generates two color evelny distant from provided color and optionally contrast to provided
export const HslAnalogous = (h, s, l, distance, contrast) => {
    let mainColor = {"H": h, "S": s, "L": l};
    let hue1 = (h + distance) % 360;
    let hue2 = (h - distance) % 360;
    let secondColor = {"H": hue1, "S": s, "L": l}
    let thirdColor = {"H": hue2, "S": s, "L": l}
    if (contrast) {
        let mainContrast = HslContrast(h, s, l);
        return [secondColor, thirdColor, mainContrast]
    }
    return [secondColor, thirdColor]
}
