export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Glow fondo optimizado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full z-0" />

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest text-white/40 mb-3">PERFIL</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Sobre mí
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda */}
          <div className="space-y-6 text-white/70 leading-relaxed">
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
              integraciones con servicios externos vía FTP/SFTP y construcción
              de herramientas internas que soportan procesos logísticos y
              administrativos.
            </p>

            <p>
              También desarrollo frontend cuando la solución lo requiere,
              utilizando React y TypeScript, manteniendo principios como SOLID y
              Clean Code.
            </p>

            <div className="pt-6 border-t border-white/10">
              <p className="text-white font-medium">
                Mi enfoque es convertir procesos complejos en software estable,
                mantenible y alineado al crecimiento del negocio.
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative border border-white/10 rounded-2xl p-8 space-y-8 bg-white/[0.02] z-10">
            {/* glow interno ligero */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/10 blur-2xl rounded-full" />

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ESPECIALIDAD
              </p>
              <p className="font-medium text-blue-400">
                Software empresarial • Backend • Integraciones • Tiempo real
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                EXPERIENCIA REAL
              </p>
              <p className="font-medium">
                ERPs, intranets, automatizaciones y sistemas en producción
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                STACK PRINCIPAL
              </p>
              <p className="font-medium">
                PHP, MySQL, JavaScript, TypeScript, React, APIs REST,
                WebSockets, Python
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ARQUITECTURA
              </p>
              <p className="font-medium">
                MVC, SOLID, Clean Code y diseño mantenible
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                ENFOQUE ACTUAL
              </p>
              <p className="font-medium">
                Escalabilidad, performance y software orientado a negocio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
