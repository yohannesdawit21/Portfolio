import { memo, useMemo, useState } from 'react';

const RecruiterBriefSection = ({ briefs, candidateName }) => {
  const [selectedRole, setSelectedRole] = useState(briefs[0]?.role || '');
  const [copied, setCopied] = useState(false);

  const activeBrief = useMemo(
    () => briefs.find((brief) => brief.role === selectedRole) || briefs[0],
    [briefs, selectedRole]
  );

  const recruiterNote = `${candidateName} - ${activeBrief.role}\n\nSummary:\n${activeBrief.summary}\n\nKey strengths:\n- ${activeBrief.strengths.join('\n- ')}\n\nBusiness value:\n${activeBrief.value}`;

  const copyWithFallback = async (text) => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_error) {
      // Fallback path below handles restricted clipboard contexts.
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    } catch (_error) {
      return false;
    }
  };

  const handleCopy = async () => {
    const wasCopied = await copyWithFallback(recruiterNote);

    if (!wasCopied) {
      return;
    }

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
