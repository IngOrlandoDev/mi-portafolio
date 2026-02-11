import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[100vh] flex items-center overflow-hidden will-change-transform">
      {/* Glow animado SOLO en desktop */}
      <motion.div
        className="hidden md:block absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 60%)",
            "radial-gradient(circle at 80% 30%, rgba(37,99,235,0.12), transparent 60%)",
            "radial-gradient(circle at 40% 80%, rgba(14,165,233,0.14), transparent 60%)",
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 60%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow estático para mobile */}
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* Grid técnico */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:36px_36px] z-0" />

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

      {/* Contenido */}
      <div className="relative container mx-auto px-6 py-16 z-10 max-w-6xl">
        {/* Disponibilidad */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase text-white/70 border border-white/10 rounded-full bg-white/5 md:backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Disponible para oportunidades como Desarrollador
          </span>
        </div>

        {/* Nombre */}
        <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
          ING. ORLANDO ARENAS
        </p>

        {/* Headline */}
        <h1 className="text-2xl md:text-5xl font-semibold leading-snug md:leading-[1.05]">
          Desarrollador Fullstack | PHP, React y Sistemas empresariales
          <br />
          <span className="text-white/60 text-xl md:text-2xl font-medium">
            ERP · Integraciones · Automatización · Web Apps · APIs · Ecommerce
          </span>
        </h1>

        {/* Descripción */}
        <p className="max-w-2xl text-white/70 text-md leading-relaxed mb-12 mt-6">
          Desarrollador Fullstack con experiencia liderando desarrollo de ERPs,
          intranets y sistemas empresariales en producción. He evolucionado de
          programador a coordinador y líder técnico, construyendo soluciones que
          impactan directamente la operación del negocio. Actualmente enfocado
          en arquitectura, integraciones y evolución hacia plataformas
          ecommerce.
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-4 mb-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ramon-orlando-daniel-arenas-ramirez-0a0986287/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/IngOrlandoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.797 8.207 11.385.6.113.82-.262.82-.583 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.762-1.605-2.665-.303-5.466-1.335-5.466-5.934 0-1.31.468-2.38 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.842 1.232 1.912 1.232 3.222 0 4.61-2.804 5.628-5.475 5.926.43.372.814 1.103.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .323.216.701.825.582C20.565 21.796 24 17.31 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>

          {/* CV */}
          <a
            href="/cv.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 px-5 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/5 transition"
          >
            <FiDownload className="w-4 h-4" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
