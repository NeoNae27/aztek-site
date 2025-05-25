import "./Gallery.scss";
import projects from "../../assets/content/projects.json";
import { ProjectCard } from "@components";
import React, { useState, useMemo } from "react";

const Gallery = () => {
  const [selectedType, setSelectedType] = useState("all");

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

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__navigation">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`gallery__filter-btn ${
                selectedType === type ? "gallery__filter-btn--active" : ""
              }`}
              onClick={() => handleTypeChange(type)}
            >
              {type === "all" ? "All Projects" : type}
            </button>
          ))}
        </div>
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
