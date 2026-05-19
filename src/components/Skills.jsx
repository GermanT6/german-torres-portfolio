import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
  ],

  Frontend: [
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
  ],

  Herramientas: [
    "Git",
    "GitHub",
    "Linux",
    "Postman",
    "Virtual Machines",
  ],

  Metodologías: [
    "POO",
    "MVC",
    "Agile",
    "Trabajo en equipo",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="mb-14">
        <Reveal>
          <h2 className="text-4xl font-bold mb-4">
            Habilidades
          </h2>
        </Reveal>

        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
          Tecnologías y herramientas con las que trabajo
          actualmente en proyectos profesionales y personales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;