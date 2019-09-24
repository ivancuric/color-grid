import React, { useState } from "react";
import chroma from "chroma-js";

import { COLOR_SCHEME } from "./config";

// https://www.w3.org/TR/WCAG20-TECHS/G18.html
const getTextColor = (color: string) => {
  if (chroma(color).luminance() > 0.4) {
    return "#000";
  }

  return "#fff";
};

const getColorByValue = (value: number, total: number): string =>
  chroma
    .scale(COLOR_SCHEME)
    .domain([0, total])(value)
    .hex();

export const GridCell = ({ value, total }) => {
  const baseColor = getColorByValue(value, total);
  const textColor = getTextColor(baseColor);
  const hoverColor = chroma(baseColor).set("lab.l", "*1.1");

  const [isVisible, setIsVisible] = useState(false);

  return (
    <button onClick={() => setIsVisible(!isVisible)} className={"gridCell"}>
      {isVisible ? (
        <div
          className={"contents"}
          style={{
            "--hoverColor": hoverColor,
            "--defaultColor": baseColor,
            color: textColor
          }}
        >
          <div className={"value"}>{value}</div>
        </div>
      ) : (
        <div className={"visuallyHidden"}>Click to reveal</div>
      )}
    </button>
  );
};
