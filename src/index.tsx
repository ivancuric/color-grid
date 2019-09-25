import React from 'react';
import { render } from 'react-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { Grid } from './Grid';

import './styles.scss';

const App = () => (
  <ErrorBoundary>
    <Grid row={5} col={60} size={'medium'} />
  </ErrorBoundary>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
