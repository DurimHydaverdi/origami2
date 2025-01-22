import React from 'react';
import './Testimony.scss';
// import jared from '../../assets/player_2.jpg'; // Replace with the correct path
// import nathaniel from '../../assets/player_3.jpg'; // Replace with the correct path
// import martina from '../../assets/player_4.jpg'; // Replace with the correct path
// import chris from '../../assets/player_5.jpg'; // Replace with the correct path

const Testimony = () => {
    const testimonies = [
        {
            // image: jared,
            name: 'Steeve Ho You Fat',
            text: '" I have been collaborating with Origami and Argjend for several months in pursuit of optimal career opportunities, and I would like to express my complete satisfaction with the management provided by Origami. Argjend serves as a dedicated agent who maintains a solid relationship with his players, diligently working to fulfill their aspirations while remaining consistent with market realities. I greatly value the professionalism, transparency, and commitment demonstrated by Origami. "',
        },
        {
            // image: nathaniel,
            name: 'Kingsley Nwagboso',
            text: '" My experience with Argjend & Oragimi agency has been very good so far, there is clear communication between player and agent he has the best interest for the player which is something I personally value highly. I’m excited to see you what the future holds "',
        },
        // {
        //     image: martina,
        //     name: 'Martina Lewinson',
        //     text: "At Miles' Garage, I got fast and flawless service. I love their efficiency and attention to detail.",
        // },
        // {
        //     image: chris,
        //     name: 'Chris Nguyen',
        //     text: 'Fast, fair, and affordable service. I highly recommend Miles\' Garage if your car needs repair.',
        // },
    ];

    return (
        <div className="testimony">
            <h1 className="testimony-title">TESTIMONIALS</h1>
            <div className="testimony-grid">
                {testimonies.map((testimony, index) => (
                    <div className="testimony-card" key={index}>
                        {/* <img
                            src={testimony.image}
                            alt={testimony.name}
                            className="testimony-image"
                        /> */}
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
