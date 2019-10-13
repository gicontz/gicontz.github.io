import React from 'react';
import HeroBanner from './components/hero-banner/HeroBanner';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import './App.css';

library.add(fab, faCheckSquare, faCoffee, faBars);

const App = props => {
  return (
    <ThemeProvider theme={theme}>
    {
      <div className="App">
        <HeroBanner apptheme={theme}/>
      </div>
    }
    </ThemeProvider>
  );
}

export default App;
