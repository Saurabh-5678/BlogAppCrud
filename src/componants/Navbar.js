// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Home</Link>
        <div className="navbar-links">
          <Link to="/blogs" className="navbar-link">Blog List</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
