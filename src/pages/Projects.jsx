import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

const filters = [
  ['all', 'All'],
  ['dev', 'Development'],
  ['design', 'UI / UX'],
  ['creative', 'Creative Tech'],
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = projects.filter((project) => (
    activeFilter === 'all' || project.category === activeFilter
  ));

  return (
    <>
      <Navbar />

      <main className="work-page">
        <section className="work-hero">
          <p className="hero-tag">Selected portfolio archive</p>
          <h1 className="work-title">PROJECT INDEX</h1>
          <p className="work-subtitle">
            A collection of frontend, full-stack, UI/UX, AR, and creative technology work.
          </p>

          <div className="filter-row">
            {filters.map(([id, label]) => (
              <button
                type="button"
                key={id}
                className={`filter-btn ${activeFilter === id ? 'active' : ''}`}
                onClick={() => setActiveFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="project-grid-section">
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                project={project}
                featured={activeFilter === 'all' && index === 0}
                key={project.id}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
