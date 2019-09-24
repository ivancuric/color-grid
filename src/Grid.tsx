import React from 'react';
import { shuffleArray } from './shuffleArray';
import { GridCell } from './GridCell';
import { sizes } from './config';

type size = keyof typeof sizes;

interface GridProps {
  row: number;
  col: number;
  size: size;
}

export const Grid = ({ row, col, size }: GridProps) => {
  const total = row * col;
  const integerArray = [...Array(total)].map((_, i) => i + 1);
  const shuffledArray = shuffleArray(integerArray);

  try {
    if (total > 100) {
      throw new Error(`Number of items must be lower than 100, was ${total}`);
    }
    if (row < 1) {
      throw new Error(`Row should be a positive integer, was ${row}`);
    }
    if (col < 1) {
      throw new Error(`Row should be a positive integer, was ${col}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  return (
    <div
      className={'grid'}
      style={{
        gridTemplateColumns: `repeat(${col}, min-content)`,
        fontSize: `${sizes[size]}px`,
      }}
    >
      {shuffledArray.map(value => (
        <GridCell key={value} value={value} total={total} />
      ))}
    </div>
  );
};
