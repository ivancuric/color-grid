import React from 'react';
import { render } from 'react-dom';
import { Grid } from './components/Grid';

render(
  <Grid row={5} col={5} size={'medium'} />,
  document.getElementById('root'),
);
