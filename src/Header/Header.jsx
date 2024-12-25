import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to track if the menu is open
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();  // React Router's useNavigate hook for programmatic navigation

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 320) {
        setIsScrolled(true);  // Add 'scrolled' class if scrolled down
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  // Cleanup on component unmount
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the state between open and close for the menu
    document.body.classList.toggle('menu-open', !isOpen);  // Disable page scroll when menu is open
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });  // Scroll to the section smoothly
    }
    setIsOpen(false);  // Close the menu after scrolling to the section
  };

  const handleNavigate = (id) => {
    if (window.location.pathname === '/') {
      scrollToSection(id);  // If we're on the homepage, scroll to a section
    } else {
      navigate('/', { state: { scrollToId: id } });  // Navigate to the home page and pass state to scroll to section
    }
    setIsOpen(false);  // Close the menu after navigating
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/"><img className="logo_img" src={logo} alt="origami" /></Link>
        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <nav className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {/* Navigate to Home Page */}
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="clients"><a onClick={() => handleNavigate('clients')}>Clients</a></Link></li>
          <li><Link to="/contact-us"><a onClick={() => handleNavigate('contact')}>About</a></Link></li>

        </ul>
      </nav>
    </>
  );
};

export default Header;
