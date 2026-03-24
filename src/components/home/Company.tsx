interface CompanyProps {
  darkMode: boolean;
}

const companies = [
  { name: 'TechNova', category: 'Technology', color: '#4A90D9' },
  { name: 'MarketEdge', category: 'Marketing', color: '#D97B4A' },
  { name: 'FinVault', category: 'Finance', color: '#4AD97B' },
  { name: 'DesignCraft', category: 'Design', color: '#D94A6B' },
  { name: 'DataPulse', category: 'Technology', color: '#4A90D9' },
  { name: 'BrandHive', category: 'Marketing', color: '#D97B4A' },
  { name: 'CloudSync', category: 'Technology', color: '#4A90D9' },
  { name: 'Capital360', category: 'Finance', color: '#4AD97B' },
  { name: 'PixelForge', category: 'Design', color: '#D94A6B' },
  { name: 'InnoSpark', category: 'Technology', color: '#4A90D9' },
  { name: 'GrowthLabs', category: 'Marketing', color: '#D97B4A' },
  { name: 'SecureNet', category: 'Technology', color: '#4A90D9' },
];

const Company = ({ darkMode }: CompanyProps) => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className={`text-2xl font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-teams-text-light'
            }`}>
              Featured Companies
            </h2>
            <p className={`text-[13px] ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}>
              Top recruiters across tech, marketing, finance, and design.
            </p>
          </div>
          <span className={`text-[12px] font-medium px-3 py-1.5 rounded-md ${
            darkMode
              ? 'bg-teams-purple/15 text-teams-purple-light'
              : 'bg-teams-purple/8 text-teams-purple'
          }`}>
            50+ Companies
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {companies.map((company, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 border text-center transition-colors duration-150 hover:border-teams-purple/30 ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-white border-teams-border-light'
              }`}
            >
              {/* Logo */}
              <div
                className="w-10 h-10 rounded-md mx-auto mb-3 flex items-center justify-center text-[13px] font-bold"
                style={{ backgroundColor: company.color + '18', color: company.color }}
              >
                {company.name.slice(0, 2)}
              </div>

              <h3 className={`text-[12px] font-medium mb-1 truncate ${
                darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
              }`}>
                {company.name}
              </h3>

              <span
                className="text-[10px] font-medium"
                style={{ color: company.color }}
              >
                {company.category}
              </span>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-6">
          <button className={`text-[13px] font-medium transition-colors ${
            darkMode
              ? 'text-teams-purple-light hover:text-white'
              : 'text-teams-purple hover:text-teams-purple-dark'
          }`}>
            View all companies →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
