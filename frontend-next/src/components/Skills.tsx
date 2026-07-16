import Section from "./Section";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "Dart"]
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Firebase", "Supabase"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Oracle Cloud", "REST APIs", "Machine Learning"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-[#111827]/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
          Technical <span className="text-[var(--accent)]">Skills</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category) => (
          <div 
            key={category.title} 
            className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold font-heading mb-6 text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-full text-sm font-medium text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
