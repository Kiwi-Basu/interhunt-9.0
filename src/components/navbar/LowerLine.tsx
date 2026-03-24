interface LowerLineProps {
  darkMode: boolean;
  activeSection: string;
}

const tabs = [
  { id: 'hero', label: 'Overview' },
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
      className={`sticky top-12 z-30 h-10 flex items-end px-6 gap-1 border-b transition-colors duration-300 ${
        darkMode
          ? 'bg-teams-bg-dark border-teams-border-dark'
          : 'bg-teams-bg-light-2 border-teams-border-light'
      }`}
    >
      {tabs.map((tab) => {
        const isActive = activeSection === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`relative px-4 pb-2.5 pt-1 text-sm font-medium transition-all duration-200 rounded-t-md ${
              isActive
                ? darkMode
                  ? 'text-teams-purple-light'
                  : 'text-teams-purple'
                : darkMode
                  ? 'text-teams-text-dark-secondary hover:text-teams-text-dark hover:bg-teams-bg-dark-2'
                  : 'text-teams-text-light-secondary hover:text-teams-text-light hover:bg-teams-bg-light'
            }`}
          >
            {tab.label}
            {/* Active underline */}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-teams-purple-light rounded-t-full transition-all"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default LowerLine;
