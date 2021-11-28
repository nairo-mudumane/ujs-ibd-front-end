import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exat path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;