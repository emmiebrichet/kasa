import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './composents/Header';
import Footer from './composents/Footer';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page à propos */} 
        <Route path="/Logement" element={<Logement />} /> {}
        <Route path="/*" element={<Error />} /> {}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
