import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="section-container py-16">
        
        <div className="grid lg:grid-cols-3 gap-14">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black gradient-text mb-5">
              Germán Torres
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-sm">
              Backend Developer especializado en Java,
              Spring Boot y desarrollo de aplicaciones web
              modernas.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              
              <a
                href="https://github.com/GermanT6"
                target="_blank"
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
              >
                <FiGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/german-torres-b4a4162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="mailto:gertorres39@gmail.com"
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4">
              
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                Sobre mí
              </a>

              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                Experiencia
              </a>

              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                Proyectos
              </a>

              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Contacto
            </h3>

            <div className="flex flex-col gap-5">
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <FiMail />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="font-medium">
                    gertorres39@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Ubicación
                  </p>

                  <p className="font-medium">
                    Junín, Buenos Aires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-slate-500 text-sm">
            © 2026 Germán Torres. Todos los derechos reservados.
          </p>

          <p className="text-slate-500 text-sm">
            Desarrollado con React + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;