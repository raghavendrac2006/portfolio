import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Personal AI Assistant',
    description: 'This project is a 21-day build of a Python-powered personal AI assistant that listens, speaks, thinks, and executes tasks through natural voice interaction.',
    tech: ['Python', 'AI Voice', 'Task Execution'],
    link: 'https://github.com/raghavendrac2006/Personal-AI-Assistant'
  },
  {
    title: 'Vision Guardian – AI Meeting Monitoring Agent',
    description: 'Developed an AI-powered meeting monitoring system capable of processing live captions, keyword detection, Telegram notifications, and automated PDF summary generation.',
    tech: ['Python', 'Selenium', 'Gemini AI', 'Telegram API'],
    link: 'https://github.com/raghavendrac2006/Vision-Guardian'
  },
  {
    title: 'Ledger Flow – Business Management',
    description: 'Developed and deployed a Flutter-Firebase application that digitizes paperwork, delivery records, and operational workflows for active businesses.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    link: 'https://github.com/raghavendrac2006/Ledger-Flow'
  },
  {
    title: 'Smart Bus Tracking System',
    description: 'A GPS-based bus tracking application for students and institutions supporting live tracking, arrival alerts, and delay notifications.',
    tech: ['Flutter', 'Firebase', 'OpenStreetMap', 'GPS'],
    link: '#'
  },
  {
    title: 'Banking App',
    description: 'A robust Java-based banking application designed to handle secure financial transactions, account management, and user authentication.',
    tech: ['Java', 'Object-Oriented Programming'],
    link: 'https://github.com/raghavendrac2006/Banking-app'
  },
  {
    title: 'Customer Segmentation',
    description: 'A data science project leveraging Python and machine learning clustering algorithms to analyze and segment customer behavior for targeted marketing strategies.',
    tech: ['Python', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/raghavendrac2006/customer-segmentation'
  },
  {
    title: 'Fibonacci Array Generator',
    description: 'A specialized Java utility program focused on algorithmic efficiency for generating and managing Fibonacci sequences within data arrays.',
    tech: ['Java', 'Algorithms'],
    link: 'https://github.com/raghavendrac2006/Fibonacci-Array-Generator'
  }
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.link} className="project-link">View Details &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
