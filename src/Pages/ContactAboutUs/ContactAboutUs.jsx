import React from 'react'
import AgentCard from '../AgentCard/AgentCard';
import Achievement from '../Achievement/Achievement';
// import Services from '../Services/Services';
import About from '../About/About';
import Footer from '../../Footer/Footer';
import Contact from '../Contact/Contact';
import Testimony from '../Testimony/Testimony';

const ContactAboutUs = () => {
  return (
    <div>
      <AgentCard />
      <Achievement />
      {/* <Services /> */}
      <About />
      <Contact />
      <Testimony/>
      <Footer />
    </div>
  )
}

export default ContactAboutUs
