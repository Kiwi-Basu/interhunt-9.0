const TierCompanies2 = () => {
  const company2 = [
    { img: "image", companyName: "Something", description: "something something something", knowmore: "pdf" },
    { img: "image2", companyName: "TechNova", description: "A leading company in AI and machine learning solutions.", knowmore: "pdf" },
    { img: "image3", companyName: "CodeCraft", description: "Focused on building scalable web and mobile applications.", knowmore: "pdf" },
    { img: "image4", companyName: "DataSphere", description: "Provides advanced data analytics and cloud services.", knowmore: "pdf" },
    { img: "image5", companyName: "InnoSoft", description: "Innovative software solutions for modern businesses.", knowmore: "pdf" },
    { img: "image6", companyName: "NextGen Systems", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
  ];

  return (
    <>
      <section id="Tier-2-company">
        <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] flex flex-col items-center p-6 md:p-20 py-16 md:py-20 relative overflow-hidden">

          {/* Soft silver tint */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-gray-50 to-slate-100 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

          {/* Tier badge + heading */}
          <div className="relative z-10 flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-slate-400"></div>
              <span className="px-5 py-1.5 rounded-full bg-slate-50 border border-slate-300 text-slate-600 text-xs font-bold tracking-widest uppercase shadow-sm">
                ✦  Silver Tier
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-slate-400"></div>
            </div>
            <p className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
              Tier 2
            </p>
          </div>

          {/* Company cards */}
          <div className="flex flex-wrap justify-evenly gap-y-8 relative z-10 w-full max-w-7xl">
            {company2.map((company, idx) => (
              <div
                key={idx}
                className="relative border border-slate-200 bg-white shadow-lg shadow-slate-100 rounded-3xl flex flex-col w-full sm:w-72 p-5 md:p-7 gap-4 md:gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-slate-200 hover:border-slate-300 group cursor-pointer mx-4 sm:mx-0"
              >
                {/* Logo placeholder */}
                <div className="h-20 w-20 self-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-300">
                  <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">Logo</span>
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
                  <button className="flex-1 font-semibold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all text-sm tracking-wide">
                    Know More
                  </button>
                  <button className="flex-1 font-bold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-linear-to-r from-slate-500 to-gray-400 text-white hover:from-slate-600 hover:to-gray-500 transition-all text-sm tracking-wide shadow-md hover:shadow-slate-300">
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

export default TierCompanies2;