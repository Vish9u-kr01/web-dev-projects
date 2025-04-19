
import React from 'react';
import Hero from "../assets/Hero.jpg";
import './herosection.css';  // Importing the CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="main-heading heading-1">HealthAI</div>
        <div className="main-heading-2 subheading">Disease Prediction & Recommendation System</div>
        <div className="main-heading-2 subheading">A web app where users (patients) can enter their symptoms, and the system uses a Machine Learning model to predict possible diseases and suggest next actions.</div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
