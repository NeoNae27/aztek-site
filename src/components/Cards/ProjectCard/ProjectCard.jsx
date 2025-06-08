import { useState, useRef, useEffect } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, projectType, projectImg, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
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

  // Handle escape key to close splash screen
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showSplash) {
        setShowSplash(false);
      }
    };

    if (showSplash) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when splash is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleTitleClick = () => {
    setShowSplash(true);
  };

  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  const handleSplashBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSplash(false);
    }
  };

  return (
    <>
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
            <h5 className="project-card__title" onClick={handleTitleClick}>
              {title}
            </h5>
            <p className="project-card__type subtitle2">{projectType}</p>
          </header>
          <p className="project-card__description body2">{description}</p>
        </div>
      </span>

      {/* Splash Screen */}
      {showSplash && (
        <div className="project-splash" onClick={handleSplashBackdropClick}>
          <div className="project-splash__content">
            <div className="project-splash__image">
              <img src={projectImg} alt={`${title} - ${projectType} project`} />
            </div>
            <div className="project-splash__details">
              <div className="project-splash__header">
                <span className="project-splash__title">
                  <h3>{title}</h3>
                  <h5>{projectType}</h5>
                </span>
                <button
                  className="project-splash__close"
                  onClick={handleCloseSplash}
                  aria-label="Close splash screen"
                >
                  ×
                </button>
              </div>
              <div className="project-splash__description">
                <p className="body1">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
