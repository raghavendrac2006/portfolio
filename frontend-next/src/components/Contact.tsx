"use client";
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Get In <span className="text-[var(--accent)]">Touch</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            Have a question or want to work together? Leave a message.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">Contact Info</h3>
            
            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] flex items-center justify-center text-[var(--accent)]">
                📧
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Email</p>
                <a href="mailto:raghavendrac2006@gmail.com" className="text-white font-medium hover:text-[var(--accent)] transition-colors">raghavendrac2006@gmail.com</a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] flex items-center justify-center text-[var(--accent)]">
                📍
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Location</p>
                <p className="text-white font-medium">India</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] flex items-center justify-center text-[var(--accent)]">
                🔗
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Social</p>
                <div className="flex gap-3 mt-1">
                  <a href="https://github.com/raghavendrac2006" className="text-[var(--text-muted)] hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/raghavendrac-raghu" className="text-[var(--text-muted)] hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Subject</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors" 
                  placeholder="Project Inquiry" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" 
                  placeholder="Hello there..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="w-full py-4 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-blue-600 transition-colors glow-effect mt-2 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
