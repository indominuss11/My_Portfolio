import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SkillCard from '../components/SkillCard.jsx';
import ProjectListItem from '../components/ProjectListItem.jsx';
import { skills } from '../data/skills.js';
import { projects } from '../data/projects.js';

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className="hero-content">
          <p className="hero-tag">Bachelor of Information Technology — ICT Developer</p>
          <h1 className="hero-name">
            <div className="line1">SATVIK</div>
            <div className="line2"><span className="glitch">ARORA</span></div>
          </h1>
          <p className="hero-role">Frontend Developer · UI/UX Designer · Digital Architect</p>
          <p className="hero-bio">
            I design systems that feel like the future and build interfaces humans actually want to use.
            My work sits across code, UI/UX, creative technology, and business-building.
          </p>
          <div className="hero-cta">
            <a href="/projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get in Touch →</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">8</div>
            <div className="stat-label">Featured Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3+</div>
            <div className="stat-label">Years Building</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">∞</div>
            <div className="stat-label">Ideas Running</div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <div className="scroll-label">Scroll</div>
        </div>
      </section>

      <section id="skills">
        <SectionHeader number="01" title="Arsenal" />
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
      </section>

      <section id="projects">
        <SectionHeader number="02" title="Work" />
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </div>
      </section>

      <section id="about">
        <div>
          <div className="section-header compact">
            <span className="section-num">03 //</span>
            <h2 className="section-title">About</h2>
          </div>
          <p className="about-text">
            I&apos;m a Bachelor of Information Technology student specialising in ICT Development
            with strong experience across frontend development, mobile apps, UI/UX, and creative coding.
          </p>
          <p className="about-text">
            My work spans Angular/Ionic, React, .NET MAUI, Figma, MediaPipe, p5.js, and product strategy.
            I can <strong>design it, build it, and think through the business around it</strong>.
          </p>
          <p className="about-text">
            I also bring founder-style thinking through EVRA, upcoming brand work, and hands-on exposure
            to manufacturing and product development through my family business background.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-box">
            <div className="profile-row">
              <span className="profile-key">Status</span>
              <span className="profile-val green"><span className="status-dot" />Available</span>
            </div>
            <div className="profile-row">
              <span className="profile-key">Degree</span>
              <span className="profile-val cyan">B.IT — ICT Developer</span>
            </div>
            <div className="profile-row">
              <span className="profile-key">Location</span>
              <span className="profile-val">Newcastle, AU</span>
            </div>
            <div className="profile-row">
              <span className="profile-key">Focus</span>
              <span className="profile-val cyan">Design × Engineering × Entrepreneurship</span>
            </div>
            <div className="profile-row">
              <span className="profile-key">Seeking</span>
              <span className="profile-val pink">Full-time / Freelance</span>
            </div>
            <div className="profile-row">
              <span className="profile-key">Coffee</span>
              <span className="profile-val muted">Black, Always</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <SectionHeader number="04" title="Contact" centered />
        <div className="contact-heading">
          LET&apos;S BUILD<br />
          <span className="outline">SOMETHING</span>
        </div>
        <p className="contact-sub">Open to opportunities · collaborations · conversations</p>

        <div className="contact-links">
          <a href="mailto:your@email.com" className="contact-link">✉ Email</a>
          <a href="https://www.linkedin.com/" className="contact-link" target="_blank" rel="noreferrer">in LinkedIn</a>
          <a href="https://github.com/" className="contact-link" target="_blank" rel="noreferrer">⌥ GitHub</a>
          <a href="https://www.behance.net/" className="contact-link" target="_blank" rel="noreferrer">⊞ Behance</a>
          <a href="/resume/Satvik-Arora-Resume.pdf" className="contact-link">↓ Resume</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
