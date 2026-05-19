import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import profileImage from "../assets/profile/german.png";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "Linux",
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="section-container grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* STATUS */}
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full mb-8 mt-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

            <span className="text-sm font-medium">
              Disponible para proyectos y oportunidades
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Backend Developer
            <br />

            <span className="gradient-text">
              Java & Spring Boot
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Actualmente desarrollando soluciones reales para
            el sector salud utilizando Java, Spring Boot,
            PostgreSQL y React.
          </p>

          {/* TECH BADGES */}
          <div className="flex flex-wrap gap-3 mb-10">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md font-medium"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-primary hover:bg-secondary transition text-white font-semibold shadow-xl"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-semibold"
            >
              Contacto
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-5">
            <a
              href="https://github.com/GermanT6"
              target="_blank"
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
            >
              <FiGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/german-torres-b4a4162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="mailto:gertorres39@gmail.com"
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-1 transition"
            >
              <FiMail size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative flex justify-center"
        >
          
          {/* GLOW */}
          <div className="absolute w-[380px] h-[380px] bg-primary/20 rounded-full blur-3xl" />

          {/* IMAGE */}
          <img
            src={profileImage}
            alt="German Torres"
            className="relative z-10 w-[320px] md:w-[420px] object-cover rounded-[40px] border border-white/20 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;