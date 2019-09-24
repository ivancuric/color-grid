import React from 'react';
import { render } from 'react-dom';
import { Grid } from './Grid';

import './styles.scss';

function App() {
  return (
    <div className={'App'}>
      <Grid row={5} col={6} size={'medium'} />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
