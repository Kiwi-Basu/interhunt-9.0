const AboutInternware = () => {
  const stats = [
    {
      value: "9+",
      label: "Years of Excellence",
    },
    {
      value: "40+",
      label: "Active Members",
    },
    {
      value: "50+",
      label: "Events Hosted",
    },
  ];

  return (
    <>
      <section id="About-Internware">
        <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] p-6 py-16 md:p-20 flex flex-col items-center relative overflow-hidden">

          {/* Subtle background accents (theme aligned) */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-12 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            About <span className="text-[#CEAC81]">InternWare</span>
          </p>
        
          <div className="w-full max-w-5xl flex flex-col gap-6 md:gap-8 relative z-10">

            {/* Text panels */}
            <div className="bg-white border border-[#CEAC81]/20 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                InternWare is a student-led organization at IITM, Janakpuri dedicated to bridging the gap between academic learning and industry requirements. We focus on providing students with practical exposure and opportunities to enhance their skills through internships, workshops, and industry collaborations.
              </p>
            </div>

            <div className="bg-white border border-[#CEAC81]/20 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                Founded with a vision to empower students with real-world experience, InternWare has grown to become a platform that connects talented students with leading companies across various sectors. Our flagship event, InternHunt, is a testament to our commitment to creating meaningful opportunities for students.
              </p>
            </div>

            {/* Stats cards */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-32 md:h-44 border border-[#CEAC81]/30 bg-white rounded-3xl shadow-md hover:shadow-xl flex flex-col items-center justify-center gap-2 md:gap-3 hover:-translate-y-2 transition-all duration-300 cursor-default"
                >
                  <p className="text-4xl md:text-5xl font-black text-[#1F3A5F]">
                    {stat.value}
                  </p>

                  <p className="text-[#CEAC81] font-semibold tracking-widest text-xs uppercase">
                    {stat.label}
                  </p>

                  {/* subtle accent line */}
                  <div className="w-8 h-[2px] bg-[#CEAC81]/60"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInternware;