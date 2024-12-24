import React from 'react';
import './HomePage.scss';
import player1 from '../assets/player_1.webp'; // Replace with actual images
import player2 from '../assets/player_2.jpg';
import player3 from '../assets/player_3.jpg';
import player4 from '../assets/player_4.jpg';
import player5 from '../assets/player_5.jpg';
import player6 from '../assets/player_5.jpg';
import heroImage from '../assets/heroImage.png';
import video from '../assets/highlight.mp4'

const players = [
    { id: 1, name: 'Jordan', img: player1, role: 'Forward', number: 22 },
    { id: 2, name: 'Joram', img: player2, role: 'Guard', number: 29 },
    { id: 3, name: 'John', img: player3, role: 'Center', number: 36 },
    { id: 4, name: 'Jason', img: player4, role: 'Guard', number: 10 },
    { id: 5, name: 'Jaydon', img: player5, role: 'Forward', number: 33 },
    { id: 6, name: 'Jayven', img: player6, role: 'Forward', number: 20 },
];

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="hero">
                    <video autoPlay loop muted className=''>
                        <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                <div className="hero-text">
                    <h1 className="hero-title">EMPOWERING THE NEXT BASKETBALL STARS</h1>
                    <h2 className="hero-subtitle">Empowering the Next Basketball Stars</h2>
                    <button className="hero-button">VIEW PLAYERS</button>
                </div>
            </header>
            
            <section className="players">
                {players.map((player) => (
                    <div key={player.id} className="player-card">
                        <img src={player.img} alt={player.name} className="player-card-image" />
                        <div className="player-card-info">
                            <h3 className="player-card-name">{player.name}</h3>
                            <p className="player-card-role">{player.role}</p>
                            <p className="player-card-number">#{player.number}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HomePage;
