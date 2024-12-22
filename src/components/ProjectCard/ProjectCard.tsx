import { useState } from "react";
import "./ProjectCard.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
}

const ProjectCard: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Краткое описание проекта 1.",
      githubLink: "https://github.com/username/project1",
      liveLink: "https://username.github.io/project1",
      image: "/img/card-avatar.jpg"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Краткое описание проекта 2.",
      githubLink: "https://github.com/username/project2",
      liveLink: "https://username.github.io/project2",
      image: "/img/card-avatar.jpg"
    }
  ];

  const [flippedProject, setFlippedProject] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setFlippedProject(flippedProject === id ? null : id);
  };

  return (
    <section className="project">
      <h2 className="project__header" id="projects">Мои проекты:</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${flippedProject === project.id ? "flipped" : ""}`}
          >
            <div className="project-card__front" style={{ backgroundImage: `url(${project.image})` }}>
              <h3>{project.title}</h3>
              <button className="info-icon" onClick={() => handleFlip(project.id)}>
                I
              </button>
            </div>
            <div className="project-card__back">
              <button className="info-icon" onClick={() => handleFlip(project.id)}>
                I
              </button>
              <h3>{project.title}</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Code (GitHub)
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
