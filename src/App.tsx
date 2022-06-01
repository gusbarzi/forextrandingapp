import './app.css';

import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { LightTheme } from './shared/themes';

import Header from './pages/mainpage/Header/Header'
import Main from './pages/mainpage/Main/Main';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter >
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

