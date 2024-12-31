import React from 'react';
import './Contact.scss';
import trainer from '../../assets/trainer.webp'; // Adjust the path based on your file structure
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-details">
        <h2>LET'S WORK TOGETHER!</h2>
        <p>Call, text, or email me and let's talk.</p>
        <div className="contact-info">
          <div>
            <p>Phone</p>
            <h5>(123) 456-7890</h5>
          </div>
          <div>
            <p>Email</p>
            <h5>hello@reallygreatsite.com</h5>
          </div>
          <div>
            <p>Social</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/argjend-zeqiri-ba6756200/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/origamientt" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-image">
        <img src={trainer} alt="Trainer with team" />
      </div>
    </section>
  );
};

export default Contact;