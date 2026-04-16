import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is InternHunt 9.0?",
      answer:
        "InternHunt 9.0 is the flagship event of InternWare — Internship Cell, IITM Janakpuri, held annually to connect students with industry opportunities through internship drives and career fairs.",
    },
    {
      question: "Who can participate in InternHunt 9.0?",
      answer:
        "All students from IITM Janakpuri and affiliated colleges can participate. The event is open to students across all disciplines and years looking for internship opportunities.",
    },
    {
      question: "Do I need prior experience to participate?",
      answer:
        "No prior experience is needed. InternHunt welcomes students from all backgrounds and skill levels. Companies offer roles suited for beginners as well as experienced candidates.",
    },
    {
      question: "How can I register for InternHunt 9.0?",
      answer:
        "You can register through the official InternHunt website. Registration details and forms are published ahead of each edition on our website and social media channels.",
    },
    {
      question: "What is the participation fee for InternHunt 9.0?",
      answer:
        "For students, registration is completely free. There is no participation fee to attend InternHunt 9.0.",
    },
    {
      question: "Will the event be online or offline?",
      answer:
        "InternHunt 9.0 will be conducted offline at the IITM Janakpuri campus, giving students a chance to interact directly with company representatives and recruiters.",
    },
    {
      question: "Can I give interviews with more than one company?",
      answer:
        "Yes, you can apply to and interview with multiple companies during InternHunt 9.0. There is no restriction on the number of companies you can interact with.",
    },
    {
      question: "Can I get an internship through InternHunt 9.0?",
      answer:
        "Absolutely! InternHunt has placed over 3100+ students in internships across 145+ companies over its previous editions. Many students receive internship offers directly during the event.",
    },
    {
      question: "Do I need to prepare for the company interviews?",
      answer:
        "Yes, it's recommended to prepare your resume, brush up on your domain skills, and research the participating companies beforehand to make the best impression during interviews.",
    },
    {
      question: "Will there be any follow-up after InternHunt 9.0?",
      answer:
        "Yes, the InternWare team ensures follow-ups with both students and companies post-event to facilitate smooth onboarding and internship commencement.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <motion.div
        className="faq-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">
          Everything you need to know about{" "}
          <span className="heading-accent">InternHunt 9.0</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`faq-item ${openIndex === idx ? "faq-item-open" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
            >
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === idx ? "faq-icon-open" : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default FAQSection;
