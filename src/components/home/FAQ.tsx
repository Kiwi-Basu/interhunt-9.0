import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in InternHunt 9.0?",
      answer: "InternHunt 9.0 is open to undergraduate, postgraduate, and diploma students from all streams and disciplines looking to kickstart their careers through internships.",

    },
    {
      question: "How do I register for InternHunt 9.0?",
      answer: "You can register for InternHunt 9.0 both online and offline. To register online, simply fill out the registration form available on our official website. For offline registration, visit our registration desk.",

    },
    {
      question: "Is there a fee for participants to participate?",
      answer: "Yes, there is a nominal participation fee of ₹100 for participants taking part in InternHunt 9.0.",

    },
    {
      question: "What kind of internships will be available?",
      answer: "Internships spanning domains such as technology, finance, marketing, design, operations, human resources, and more will be available, depending on the participating organizations.",

    },
    {
      question: "What should I carry on InternHunt 9.0?",
      answer: "Participants are advised to carry multiple copies of their resume, a valid student ID card, and any other relevant documents.",

    },
    {
      question: "What kind of companies will be participating?",
      answer: "Tier 1, Tier 2, and Tier 3 companies will be participating in the event, offering a wide range of opportunities across domains. Previous recruiters have included reputed brands like Decathlon and The Times of India, among others.",
    },
    {
      question: "Is prior experience required to participate?",
      answer: "No, prior experience is not mandatory. InternHunt is designed to provide opportunities for beginners as well as experienced students.",
    },
    {
      question: "Who can I contact for queries?",
      answer: "For any queries, you can reach out to Team InternWare through the contact details provided on the website's contact page.",
    }
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
                className={`bg-white rounded-2xl  shadow-sm border transition-all duration-300 ${openIndex === idx
                  ? "border-[#CEAC81] shadow-md"
                  : "border-[#CEAC81]/20"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full cursor-pointer flex justify-between items-center p-4 md:p-5 text-left font-semibold text-[#0F172A] text-sm md:text-base gap-2"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`transition-all duration-300 text-[#1F3A5F] ${openIndex === idx ? "rotate-180 text-[#CEAC81]" : ""
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