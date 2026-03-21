import { memo } from 'react';

const HeroSection = ({ hero }) => {
  return (
    <section className="hero" data-reveal>
      <div>
        <p className="eyebrow">Available for 2026 opportunities</p>
        <h1>
          {hero.name}
          <span>{hero.headline}</span>
        </h1>
        <p className="lead-copy">{hero.subHeadline}</p>
        <p className="status-pill">{hero.location} • {hero.status}</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">
            Explore Projects
          </a>
          <a className="btn ghost" href="#contact">
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="Developer profile summary">
        <img
          src={`${process.env.PUBLIC_URL}/MyProfile.JPG`}
          alt="Portrait of Yohannes Dawit"
          loading="lazy"
        />
        <dl>
          <div>
            <dt>Primary Focus</dt>
            <dd>Frontend engineering + app security</dd>
          </div>
          <div>
            <dt>Experience Style</dt>
            <dd>Product-minded implementation</dd>
          </div>
          <div>
            <dt>Current Direction</dt>
            <dd>Building secure full-stack systems</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default memo(HeroSection);
