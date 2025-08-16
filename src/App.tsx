import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BasicInfo from './pages/BasicInfo';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Resources from './pages/Resources';

export default function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: 'bold',
              color: '#8b4513',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          <Link
            to="/basic-info"
            style={{
              fontWeight: 'bold',
              color: '#8b4513',
              textDecoration: 'none',
            }}
          >
            Basic Info
          </Link>
          <Link
            to="/experience"
            style={{
              fontWeight: 'bold',
              color: '#8b4513',
              textDecoration: 'none',
            }}
          >
            Experience
          </Link>
          <Link
            to="/skills"
            style={{
              fontWeight: 'bold',
              color: '#8b4513',
              textDecoration: 'none',
            }}
          >
            Skills
          </Link>
          <Link
            to="/resources"
            style={{
              fontWeight: 'bold',
              color: '#8b4513',
              textDecoration: 'none',
            }}
          >
            Resources
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}
