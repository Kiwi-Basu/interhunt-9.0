const AboutInterhunt = () => {
  return (
    <>
      <section id="About-InterHunt">
        <div className="min-h-screen bg-white flex flex-col items-center p-20 relative overflow-hidden">

          {/* Subtle background tint blobs */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            About InternHunt
          </p>

          {/* Main content card */}
          <div className="border border-gray-100 w-5xl p-10 flex gap-10 bg-white shadow-2xl shadow-gray-200 rounded-3xl relative z-10">

            <div className="flex flex-col gap-6 flex-1">
              <p className="text-gray-600 leading-relaxed text-base">
                InternHunt is the flagship event of InternWare — Internship Cell, IITM, Janakpuri, held annually to connect students with industry opportunities. It helps students gain hands-on experience by linking them with diverse companies offering valuable internships.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                InternHunt is the flagship event of InternWare — Internship Cell, IITM, Janakpuri, held annually to connect students with industry opportunities. It helps students gain hands-on experience by linking them with diverse companies offering valuable internships.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                InternHunt is the flagship event of InternWare — Internship Cell, IITM, Janakpuri, held annually to connect students with industry opportunities. It helps students gain hands-on experience by linking them with diverse companies offering valuable internships.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-5 shrink-0">
              <div className="w-72 h-28 border border-violet-100 bg-violet-50 rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 hover:border-violet-200 hover:bg-violet-100 hover:shadow-lg transition-all duration-300 cursor-default">
                <span className="text-2xl select-none">✨</span>
                <p className="text-violet-600 font-semibold text-base tracking-wide">Event Highlights</p>
              </div>
              <div className="w-72 h-28 border border-pink-100 bg-pink-50 rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 hover:border-pink-200 hover:bg-pink-100 hover:shadow-lg transition-all duration-300 cursor-default">
                <span className="text-2xl select-none">🎯</span>
                <p className="text-pink-600 font-semibold text-base tracking-wide">Our Mission</p>
              </div>
              <div className="w-72 h-28 border border-indigo-100 bg-indigo-50 rounded-2xl shadow-md flex flex-col items-center justify-center gap-1 hover:border-indigo-200 hover:bg-indigo-100 hover:shadow-lg transition-all duration-300 cursor-default">
                <span className="text-2xl select-none">🚀</span>
                <p className="text-indigo-600 font-semibold text-base tracking-wide">Why InternHunt?</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInterhunt;