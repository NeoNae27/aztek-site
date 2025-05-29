import { useState, useRef, useEffect } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, projectType, projectImg, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <span className="project-card" ref={cardRef}>
      <div className="project-card__image">
        {!isLoaded && (
          <div className="project-card__skeleton">
            <div className="project-card__skeleton-image"></div>
          </div>
        )}
        {isInView && (
          <img
            ref={imgRef}
            src={projectImg}
            alt={`${title} - ${projectType} project`}
            onLoad={handleImageLoad}
            style={{ opacity: isLoaded ? 1 : 0 }}
            loading="lazy"
          />
        )}
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