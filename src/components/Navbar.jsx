import { memo, useEffect, useState } from 'react';

const Navbar = ({ navItems, themeControl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const sectionSelectors = navItems
      .map((item) => item.href)
      .filter((href) => typeof href === 'string' && href.startsWith('#') && href.length > 1);

    const sections = sectionSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);

    const updateFromScrollPosition = () => {
      if (window.scrollY < 120) {
        setActiveHref('#home');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-25% 0px -45% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('scroll', updateFromScrollPosition, { passive: true });
    onHashChange();
    updateFromScrollPosition();

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', updateFromScrollPosition);
    };
  }, [navItems]);

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
                <a
                  href={item.href}
                  className={activeHref === item.href ? 'active' : ''}
                  aria-current={activeHref === item.href ? 'page' : undefined}
                  onClick={handleClose}
                >
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
