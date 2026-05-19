import { useState } from "react";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import ThemeToggle from "./ui/ThemeToggle";

const navLinks = [
  {
    name: "Sobre mí",
    href: "#about",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Experiencia",
    href: "#experience",
  },

  {
    name: "Proyectos",
    href: "#projects",
  },

  {
    name: "Contacto",
    href: "#contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto mt-4 px-6">
          
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
            
            {/* LOGO */}
            <a
              href="#"
              className="text-2xl font-black gradient-text"
            >
              GT
            </a>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-primary transition"
                >
                  {link.name}
                </a>
              ))}

              <ThemeToggle />
            </div>

            {/* MOBILE BUTTON */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />

              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm lg:hidden">
          
          {/* SIDEBAR */}
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-8">
            
            {/* TOP */}
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black gradient-text">
                Menu
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold hover:text-primary transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;