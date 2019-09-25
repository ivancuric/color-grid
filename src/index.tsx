import React from 'react';
import { render } from 'react-dom';
import { Grid } from './Grid';

const App = () => <Grid row={5} col={5} size={'medium'} />;

const rootElement = document.getElementById('root');
render(<App />, rootElement);
