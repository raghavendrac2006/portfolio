"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Github as GithubIcon } from "@/components/Icons";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_link: string;
  status: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/api/projects/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#0B0F19]">
      <Navbar />

      <div className="flex-grow container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-white">
            All <span className="text-[var(--accent)]">Projects</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
            A complete archive of my projects, experiments, and applications.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading your projects from Django...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(projects) && projects.map((project) => (
              <div key={project.title} className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-[var(--background-secondary)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-4 right-4 bg-[#0B0F19]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white border border-[var(--border-color)]">
                    {project.status}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack.split(",").map((t) => (
                      <span key={t} className="text-xs font-medium text-[var(--accent-secondary)] bg-blue-500/10 px-2 py-1 rounded">
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--border-color)]">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--accent)] transition-colors">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    )}
                    <a href={project.github_link || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-blue-400 transition-colors ml-auto">
                      Details <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
