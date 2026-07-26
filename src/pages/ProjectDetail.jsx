import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ImageModal from '../components/ImageModal.jsx';
import { getProjectById, projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  const [selectedImage, setSelectedImage] = useState(null);

  const projectNav = useMemo(() => {
    if (!project) return { previousProject: null, nextProject: null };
    const currentIndex = projects.findIndex((item) => item.id === project.id);
    const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];
    return { previousProject, nextProject };
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const { previousProject, nextProject } = projectNav;

  const heroStyle = {
    '--accent': `var(--neon-${project.accent})`,
  };

  return (
    <>
      <Navbar />

      <main className="detail-page" style={heroStyle}>
        <section className="detail-hero">
          <Link to="/projects" className="back-link">← Back to Projects</Link>

          <div className="detail-meta">
            <span>{project.number}</span>
            <span>{project.type}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{project.tagline}</p>

          <div className="detail-stats">
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{project.duration}</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>{project.stack.join(' · ')}</strong>
            </div>
          </div>
        </section>

        <section className="detail-showcase">
          {project.cover ? (
            <button
              type="button"
              className="hero-image-button"
              onClick={() => setSelectedImage(project.cover)}
            >
              <img src={project.cover} alt={`${project.title} hero preview`} />
            </button>
          ) : (
            <div className="project-placeholder-large">
              <span>{project.title}</span>
              <small>Project screenshots can be added here later.</small>
            </div>
          )}
        </section>

        <section className="detail-content-grid">
          <article className="detail-block large">
            <span className="block-label">Overview</span>
            <h2>{project.overviewHeading}</h2>
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>

          <article className="detail-block">
            <span className="block-label">Problem</span>
            <h2>{project.problemHeading}</h2>
            {project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>

          <article className="detail-block">
            <span className="block-label">Solution</span>
            <h2>{project.solutionHeading}</h2>
            {project.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        </section>

        <section className="process-section">
          <div className="section-header compact">
            <span className="section-num">PROCESS //</span>
            <h2 className="section-title">How It Came Together</h2>
            <div className="section-line" />
          </div>

          <div className="process-grid">
            {project.process.map(([title, text], index) => (
              <div className="process-card" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="outcomes-section">
          <div className="outcome-list">
            {project.outcomes.map(([label, value]) => (
              <div className="outcome-item" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-header compact">
            <span className="section-num">GALLERY //</span>
            <h2 className="section-title">Visuals</h2>
            <div className="section-line" />
          </div>

          {project.gallery.length > 0 ? (
            <div className="gallery-grid">
              {project.gallery.map((image) => (
                <button
                  type="button"
                  className="gallery-image"
                  key={image}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`${project.title} project visual`} />
                </button>
              ))}
            </div>
          ) : (
            <div className="gallery-placeholder-grid">
              {['Preview 01', 'Preview 02', 'Preview 03'].map((label) => (
                <div className="gallery-placeholder" key={label}>{label}</div>
              ))}
            </div>
          )}
        </section>

        <section className="learning-section">
          <div className="detail-block large">
            <span className="block-label">Learnings</span>
            <h2>What I Took From This Project</h2>
            <ul className="learning-list">
              {project.learnings.map((learning) => <li key={learning}>{learning}</li>)}
            </ul>
          </div>
        </section>

        <section className="project-nav-section">
          {previousProject && (
            <Link to={`/projects/${previousProject.id}`} className="project-nav-link previous-project-link">
              <span>Previous Project</span>
              <strong>{previousProject.title}</strong>
              <em>↙</em>
            </Link>
          )}

          {nextProject && (
            <Link to={`/projects/${nextProject.id}`} className="project-nav-link next-project-link">
              <span>Next Project</span>
              <strong>{nextProject.title}</strong>
              <em>↗</em>
            </Link>
          )}
        </section>
      </main>

      <ImageModal
        image={selectedImage}
        alt={`${project.title} expanded visual`}
        onClose={() => setSelectedImage(null)}
      />

      <Footer />
    </>
  );
}
