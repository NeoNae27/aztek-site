import { SectionArticle, Button, ProjectCard } from "@components";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
// import projects from "../../assets/content/projects.json";

const Projects = () => {
  const { t } = useTranslation(["projectsLayout", "projects"]);
  const projects = t("projects:list", { returnObjects: true });
  const projectsSlice = projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <header className="projects__header">
          <SectionArticle
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
          <div className="projects__desktop-button">
            <Button label={t("button")} size="button-md" type="color" href="/portfolio" />
          </div>
          <div className="services__mobile-button">
            <Button size="button-arrow" type="color" href="/portfolio" />
          </div>
        </header>
        <div className="projects__card-grid">
          {projectsSlice.map(
            ({ title, projectType, projectImg, description }) => (
              <ProjectCard
                key={title}
                title={title}
                projectType={projectType}
                projectImg={projectImg}
                description={
                  description || "Learn more about our premium services"
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
