import React from 'react';
import './Hero.scss';
import video from '../assets/highlight.mp4'
import DribbleSection from '../DribbleSection/DribbleSection';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import Testimony from '../Testimony/Testimony';
import ClientsLandingPage from '../ClientsLandingPage/ClientsLandingPage';
import Footer from '../Footer/Footer';

const Hero = () => {
    return (
        <div className="homepage">
            <header className="hero">
                    <video autoPlay loop muted className=''>
                        <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                <div className="hero-text">
                    <h1 className="hero-title">ORIGAMI ENT</h1>
                    <h2 className="hero-subtitle">Since 2018</h2>
                    <button className="hero-button">VIEW CLIENTS</button>
                </div>
            </header>
            <ClientsLandingPage />
            <DribbleSection />
            <WhatWeOffer />
            <Testimony />
            <Footer />
        </div>
    );
};

export default Hero;
