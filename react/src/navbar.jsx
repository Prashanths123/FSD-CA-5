// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <h1>
          <Link to="/">Kalvium Books</Link>
        </h1>
      </div>
      <div className="nav-links">
        <Link to="/register">
          <button className="nav-button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;