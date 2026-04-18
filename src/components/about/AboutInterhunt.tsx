const AboutInterhunt = () => {
  return (
    <>
      <section id="About-InterHunt">
        <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] flex flex-col items-center p-20 relative overflow-hidden">

          {/* Subtle background accents (theme aligned) */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#CEAC81]/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-12 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            About <span className="text-[#CEAC81]">InternHunt</span>
          </p>

          {/* Main content card */}
          <div className="border border-[#CEAC81]/20 w-full max-w-5xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 bg-white shadow-lg rounded-3xl relative z-10 mx-4 md:mx-0">

            {/* Text */}
            <div className="flex flex-col gap-6 flex-1">
              <p className="text-gray-600 leading-relaxed text-base text-justify text-md text-shadow-2xs ">
                InternHunt 9.0 is an ultimate flagship Internship Fair hosted by InternWare - The Internship Cell of IITM. It is designed to bridge the gap between driven students, emerging professionals, and recruiters, all on one vibrant platform. It creates a platform where talent meets opportunity, helping participants explore different career paths, gain real industry exposure, and move closer to their professional goals.
              </p>
              <p className="text-gray-600 leading-relaxed text-base text-justify text-md text-shadow-2xs">
                With participation from leading organizations across various sectors, InternHunt 9.0 focuses on skill development, networking, and practical learning. More than just an internship fair, it acts as a launchpad to connect with industry professionals, grow personally, and unlock new opportunities in the evolving world of internships and careers.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                InternHunt is the flagship event of InternWare — Internship Cell, IITM, Janakpuri, held annually to connect students with industry opportunities. It helps students gain hands-on experience by linking them with diverse companies offering valuable internships.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-5 shrink-0 justify-center items-center wrap overflow-x-auto">

              <div className="w-full sm:w-72 h-24 md:h-28 shrink-0 border border-[#CEAC81]/30 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <span className="text-2xl">🚀</span>
                <p className="text-[#1F3A5F] font-semibold text-sm md:text-base tracking-wide">
                  Why InternHunt?
                </p>
                <div className="w-6 h-[2px] bg-[#CEAC81]/60"></div>
              </div>

              <div className="w-full sm:w-72 h-24 md:h-28 shrink-0 border border-[#CEAC81]/30 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <span className="text-2xl">🎯</span>
                <p className="text-[#1F3A5F] font-semibold text-sm md:text-base tracking-wide">
                  Our Mission
                </p>
                <div className="w-6 h-[2px] bg-[#CEAC81]/60"></div>
              </div>
              
              <div className="w-full sm:w-72 h-24 md:h-28 shrink-0 border border-[#CEAC81]/30 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <span className="text-2xl">✨</span>
                <p className="text-[#1F3A5F] font-semibold text-sm md:text-base tracking-wide">
                  Skill Develop
                </p>
                <div className="w-6 h-[2px] bg-[#CEAC81]/60"></div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInterhunt;