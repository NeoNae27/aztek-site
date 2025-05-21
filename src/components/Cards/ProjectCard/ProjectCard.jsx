import "./ProjectCard.scss";

const ProjectCard = ({ title, projectType, projectImg, description }) => {
  return (
    <span className="project-card">
      <div className="project-card__image">
        <img src={projectImg} alt="Project Image" />
      </div>
      <div className="project-card__content">
        <header className="project-card__header">
          <h5 className="project-card__title">{title}</h5>
          <p className="project-card__type subtitle2">{projectType}</p>
        </header>
        <p className="project-card__description body2">{description}</p>
      </div>
    </span>
  );
};

export default ProjectCard;
