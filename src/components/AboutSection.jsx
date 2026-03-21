import { memo } from 'react';

const AboutSection = ({ about }) => {
  return (
    <section className="section" id="about" data-reveal>
      <div className="section-heading">
        <p>About</p>
        <h2>Engineering mindset with a security-first lens</h2>
      </div>
      <div className="content-grid">
        <article className="panel">
          <p>{about.summary}</p>
        </article>
        <article className="panel">
          <h3>Core Highlights</h3>
          <ul className="bullet-list">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default memo(AboutSection);
