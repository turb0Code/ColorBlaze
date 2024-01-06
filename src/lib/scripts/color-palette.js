const HslContrast = (h, s, l) => {
    let hue = (h + 180) % 360;
    return {"H": hue, "S": s, "L": l}
}

//--------------

const HslSoftContrast = (h, s, l, distance) => {
    let contrast = HslContrast(h, s, l);
    let hue1 = (contrast["H"] + distance/2) % 360;
    let hue2 = (contrast["H"] - distance/2) % 360;
    return [{"H": hue1, "S": s, "L": l}, {"H": hue2, "S": s, "L": l}]
}

//--------------

const HslDoubleContrast = (h, s, l, distance) => {
    let mainColor = {"H": h, "S": s, "L": l};
    let hue1 = (h + distance) % 360;
    let secondColor = {"H": hue1, "S": s, "L": l};
    let mainContrast = HslContrast(h, s, l);
    let secondContrast = HslContrast(secondColor["H"], s, l);
    return [mainColor, mainContrast, secondColor, secondContrast]
}

//--------------

const HslAnalogous = (h, s, l, distance, contrast) => {
    let mainColor = {"H": h, "S": s, "L": l};
    let hue1 = (h + distance) % 360;
    let hue2 = (h - distance) % 360;
    let secondColor = {"H": hue1, "S": s, "L": l}
    let thirdColor = {"H": hue2, "S": s, "L": l}
    if (contrast) {
        let mainContrast = HslContrast(h, s, l);
        return [mainColor, secondColor, thirdColor, mainContrast]
    }
    return [mainColor, secondColor, thirdColor]
}
