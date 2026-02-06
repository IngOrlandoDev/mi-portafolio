export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-28 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-blue-400">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda */}
          <div className="space-y-7">
            <p className="text-white/70 text-lg leading-relaxed">
              Actualmente estoy abierto a oportunidades como Software Engineer,
              Fullstack o Backend Developer participando en proyectos reales:
              ERPs, plataformas internas, automatización e integraciones.
            </p>

            <p className="text-white/60 leading-relaxed">
              Busco integrarme rápido a equipos, entender procesos de negocio y
              construir software estable en producción.
            </p>

            {/* botones principales */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:contacto@arenasdigital.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Enviar correo
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="border border-blue-500/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500/10 transition"
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative border border-white/10 rounded-2xl p-9 bg-white/[0.03] backdrop-blur-md space-y-8">
            {/* glow sutil */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                CORREO PRINCIPAL
              </p>
              <a
                href="mailto:contacto@arenasdigital.com"
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                contacto@arenasdigital.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                CORREO ALTERNO
              </p>
              <a
                href="mailto:orlando.arenas31@gmail.com"
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                orlando.arenas31@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                TELÉFONO
              </p>
              <a
                href="tel:+524792045547"
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                479 204 5547
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/ramon-orlando-daniel-arenas-ramirez-0a0986287/"
                target="_blank"
                className="px-5 py-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/IngOrlandoDev"
                target="_blank"
                className="px-5 py-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
