import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Router path="/about" element={<About />} />
        <Router path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
