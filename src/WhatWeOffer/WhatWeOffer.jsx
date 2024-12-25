import React from 'react';
import './WhatWeOffer.scss';
import players from '../assets/players.jpg'; // Replace with the correct path
import tactic from '../assets/tactic.webp'; // Replace with the correct path
import consulting from '../assets/consulting.webp'; // Replace with the correct path

const WhatWeOffer = () => {
    return (
        <div className="what-we-offer">
            <h1 className="offer-title">WHAT WE OFFER</h1>
            <div className="offer-cards">
                <div className="offer-card">
                    <img src={players} alt="Players" className="offer-image" />
                    <div className="offer-info">
                        <h2 className="offer-card-title">Players</h2>
                        <p className="offer-card-text">
                            Regular checkups to maintain your car's high performance
                        </p>
                    </div>
                </div>
                <div className="offer-card">
                    <img src={tactic} alt="Tactic" className="offer-image" />
                    <div className="offer-info">
                        <h2 className="offer-card-title">Trainers</h2>
                        <p className="offer-card-text">
                            Quality service that guarantees smooth and safe rides
                        </p>
                    </div>
                </div>
                <div className="offer-card">
                    <img src={consulting} alt="Consulting" className="offer-image" />
                    <div className="offer-info">
                        <h2 className="offer-card-title">Consulting</h2>
                        <p className="offer-card-text">
                            Interior parts and premium exteriors for standout style
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
