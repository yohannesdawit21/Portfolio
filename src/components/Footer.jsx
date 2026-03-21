import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <small>© {new Date().getFullYear()} Yohannes Dawit. Built with React.</small>
        <p>Frontend Development • Full-Stack Engineering • Web Security</p>
      </div>
    </footer>
  );
};

export default memo(Footer);
