interface CompanyProps {
  darkMode: boolean;
}

const companies = [
  { name: 'TechNova', category: 'Technology', color: '#33C3F0' },
  { name: 'MarketEdge', category: 'Marketing', color: '#FFAA44' },
  { name: 'FinVault', category: 'Finance', color: '#6BB700' },
  { name: 'DesignCraft', category: 'Design', color: '#C4314B' },
  { name: 'DataPulse', category: 'Technology', color: '#33C3F0' },
  { name: 'BrandHive', category: 'Marketing', color: '#FFAA44' },
  { name: 'CloudSync', category: 'Technology', color: '#33C3F0' },
  { name: 'Capital360', category: 'Finance', color: '#6BB700' },
  { name: 'PixelForge', category: 'Design', color: '#C4314B' },
  { name: 'InnoSpark', category: 'Technology', color: '#33C3F0' },
  { name: 'GrowthLabs', category: 'Marketing', color: '#FFAA44' },
  { name: 'SecureNet', category: 'Technology', color: '#33C3F0' },
];

const Company = ({ darkMode }: CompanyProps) => {
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
              Recruiters
            </span>
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            Featured Companies
          </h2>
          <p
            className={`text-sm max-w-lg mx-auto ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}
          >
            Top recruiters across tech, marketing, finance, and design domains.
          </p>

          {/* Counter Badge */}
          <div
            className={`inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-full border ${
              darkMode
                ? 'bg-teams-purple/15 border-teams-purple/30 text-teams-purple-light'
                : 'bg-teams-purple/10 border-teams-purple/20 text-teams-purple'
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span className="text-sm font-semibold">50+ Companies Participating</span>
          </div>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {companies.map((company, i) => (
            <div
              key={i}
              className={`group relative rounded-xl p-5 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark hover:shadow-teams-purple/10'
                  : 'bg-teams-bg-light-card border-teams-border-light hover:shadow-teams-purple/10'
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Hover Border Glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 2px ${company.color}40, 0 0 20px ${company.color}15`,
                  borderRadius: 'inherit',
                }}
              ></div>

              {/* Logo Placeholder */}
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: company.color + '30', color: company.color }}
              >
                {company.name.slice(0, 2).toUpperCase()}
              </div>

              {/* Name */}
              <h3
                className={`text-sm font-semibold mb-1 ${
                  darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                }`}
              >
                {company.name}
              </h3>

              {/* Category Tag */}
              <span
                className="inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: company.color + '20',
                  color: company.color,
                }}
              >
                {company.category}
              </span>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
              darkMode
                ? 'border-teams-purple/40 text-teams-purple-light hover:bg-teams-purple/15'
                : 'border-teams-purple/30 text-teams-purple hover:bg-teams-purple/10'
            }`}
          >
            View All Companies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
