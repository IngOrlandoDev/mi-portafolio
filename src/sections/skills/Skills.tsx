const skillGroups = [
  {
    title: "Backend Engineering",
    description:
      "Arquitectura y lógica de negocio para sistemas empresariales, APIs y procesos críticos en producción.",
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
    description:
      "Interfaces modernas enfocadas en experiencia de usuario, mantenibilidad y performance.",
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
    description:
      "Diseño de soluciones escalables alineadas a operación, crecimiento y procesos de negocio.",
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
    description:
      "Comunicación entre plataformas, automatización de flujos y conexión con servicios externos.",
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
    description:
      "Flujo de desarrollo, control de versiones y despliegue de software en producción.",
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
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Glow fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full animate-glow-slow z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título centrado */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-white/40 mb-3">
            TECNOLOGÍA
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Stack tecnológico
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid de skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                group
                relative
                border border-white/10
                rounded-2xl
                p-8
                bg-white/[0.02]
                backdrop-blur-md
                hover:border-blue-500/30
                hover:bg-white/[0.05]
                hover:-translate-y-1
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* Glow hover */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  {group.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
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
                      text-white/80
                      hover:bg-blue-500/10
                      hover:border-blue-500/40
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Línea inferior técnica */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
