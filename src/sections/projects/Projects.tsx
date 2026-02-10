import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 relative">
      {/* glow optimizado (MUCHO más ligero) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-white/40 mb-3">
            PORTAFOLIO
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Proyectos destacados
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        {/* grid optimizado */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title} // key estable
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
