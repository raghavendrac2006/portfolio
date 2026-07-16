import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" className="bg-[#111827]/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
          Experience & <span className="text-[var(--accent)]">Education</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-sm">💼</span>
            Experience
          </h3>
          
          <div className="relative border-l border-[var(--border-color)] pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-[var(--accent)] rounded-full -left-[9px] top-1 glow-effect"></div>
            <span className="text-sm font-medium text-[var(--accent-secondary)] mb-1 block">2023 - Present</span>
            <h4 className="text-lg font-bold text-white mb-1">Cyber Security Virtual Internship</h4>
            <h5 className="text-[var(--text-muted)] font-medium mb-3">Deloitte</h5>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Participated in comprehensive virtual internship focused on cyber security principles, threat analysis, and secure software development practices.
            </p>
          </div>
          
          <div className="relative border-l border-[var(--border-color)] pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-full -left-[9px] top-1"></div>
            <span className="text-sm font-medium text-[var(--text-muted)] mb-1 block">2023</span>
            <h4 className="text-lg font-bold text-white mb-1">Second Prize – Ideathon</h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Awarded second prize for developing an innovative technical solution to real-world problems during the university ideathon.
            </p>
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">🎓</span>
            Education & Certifications
          </h3>
          
          <div className="relative border-l border-[var(--border-color)] pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-sm font-medium text-purple-400 mb-1 block">Currently Pursuing</span>
            <h4 className="text-lg font-bold text-white mb-1">Computer Science Student</h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Focusing on software engineering, artificial intelligence, and scalable application development.
            </p>
          </div>

          <div className="relative border-l border-transparent pl-8">
            <div className="absolute w-4 h-4 bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-full -left-[9px] top-1"></div>
            <span className="text-sm font-medium text-[var(--text-muted)] mb-1 block">Certification</span>
            <h4 className="text-lg font-bold text-white mb-1">Social Network Analysis</h4>
            <h5 className="text-[var(--text-muted)] font-medium mb-3">NPTEL</h5>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Completed advanced coursework on network structures, algorithms, and data analysis in social networks.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
