import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate <strong>AI & Software Developer</strong> focused on building intelligent, scalable, and user-centric applications. Currently pursuing my B.Tech in Computer Science and Engineering (AI & ML) at Kuppam Engineering College.
            </p>
            <p>
              I have practical experience building real-world mobile applications, AI-powered automation systems, and cloud-based solutions. I've developed and deployed software used by active businesses and built intelligent automation systems leveraging Flutter, Firebase, Python, and Gemini AI.
            </p>
            <p>
              My true interest lies in solving real-world problems through technology, whether that means digitizing paperwork workflows, creating GPS tracking solutions, or building AI meeting monitoring agents.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Major Projects</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">1</h3>
              <p className="stat-label">Internship Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
