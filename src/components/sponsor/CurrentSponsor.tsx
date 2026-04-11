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
        <div className="min-h-screen p-20 flex flex-col items-center bg-white relative overflow-hidden">

          <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-violet-50 rounded-full blur-3xl opacity-80 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Current Sponsors
          </p>
          
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-violet-300"></div>
            <span className="px-5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-bold tracking-widest uppercase shadow-sm">
              Edition 9.0
            </span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-violet-300"></div>
          </div>

          <div className="flex w-6xl flex-wrap gap-5 justify-center relative z-10">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="h-52 w-44 border border-gray-100 bg-white flex flex-col gap-3 p-4 rounded-3xl shadow-lg shadow-gray-100 hover:-translate-y-3 hover:border-violet-100 hover:shadow-violet-100 hover:shadow-xl duration-300 transition-all group cursor-pointer"
              >
                <div className="flex-1 flex items-center justify-center border border-gray-100 rounded-2xl bg-gray-50 p-3 group-hover:bg-violet-50 group-hover:border-violet-100 transition-all duration-300">
                  <img
                    src="src\assets\react.svg"
                    alt={sponsor.sponsorName}
                    className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <p className="text-center text-gray-400 group-hover:text-violet-600 text-xs font-semibold tracking-wide transition-colors duration-300">
                  {sponsor.sponsorName}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default CurrentSponsor;