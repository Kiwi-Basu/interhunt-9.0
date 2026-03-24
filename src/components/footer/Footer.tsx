interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className={`border-t px-8 py-8 transition-colors duration-200 ${
        darkMode
          ? 'bg-teams-sidebar-dark border-teams-border-dark'
          : 'bg-white border-teams-border-light'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2 mb-3">
              <svg className={`w-5 h-5 ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`} viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 8h2v8H8V8zm6 0h2v8h-2V8zm-5 3h6v2H9v-2z" fill="currentColor" />
              </svg>
              <span className={`text-[14px] font-semibold ${
                darkMode ? 'text-white' : 'text-teams-text-light'
              }`}>
                InternHunt 9.0
              </span>
            </div>
            <p className={`text-[12px] leading-[1.6] ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}>
              The flagship internship event by InternWare — Internship Cell, IITM Janakpuri.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14">
            <div>
              <h4 className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}>
                Event
              </h4>
              <ul className="space-y-2">
                {['About', 'Companies', 'Schedule', 'Register'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-[13px] transition-colors ${
                      darkMode
                        ? 'text-teams-text-dark hover:text-teams-purple-light'
                        : 'text-teams-text-light hover:text-teams-purple'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}>
                Connect
              </h4>
              <ul className="space-y-2">
                {['Instagram', 'LinkedIn', 'Email', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-[13px] transition-colors ${
                      darkMode
                        ? 'text-teams-text-dark hover:text-teams-purple-light'
                        : 'text-teams-text-light hover:text-teams-purple'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-5 ${
          darkMode ? 'bg-teams-border-dark' : 'bg-teams-border-light'
        }`}></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className={`text-[11px] ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}>
            © 2026 InternWare — IITM Janakpuri. All rights reserved.
          </span>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-[11px] transition-colors ${
                  darkMode
                    ? 'text-teams-text-dark-secondary hover:text-teams-text-dark'
                    : 'text-teams-text-light-secondary hover:text-teams-text-light'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
