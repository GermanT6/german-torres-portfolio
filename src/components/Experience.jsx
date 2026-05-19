import { motion } from "framer-motion";
import lpfLogo from "../assets/lpf-logo.svg";
import Reveal from "./ui/Reveal";

const experiences = [
  {
    company: "Clínica La Pequeña Familia",
    role: "Desarrollador de Aplicaciones",
    period: "Noviembre 2024 - Actualidad",

    description:
      "Desarrollo y mantenimiento del portal de afiliados utilizando Spring Boot, Java y PostgreSQL.",

    tasks: [
      "Desarrollo de soluciones internas para integración y gestión.",
      "Trabajo con Linux y máquinas virtuales.",
      "Implementación de interfaces con HTML y CSS.",
      "Trabajo colaborativo bajo metodologías ágiles.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Linux",
      "HTML",
      "CSS",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="mb-14">
        <Reveal>
          <h2 className="text-4xl font-bold mb-4">
            Experiencia
          </h2>
        </Reveal>

        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
          Experiencia profesional desarrollando soluciones
          reales y aplicaciones web modernas.
        </p>
      </div>

      <div className="relative border-l-2 border-primary pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900" />

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
               <div className="flex items-center gap-4">
                    <img
                        src={lpfLogo}
                        alt="LPF Logo"
                        className="w-14 h-14 object-contain rounded-xl bg-white p-2"
                    />

                    <div>
                        <h3 className="text-2xl font-bold">
                        {exp.role}
                        </h3>

                        <p className="text-primary font-semibold">
                        {exp.company}
                        </p>
                    </div>
                </div>

                <span className="text-sm text-slate-500 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {exp.description}
              </p>

              <ul className="space-y-3 mb-6">
                {exp.tasks.map((task) => (
                  <li
                    key={task}
                    className="text-slate-600 dark:text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">
                      •
                    </span>

                    {task}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;