import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Home />}
          />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
