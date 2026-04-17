import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is InternHunt 9.0?",
      answer:
        "InternHunt 9.0 is the flagship event of InternWare — Internship Cell, IITM Janakpuri, held annually to connect students with industry opportunities.",
    },
    {
      question: "Who can participate?",
      answer:
        "All students from IITM Janakpuri and affiliated colleges can participate.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is needed. Roles are available for all levels.",
    },
    {
      question: "How can I register?",
      answer:
        "You can register through the official InternHunt website.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <section id="faq">
        <div className="min-h-screen flex flex-col items-center gap-8 md:gap-14 p-6 py-16 md:p-20 bg-[#F5F6F7]">

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1F3A5F] tracking-tight text-center">
            Frequently Asked <span className="text-[#CEAC81]">Questions</span>
          </h2>

          {/* FAQ List */}
          <div className="w-full max-w-3xl flex flex-col gap-5">

            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${
                  openIndex === idx
                    ? "border-[#CEAC81] shadow-md"
                    : "border-[#CEAC81]/20"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-[#0F172A] text-sm md:text-base gap-2"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`transition-all duration-300 text-[#1F3A5F] ${
                      openIndex === idx ? "rotate-180 text-[#CEAC81]" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-[#CEAC81]/20"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default FAQSection;