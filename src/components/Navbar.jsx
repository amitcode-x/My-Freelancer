import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = useNavigate();

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const goToSection = (id) => {
    setMoreOpen(false);
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* BRAND */}
        <Link to="/" className="text-lg sm:text-xl font-bold text-white group">
          Amit
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
            .dev
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {mainLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : "text-gray-300 hover:text-blue-400 transition-colors duration-200"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              More <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-3 w-40 backdrop-blur-lg bg-slate-900/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                <button
                  onClick={() => goToSection("services")}
                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => goToSection("pricing")}
                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
                >
                  Pricing
                </button>
                <Link
                  to="/terms"
                  onClick={() => setMoreOpen(false)}
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setMoreOpen(false)}
                  className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
                >
                  Privacy
                </Link>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Hire Me
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden backdrop-blur-lg bg-slate-900/95 border-t border-white/10 px-4 py-4 space-y-1">
          {mainLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400 font-medium"
                    : "text-gray-300 hover:bg-white/5 hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={() => goToSection("services")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
          >
            Services
          </button>

          <button
            onClick={() => goToSection("pricing")}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
          >
            Pricing
          </button>

          <Link
            to="/terms"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
          >
            Terms
          </Link>

          <Link
            to="/privacy"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-all duration-200"
          >
            Privacy
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-3 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}