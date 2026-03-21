import { memo, useState } from 'react';

const Navbar = ({ navItems, themeControl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header" id="home">
      <div className="container nav-shell">
        <a href="#home" className="brand-mark" aria-label="Go to top of page">
          YD
        </a>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleClose}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {themeControl}
      </div>
    </header>
  );
};

export default memo(Navbar);
