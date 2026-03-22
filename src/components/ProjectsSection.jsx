import { memo } from 'react';

const ProjectsSection = ({ projects }) => {
  return (
    <section className="section" id="projects" data-reveal>
      <div className="section-heading">
        <p>Projects</p>
        <h2>Product case studies with clear outcomes</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl !== '#');

          return (
            <article key={project.name} className="panel project-card">
              <img
                src={`${process.env.PUBLIC_URL}${project.image}`}
                alt={`${project.name} screenshot`}
                loading="lazy"
              />
              <header className="project-header">
                <h3>{project.name}</h3>
                <p>{project.subtitle}</p>
                <div className="project-meta">
                  <span>{project.role}</span>
                  <span>{project.timeline}</span>
                </div>
              </header>

              <dl className="project-story">
                <div>
                  <dt>Context</dt>
                  <dd>{project.context}</dd>
                </div>
                <div>
                  <dt>Challenge</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>Tech Stack</dt>
                  <dd className="stack-row">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="stack-chip">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <section className="impact-block" aria-label={`${project.name} impact metrics`}>
                <h4>Impact</h4>
                <ul className="impact-grid">
                  {project.impact.map((item) => (
                    <li key={item.metric}>
                      <strong>{item.value}</strong>
                      <span>{item.metric}</span>
                      <small>{item.note}</small>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="learnings-block" aria-label={`${project.name} key learning`}>
                <h4>Key Learning</h4>
                <p>{project.learnings}</p>
              </section>

              <div className="project-actions">
                {hasLiveDemo ? (
                  <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <span className="btn primary is-disabled" aria-disabled="true">
                    Demo Coming Soon
                  </span>
                )}
                <a className="btn ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <div>
                  <span className="project-proof">Case-study format for recruiter review</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default memo(ProjectsSection);
