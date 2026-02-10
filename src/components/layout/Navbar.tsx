import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="font-semibold tracking-wide text-white">
            IngOrlando.dev
          </span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
          {[
            { label: "Sobre mí", href: "#about" },
            { label: "Experiencia", href: "#experience" },
            { label: "Proyectos", href: "#projects" },
            { label: "Stack", href: "#skills" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative hover:text-white transition group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-white transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition flex items-center gap-2"
          >
            <FiUser size={16} />
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
