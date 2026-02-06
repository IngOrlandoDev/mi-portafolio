import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 relative overflow-hidden"
    >
      {/* Glow grande de fondo */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full z-0 will-change-transform"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 50, -30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow secundario inferior */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/8 blur-[120px] rounded-full z-0 will-change-transform"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, -40, 20, 0], y: [0, -30, 15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-blue-400">
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Columna izquierda */}
          <div className="space-y-7 text-white/70 leading-relaxed text-lg">
            <p>
              Ingeniero de software enfocado en construir sistemas que resuelven
              problemas reales de operación. He desarrollado ERPs, intranets y
              plataformas internas utilizadas diariamente por equipos
              administrativos y operativos en entornos productivos.
            </p>

            <p>
              Mi especialidad está en backend y arquitectura de software: diseño
              de lógica de negocio, integraciones con APIs, manejo de datos,
              automatización de procesos y comunicación en tiempo real mediante
              WebSockets.
            </p>

            <p>
              He trabajado en automatizaciones críticas para operación,
              integraciones con servicios externos vía FTP/SFTP, generación de
              flujos de información para terceros y construcción de herramientas
              internas que soportan procesos logísticos, administrativos y de
              control.
            </p>

            <p>
              También desarrollo aplicaciones frontend y móviles cuando la
              solución lo requiere, utilizando React, TypeScript y React Native,
              manteniendo principios de arquitectura como SOLID, Clean Code y
              buenas prácticas de ingeniería.
            </p>

            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-medium">
                Mi enfoque es convertir procesos complejos en software estable,
                mantenible y alineado al crecimiento del negocio.
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative border border-white/10 rounded-2xl p-9 space-y-10 bg-white/[0.03] backdrop-blur-md z-10">
            {/* Glow interno optimizado */}
            <motion.div
              className="absolute -top-12 -right-12 w-44 h-44 bg-blue-400/10 blur-3xl rounded-full will-change-transform"
              initial={{ x: 0, y: 0 }}
              animate={{ x: [0, 20, -15, 0], y: [0, 15, -10, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ESPECIALIDAD
              </p>
              <p className="font-medium text-lg text-blue-400">
                Software empresarial • Backend • Integraciones • Tiempo real
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                EXPERIENCIA REAL
              </p>
              <p className="font-medium text-lg">
                ERPs, intranets, automatizaciones, apps internas y sistemas en
                producción utilizados por equipos de negocio
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                STACK PRINCIPAL
              </p>
              <p className="font-medium text-lg">
                PHP, MySQL, JavaScript, TypeScript, React, React Native,
                Tailwind, CSS, Sass, APIs REST, WebSockets, Python, FTP/SFTP
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ARQUITECTURA
              </p>
              <p className="font-medium text-lg">
                MVC, SOLID, Clean Code, diseño mantenible y orientado a dominio
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ENFOQUE ACTUAL
              </p>
              <p className="font-medium text-lg">
                Escalabilidad, performance, calidad de código e impacto en
                operación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
