import { Link } from 'react-router-dom';

export default function ProjectListItem({ project }) {
  return (
    <Link className="project-item" to={`/projects/${project.id}`}>
      <div className="project-num">{project.number}</div>
      <div className="project-info">
        <div className="project-name">{project.title}</div>
        <div className="project-desc">{project.shortDescription}</div>
      </div>
      <div className="project-meta">
        <div className="project-type">{project.type}</div>
        <div className="project-stack">{project.stack.slice(0, 3).join(' · ')}</div>
      </div>
    </Link>
  );
}
