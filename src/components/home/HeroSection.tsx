import { motion } from "motion/react";

const HeroSection = () => {
  const specialPoints = [
    "Networking Opportunities",
    "Industry Exposure",
    "Skill Development",
    "Career Guidance",
  ];

  const stats = [
    { value: "3100+", label: "Students Placed" },
    { value: "145+", label: "Companies" },
    { value: "8", label: "Years Legacy" },
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Decorative circles */}
      <div className="hero-circle hero-circle-1"></div>
      <div className="hero-circle hero-circle-2"></div>
      <div className="hero-circle hero-circle-3"></div>

      <div className="hero-content">
        {/* Left side */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            INTERNHUNT <span className="hero-title-accent">9.0</span>
          </h1>
          <p className="hero-tagline">Where professionals meet future leaders</p>

          <motion.button
            className="hero-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="hero-cta-icon">⚡</span>
            View Results
          </motion.button>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
              >
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side — glassmorphism card */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-card-blobs">
            <div className="hero-blob hero-blob-purple"></div>
            <div className="hero-blob hero-blob-yellow"></div>
            <div className="hero-blob hero-blob-pink"></div>
          </div>

          <div className="hero-glass-card">
            <div className="hero-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="#fff" />
              </svg>
            </div>
            <h3 className="hero-card-title">
              What makes<br />
              InternHunt 9.0 special
            </h3>
            <ul className="hero-card-list">
              {specialPoints.map((point, idx) => (
                <li key={idx} className="hero-card-item">
                  <span className="hero-card-check">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#00b4ff" />
                      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default HeroSection;
