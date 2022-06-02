//Material UI
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
//React Routes Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Homepage/Header/Header';
import Main from './pages/Homepage/Main/Main';
import Register from './pages/Register/Register';
import SignIn from './pages/Signin/Signin';
import { useState } from 'react';
import Portifolio from './pages/Portifolio/Portifolio';
//Pages, components

export const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>

        {login == true ? <Header login={true} /> : <Header login={false} />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/portifolio" element={<Portifolio />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;