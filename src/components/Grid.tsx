import chroma from 'chroma-js';
import React from 'react';
import { COLOR_SCHEME, sizes } from '../app-config';
import styles from './Grid.module.scss';
import { GridCell } from './GridCell';
import { shuffleArray } from '../shuffleArray';

type size = keyof typeof sizes;

interface Props {
  row: number;
  col: number;
  size: size;
}

export const Grid = ({ row, col, size }: Props) => {
  const total = row * col;
  const shuffledArray = shuffleArray([...Array(total)].map((_, i) => i));

  /* color scale is generated once in the parent instead of n times for each GridCell */
  const colors = chroma.scale(COLOR_SCHEME).colors(total);

  if (total > 100) {
    throw new Error(`Number of items must be lower than 100, was ${total}`);
  }
  if (row < 1) {
    throw new Error(`'row' should be a positive integer, was ${row}`);
  }
  if (col < 1) {
    throw new Error(`'col' should be a positive integer, was ${col}`);
  }

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${col}, min-content)`,
        fontSize: `${sizes[size]}px`,
      }}
    >
      {shuffledArray.map(value => (
        <GridCell key={value} value={value} color={colors[value]} />
      ))}
    </div>
  );
};
