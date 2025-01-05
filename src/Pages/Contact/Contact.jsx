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
            <a href="https://wa.me/38344838632" target="_blank" rel="noopener noreferrer">
              <h5>+38344838632</h5>
            </a>
          </div>
          <div>
            <p>Email</p>
            <a href="mailto:origami.entt@gmail.com"><h5>origami.entt@gmail.com</h5></a>
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