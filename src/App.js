import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from './components/global/GlobalStyle';
import Login from './pages/login/Login';
import New from './pages/new';
import Home from './pages/Home';
import List from './pages/list';
import Update from './pages/update';
import UpdateForm from './pages/update/UpdateForm';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route end exat path="/" element={<Home />} />
          <Route exat path="/list" element={<List />} />
          <Route exat path="/update" element={<Update />} />
          <Route exat path="/update/:id" element={<UpdateForm />} />
          <Route exat path="/login" element={<Login />} />
          <Route exat path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
