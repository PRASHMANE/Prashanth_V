import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <button>View Project</button>
      </div>
    </div>
  );
}

export default ProjectCard;