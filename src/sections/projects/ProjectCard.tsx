import type { Project } from "../../data/projects";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden transition-all hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* imagen futura */}
      <div className="h-40 rounded-lg mb-6 flex items-center justify-center text-white/30 text-sm bg-white/5">
        Screenshot próximamente
      </div>

      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-white/70 text-sm mb-4">{project.description}</p>
      <p className="text-white/60 text-sm mb-6">{project.impact}</p>

      <div className="flex flex-wrap gap-2 text-xs">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
