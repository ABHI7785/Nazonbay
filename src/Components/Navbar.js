import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Css/Navbar.css';
import logo from '../Components/Images/Carousel/Screenshot 2024-07-01 005149.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="col-3">
          <Link className="navbar-brand" to="/">
            <img className="logonazon" src={logo} alt="Logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`col-7 collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/location">Location</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleProducts}>
                Products
              </a>
              <ul className={`dropdown-menu ${isProductsOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/shoe">Shoes</Link></li>
                <li><Link className="dropdown-item" to="/toys">Toys</Link></li>
                <li><Link className="dropdown-item" to="watch">Watches</Link></li>
                <li><Link className="dropdown-item" to="/bag">Bags</Link></li>
                <li><Link className="dropdown-item" to="/headphone">Headphones</Link></li>
                <li><Link className="dropdown-item" to="/spects">Spects</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;