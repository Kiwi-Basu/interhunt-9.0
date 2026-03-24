import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-4 transition-colors duration-300 ${
        darkMode
          ? 'bg-teams-purple-dark text-teams-text-dark'
          : 'bg-teams-purple text-white'
      }`}
    >
      {/* Left — Logo + Title */}
      <div className="flex items-center gap-3 min-w-[200px]">
        {/* Window Dots (Teams aesthetic) */}
        <div className="flex gap-1.5 mr-2">
          <span className="w-3 h-3 rounded-full bg-teams-accent-red opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-teams-accent-orange opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-teams-accent-green opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></span>
        </div>
        <div className="flex items-center gap-2">
          {/* InternHunt Icon */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 8h2v8H8V8zm6 0h2v8h-2V8zm-5 3h6v2H9v-2z" fill="currentColor" />
          </svg>
          <span className="font-semibold text-sm tracking-wide">InternHunt 9.0</span>
        </div>
      </div>

      {/* Center — Search */}
      <div className="flex-1 max-w-md mx-4">
        <div
          className={`flex items-center rounded-md px-3 py-1.5 transition-all duration-200 ${
            searchFocused
              ? darkMode
                ? 'bg-teams-bg-dark-2 ring-1 ring-teams-purple-light'
                : 'bg-white/30 ring-1 ring-white/50'
              : darkMode
                ? 'bg-white/10 hover:bg-white/15'
                : 'bg-white/20 hover:bg-white/25'
          }`}
        >
          <svg className="w-4 h-4 opacity-70 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search InternHunt..."
            className="bg-transparent border-none outline-none text-sm w-full placeholder-white/60"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      {/* Right — Controls */}
      <div className="flex items-center gap-2 min-w-[200px] justify-end">
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-white/15 transition-colors"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.73 12.73l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Notification Bell */}
        <button className="p-2 rounded-md hover:bg-white/15 transition-colors relative">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-teams-accent-red rounded-full"></span>
        </button>

        {/* User Avatar */}
        <button className="w-7 h-7 rounded-full bg-teams-purple-light flex items-center justify-center text-xs font-semibold hover:ring-2 hover:ring-white/30 transition-all">
          IH
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
