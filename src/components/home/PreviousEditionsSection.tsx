import { motion } from "motion/react";

const PreviousEditionsSection = () => {
  const editions = [
    { version: "8.0", year: "2025", students: "700+", companies: "40+" },
    { version: "7.0", year: "2024", students: "550+", companies: "30+" },
    { version: "6.0", year: "2023", students: "500+", companies: "30+" },
    { version: "5.0", year: "2022", students: "450+", companies: "20+" },
    { version: "4.0", year: "2021", students: "350+", companies: "15+" },
    { version: "3.0", year: "2020", students: "250+", companies: "12+" },
  ];

  return (
    <section id="previous-editions" className="editions-section">
      <motion.div
        className="editions-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          Previous <span className="heading-accent">Editions</span>
        </h2>

        <div className="editions-grid">
          {editions.map((edition, idx) => (
            <motion.div
              key={idx}
              className="edition-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
            >
              <div className="edition-banner">
                <span className="edition-banner-text">
                  InternHunt IH {edition.version}
                </span>
              </div>

              <div className="edition-info">
                <div className="edition-header">
                  <h3 className="edition-name">IH {edition.version}</h3>
                  <span className="edition-year">{edition.year}</span>
                </div>

                <div className="edition-stats">
                  <div className="edition-stat">
                    <span className="edition-stat-label">Students Placed</span>
                    <span className="edition-stat-value">{edition.students}</span>
                  </div>
                  <div className="edition-stat">
                    <span className="edition-stat-label">Companies</span>
                    <span className="edition-stat-value">{edition.companies}</span>
                  </div>
                </div>

                <button className="edition-btn">Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PreviousEditionsSection;
