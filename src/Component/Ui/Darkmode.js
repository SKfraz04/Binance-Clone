import { useState, useEffect } from 'react';

function Darkmode() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove(theme === 'light' ? 'dark' : 'light');
    body.classList.add(theme);
  }, [theme]);

  return (
    <div className="Dark-mode">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
                <button
                  class="theme-toggle theme-toggle--reversed"
                  type="button"
                  title="Toggle theme"
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="1em"
                    height="1em"
                    class="theme-toggle__simple"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <clipPath id="theme-toggle__simple__cutout">
                      <path d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" />
                    </clipPath>
                    <g clip-path="url(#theme-toggle__simple__cutout)">
                      <circle cx="16" cy="16" r="15" />
                    </g>
                  </svg>
                </button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nibh eget urna suscipit suscipit.</p>
    </div>
  );
}

export default Darkmode;


