import { Link } from 'react-router-dom';
import { IconRocket } from './icons/Icon';
import { PROJECTS } from '../data/projects';

const MAX_CHIPS = 4;

function Projects() {
  return (
    <section id="projects" className="section-modern section-compact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow"><IconRocket size={14} />Selected work</span>
          <h2 className="section-heading">Products I&rsquo;ve built and shipped</h2>
          <p className="section-subtitle">
            Production e-learning, internal tooling and simulation games from work, plus React and TypeScript apps of
            my own. Open any project for the full case study and what made it hard.
          </p>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`project-card ${index === 0 ? 'lead' : ''}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(index, 3) * 80}
              aria-label={`${project.title} — view case study`}
            >
              <div className="thumb">
                <img
                  src={project.image}
                  alt=""
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="tag">{project.category}</span>
              </div>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.technologies.slice(0, MAX_CHIPS).map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                  {project.technologies.length > MAX_CHIPS && (
                    <span className="chip">+{project.technologies.length - MAX_CHIPS}</span>
                  )}
                </div>
                <span className="more">
                  View case study <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
