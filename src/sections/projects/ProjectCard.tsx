import { memo } from "react";
import {
  SiPhp,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiSap,
} from "react-icons/si";

import type { Project } from "../../data/projects";

// Icon memoizado (evita recalcular SVG en cada render)
const Icon = memo(({ tech }: { tech: string }) => {
  switch (tech) {
    case "PHP":
      return <SiPhp className="w-4 h-4 text-blue-400" />;
    case "MySQL":
      return <SiMysql className="w-4 h-4 text-blue-400" />;
    case "JavaScript":
      return <SiJavascript className="w-4 h-4 text-yellow-400" />;
    case "TypeScript":
      return <SiTypescript className="w-4 h-4 text-blue-500" />;
    case "React":
      return <SiReact className="w-4 h-4 text-blue-400" />;
    case "Tailwind":
      return <SiTailwindcss className="w-4 h-4 text-cyan-400" />;
    case "Python":
      return <SiPython className="w-4 h-4 text-yellow-300" />;
    case "HTML":
      return <SiHtml5 className="w-4 h-4 text-orange-500" />;
    case "CSS":
      return <SiCss3 className="w-4 h-4 text-blue-500" />;
    case "jQuery":
      return <SiJquery className="w-4 h-4 text-blue-300" />;
    case "SAP HANA":
      return <SiSap className="w-4 h-4 text-green-500" />;
    default:
      return null;
  }
});

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
      {/* glow optimizado */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* imagen */}
      <div className="h-40 rounded-lg mb-6 flex items-center justify-center text-white/30 text-sm bg-white/5 border border-white/10 overflow-hidden">
        {project.image ? (
          <img
            src={`/img/${project.image}`}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white/30 text-sm">
            Screenshot próximamente
          </div>
        )}
      </div>

      {/* título */}
      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>

      {/* descripción */}
      <p className="text-white/70 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* impacto */}
      <p className="text-white/60 text-sm mb-6">{project.impact}</p>

      {/* stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-1 text-xs px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full"
          >
            <Icon tech={tech} />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
