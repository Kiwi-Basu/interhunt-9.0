import { useState } from 'react';

interface FaqProps {
  darkMode: boolean;
}

const faqs = [
  {
    q: 'What is InternHunt 9.0?',
    a: 'InternHunt 9.0 is the 9th edition of the flagship internship event organized by InternWare — Internship Cell of IITM Janakpuri. It connects students directly with companies offering diverse internship opportunities.',
  },
  {
    q: 'Who can participate in InternHunt?',
    a: 'All students currently enrolled at IITM Janakpuri from any year, branch, or department are eligible to participate. Both undergraduate and postgraduate students can register.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No, participation in InternHunt 9.0 is completely free of charge for all eligible students of IITM Janakpuri.',
  },
  {
    q: 'What kind of internships are offered?',
    a: 'InternHunt brings together companies from technology, marketing, finance, design, content creation, data analytics, and many more domains. Both on-site and remote internship opportunities are available.',
  },
  {
    q: 'How does the selection process work?',
    a: 'After registering on the portal, companies will shortlist candidates based on their profiles. Shortlisted students will go through interviews or assessments as determined by each company.',
  },
  {
    q: 'Can I apply to multiple companies?',
    a: 'Yes! You are encouraged to apply to as many companies as you wish. There is no limit on the number of applications you can submit through the InternHunt portal.',
  },
  {
    q: 'When and where will InternHunt 9.0 take place?',
    a: 'InternHunt 9.0 is scheduled for March 2026 at the IITM Janakpuri campus. Specific dates, times, and venue details will be announced on the official website and social media channels.',
  },
  {
    q: 'How can I prepare for the interviews?',
    a: 'InternWare will host pre-event webinars and resume-building workshops to help students prepare. Keep an eye on our announcements for workshop schedules and preparation resources.',
  },
];

const Faq = ({ darkMode }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
            <span
              className={`text-xs font-semibold uppercase tracking-widest ${
                darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
              }`}
            >
              Support
            </span>
            <span className="w-8 h-[3px] bg-teams-purple-light rounded-full"></span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-sm max-w-lg mx-auto ${
              darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
            }`}
          >
            Everything you need to know about InternHunt 9.0.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? darkMode
                      ? 'border-teams-purple/40 shadow-lg shadow-teams-purple/5'
                      : 'border-teams-purple/30 shadow-lg shadow-teams-purple/5'
                    : darkMode
                      ? 'border-teams-border-dark hover:border-teams-border-dark/80'
                      : 'border-teams-border-light hover:border-teams-border-light/80'
                } ${darkMode ? 'bg-teams-bg-dark-card' : 'bg-teams-bg-light-card'}`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left group transition-colors ${
                    darkMode ? 'hover:bg-teams-bg-dark-3' : 'hover:bg-teams-bg-light'
                  }`}
                >
                  <span
                    className={`text-sm font-medium pr-4 ${
                      isOpen
                        ? darkMode
                          ? 'text-teams-purple-light'
                          : 'text-teams-purple'
                        : darkMode
                          ? 'text-teams-text-dark'
                          : 'text-teams-text-light'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    } ${
                      darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className={`px-6 pb-5 text-sm leading-relaxed ${
                      darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div
            className={`inline-flex flex-col items-center gap-3 px-8 py-6 rounded-xl border ${
              darkMode
                ? 'bg-teams-bg-dark-2 border-teams-border-dark'
                : 'bg-teams-bg-light border-teams-border-light'
            }`}
          >
            <svg
              className={`w-6 h-6 ${darkMode ? 'text-teams-purple-light' : 'text-teams-purple'}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <p
              className={`text-sm ${
                darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
              }`}
            >
              Still have questions?
            </p>
            <button className="px-6 py-2 bg-teams-purple text-white text-sm font-medium rounded-lg hover:bg-teams-purple-hover transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
