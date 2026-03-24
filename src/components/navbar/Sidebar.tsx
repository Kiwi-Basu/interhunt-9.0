interface SidebarProps {
  darkMode: boolean;
  activeSection: string;
}

const navItems = [
  {
    id: 'hero',
    label: 'Home',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    id: 'glimpses',
    label: 'Glimpses',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    id: 'companies',
    label: 'Companies',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'previoushunt',
    label: 'Past Events',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'faq',
    label: 'FAQ',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const Sidebar = ({ darkMode, activeSection }: SidebarProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      className={`fixed left-0 top-12 bottom-0 w-16 z-40 flex flex-col items-center pt-3 gap-1 transition-colors duration-300 border-r ${
        darkMode
          ? 'bg-teams-sidebar-dark border-teams-border-dark'
          : 'bg-teams-sidebar-light border-teams-border-light'
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={item.label}
            className={`relative w-12 h-12 flex flex-col items-center justify-center rounded-lg text-[10px] font-medium transition-all duration-200 group ${
              isActive
                ? darkMode
                  ? 'bg-teams-bg-dark-3 text-teams-purple-light'
                  : 'bg-white text-teams-purple'
                : darkMode
                  ? 'text-teams-text-dark-secondary hover:bg-teams-bg-dark-3 hover:text-teams-text-dark'
                  : 'text-teams-text-light-secondary hover:bg-white hover:text-teams-text-light'
            }`}
          >
            {/* Active Indicator Bar */}
            {isActive && (
              <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-teams-purple-light rounded-r-full transition-all"></span>
            )}
            {item.icon}
            <span className="mt-0.5 leading-none">{item.label}</span>
          </button>
        );
      })}

      {/* Bottom spacer + branding */}
      <div className="mt-auto mb-4 flex flex-col items-center gap-2">
        <div
          className={`w-8 h-[1px] ${
            darkMode ? 'bg-teams-border-dark' : 'bg-teams-border-light'
          }`}
        ></div>
        <span
          className={`text-[8px] font-medium ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}
        >
          IW
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
