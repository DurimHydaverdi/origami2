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
                    <h1 className="dribble-title">THE ORIGAMI STORY</h1>
                    <p className="dribble-text">
                    Origami Sports & Entertainment is a full-service management firm specializing in talent development within the sports and arts industries, with a focus on basketball. With 6 years of experience in the European-American basketball sector, we have achieved exceptional success, having participated in over 150 finalized global contracts spanning 4 continents.
                    </p>
                    <p className="dribble-text">
                    Our portfolio includes partnerships with prominent basketball leagues such as the EuroCup, BSL Turkey, ABA League, FIBA Europe Cup, and G-League, among others.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DribbleSection;
