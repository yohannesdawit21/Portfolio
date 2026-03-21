import { memo, useMemo, useState } from 'react';

const RecruiterBriefSection = ({ briefs, candidateName }) => {
  const [selectedRole, setSelectedRole] = useState(briefs[0]?.role || '');
  const [copied, setCopied] = useState(false);

  const activeBrief = useMemo(
    () => briefs.find((brief) => brief.role === selectedRole) || briefs[0],
    [briefs, selectedRole]
  );

  const recruiterNote = `${candidateName} - ${activeBrief.role}\n\nSummary:\n${activeBrief.summary}\n\nKey strengths:\n- ${activeBrief.strengths.join('\n- ')}\n\nBusiness value:\n${activeBrief.value}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(recruiterNote);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="section" id="brief" data-reveal>
      <div className="section-heading">
        <p>Recruiter Mode</p>
        <h2>One-click hiring brief generator</h2>
      </div>
      <article className="panel brief-card">
        <div className="brief-controls" role="tablist" aria-label="Select recruiter role">
          {briefs.map((brief) => (
            <button
              key={brief.role}
              type="button"
              role="tab"
              className={`chip ${selectedRole === brief.role ? 'active' : ''}`}
              onClick={() => setSelectedRole(brief.role)}
              aria-selected={selectedRole === brief.role}
            >
              {brief.role}
            </button>
          ))}
        </div>

        <div className="brief-output" aria-live="polite">
          <h3>{activeBrief.role}</h3>
          <p>{activeBrief.summary}</p>
          <ul>
            {activeBrief.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
          <p className="brief-value">{activeBrief.value}</p>
        </div>

        <div className="brief-actions">
          <button type="button" className="btn primary" onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy Recruiter Brief'}
          </button>
          <small>Share-ready summary for interview notes and shortlists.</small>
        </div>
      </article>
    </section>
  );
};

export default memo(RecruiterBriefSection);
