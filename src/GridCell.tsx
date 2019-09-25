import chroma from 'chroma-js';
import React, { useState } from 'react';
import styles from './GridCell.module.scss';

// https://www.w3.org/TR/WCAG20-TECHS/G18.html
const getTextColor = (color: string) => {
  if (chroma(color).luminance() > 0.4) {
    return '#000';
  }

  return '#fff';
};

interface Props {
  value: number;
  color: string;
}

export const GridCell = ({ value, color }: Props) => {
  const baseColor = color;
  const textColor = getTextColor(baseColor);
  // lighten the color
  const hoverColor = chroma(baseColor).set('lab.l', '*1.1');

  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      onClick={() => setIsVisible(!isVisible)}
      className={styles.gridCell}
    >
      {isVisible ? (
        <div
          className={styles.contents}
          style={
            {
              '--hoverColor': hoverColor,
              '--defaultColor': baseColor,
              color: textColor,
            } as React.CSSProperties
          }
        >
          <div className={styles.value}>{value}</div>
        </div>
      ) : (
        <div className={styles.visuallyHidden}>Click to reveal</div>
      )}
    </button>
  );
};
