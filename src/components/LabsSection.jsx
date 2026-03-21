import { memo, useState } from 'react';

const LabsSection = ({ labs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" id="labs" data-reveal>
      <div className="section-heading">
        <p>Labs</p>
        <h2>Security and engineering experiments</h2>
      </div>
      <div className="terminal-shell" role="region" aria-label="Interactive security lab preview">
        <div className="terminal-header">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-body">
          {labs.map((item, index) => (
            <button
              key={item.command}
              type="button"
              className={`terminal-command ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              $ {item.command}
            </button>
          ))}
          <p className="terminal-output">{labs[activeIndex].output}</p>
        </div>
      </div>
    </section>
  );
};

export default memo(LabsSection);
