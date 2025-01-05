import React from 'react';
import './ServicesLandingPage.scss';
import Footer from '../Footer/Footer';  // Import the Footer component

const testimonialsData = [
  {
    title: "Player Representation",
    content: "Contract Negotiations: Expert representation to secure the best deals, whether with professional teams, endorsement brands, or sponsors. Career Guidance: Strategic planning to maximize player potential and career longevity. Draft Preparation: Scouting, training, and advisory services for players preparing for professional drafts."
  },
  {
    title: "Talent Scouting & Recruitment",
    content: "Global Scouting Network: Connecting promising talent with opportunities worldwide. Custom Evaluations: Detailed assessments of player skills, performance metrics, and potential fit for teams."
  },
  {
    title: "Endorsements & Sponsorships",
    content: "Brand Partnerships: Helping players build their personal brands by securing deals with reputable companies. Marketing Strategies: Personalized plans to boost visibility, reputation, and marketability."
  },
  {
    title: "Team Consulting",
    content: "Roster Management: Assisting teams with player acquisition, trades, and contract structuring. Data Analytics: Leveraging advanced analytics to make informed decisions on player performance and team strategy."
  }
];

const ServicesLandingPage = () => {
  return (
    <div>
    <div className="serviceslp">
        <div className="serviceslp-content">
            {testimonialsData.map((testimonial, index) => (
            <div className="serviceslp-card" key={index}>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.content}</p>
            </div>
            ))}
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default ServicesLandingPage;
