import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Fullpage from '@components/FullPage';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={{}}>
      <Fullpage />
    </ThemeProvider>
  );
}

export default App;
