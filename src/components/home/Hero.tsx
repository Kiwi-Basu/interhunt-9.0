interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  return (
    <div className="relative min-h-[calc(100vh-48px)] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className={`absolute inset-0 animate-gradient ${
          darkMode
            ? 'bg-gradient-to-br from-teams-bg-dark via-teams-purple-dark to-teams-bg-dark-2'
            : 'bg-gradient-to-br from-teams-purple via-teams-purple-light to-teams-purple-dark'
        }`}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: darkMode ? '#7B83EB' : '#ffffff',
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teams-accent-green animate-pulse"></span>
          Live — March 2026
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-in-up tracking-tight">
          Intern<span className="text-teams-purple-light">Hunt</span>{' '}
          <span className="inline-block animate-pulse-glow rounded-2xl px-4 py-1 bg-white/10 backdrop-blur-sm">
            9.0
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white/80 font-light mb-3 animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
          Where Talent Meets Opportunity
        </p>

        {/* Subtitle */}
        <p className="text-sm text-white/60 mb-10 animate-fade-in-up delay-300 max-w-lg mx-auto" style={{ animationFillMode: 'both' }}>
          The flagship event by InternWare — Internship Cell, IITM Janakpuri.
          Connecting students with 50+ top companies across diverse industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400" style={{ animationFillMode: 'both' }}>
          <button className="px-8 py-3 bg-white text-teams-purple font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 text-sm">
            Register Now
          </button>
          <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5 text-sm backdrop-blur-sm">
            Explore Companies
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up delay-600" style={{ animationFillMode: 'both' }}>
          {[
            { number: '50+', label: 'Companies' },
            { number: '500+', label: 'Students' },
            { number: '200+', label: 'Internships' },
            { number: '9th', label: 'Edition' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-teams-purple-light transition-colors">
                {stat.number}
              </div>
              <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${
          darkMode ? 'from-teams-bg-dark' : 'from-teams-bg-light'
        } to-transparent`}
      ></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
