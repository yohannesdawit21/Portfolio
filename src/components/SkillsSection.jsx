import { memo, useMemo, useState } from 'react';

const groups = ['All', 'Engineering', 'Security', 'Tooling'];

const SkillsSection = ({ skills }) => {
  const [selectedGroup, setSelectedGroup] = useState('All');

  const filteredSkills = useMemo(() => {
    if (selectedGroup === 'All') {
      return skills;
    }

    return skills.filter((skill) => skill.group === selectedGroup);
  }, [selectedGroup, skills]);

  return (
    <section className="section" id="skills" data-reveal>
      <div className="section-heading">
        <p>Skills</p>
        <h2>Interactive capability overview</h2>
      </div>
      <div className="chips" role="tablist" aria-label="Filter skills by category">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            role="tab"
            className={`chip ${selectedGroup === group ? 'active' : ''}`}
            onClick={() => setSelectedGroup(group)}
            aria-selected={selectedGroup === group}
          >
            {group}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <article key={skill.name} className="panel skill-card">
            <div className="skill-header">
              <strong>{skill.name}</strong>
              <span>{skill.level}%</span>
            </div>
            <div className="meter" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
              <i style={{ width: `${skill.level}%` }} />
            </div>
            <small>{skill.group}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default memo(SkillsSection);
