import { memo, useState } from 'react';

const ContactSection = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role."
              rows={5}
              required
            />
          </label>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
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
