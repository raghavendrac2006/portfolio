import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline-container">
          {/* Experience */}
          <div className="timeline-block">
            <h3 className="timeline-heading">Experience</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">Cyber Security Virtual Internship</h4>
                <h5 className="timeline-subtitle">Deloitte | Forage</h5>
                <span className="timeline-date">June 2025 – July 2025</span>
                <ul className="timeline-list">
                  <li>Performed vulnerability analysis, threat detection, and incident response exercises in simulated environments.</li>
                  <li>Gained exposure to modern cyber security workflows and risk assessment techniques.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="timeline-block">
            <h3 className="timeline-heading">Education</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">B.Tech CSE (AI & ML)</h4>
                <h5 className="timeline-subtitle">Kuppam Engineering College (JNTUA)</h5>
                <span className="timeline-date">2023 – 2027</span>
                <p>CGPA: 7.76</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">Intermediate</h4>
                <h5 className="timeline-subtitle">IRM Junior College</h5>
                <span className="timeline-date">2021 – 2023</span>
                <p>Score: 83%</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
