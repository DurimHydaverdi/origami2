import React from 'react';
import './Clients.scss';
import Header from '../../Header/Header';
import playerImage1 from '../../assets/player_1.webp';
import playerImage2 from '../../assets/player_2.jpg';
import Footer from '../../Footer/Footer';

const clientsData = [
  {
    name: 'JOHAN',
    team: 'Team: Devants',
    jerseyNumber: 23,
    stats: { points: 86, rebounds: 14, assists: 9 },
    image: playerImage1,
  },
  {
    name: 'JANAN',
    team: 'Team: Devants',
    jerseyNumber: 23,
    stats: { points: 28, rebounds: 10, assists: 4 },
    image: playerImage2,
  },
  {
    name: 'JANAN 2',
    team: 'Team: Devants',
    jerseyNumber: 25,
    stats: { points: 50, rebounds: 8, assists: 12 },
    image: playerImage1,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  {
    name: 'JANE',
    team: 'Team: Devants',
    jerseyNumber: 30,
    stats: { points: 35, rebounds: 15, assists: 5 },
    image: playerImage2,
  },
  // Add more client data as needed
];

const Clients = () => {
  return (
    <>
      <Header />
      <section className="clients">
        <div className="clients-header">
          <h2>OUR CLIENTS</h2>
        </div>
        <div className="clients-grid">
          {clientsData.map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.image} alt={`${client.name}`} className="client-image" />
              <div className="client-info">
                <h3>{client.name}</h3>
                <p>{client.team}</p>
                <p>Jersey No: {client.jerseyNumber}</p>
                <div className="client-stats">
                  <div>
                    <h4>{client.stats.points}</h4>
                    <p>PTS</p>
                  </div>
                  <div>
                    <h4>{client.stats.rebounds}</h4>
                    <p>REB</p>
                  </div>
                  <div>
                    <h4>{client.stats.assists}</h4>
                    <p>AST</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Clients;
