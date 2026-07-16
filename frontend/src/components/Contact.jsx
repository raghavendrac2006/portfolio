import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Let's talk about everything!</h3>
            <p className="contact-desc">
              Feel free to reach out for collaborations, project inquiries, or just a friendly chat.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> raghavendrac2006@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> 8121280857
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Kuppam, Andhra Pradesh
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/raghavendrac-raghu" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
              <a href="https://github.com/raghavendrac2006" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
