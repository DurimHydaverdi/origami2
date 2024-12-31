import React from 'react';
import { FaFileContract, FaFileInvoiceDollar} from 'react-icons/fa';
import { MdPersonSearch } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";

import './Services.scss';

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-list">
        <div className="service-item">
          <FaFileContract className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Contract Negotiation</h3>
            <p className="service-description">Facilitating and finalizing agreement terms.</p>
          </div>
        </div>
        <div className="service-item">
          <FaFileInvoiceDollar className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Tax Consultancy</h3>
            <p className="service-description">Providing expert tax advice and solutions.</p>
          </div>
        </div>
        <div className="service-item">
          <PiStrategy className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Strategic Long-Term Planning</h3>
            <p className="service-description">Setting goals for future success.</p>
          </div>
        </div>
        <div className="service-item">
          <MdPersonSearch  className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Talent Acquisition</h3>
            <p className="service-description">Identifying, attracting, and hiring talent.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
