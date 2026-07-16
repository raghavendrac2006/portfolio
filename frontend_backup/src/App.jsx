import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="container">
          <a href="#" className="logo">C. Raghavendra</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} C. Raghavendra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
