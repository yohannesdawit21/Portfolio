const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle dark and light theme"
      title="Toggle theme"
    >
      <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
};

export default ThemeToggle;
