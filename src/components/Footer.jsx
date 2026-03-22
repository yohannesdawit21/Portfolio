import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <small>© {new Date().getFullYear()} Yohannes Dawit. Built with React.</small>
        <p> Full-Stack Developer • Cybersecurity Enthusiast </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
