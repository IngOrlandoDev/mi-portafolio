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

type ExperienceItem = {
  company: string;
  role: string;
  description: string;
  achievements: string[];
  stack: string[];
};

// Función para asignar iconos a cada stack
const getIcon = (tech: string) => {
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
};

const experiences: ExperienceItem[] = [
  {
    company: "Express MG",
    role: "Software Engineer → Coordinador de Desarrollo → Líder de Proyectos ERP",
    description:
      "Evolución interna desde desarrollo hasta coordinación y liderazgo técnico en la construcción e implementación de sistemas empresariales para la operación logística.",
    achievements: [
      "Desarrollo desde cero de ERP logístico para control de unidades, paquetes, cotización y operación interna",
      "Implementación del ERP GM Transport y liderazgo técnico en su despliegue",
      "Coordinación de desarrollo y toma de decisiones técnicas en arquitectura y evolución del sistema",
      "Integraciones con servicios externos críticos para la operación del negocio",
      "Notificaciones en tiempo real mediante WebSockets",
      "Arquitectura basada en MVC, POO, SOLID y Clean Code",
      "Visualización operativa con Power BI y mapas con Mapbox",
      "Checklist digital con captura fotográfica para control de unidades",
      "Página web empresarial",
    ],
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "TypeScript",
      "Python",
      "WebSockets",
      "FTP/SFTP",
      "APIs REST",
      "Mapbox",
      "Power BI",
    ],
  },
  {
    company: "Médica Campestre",
    role: "Jefe de Desarrollo — Intranet & Automatización",
    description:
      "Liderazgo técnico y coordinación del desarrollo de intranet organizacional y herramientas de automatización para optimizar procesos administrativos y operativos.",
    achievements: [
      "Dirección técnica del proyecto de intranet corporativa",
      "Coordinación de desarrollo y priorización de funcionalidades",
      "Automatizaciones con Python conectadas a SAP HANA",
      "Generación y envío automatizado de información vía FTP/SFTP",
      "Integraciones con sistemas internos y proveedores externos",
      "Implementación de soluciones con códigos QR para control y registro",
      "Digitalización de procesos operativos manuales",
    ],
    stack: [
      "Python",
      "PHP",
      "MySQL",
      "SAP HANA",
      "JavaScript",
      "FTP/SFTP",
      "HTML",
      "CSS",
      "jQuery",
    ],
  },
  {
    company: "Proyectos Web & Freelance",
    role: "Software Engineer — Web Apps & Soluciones Digitales",
    description:
      "Desarrollo de aplicaciones web, automatizaciones y plataformas digitales enfocadas en negocio, operación y experiencia de usuario.",
    achievements: [
      "Desarrollo de sitios corporativos y landings orientadas a captación y presencia digital",
      "Desarrollo de portafolio profesional con React",
    ],
    stack: ["React", "Tailwind", "PHP", "MySQL", "APIs REST", "Mapbox"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Glow principal de fondo (animación CSS) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full animate-glow-slow z-0" />

      {/* Glow secundario */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/8 blur-[120px] rounded-full animate-glow-slower z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título centrado con gradiente */}

        {/* Header de sección consistente */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-white/40 mb-3">
            TRAYECTORIA
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Experiencia profesional
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border border-white/10 rounded-2xl p-9 hover:border-white/20 hover:bg-white/[0.03] transition-all bg-white/[0.015] backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-7">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-400">
                    {exp.role}
                  </h3>
                  <p className="text-white/40 text-sm">{exp.company}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 mb-7 leading-relaxed text-[15px]">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-3 mb-7">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-white/60 text-sm flex gap-3">
                    <span className="text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-xs px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full hover:bg-blue-500/10 transition"
                  >
                    {getIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
