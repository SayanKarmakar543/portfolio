import { useState } from "react";

export const ProjectFilter = ({ projects, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique technologies from all projects
  const allTechnologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  const handleFilterClick = (tech) => {
    setActiveFilter(tech);
    onFilterChange(tech);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {allTechnologies.map((tech, idx) => (
        <button
          key={idx}
          onClick={() => handleFilterClick(tech)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === tech
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
              : "glass hover:bg-surface text-muted-foreground hover:text-foreground hover:border-primary/30"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export const useProjectFilter = (projects) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(filter))
      );
    }
  };

  return {
    filteredProjects,
    activeFilter,
    handleFilterChange,
  };
};
