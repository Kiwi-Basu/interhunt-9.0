interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center px-4 transition-colors duration-200 ${
        darkMode ? 'bg-teams-navbar-dark' : 'bg-teams-navbar-light'
      }`}
    >
      {/* Left — Logo */}
      <div className="flex items-center gap-2.5 min-w-[180px]">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 8h2v8H8V8zm6 0h2v8h-2V8zm-5 3h6v2H9v-2z" fill="currentColor" />
        </svg>
        <span className="text-white text-[13px] font-semibold">InternHunt 9.0</span>
      </div>

      {/* Center — Search */}
      <div className="flex-1 flex justify-center">
        <div className={`flex items-center w-full max-w-[380px] h-8 rounded px-3 gap-2 ${
          darkMode ? 'bg-white/8 hover:bg-white/12' : 'bg-white/20 hover:bg-white/25'
        } transition-colors`}>
          <svg className="w-3.5 h-3.5 text-white/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-[13px] w-full text-white placeholder-white/50"
          />
        </div>
      </div>

      {/* Right — Controls */}
      <div className="flex items-center gap-1 min-w-[180px] justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white"
          title={darkMode ? 'Light mode' : 'Dark mode'}
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

        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-white/80 hover:text-white relative">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>

        <button className="w-7 h-7 rounded-full bg-teams-purple-light flex items-center justify-center text-[11px] font-semibold text-white ml-1">
          IH
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
