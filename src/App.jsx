import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#fffbf4] to-[#f3f9e7]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;