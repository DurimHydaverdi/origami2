import React from 'react';
import './Clients.scss';
import Header from '../../Header/Header';
import playerImage1 from '../../assets/JordanOgundiran.png';
import playerImage2 from '../../assets/KingsleyNwagboso.png';
import playerImage3 from '../../assets/MalSyla.png';
import playerImage4 from '../../assets/MalcolmDrumwright.png';
import playerImage5 from '../../assets/NapoleonOnyejeJr.png';
import playerImage6 from '../../assets/RomeoSmith.png';
import playerImage7 from '../../assets/SteeveHoYouFat.png';
import playerImage8 from '../../assets/WietzeNossek.png';
import Footer from '../../Footer/Footer';

const clientsData = [
  {
    image: playerImage1,
  },
  {
    image: playerImage2,
  },
  {
    image: playerImage3,
  },
  {
    image: playerImage4,
  },
  {
    image: playerImage5,
  },
  {
    image: playerImage6,
  },
  {
    image: playerImage7,
  },
  {
    image: playerImage8,
  },
  // Add more client data as needed
];

const Clients = () => {
  return (
    <>
      <Header />
      <section className="clients">
        <div className="clients-header">
          <h2>OUR NEWS</h2>
        </div>
        <div className="clients-grid">
          {clientsData.map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.image} alt={`Client ${index + 1}`} className="client-image" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Clients;
