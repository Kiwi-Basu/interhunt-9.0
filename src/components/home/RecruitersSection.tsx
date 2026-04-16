import { motion } from "motion/react";

const RecruitersSection = () => {
  const companies = [
    { name: "Cetpa", initials: "CT" },
    { name: "Decathlon", initials: "DC" },
    { name: "CSA Investments", initials: "CSA" },
    { name: "Growthclues", initials: "GC" },
    { name: "Kalakriti", initials: "KK" },
    { name: "Easy My Storage", initials: "EMS" },
    { name: "Device Disk", initials: "DD" },
    { name: "Datsme", initials: "DM" },
    { name: "Gradhub", initials: "GH" },
    { name: "Group Media", initials: "GM" },
  ];

  return (
    <section id="recruiters" className="recruiters-section">
      <motion.div
        className="recruiters-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          Our <span className="heading-accent">Recruiters</span>
        </h2>

        <div className="recruiters-grid">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              className="recruiter-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="recruiter-logo">
                <span className="recruiter-initials">{company.initials}</span>
              </div>
              <p className="recruiter-name">{company.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="recruiters-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          View All Companies <span>→</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default RecruitersSection;
