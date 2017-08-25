import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">Brand</Link>
      <form className="form-inline mr-auto">
        <input className="form-control header-search-input" type="text" placeholder="Search" aria-label="Search"/>
      </form>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">Sign In</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Register</a>
            </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header;
