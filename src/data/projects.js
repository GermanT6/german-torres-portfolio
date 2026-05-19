import afiliadosImage from "../assets/projects/portal-afiliados.png";

import guardiaImage from "../assets/projects/portal-guardia.png";

import ticketsImage from "../assets/projects/wiki-tickets.png";

import portalOficinasImage from "../assets/projects/portal-oficinas.png";

import portalAdminImage from "../assets/projects/portal-afiliados-admin.png";

import portfolioImage from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "Portal de Afiliados",
    description:
      "Sistema tipo credencial para la gestión y administración de los afiliados desarrollado para Clínica La Pequeña Familia.",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
    ],

    image: afiliadosImage,

    github: "#",
    demo: "https://portal.lpfplanesdesalud.com.ar/login",
  },

   {
    title: "Administrador - Portal de Afiliados",
    description:
      "Sistema de administración para el portal de afiliados, con funcionalidades avanzadas para la gestión de usuarios, bonos y reportes.",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
    ],

    image: portalAdminImage,

    github: "#",
    demo: "https://gestioncredencial.grupolpf.com.ar/login",
  },

  {
    title: "Portal de Guardia",

    description:
      "Aplicación web para la gestión de bonos y administración de guardias médicas.",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "HTML",
      "CSS",
    ],

    image: guardiaImage,

    github: "#",
    demo: "https://guardiaportal.grupolpf.com.ar/login",
  },

  {
    title: "Wiki & Ticket System",

    description:
      "Sistema interno de documentación y gestión de tickets para soporte y procesos internos.",

    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "MVC",
    ],

    image: ticketsImage,

    github: "#",
    demo: "http://52.15.105.230:8000/",
  },

  {
    title: "Portal de Oficinas",

    description:
      "Aplicación para la gestión de oficinas y recursos administrativos.",

    technologies: [
      "Java",
      "Spring",
      "PostgreSQL",
      "MVC",
    ],

    image: portalOficinasImage,

    github: "#",
    demo: "http://192.168.63.44:8081/",
  },

  {
    title: "Portfolio Personal",

    description:
      "Portfolio moderno desarrollado con React, TailwindCSS y Framer Motion.",

    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    image: portfolioImage,

    github: "#",
    demo: "#",
  },
];

export default projects;