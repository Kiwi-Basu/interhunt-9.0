import { Link } from "react-router-dom";

const CurrentSponsor = () => {
  const sponsors = [
    { img: "img", sponsorName: "name" },
    { img: "img2", sponsorName: "Alpha Corp" },
    { img: "img3", sponsorName: "Beta Solutions" },
    { img: "img4", sponsorName: "Gamma Tech" },
    { img: "img5", sponsorName: "Delta Innovations" },
    { img: "img6", sponsorName: "Epsilon Systems" },
    { img: "img7", sponsorName: "Zeta Enterprises" },
    { img: "img8", sponsorName: "Theta Labs" },
    { img: "img9", sponsorName: "Lambda Group" },
    { img: "img10", sponsorName: "Omega Corp" },
    { img: "img11", sponsorName: "Nova Industries" },
  ];

  return (
    <>
      <section id="Current-Sponsor">
        <div className="min-h-screen p-6 md:p-20 py-16 md:py-20 flex flex-col items-center bg-white relative overflow-hidden">

          {/* theme blobs */}
          <div className="absolute top-10 left-1/3 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            Current <span className="text-[#CEAC81]">Sponsors</span>
          </p>
          
          {/* Edition badge */}
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#CEAC81]/40"></div>
            <span className="px-5 py-1.5 rounded-full bg-[#CEAC81]/10 border border-[#CEAC81]/30 text-[#CEAC81] text-xs font-bold tracking-widest uppercase shadow-sm">
              Edition 9.0
            </span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-[#CEAC81]/40"></div>
          </div>

          {/* Cards */}
          <div className="flex w-full md:max-w-6xl flex-wrap gap-4 md:gap-5 justify-center relative z-10 px-4 md:px-0">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="h-40 md:h-52 w-[45%] sm:w-44 border border-gray-100 bg-white flex flex-col gap-2 md:gap-3 p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-lg shadow-gray-100 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-[#CEAC81]/30 hover:shadow-lg duration-300 transition-all group cursor-pointer"
              >
                <div className="flex-1 flex items-center justify-center border border-gray-100 rounded-2xl bg-gray-50 p-3 group-hover:bg-[#1F3A5F]/5 group-hover:border-[#CEAC81]/30 transition-all duration-300">
                  <img
                    src="src/assets/react.svg"
                    alt={sponsor.sponsorName}
                    className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <p className="text-center text-gray-400 group-hover:text-[#1F3A5F] text-xs font-semibold tracking-wide transition-colors duration-300">
                  {sponsor.sponsorName}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link to="/contact">
            <div className="mt-10 text-2xl font-bold border px-10 py-2 rounded-full shadow-lg border-[#CEAC81]/30 text-[#1F3A5F] cursor-pointer hover:scale-105 hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition-all duration-300">
              Get In Touch 
            </div>
          </Link>

        </div>
      </section>
    </>
  );
};

export default CurrentSponsor;