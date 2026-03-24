interface PreviousHuntProps {
  darkMode: boolean;
}

const editions = [
  {
    version: '8.0',
    year: '2025',
    stats: { companies: 45, students: 450, offers: 180 },
    highlight: 'Record-breaking participation with 45 companies across 8 domains.',
  },
  {
    version: '7.0',
    year: '2024',
    stats: { companies: 38, students: 380, offers: 150 },
    highlight: 'First edition to introduce design & creative internship tracks.',
  },
  {
    version: '6.0',
    year: '2023',
    stats: { companies: 30, students: 300, offers: 120 },
    highlight: 'Expanded to include startups alongside established corporates.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'InternHunt 8.0 Participant',
    quote: 'InternHunt changed my career trajectory. I landed a tech internship that turned into a full-time offer!',
  },
  {
    name: 'Arjun Mehta',
    role: 'InternHunt 7.0 Participant',
    quote: 'The networking opportunities alone were worth it. I connected with mentors who guide me to this day.',
  },
];

const PreviousHunt = ({ darkMode }: PreviousHuntProps) => {
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
              Legacy
            </span>
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            Previous Editions
          </h2>
          <p
            className={`text-sm max-w-lg mx-auto ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}
          >
            Building on years of success connecting students with opportunities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] ${
              darkMode ? 'bg-teams-border-dark' : 'bg-teams-border-light'
            }`}
          ></div>

          <div className="space-y-10">
            {editions.map((edition, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teams-purple border-4 border-teams-bg-dark z-10"
                  style={{ borderColor: darkMode ? '#1B1A2E' : '#F5F5F5' }}
                ></div>

                {/* Spacer for left side */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                  } ${
                    darkMode
                      ? 'bg-teams-bg-dark-card border-teams-border-dark hover:border-teams-purple/40 hover:shadow-teams-purple/10'
                      : 'bg-teams-bg-light-card border-teams-border-light hover:border-teams-purple/30 hover:shadow-teams-purple/10'
                  }`}
                >
                  {/* Version Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-teams-purple/20 text-teams-purple-light text-sm font-bold">
                      v{edition.version}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                      }`}
                    >
                      {edition.year}
                    </span>
                  </div>

                  {/* Highlight */}
                  <p
                    className={`text-sm mb-5 leading-relaxed ${
                      darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                    }`}
                  >
                    {edition.highlight}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Companies', value: edition.stats.companies },
                      { label: 'Students', value: edition.stats.students },
                      { label: 'Offers', value: edition.stats.offers },
                    ].map((stat, j) => (
                      <div
                        key={j}
                        className={`text-center p-2 rounded-lg ${
                          darkMode ? 'bg-teams-bg-dark-2' : 'bg-teams-bg-light'
                        }`}
                      >
                        <div className={`text-lg font-bold ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}>
                          {stat.value}+
                        </div>
                        <div
                          className={`text-[10px] uppercase tracking-wider font-medium ${
                            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                          }`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Banner */}
        <div
          className={`mt-14 rounded-xl p-8 border text-center ${
            darkMode
              ? 'bg-gradient-to-r from-teams-purple-dark/50 to-teams-bg-dark-2 border-teams-border-dark'
              : 'bg-gradient-to-r from-teams-purple/10 to-teams-purple/5 border-teams-border-light'
          }`}
        >
          <h3
            className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            Growing Year Over Year
          </h3>
          <div className="flex justify-center gap-12 mt-6">
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}>3x</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'}`}>
                Company Growth
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}>5x</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'}`}>
                Student Participation
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}>4x</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'}`}>
                Total Offers
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-teams-bg-light-card border-teams-border-light'
              }`}
            >
              {/* Quote Icon */}
              <svg
                className={`w-8 h-8 mb-3 ${darkMode ? 'text-teams-purple/30' : 'text-teams-purple/20'}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p
                className={`text-sm leading-relaxed mb-4 italic ${
                  darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                }`}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teams-purple/20 flex items-center justify-center text-xs font-bold text-teams-purple-light">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`text-sm font-medium ${darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'}`}>
                    {t.role}
                  </div>
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
