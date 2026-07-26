import { Link } from 'react-router-dom';

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={`project-card ${featured ? 'featured' : ''}`}
      data-accent={project.accent}
      data-category={project.category}
    >
      <div className="card-inner">
        <div className="card-copy">
          <div className="card-meta">
            <span className="card-num">{project.number}</span>
            <span className={`card-type ${project.category}`}>{project.type}</span>
            <span className="card-year">{project.year}</span>
          </div>
          <div className="card-title">{project.title}</div>
          <p className="card-desc">{project.shortDescription}</p>
          <div className="card-footer">
            <div className="card-stack">
              {project.stack.slice(0, 4).map((tool) => (
                <span className="stack-tag" key={tool}>{tool}</span>
              ))}
            </div>
            <div className="card-arrow">↗</div>
          </div>
        </div>

        {featured && (
          <div className="featured-visual">
            {project.cover ? (
              <img src={project.cover} alt={`${project.title} preview`} className="featured-img" />
            ) : (
              <div className="featured-visual-label">PROJECT<br />PREVIEW<br />IMAGE</div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
