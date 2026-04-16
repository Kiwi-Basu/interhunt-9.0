import { motion } from "motion/react";

const AboutEventSection = () => {
  return (
    <section id="about-event" className="about-event-section">
      <motion.div
        className="about-event-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          ABOUT <span className="heading-accent">EVENT</span>
        </h2>

        <div className="about-event-text">
          <p>
            InternHunt is the flagship event of InternWare - Internship Cell, IITM,
            Janakpuri, held annually to connect students with industry opportunities.
            It helps students gain hands-on experience by linking them with diverse
            companies offering valuable internships.
          </p>
          <p>
            With eight successful editions, InternHunt has grown each year, creating
            even more career-defining opportunities. It continues to be a launchpad
            for students, equipping them with confidence and real-world exposure as
            they step into the professional world.
          </p>
        </div>

        <div className="about-event-divider"></div>
      </motion.div>
    </section>
  );
};

export default AboutEventSection;
