import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Home from './components/Home';
import Hub from './components/Hub';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/hub" element={<Hub language={language} />} />
          <Route path="/" element={<Welcome language={language} />} />
        </Routes>
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;