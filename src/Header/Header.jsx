import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Scroll to top on any menu link click
    window.scrollTo(0, 0);  // This will scroll the page to the top
    setIsOpen(false);  // Close the menu after clicking a link
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Change header style on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/clients" onClick={handleLinkClick}>Clients</Link>
        <Link to="/contact-us" onClick={handleLinkClick}>Contact</Link>
      </nav>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}

export default Header;
