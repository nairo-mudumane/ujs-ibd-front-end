import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './components/global/GlobalStyle';
import Login from './pages/login/Login';
import AddUser from './pages/addUser';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route end exat path="/login" element={<Login />} />
          <Route exat path="/new" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
