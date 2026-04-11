const AboutInternware = () => {
  const stats = [
    {
      value: "9+",
      label: "Years of Excellence",
      textColor: "text-violet-600",
      border: "border-violet-100",
      bg: "bg-violet-50",
      hoverBorder: "hover:border-violet-200",
      hoverBg: "hover:bg-violet-100",
    },
    {
      value: "16+",
      label: "Active Members",
      textColor: "text-blue-600",
      border: "border-blue-100",
      bg: "bg-blue-50",
      hoverBorder: "hover:border-blue-200",
      hoverBg: "hover:bg-blue-100",
    },
    {
      value: "50+",
      label: "Events Hosted",
      textColor: "text-pink-600",
      border: "border-pink-100",
      bg: "bg-pink-50",
      hoverBorder: "hover:border-pink-200",
      hoverBg: "hover:bg-pink-100",
    },
  ];

  return (
    <>
      <section id="About-Internware">
        <div className="min-h-screen bg-gray-50 p-20 flex flex-col items-center relative overflow-hidden">

          {/* Subtle background accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-80 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-50 rounded-full blur-3xl opacity-80 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            About InternWare
          </p>
        
          <div className="w-6xl flex flex-col gap-6 relative z-10">

            {/* Text panels */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                InternWare is a student-led organization at IITM, Janakpuri dedicated to bridging the gap between academic learning and industry requirements. We focus on providing students with practical exposure and opportunities to enhance their skills through internships, workshops, and industry collaborations.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                Founded with a vision to empower students with real-world experience, InternWare has grown to become a platform that connects talented students with leading companies across various sectors. Our flagship event, InternHunt, is a testament to our commitment to creating meaningful opportunities for students.
              </p>
            </div>

            {/* Stats cards */}
            <div className="flex gap-6 mt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-44 border ${stat.border} ${stat.bg} ${stat.hoverBorder} ${stat.hoverBg} rounded-3xl shadow-md hover:shadow-xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  <p className={`text-5xl font-black ${stat.textColor}`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-400 font-semibold tracking-widest text-xs uppercase">
                    {stat.label}
                  </p>
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