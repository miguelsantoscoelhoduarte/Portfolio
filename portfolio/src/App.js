import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App"><header className="App-header"><Welcome /></header></div>} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
