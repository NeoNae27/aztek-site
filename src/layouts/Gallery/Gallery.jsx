import "./Gallery.scss";
import projects from "../../assets/content/projects.json";
import { ProjectCard } from "@components";
import { useState, useMemo } from "react";

const Gallery = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get unique project types
  const projectTypes = useMemo(() => {
    const types = [...new Set(projects.map((project) => project.projectType))];
    return ["all", ...types];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedType === "all") {
      return projects;
    }
    return projects.filter((project) => project.projectType === selectedType);
  }, [selectedType]);

  const handleTypeChange = (e, type) => {
    e.preventDefault();
    setSelectedType(type);
    setIsMobileMenuOpen(false); // Close mobile menu when item is selected
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                {type === "all" ? "All Projects" : type}
              </a>
            ))}
          </div>
        </nav>
        <div className="gallery__cards-grid">
          {filteredProjects.map(
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

export default Gallery;
