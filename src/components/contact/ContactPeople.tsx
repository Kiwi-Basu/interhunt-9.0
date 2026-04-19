import { motion } from "motion/react";

const ContactPeople = () => {
  return (
    <>
      <section id="Contact-People">
        <div className="min-h-screen flex flex-col items-center p-6 md:p-20 py-16 md:py-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden">

          {/* subtle theme glow */}
          <div className="absolute top-10 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-60 md:w-80 h-60 md:h-80 bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center"
          >
            Contact <span className="text-[#CEAC81]">Us</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-8 xl:gap-12 relative z-10 w-full max-w-6xl mx-auto mt-6"
          >

            {/* Card 1 */}
            <div className="border border-[#CEAC81]/20 bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl flex flex-col items-center p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default group">
              <div className="w-full flex justify-end mb-2">
              
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="h-28 w-28 flex items-center justify-center rounded-full border-[3px] border-white shadow-xl bg-linear-to-br from-[#1F3A5F] to-[#2E5280] relative z-10">
                  <p className="font-extrabold text-4xl text-white tracking-wider">AS</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold text-[#1F3A5F] mb-5">Ms. Alice Singhal</p>
                
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2">
                  <a href="tel:+919785978501" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1F3A5F]">+91 97859 78501</span>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/alicesinghal?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-gray-500">Linkedin</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[#CEAC81]/20 bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl flex flex-col items-center p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default group">
              <div className="w-full flex justify-end mb-2">
              
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="h-28 w-28 flex items-center justify-center rounded-full border-[3px] border-white shadow-xl bg-linear-to-br from-[#CEAC81] to-[#a8885b] relative z-10">
                  <p className="font-extrabold text-4xl text-white tracking-wider">RM</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold text-[#1F3A5F] mb-5">Ms. Riya Madaan</p>
                
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2">
                  <a href="tel:+918744899382" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1F3A5F]">+91 8744899382</span>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/riya-madaan-103595275?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-gray-500">Linkedin</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[#CEAC81]/20 bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl flex flex-col items-center p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default group">
              <div className="w-full flex justify-end mb-2">
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#CEAC81] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="h-28 w-28 flex items-center justify-center rounded-full border-[3px] border-white shadow-xl bg-linear-to-br from-[#1F3A5F] to-[#2E5280] relative z-10">
                  <p className="font-extrabold text-4xl text-white tracking-wider">PS</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold text-[#1F3A5F] mb-5">Mr. Pranshu Sharma</p>

                
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
                
                <div className="flex flex-col gap-3 w-full px-2">
                  <a href="tel:+919560787745" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1F3A5F]">+91 95607 87745</span>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/pranshu-sharma-695a65299?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" className="flex items-center gap-3 text-gray-600 hover:text-[#1F3A5F] transition-colors group/link bg-gray-50/50 p-2 rounded-xl border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/link:bg-[#CEAC81]/10 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-gray-500">Linkedin</span>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ContactPeople;