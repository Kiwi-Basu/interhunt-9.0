interface AboutProps {
  darkMode: boolean;
}

const aboutCards = [
  {
    title: 'What is InternHunt?',
    description:
      'InternHunt is the flagship event of InternWare — Internship Cell, IITM Janakpuri. Held annually, it bridges the gap between students and industry, offering diverse internship opportunities across multiple domains.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Why Participate?',
    description:
      'Gain hands-on experience with leading companies across technology, marketing, finance, design, and more. Build your portfolio, network with industry professionals, and kick-start your career.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Who Can Apply?',
    description:
      'All students of IITM Janakpuri, from any year or department, can participate. Whether you are a fresher exploring career options or a senior seeking an industry-ready internship — InternHunt is for you.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
              }`}
            >
              About
            </span>
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            About InternHunt
          </h2>
          <p
            className={`text-sm max-w-lg mx-auto ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}
          >
            Connecting students with industry-leading companies since InternHunt 1.0.
            Your gateway to real-world experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => (
            <div
              key={i}
              className={`group rounded-xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark hover:border-teams-purple/50 hover:shadow-teams-purple/10'
                  : 'bg-teams-bg-light-card border-teams-border-light hover:border-teams-purple/30 hover:shadow-teams-purple/10'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  darkMode
                    ? 'bg-teams-purple/20 text-teams-purple-light group-hover:bg-teams-purple/30'
                    : 'bg-teams-purple/10 text-teams-purple group-hover:bg-teams-purple/20'
                }`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                }`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                }`}
              >
                {card.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-5 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-teams-purple to-teams-purple-light transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* InternWare Branding */}
        <div className="mt-14 text-center">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${
              darkMode
                ? 'bg-teams-bg-dark-2 border-teams-border-dark'
                : 'bg-teams-bg-light border-teams-border-light'
            }`}
          >
            <svg className={`w-5 h-5 ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span
              className={`text-sm font-medium ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}
            >
              Powered by <span className={darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}>InternWare</span> — Internship Cell, IITM Janakpuri
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
