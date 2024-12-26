import React from 'react';
import './Achievement.scss';
import achivement from '../../assets/achivement.webp'

const Achievement = () => {
  return (
    <section className="achievement-section">
      <div className="achievement-content">
        <h2 className="achievement-title">Achievement</h2>
        <ul className="achievement-list">
          <li>2016-17: Became the youngest agent to sign a player in the Balkan League at the age of 16.</li>
          <li>
            2016-17: Became the youngest agent to sign a player in Kosovo, Albania, Macedonia, Mexico, Austria, Georgia,
            USA, Spain, Belgium, Mongolia, Montenegro, Portugal, Croatia, Bosnia, and Turkey.
          </li>
          <li>2018: Became the youngest agent to sign a basketball player in the ABA League.</li>
          <li>Became the youngest agent to sign a player in Euro-Cup.</li>
          <li>Became the youngest agent to sign a player in BSL Turkey.</li>
          <li>Became the youngest agent to sign a player in FIBA Europe Cup.</li>
          <li>
            Closed over 100 deals by the age of 20, making him the youngest agent to achieve this milestone.
          </li>
        </ul>
      </div>
      <div className="achievement-image">
        <img src={achivement} alt="Achievements" />
      </div>
    </section>
  );
};

export default Achievement;
