interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  return (
    <div className={`min-h-[calc(100vh-92px)] flex items-center justify-center px-8 ${
      darkMode ? 'bg-teams-bg-dark' : 'bg-teams-bg-light'
    }`}>
      <div className="max-w-3xl w-full text-center">
        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium mb-8 ${
          darkMode
            ? 'bg-teams-bg-dark-card text-teams-text-dark-secondary border border-teams-border-dark'
            : 'bg-white text-teams-text-light-secondary border border-teams-border-light'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Registrations Open · March 2026
        </div>

        {/* Title */}
        <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-5 ${
          darkMode ? 'text-white' : 'text-teams-text-light'
        }`}>
          InternHunt
          <span className={`ml-3 ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}>9.0</span>
        </h1>

        {/* Tagline */}
        <p className={`text-lg font-normal mb-3 ${
          darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
        }`}>
          Where Talent Meets Opportunity
        </p>

        {/* Description */}
        <p className={`text-[14px] leading-relaxed mb-10 max-w-xl mx-auto ${
          darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
        }`}>
          The flagship event by InternWare — Internship Cell, IITM Janakpuri.
          Connecting students with top companies across diverse industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center mb-16">
          <button className="px-5 py-2.5 bg-teams-purple text-white text-[13px] font-medium rounded-md hover:bg-teams-purple-hover transition-colors">
            Register Now
          </button>
          <button className={`px-5 py-2.5 text-[13px] font-medium rounded-md border transition-colors ${
            darkMode
              ? 'border-teams-border-dark text-teams-text-dark hover:bg-teams-bg-dark-3'
              : 'border-teams-border-light text-teams-text-light hover:bg-white'
          }`}>
            Explore Companies
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
          {[
            { number: '50+', label: 'Companies' },
            { number: '500+', label: 'Students' },
            { number: '200+', label: 'Internships' },
            { number: '9th', label: 'Edition' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-4 px-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-teams-bg-dark-card border-teams-border-dark'
                  : 'bg-white border-teams-border-light'
              }`}
            >
              <div className={`text-xl font-bold ${
                darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
              }`}>
                {stat.number}
              </div>
              <div className={`text-[11px] mt-1 font-medium ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
