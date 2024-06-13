import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Gally from './Gally';
import About from './About';
import Staff from './Staff';
import Contact from './Contact';
import Users from './Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gally" element={<Gally />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;