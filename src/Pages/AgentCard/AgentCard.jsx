import React from 'react';
import './AgentCard.scss';
import basketballHoop from '../../assets/basketball-hoop.webp'; // Replace with the actual path

const AgentCard = () => {
    return (
        <div className="agent-card">
            <div className="agent-image-container">
                <img src={basketballHoop} alt="Basketball Hoop" className="agent-image" />
            </div>
            <div className="agent-info">
                <h1 className="agent-name">Argjend Zeqiri, Fiba Agent</h1>
                <p className="agent-description">
                    Let me help you make the right moves for your career.
                </p>
                <a href="mailto:origami.entt@gmail.com" className="email-button">
                    EMAIL US
                </a>
            </div>
        </div>
    );
};

export default AgentCard;
