import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import Hero from './Hero/Hero';
import ClientsLandingPage from './ClientsLandingPage/ClientsLandingPage';
import ServicesLandingPage from './ServicesLandingPage/ServicesLandingPage';
import Header from './Header/Header';
import Clients from './Pages/Clients/Clients';  // Import Clients component
import ContactAboutUs from './Pages/ContactAboutUs/ContactAboutUs';  // Import ContactAboutUs component
import DribbleSection from './DribbleSection/DribbleSection';

function App() {
  return (
    <div className="App">
      <Header />  {/* Header will be displayed on all pages */}
      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />  {/* Home Page */}
        <Route path="/clients" element={<Clients />} />  {/* Clients Page */}
        <Route path='/services-landing-page' element={<ServicesLandingPage />} />
        <Route path="/contact-us" element={<ContactAboutUs />} />  {/* Contact/About Us Page */}
        <Route path="/clients-landing" element={<ClientsLandingPage />} /> {/* Clients Landing Page */}
        <Route path="/dribble-section" element={<DribbleSection />} /> {/* Dribble Section Page */}
      </Routes>
    </div>
  );
}

export default App;
