const PreviousSponsor = () => {
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
      <section id="Previous-Sponsor">
        <div className="min-h-screen p-20 flex flex-col items-center bg-gray-50 relative overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent pointer-events-none"></div>

          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Previous Sponsors
          </p>
          

          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-gray-300"></div>
            <span className="px-5 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold tracking-widest uppercase shadow-sm">
              Past Events
            </span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-gray-300"></div>
          </div>


          <div className="flex w-6xl flex-wrap gap-5 justify-center relative z-10">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="h-52 w-44 border border-gray-100 bg-white flex flex-col gap-3 p-4 rounded-3xl shadow-sm hover:-translate-y-2 hover:border-gray-200 hover:shadow-lg duration-300 transition-all group cursor-pointer opacity-60 hover:opacity-100"
              >
                <div className="flex-1 flex items-center justify-center border border-gray-100 rounded-2xl bg-gray-50 p-3 grayscale group-hover:grayscale-0 group-hover:bg-white transition-all duration-300">
                  <img
                    src="src\assets\react.svg"
                    alt={sponsor.sponsorName}
                    className="h-12 w-12 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <p className="text-center text-gray-400 group-hover:text-gray-600 text-xs font-semibold tracking-wide transition-colors duration-300">
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

export default PreviousSponsor;