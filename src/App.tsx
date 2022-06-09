//Material UI
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
//React Routes Dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Portifolio from './pages/Portifolio/Portifolio';
//Pages, components
import Header from './pages/Homepage/Header/Header';
import Main from './pages/Homepage/Main/Main';
import Register from './pages/Register/Register';
import SignIn from './pages/Signin/Signin';
import Transactions from './pages/Transactionspage/Transactions';
import Trading from './pages/Trading/Trading';
//Hooks
import { useContext } from 'react';
import UserProvider, { UserContext } from './context/user';


export const App = () => {
  const { login } = useContext(UserContext);
  return (
    <UserProvider>
      <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
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
    </UserProvider>
  );
}

export default App;