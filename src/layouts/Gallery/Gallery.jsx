import "./Gallery.scss";
// import projects from "../../assets/content/projects.json";
import { ProjectCard } from "@components";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Skeleton component for loading state
const ProjectCardSkeleton = () => (
  <div className="project-card project-card--skeleton">
    <div className="project-card__image">
      <div className="project-card__skeleton-image"></div>
    </div>
    <div className="project-card__content">
      <header className="project-card__header">
        <div className="skeleton-line skeleton-line--title"></div>
        <div className="skeleton-line skeleton-line--subtitle"></div>
      </header>
      <div className="skeleton-text">
        <div className="skeleton-line skeleton-line--text"></div>
        <div className="skeleton-line skeleton-line--text"></div>
        <div className="skeleton-line skeleton-line--text skeleton-line--short"></div>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const { t, i18n } = useTranslation(["projects"]);
  const projects = t("projects:list", { returnObjects: true });

  const [selectedType, setSelectedType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSelectedType("all");
  }, [i18n.language]);

  // Get unique project types
  const projectTypes = [
    "all",
    ...new Set(projects.map((project) => project.projectType)),
  ];

  const filteredProjects = useMemo(() => {
    if (selectedType === "all") {
      return projects;
    }
    return projects.filter((project) => project.projectType === selectedType);
  }, [selectedType, projects, i18n.language]);

  const handleTypeChange = async (e, type) => {
    e.preventDefault();
    if (selectedType === type) return;

    setIsLoading(true);
    setSelectedType(type);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  // Generate skeleton cards based on expected number of items
  const skeletonCount = Math.min(filteredProjects.length || 6, 6);
  const skeletonCards = Array.from({ length: skeletonCount }, (_, index) => (
    <ProjectCardSkeleton key={`skeleton-${index}`} />
  ));

  return (
    <section className="gallery">
      <div className="gallery__container">
        <nav className="gallery__navigation">
          {/* Navigation links */}
          <div className={`gallery__nav-links`}>
            {projectTypes.map((type) => (
              <a
                key={type}
                href="#"
                className={`gallery__filter-link ${
                  selectedType === type ? "gallery__filter-link--active" : ""
                }`}
                onClick={(e) => handleTypeChange(e, type)}
              >
                {type === "all" ? t("allProjects") : type}
              </a>
            ))}
          </div>
        </nav>

        <div className="gallery__cards-grid">
          {isLoading
            ? skeletonCards
            : filteredProjects.map(
                ({ title, projectType, projectImg, description }) => (
                  <ProjectCard
                    key={title}
                    title={title}
                    projectType={projectType}
                    projectImg={projectImg}
                    description={description || "Learn more about our services"}
                  />
                )
              )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
