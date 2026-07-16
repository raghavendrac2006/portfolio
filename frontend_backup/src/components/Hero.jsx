import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hi there, I'm</h2>
          <h1 className="name">C. Raghavendra</h1>
          <h3 className="title">AI & Software Developer | Student</h3>
          <p className="bio-short">
            I build intelligent, scalable, and user-centric applications, leveraging modern tech like Flutter, Python, Firebase, and AI automation.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
