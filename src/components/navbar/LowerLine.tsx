interface LowerLineProps {
  darkMode: boolean;
  activeSection: string;
}

const tabs = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'glimpses', label: 'Glimpses' },
  { id: 'companies', label: 'Companies' },
  { id: 'previoushunt', label: 'Past Events' },
  { id: 'faq', label: 'FAQ' },
];

const LowerLine = ({ darkMode, activeSection }: LowerLineProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`sticky top-12 z-30 h-11 flex items-end px-5 border-b transition-colors duration-200 ${
        darkMode
          ? 'bg-teams-bg-dark border-teams-border-dark'
          : 'bg-white border-teams-border-light'
      }`}
    >
      {tabs.map((tab) => {
        const isActive = activeSection === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`relative px-3 pb-2.5 text-[13px] font-medium transition-colors duration-150 ${
              isActive
                ? darkMode
                  ? 'text-white'
                  : 'text-teams-purple'
                : darkMode
                  ? 'text-teams-text-dark-secondary hover:text-teams-text-dark'
                  : 'text-teams-text-light-secondary hover:text-teams-text-light'
            }`}
          >
            {tab.label}
            {isActive && (
              <span
                className={`absolute bottom-0 left-1.5 right-1.5 h-[2px] rounded-t-full ${
                  darkMode ? 'bg-teams-purple-light' : 'bg-teams-purple'
                }`}
              ></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default LowerLine;
