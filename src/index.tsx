import * as React from 'react';
import { render } from 'react-dom';
// @ts-ignore codesandbox being wonky
import chroma from 'chroma-js';
import { shuffleArray } from './shuffleArray';

import './styles.scss';

const LENGTH = 20;
const SIZE = 10;
const COLOR_SCHEME = 'Spectral';

const getColorByValue = (x: number): string =>
  chroma
    .scale(COLOR_SCHEME)
    .domain([0, LENGTH])(x)
    .hex();

const array = [...Array(LENGTH)].map((_, i) => ({
  value: i + 1,
  color: getColorByValue(i),
}));

function App() {
  return (
    <div className="App">
      {array.map(x => (
        <div
          key={x.value}
          style={{
            width: `${SIZE}px`,
            height: `${SIZE}px`,
            background: x.color,
          }}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
