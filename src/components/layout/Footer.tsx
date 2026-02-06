export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-4">
        <span>
          © {new Date().getFullYear()} Orlando Arenas — Fullstack Developer
        </span>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
