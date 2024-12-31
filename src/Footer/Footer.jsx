import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">CONTACT DETAILS</h2>
        <div className="footer-details">
          <div className="footer-section">
            <h3>SOCIAL MEDIA</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/argjend-zeqiri-ba6756200/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/origamientt" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>EMAIL ADDRESS</h3>
            <a href="mailto:origami.entt@gmail.com"><p>origami.entt@gmail.com</p></a>
          </div>
          <div className="footer-section">
            <h3>PHONE NUMBER</h3>
            <a href="tel:+38344838632"><p>+38344838632</p></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>OrigamiEnt @ 2025 - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
