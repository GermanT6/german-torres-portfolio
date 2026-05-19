import Reveal from "./ui/Reveal";
const About = () => {
  return (
    <section id="about" className="section-container">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8">
          Sobre mí
        </h2>
      </Reveal>


      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        Soy estudiante avanzado de Ingeniería en Informática y actualmente me desempeño como desarrollador de aplicaciones en Clínica La Pequeña Familia.

        Trabajo principalmente con Java, Spring Boot y PostgreSQL, participando en el desarrollo y mantenimiento de soluciones internas y portales de afiliados. También tengo experiencia trabajando con Linux, máquinas virtuales y desarrollo de interfaces web.

        Me destaco por mi capacidad de aprendizaje, trabajo en equipo y enfoque estratégico para resolver problemas reales mediante tecnología.
      </p>
    </section>
  );
};

export default About;
