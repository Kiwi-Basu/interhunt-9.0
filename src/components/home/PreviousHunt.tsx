interface PreviousHuntProps {
  darkMode: boolean;
}

const editions = [
  {
    version: '8.0',
    year: '2025',
    companies: 45,
    students: 450,
    offers: 180,
    highlight: 'Record-breaking participation with 45 companies across 8 domains.',
  },
  {
    version: '7.0',
    year: '2024',
    companies: 38,
    students: 380,
    offers: 150,
    highlight: 'First edition to introduce design & creative internship tracks.',
  },
  {
    version: '6.0',
    year: '2023',
    companies: 30,
    students: 300,
    offers: 120,
    highlight: 'Expanded to include startups alongside established corporates.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'InternHunt 8.0',
    quote: 'InternHunt changed my career trajectory. I landed a tech internship that turned into a full-time offer.',
  },
  {
    name: 'Arjun Mehta',
    role: 'InternHunt 7.0',
    quote: 'The networking opportunities were incredible. I connected with mentors who guide me to this day.',
  },
];

const PreviousHunt = ({ darkMode }: PreviousHuntProps) => {
  return (
    <div className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-teams-text-light'
          }`}>
            Previous Editions
          </h2>
          <p className={`text-[13px] ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}>
            Building on years of success connecting students with opportunities.
          </p>
        </div>

        {/* Edition Cards */}
        <div className="space-y-3">
          {editions.map((ed, i) => (
            <div
              key={i}
              className={`rounded-lg border p-5 transition-colors duration-150 hover:border-teams-purple/30 ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-white border-teams-border-light'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Version + Year */}
                <div className="flex items-center gap-3 md:min-w-[140px]">
                  <span className={`text-[13px] font-semibold px-2.5 py-1 rounded-md ${
                    darkMode
                      ? 'bg-teams-purple/15 text-teams-purple-light'
                      : 'bg-teams-purple/8 text-teams-purple'
                  }`}>
                    v{ed.version}
                  </span>
                  <span className={`text-[13px] ${
                    darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                  }`}>
                    {ed.year}
                  </span>
                </div>

                {/* Highlight */}
                <p className={`flex-1 text-[13px] ${
                  darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                }`}>
                  {ed.highlight}
                </p>

                {/* Stats */}
                <div className="flex gap-5">
                  {[
                    { label: 'Companies', value: ed.companies },
                    { label: 'Students', value: ed.students },
                    { label: 'Offers', value: ed.offers },
                  ].map((s, j) => (
                    <div key={j} className="text-center">
                      <div className={`text-[15px] font-semibold ${
                        darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
                      }`}>
                        {s.value}
                      </div>
                      <div className={`text-[10px] font-medium ${
                        darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                      }`}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Row */}
        <div className={`mt-8 rounded-lg border p-5 flex items-center justify-between ${
          darkMode
            ? 'bg-teams-bg-dark-card border-teams-border-dark'
            : 'bg-white border-teams-border-light'
        }`}>
          <span className={`text-[13px] font-medium ${
            darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
          }`}>
            Year-over-year growth
          </span>
          <div className="flex gap-8">
            {[
              { label: 'Companies', value: '3x' },
              { label: 'Participation', value: '5x' },
              { label: 'Offers', value: '4x' },
            ].map((g, i) => (
              <div key={i} className="text-center">
                <div className={`text-lg font-bold ${
                  darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
                }`}>{g.value}</div>
                <div className={`text-[10px] ${
                  darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                }`}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-3 mt-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-lg border p-5 ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-white border-teams-border-light'
              }`}
            >
              <p className={`text-[13px] leading-[1.6] mb-4 italic ${
                darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
              }`}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teams-purple/15 flex items-center justify-center text-[10px] font-bold text-teams-purple-light">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`text-[12px] font-medium ${
                    darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                  }`}>{t.name}</div>
                  <div className={`text-[11px] ${
                    darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                  }`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousHunt;
