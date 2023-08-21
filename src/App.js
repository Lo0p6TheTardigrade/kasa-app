import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/Logement';
import './styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/logement/:id"
          element={<Logement />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
