import { useState } from 'react';

interface SidebarProps {
  darkMode: boolean;
}

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'about-us',
    label: 'About Us',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    id: 'companies',
    label: 'Companies',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'contact-us',
    label: 'Contact',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 'sponsor',
    label: 'Sponsor',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const Sidebar = ({ darkMode }: SidebarProps) => {
  const [activeId, setActiveId] = useState('home');

  return (
    <aside
      className={`fixed left-0 top-12 bottom-0 w-[68px] z-40 flex flex-col items-center pt-2 transition-colors duration-200 ${
        darkMode ? 'bg-teams-sidebar-dark' : 'bg-teams-sidebar-light'
      }`}
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            title={item.label}
            className={`relative w-12 h-[52px] flex flex-col items-center justify-center gap-0.5 rounded-md text-[10px] transition-colors duration-150 my-[1px] ${
              isActive
                ? darkMode
                  ? 'text-white bg-teams-bg-dark-3'
                  : 'text-teams-purple bg-white'
                : darkMode
                  ? 'text-teams-text-dark-secondary hover:text-teams-text-dark hover:bg-white/5'
                  : 'text-teams-text-light-secondary hover:text-teams-text-light hover:bg-black/5'
            }`}
          >
            {isActive && (
              <span
                className={`absolute left-0 top-[14px] bottom-[14px] w-[3px] rounded-r-full ${
                  darkMode ? 'bg-teams-purple-light' : 'bg-teams-purple'
                }`}
              ></span>
            )}
            {item.icon}
            <span className="leading-none font-medium">{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
