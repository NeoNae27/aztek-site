import { SectionArticle, Button, ProjectCard } from "@components";
import "./Projects.scss";
import projects from "../../assets/projects.json";

const Projects = () => {

  const projectsSlice = projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <SectionArticle
            title="Our Projects"
            subtitle="We provide a wide range of services. From small to fundamental works"
          />
          <div className="projects__desktop-button">
            <Button label="See More" size="button-md" type="color" />
          </div>
          <div className="services__mobile-button">
            <Button size="button-arrow" type="color" />
          </div>
        </header>
        <div className="projects__card-grid">
          {projectsSlice.map(({ title, projectType, projectImg, description }) => (
            <ProjectCard
              key={title}
              title={title}
              projectType={projectType}
              projectImg={projectImg}
              description={
                description || "Learn more about our premium services"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
