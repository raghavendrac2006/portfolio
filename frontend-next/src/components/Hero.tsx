"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="bg-blob bg-blue-500/20 w-96 h-96 top-20 left-10"></div>
      <div className="bg-blob bg-purple-500/20 w-[500px] h-[500px] bottom-0 right-0"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-[var(--accent)] font-semibold tracking-wide uppercase mb-2">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-4">
              Hi, I&apos;m <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                C. Raghavendra
              </span>
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
              AI & Software Developer
            </h3>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-lg mb-8">
              Passionate about building intelligent, scalable, and user-centric applications. Experienced in Flutter, Python, Firebase, and AI-powered automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-blue-600 transition-colors glow-effect"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass-card text-white font-semibold hover:bg-[var(--card-bg)] transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-4">
            <a href="https://github.com/raghavendrac2006" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/raghavendrac-raghu" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full glass-card p-4 relative z-10 flex items-center justify-center overflow-hidden">
             {/* Replace with actual image */}
             <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-900/50 to-indigo-900/50 border border-[var(--border-color)] flex items-center justify-center text-4xl font-heading text-white/50">
               CR
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
