import React from 'react';
import { FaBook, FaFileInvoiceDollar, FaHandshake } from 'react-icons/fa';
import './Services.scss';

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-list">
        <div className="service-item">
          <FaBook className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Bookkeeping</h3>
            <p className="service-description">A short description of the listed service.</p>
          </div>
        </div>
        <div className="service-item">
          <FaFileInvoiceDollar className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Tax Compliance</h3>
            <p className="service-description">A short description of the listed service.</p>
          </div>
        </div>
        <div className="service-item">
          <FaHandshake className="service-icon" />
          <div className="service-content">
            <h3 className="service-title">Business Registration</h3>
            <p className="service-description">A short description of the listed service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
