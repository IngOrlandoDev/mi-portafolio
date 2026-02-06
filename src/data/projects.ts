export type Project = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  image?: string; // aquí irán los screenshots después
};

export const projects: Project[] = [
  {
    title: "ERP Empresarial — Express MG",
    description:
      "Sistema ERP desarrollado desde cero para la gestión operativa interna, usuarios, recursos humanos, unidades, reservaciones y comunicación organizacional.",
    impact:
      "Utilizado por más de 150 usuarios. Implementación de WebSockets para notificaciones en tiempo real e integración de mapas y visualización de datos.",
    stack: ["PHP", "MySQL", "JavaScript", "WebSockets", "Mapbox", "Power BI"],
  },
  {
    title: "Intranet Corporativa — Médica Campestre",
    description:
      "Plataforma interna para gestión de solicitudes, comunicación y procesos administrativos conectada con ERP de nómina.",
    impact:
      "Automatización de procesos de RH y nómina. Integración con servicios externos para centralización de información organizacional.",
    stack: ["PHP", "MySQL", "JavaScript", "jQuery", "APIs REST"],
  },
  {
    title: "Landing Corporativa — Express MG",
    description:
      "Sitio corporativo orientado a clientes B2B y directivos para presentación de servicios logísticos.",
    impact:
      "Mejora en la presencia digital y captación de leads empresariales.",
    stack: ["PHP", "Tailwind", "JavaScript", "MySQL", "PHPMailer"],
  },
  {
    title: "Portafolio Fullstack — React",
    description:
      "Portafolio profesional desarrollado con React, TypeScript y Tailwind enfocado en oportunidades laborales y posicionamiento como desarrollador fullstack.",
    impact:
      "Proyecto enfocado en demostrar arquitectura frontend moderna y experiencia profesional.",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
  },
];
