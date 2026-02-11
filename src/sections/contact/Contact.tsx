import { FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-white/40 mb-3">CONTACTO</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Trabajemos juntos
          </h2>

          <div className="w-16 h-[2px] bg-blue-400/70 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Columna izquierda */}
          <div className="space-y-7">
            <p className="text-white/70 leading-relaxed">
              Actualmente estoy abierto a oportunidades como Software Engineer,
              Fullstack o Backend Developer participando en proyectos reales:
              ERPs, plataformas internas, automatización e integraciones.
            </p>

            <p className="text-white/80 leading-relaxed">
              Busco integrarme rápido a equipos, entender procesos de negocio y
              construir software estable en producción.
            </p>

            {/* Botón CV */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 border border-blue-500/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500/10 transition"
              >
                <FiDownload className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] space-y-8">
            {/* glow ligero */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                CORREO
              </p>
              <a
                href="mailto:contacto@arenasdigital.com"
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                orlando.arenas31@gmail.com
              </a>
            </div>

            {/* <div>
              <p className="text-xs tracking-widest text-white/40 mb-2">
                CORREO ALTERNO
              </p>
              <a
                href="mailto:orlando.arenas31@gmail.com"
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                orlando.arenas31@gmail.com
              </a>
            </div> */}

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
