const ContactPeople = () => {
  return (
    <>
      <section id="Contact-People">
        <div className="min-h-screen flex flex-col items-center p-6 md:p-20 py-16 md:py-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden">

          {/* subtle theme glow */}
          <div className="absolute top-10 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-60 md:w-80 h-60 md:h-80 bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            Contact <span className="text-[#CEAC81]">Us</span>
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-8 xl:gap-12 relative z-10 w-full max-w-6xl mx-auto mt-6">

            {/* Card 1 */}
            <div className="border border-[#CEAC81]/20 bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl flex flex-col items-center p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default group">
              <div className="w-full flex justify-end mb-2">
                <a href="https://www.linkedin.com/in/alicesinghal" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="h-28 w-28 flex items-center justify-center rounded-full border-[3px] border-white shadow-xl bg-gradient-to-br from-[#1F3A5F] to-[#2E5280] relative z-10">
                  <p className="font-extrabold text-4xl text-white tracking-wider">AS</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold text-[#1F3A5F] mb-5">Ms. Alice Singhal</p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2">
                  <a href="tel:+919785978501" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1F3A5F]">+91 97859 78501</span>
                  </a>
                  
                  <a href="mailto:alice.singhal@example.com" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-[13px] font-medium text-gray-500">Email Alice</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 — Center (highlighted) */}
            <div className="relative border border-[#CEAC81]/50 bg-white shadow-2xl rounded-3xl flex flex-col items-center p-8 w-full md:w-80 transition-all duration-500 hover:-translate-y-3 cursor-default group lg:-mt-8 z-20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#CEAC81] via-[#d4b998] to-[#CEAC81]"></div>
              
              <div className="w-full flex justify-between items-center mb-2 mt-2">
                <span className="bg-[#1F3A5F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#CEAC81]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Lead
                </span>
                <a href="https://www.linkedin.com/in/riyamadaan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              
              <div className="relative mb-6 mt-2">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="h-32 w-32 flex items-center justify-center rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-[#CEAC81] to-[#a8885b] relative z-10">
                  <p className="font-extrabold text-5xl text-white tracking-wider">RM</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-2xl font-bold text-[#1F3A5F] mb-5">Ms. Riya Madaan</p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#CEAC81]/30 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2 mb-2">
                  <a href="tel:+918744899382" className="flex items-center gap-4 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2.5 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[14px] font-bold text-[#1F3A5F]">+91 87448 99382</span>
                  </a>
                  
                  <a href="mailto:riya.madaan@example.com" className="flex items-center gap-4 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2.5 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-[14px] font-medium text-gray-500">Email Riya</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[#CEAC81]/20 bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl flex flex-col items-center p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default group">
              <div className="w-full flex justify-end mb-2">
                <a href="https://www.linkedin.com/in/pranshusharma" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="h-28 w-28 flex items-center justify-center rounded-full border-[3px] border-white shadow-xl bg-gradient-to-br from-[#1F3A5F] to-[#2E5280] relative z-10">
                  <p className="font-extrabold text-4xl text-white tracking-wider">PS</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold text-[#1F3A5F] mb-5">Mr. Pranshu Sharma</p>

                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2">
                  <a href="tel:+919560787745" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1F3A5F]">+91 95607 87745</span>
                  </a>
                  
                  <a href="mailto:pranshu.sharma@example.com" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-[13px] font-medium text-gray-500">Email Pranshu</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPeople;