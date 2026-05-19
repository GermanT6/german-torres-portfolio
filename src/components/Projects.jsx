import Card from "./ui/Card";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl font-bold mb-10">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
