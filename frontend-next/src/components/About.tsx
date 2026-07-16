import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
          About <span className="text-[var(--accent)]">Me</span>
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 text-left">
          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-6">
            I am a passionate AI & Software Developer focused on building intelligent, scalable, and user-centric applications. With a strong foundation in modern programming languages and frameworks, I enjoy solving complex, real-world problems through innovative technology.
          </p>
          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
            My expertise spans across mobile app development with Flutter, backend systems with Python and Firebase, and AI-powered automation using tools like the Gemini API. I am constantly learning and exploring new paradigms to create software that makes a tangible impact.
          </p>
        </div>
      </div>
    </Section>
  );
}
