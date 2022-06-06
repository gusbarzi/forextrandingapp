//Material UI
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
//React Routes Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portifolio from './pages/Portifolio/Portifolio';
//Pages, components
import Header from './pages/Homepage/Header/Header';
import Main from './pages/Homepage/Main/Main';
import Register from './pages/Register/Register';
import SignIn from './pages/Signin/Signin';
import Transactions from './pages/Transactionspage/Transactions';
//Hooks
import { useState, useEffect } from 'react';
import Trading from './pages/Trading/Trading';

export const App = () => {
  const [login, setLogin] = useState(true)

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>

        {login === true ? <Header login={true} /> : <Header login={false} />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;