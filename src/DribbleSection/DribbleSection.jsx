import React from 'react';
import './DribbleSection.scss';
import dribble from '../assets/dribble.jpg'; // Update with the correct path

const DribbleSection = () => {
    return (
        <div className="dribble-section">
            <div className="dribble-image">
                <img src={dribble} alt="Basketball" />
            </div>
            <div className="dribble-content">
                <div className="dribble-text-box">
                    <h1 className="dribble-title">REPAIRING IS CARING</h1>
                    <p className="dribble-text">
                        Miles' Garage actually does belong to Miles - a cheerful guy with an almost crazy obsession with cars. He and his team of specialists have learned to translate this obsessive nature into impressive service, repairing automobiles with such finesse, it's almost an art form.
                    </p>
                    <p className="dribble-text">
                        Miles and the rest of his garage is committed to caring for cars with top-notch service and repairs, because the longer a car lasts, the better for you, for the environment, and for your beloved automobile.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DribbleSection;
