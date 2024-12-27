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
        Argjend Zeqiri, a Kosovan agent and the CEO and founder of Origami Sports & Entertainment, began his career at the age of 15. His journey has led to over 150 professional basketball contracts across four continents: the USA, Europe, Asia, and Latin America.  

Inspired by connections with influential figures in sports and culture, Argjend launched his first venture, Dunk Sports Agency, in 2018. His unique approach, emphasizing the legal and professional comfort of his clients, has helped shape some of the top players in Balkan-European basketball.  

On November 22, 2022, in Mies, Argjend made history by becoming the first FIBA-licensed agent from Kosovo/Albania. 
        </p>
      </div>
    </section>
  );
};

export default About;
