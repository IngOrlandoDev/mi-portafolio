import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Glow principal fondo (CSS, no framer) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full animate-glow-slow z-0" />

      {/* Glow secundario */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/8 blur-[120px] rounded-full animate-glow-slower z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-white/40 mb-3">
            PORTAFOLIO
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Proyectos destacados
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
