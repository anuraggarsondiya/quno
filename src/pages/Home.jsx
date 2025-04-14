import React from 'react';
import { FaMobileAlt, FaCode, FaPencilRuler } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import heroImage from '../assets/home.png';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empowering Your Business with Innovative IT Solutions.
            </h1>
            <p className="text-lg md:text-xl font-medium mb-6">
              Your Trusted Partner for Web Development, Cloud and other IT Services.
            </p>
            <Link to="/contact">
              <button className="hero-button">Contact Us</button>
            </Link>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-title-wrapper">
          <span className="services-title">Our Services</span>
        </div>
        <div className="container services-cards-container">
          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h3 className="service-title">Mobile App Development</h3>
            <div className="service-underline" />
            <p className="service-description">
              Transform your ideas into stunning mobile apps. We create sleek, user-friendly solutions for iOS and Android platforms.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaCode /></div>
            <h3 className="service-title">Web Development</h3>
            <div className="service-underline" />
            <p className="service-description">
              We build SEO-friendly, responsive websites tailored to your needs using the latest technologies and best practices.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaPencilRuler /></div>
            <h3 className="service-title">UI/UX Design Services</h3>
            <div className="service-underline" />
            <p className="service-description">
              We craft immersive and intuitive designs that elevate user experiences and deliver visually stunning interfaces.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>
        </div>
        <div className="container services-cards-container mt-5">
          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h3 className="service-title">Mobile App Development</h3>
            <div className="service-underline" />
            <p className="service-description">
              Transform your ideas into stunning mobile apps. We create sleek, user-friendly solutions for iOS and Android platforms.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaCode /></div>
            <h3 className="service-title">Web Development</h3>
            <div className="service-underline" />
            <p className="service-description">
              We build SEO-friendly, responsive websites tailored to your needs using the latest technologies and best practices.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaPencilRuler /></div>
            <h3 className="service-title">UI/UX Design Services</h3>
            <div className="service-underline" />
            <p className="service-description">
              We craft immersive and intuitive designs that elevate user experiences and deliver visually stunning interfaces.
            </p>
            <a href="#!" className="service-link">Read More →</a>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
