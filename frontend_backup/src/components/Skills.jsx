import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'Dart', 'JavaScript', 'SQL']
  },
  {
    title: 'Mobile & Web Development',
    skills: ['Flutter', 'React', 'HTML', 'CSS', 'Firebase', 'Supabase']
  },
  {
    title: 'Tools & AI Technologies',
    skills: ['Git', 'GitHub', 'Oracle Cloud', 'REST APIs', 'Gemini AI', 'ChatGPT', 'Claude']
  },
  {
    title: 'Core Concepts',
    skills: ['OOP', 'DBMS', 'Data Structures', 'Problem Solving']
  }
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
