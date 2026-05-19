import { motion } from "framer-motion";

import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

function Card({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl h-full flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl"
    >
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col flex-1">
        
        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* TECHS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-auto pt-6">
          
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition font-medium"
          >
            <FiGithub />

            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary hover:bg-secondary transition text-white font-medium"
          >
            <FiExternalLink />

            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;