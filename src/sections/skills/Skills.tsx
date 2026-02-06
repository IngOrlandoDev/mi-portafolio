import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend Engineering",
    skills: [
      "PHP",
      "MySQL",
      "Arquitectura MVC",
      "POO",
      "Principios SOLID",
      "Diseño de APIs REST",
      "WebSockets",
      "Autenticación y permisos",
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "HTML",
      "CSS",
      "SASS",
      "jQuery",
    ],
  },
  {
    title: "Arquitectura & Sistemas",
    skills: [
      "Desarrollo de ERP",
      "Intranets corporativas",
      "Optimización de procesos",
      "Modelado de base de datos",
      "Integración de servicios",
      "Escalabilidad",
    ],
  },
  {
    title: "Integraciones & APIs",
    skills: [
      "Consumo de APIs",
      "Integraciones con ERP externos",
      "PHPMailer",
      "Mapbox",
      "Servicios de terceros",
    ],
  },
  {
    title: "Herramientas & Workflow",
    skills: [
      "Git",
      "GitHub",
      "XAMPP",
      "Power BI",
      "FTP",
      "Deploy en producción",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-28 relative overflow-hidden"
    >
      {/* Fondo degradado azul animado */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-blue-400">
          Stack tecnológico
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="
                relative
                border border-white/10
                rounded-2xl
                p-7
                bg-white/[0.02]
                backdrop-blur-md
                hover:border-white/20
                hover:bg-white/[0.04]
                transition-all
                duration-300
                overflow-hidden
              "
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {/* Glow interno sutil */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none animate-pulse" />

              <h3 className="text-lg font-semibold mb-5 text-blue-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3 py-1
                      bg-white/5
                      border border-white/10
                      rounded-full
                      text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
