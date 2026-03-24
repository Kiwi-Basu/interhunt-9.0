interface AboutProps {
  darkMode: boolean;
}

const aboutCards = [
  {
    title: 'What is InternHunt?',
    description:
      'The flagship event of InternWare — Internship Cell, IITM Janakpuri. Held annually, it bridges the gap between students and industry, offering diverse internship opportunities across multiple domains.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Why Participate?',
    description:
      'Gain hands-on experience with leading companies across technology, marketing, finance, and design. Build your portfolio, network with professionals, and kick-start your career.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Who Can Apply?',
    description:
      'All students of IITM Janakpuri from any year or department. Whether you\'re a fresher exploring career options or a senior seeking industry experience — InternHunt is for you.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const About = ({ darkMode }: AboutProps) => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-teams-text-light'
          }`}>
            About InternHunt
          </h2>
          <p className={`text-[13px] ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}>
            Your gateway to real-world industry experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {aboutCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-lg p-5 border transition-colors duration-150 hover:border-teams-purple/30 ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-white border-teams-border-light'
              }`}
            >
              <div className={`w-9 h-9 rounded-md flex items-center justify-center mb-4 ${
                darkMode
                  ? 'bg-teams-purple/15 text-teams-purple-light'
                  : 'bg-teams-purple/8 text-teams-purple'
              }`}>
                {card.icon}
              </div>

              <h3 className={`text-[14px] font-semibold mb-2 ${
                darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
              }`}>
                {card.title}
              </h3>

              <p className={`text-[13px] leading-[1.6] ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* InternWare Credit */}
        <div className={`mt-8 flex items-center gap-2 text-[12px] ${
          darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
        }`}>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          Powered by InternWare — Internship Cell, IITM Janakpuri
        </div>
      </div>
    </div>
  );
};

export default About;
