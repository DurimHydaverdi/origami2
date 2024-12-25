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
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>EMAIL ADDRESS</h3>
            <p>origami@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>PHONE NUMBER</h3>
            <p>+38344111222</p>
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
