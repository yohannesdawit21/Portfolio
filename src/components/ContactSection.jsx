import { memo } from 'react';

const ContactSection = ({ contact }) => {
  return (
    <section className="section" id="contact" data-reveal>
      <div className="section-heading">
        <p>Contact</p>
        <h2>Let&apos;s build secure and scalable products together</h2>
      </div>
      <article className="panel contact-panel">
        <p>
          Looking for a developer who can ship polished interfaces and reason about security trade-offs? I would
          love to collaborate on your next product.
        </p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </article>
    </section>
  );
};

export default memo(ContactSection);
