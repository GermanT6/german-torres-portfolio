import Card from "./ui/Card";
import projects from "../data/projects";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">
          Proyectos
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
