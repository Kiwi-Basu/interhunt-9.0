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
    q: 'Who can participate?',
    a: 'All students currently enrolled at IITM Janakpuri from any year, branch, or department are eligible. Both undergraduate and postgraduate students can register.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No, participation in InternHunt 9.0 is completely free of charge for all eligible students.',
  },
  {
    q: 'What kind of internships are offered?',
    a: 'Companies from technology, marketing, finance, design, content creation, data analytics, and more participate. Both on-site and remote internships are available.',
  },
  {
    q: 'How does the selection process work?',
    a: 'After registering, companies shortlist candidates based on profiles. Shortlisted students go through interviews or assessments as determined by each company.',
  },
  {
    q: 'Can I apply to multiple companies?',
    a: 'Yes. There is no limit on the number of applications you can submit through the InternHunt portal.',
  },
  {
    q: 'When and where will it take place?',
    a: 'InternHunt 9.0 is scheduled for March 2026 at the IITM Janakpuri campus. Specific dates and venue details will be announced on official channels.',
  },
  {
    q: 'How can I prepare?',
    a: 'InternWare will host pre-event webinars and resume-building workshops. Keep an eye on announcements for schedules and preparation resources.',
  },
];

const Faq = ({ darkMode }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className={`text-2xl font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-teams-text-light'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-[13px] ${
            darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
          }`}>
            Everything you need to know about InternHunt 9.0.
          </p>
        </div>

        {/* Accordions */}
        <div className={`rounded-lg border overflow-hidden ${
          darkMode ? 'border-teams-border-dark' : 'border-teams-border-light'
        }`}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isLast = i === faqs.length - 1;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full px-5 py-3.5 flex items-center justify-between text-left transition-colors duration-100 ${
                    darkMode
                      ? 'hover:bg-white/3'
                      : 'hover:bg-black/2'
                  } ${
                    isOpen
                      ? darkMode ? 'bg-teams-bg-dark-3' : 'bg-teams-bg-light'
                      : darkMode ? 'bg-teams-bg-dark-card' : 'bg-white'
                  }`}
                >
                  <span className={`text-[13px] font-medium pr-4 ${
                    isOpen
                      ? darkMode ? 'text-teams-purple-light' : 'text-teams-purple'
                      : darkMode ? 'text-teams-text-dark' : 'text-teams-text-light'
                  }`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    } ${darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    darkMode ? 'bg-teams-bg-dark-3' : 'bg-teams-bg-light'
                  }`}
                  style={{
                    maxHeight: isOpen ? '150px' : '0px',
                  }}
                >
                  <div className={`px-5 pb-4 text-[13px] leading-[1.6] ${
                    darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
                  }`}>
                    {faq.a}
                  </div>
                </div>

                {/* Divider */}
                {!isLast && (
                  <div className={`h-px ${
                    darkMode ? 'bg-teams-border-dark' : 'bg-teams-border-light'
                  }`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className={`mt-8 flex items-center gap-3 text-[13px] ${
          darkMode ? 'text-teams-text-dark-secondary' : 'text-teams-text-light-secondary'
        }`}>
          <span>Still have questions?</span>
          <button className={`font-medium transition-colors ${
            darkMode
              ? 'text-teams-purple-light hover:text-white'
              : 'text-teams-purple hover:text-teams-purple-dark'
          }`}>
            Contact us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
