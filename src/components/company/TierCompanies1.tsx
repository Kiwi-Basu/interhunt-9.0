const TierCompanies1 = () => {
  const company1 = [
    { img: "image", companyName: "Something", description: "something something something", knowmore: "pdf" },
    { img: "image2", companyName: "TechNova", description: "A leading company in AI and machine learning solutions.", knowmore: "pdf" },
    { img: "image3", companyName: "CodeCraft", description: "Focused on building scalable web and mobile applications.", knowmore: "pdf" },
    { img: "image4", companyName: "DataSphere", description: "Provides advanced data analytics and cloud services.", knowmore: "pdf" },
    { img: "image5", companyName: "InnoSoft", description: "Innovative software solutions for modern businesses.", knowmore: "pdf" },
    { img: "image6", companyName: "NextGen Systems", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
  ];

  return (
    <>
      <section id="Tier-1-company">
        <div className="min-h-screen bg-white flex flex-col items-center p-20 relative overflow-hidden">

          {/* Soft gold background tint */}
          <div className="absolute inset-0 bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F3E6D4]/40 pointer-events-none"></div>

          {/* soft gold glow (less intense, more premium) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CEAC81]/15 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* second faint glow for depth */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CEAC81]/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

          {/* Tier badge + heading */}
          <div className="relative z-10 flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-yellow-400"></div>
              <span className="px-5 py-1.5 rounded-full bg-yellow-50 border border-yellow-300 text-yellow-700 text-xs font-bold tracking-widest uppercase shadow-sm">
                ★  Gold Tier
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
              Tier 1
            </p>
          </div>

          {/* Company cards */}
          <div className="flex flex-wrap justify-evenly gap-y-8 relative z-10 w-full max-w-7xl">
            {company1.map((company, idx) => (
              <div
                key={idx}
                className="relative border border-yellow-50 bg-white shadow-lg shadow-yellow-50 rounded-3xl flex flex-col w-72 p-7 gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-50 hover:border-yellow-50 group cursor-pointer"
              >
                
                {/* Logo placeholder */}
                <div className="h-20 w-20 self-center rounded-2xl bg-yellow-50 border border-yellow-50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-50 transition-all duration-300">
                  <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Logo</span>
                </div>

                {/* Company name */}
                <p className="text-center font-bold text-lg text-gray-900 bg-gray-50 rounded-xl py-2.5 border border-gray-100">
                  {company.companyName}
                </p>

                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-4 text-gray-500 leading-relaxed text-sm border border-gray-100 text-center">
                  {company.description}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 font-semibold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-yellow-50 border border-yellow-200 text-yellow-700 hover:bg-yellow-100 transition-all text-sm tracking-wide">
                    Know More
                  </button>
                  <button className="flex-1 font-bold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-linear-to-r from-yellow-400 to-amber-400 text-white hover:from-yellow-500 hover:to-amber-500 transition-all text-sm tracking-wide shadow-md hover:shadow-yellow-300">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TierCompanies1;