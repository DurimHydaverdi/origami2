import React from 'react';
import './Testimony.scss';
import jared from '../assets/player_2.jpg'; // Replace with the correct path
import nathaniel from '../assets/player_3.jpg'; // Replace with the correct path
import martina from '../assets/player_4.jpg'; // Replace with the correct path
import chris from '../assets/player_5.jpg'; // Replace with the correct path

const Testimony = () => {
    const testimonies = [
        {
            image: jared,
            name: 'Jared Nicholson',
            text: "So happy to have found a garage filled with car-obsessed people like me! When it comes to my car, I trust only Miles' Garage.",
        },
        {
            image: nathaniel,
            name: 'Nathaniel Gilmore',
            text: 'The staff here really know their stuff. I can trust them with every repair, big or small.',
        },
        {
            image: martina,
            name: 'Martina Lewinson',
            text: "At Miles' Garage, I got fast and flawless service. I love their efficiency and attention to detail.",
        },
        {
            image: chris,
            name: 'Chris Nguyen',
            text: 'Fast, fair, and affordable service. I highly recommend Miles\' Garage if your car needs repair.',
        },
    ];

    return (
        <div className="testimony">
            <h1 className="testimony-title">TESTIMONY</h1>
            <div className="testimony-grid">
                {testimonies.map((testimony, index) => (
                    <div className="testimony-card" key={index}>
                        <img
                            src={testimony.image}
                            alt={testimony.name}
                            className="testimony-image"
                        />
                        <div className="testimony-info">
                            <h2 className="testimony-name">{testimony.name}</h2>
                            <p className="testimony-text">{testimony.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimony;
