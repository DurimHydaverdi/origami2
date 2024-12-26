import React from 'react';
import './About.scss';
import basketBall from '../../assets/basket-ball.webp'; // Adjust path based on your file structure

const About = () => {
  return (
    <section className="about">
        <div className="about-image">
        <img src={basketBall} alt="Basketball" />
      </div>
      <div className="about-content">
        <h2>ABOUT</h2>
        <p>
          A short bio talking about the persona goes in this space. You can talk about their specialization or their background. Convince the reader why this persona is the one for them.
        </p>
      </div>
    </section>
  );
};

export default About;
