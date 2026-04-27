import CareerLaunch from "../../assets/Sponsor/Previous Sponsor/career launcher@4x.png"
import DainikBhaskar from "../../assets/Sponsor/Previous Sponsor/Dainik Jagran@4x.png"
import Decathlon from "../../assets/Sponsor/Previous Sponsor/Decathlon@4x.png"
import Fresca from "../../assets/Sponsor/Previous Sponsor/Fresca@4x.png"
import Giani from "../../assets/Sponsor/Previous Sponsor/Giani@4x.png"
import Gillete from "../../assets/Sponsor/Previous Sponsor/Gillete@4x.png"
import Nescafe from "../../assets/Sponsor/Previous Sponsor/Nescafe@4x.png"

const PreviousSponsor = () => {
  const sponsors = [
    { img: CareerLaunch , sponsorName: "CareerLaunch" },
    { img: DainikBhaskar, sponsorName: "DainikBhaskar" },
    { img: Decathlon, sponsorName: "Decathlon" },
    { img: Fresca, sponsorName: "Fresca" },
    { img: Giani, sponsorName: "Giani" },
    { img: Gillete, sponsorName: "Gillete" },
    { img: Nescafe, sponsorName: "Nescafe" }
  ];

  return (
    <>
      <section id="Previous-Sponsor">
        <div className="min-h-screen p-6 md:p-20 py-16 md:py-20 flex flex-col items-center bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] relative overflow-hidden">

          {/* subtle divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4  h-px bg-linear-to-r from-transparent via-[#CEAC81]/30 to-transparent pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            Previous <span className="text-[#CEAC81]">Sponsors</span>
          </p>
          
          {/* Badge */}
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#CEAC81]/30"></div>
            <span className="px-5 py-1.5 rounded-full bg-white border border-[#CEAC81]/20 text-gray-500 text-xs font-bold tracking-widest uppercase shadow-sm">
              Past Events
            </span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-[#CEAC81]/30"></div>
          </div>

          {/* Cards */}
          <div className="flex w-full md:max-w-6xl flex-wrap gap-4 md:gap-5 justify-center relative z-10 px-4 md:px-0">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="h-40 md:h-52 w-[45%] sm:w-44 border border-gray-100 bg-white flex flex-col gap-2 md:gap-3 p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-sm hover:-translate-y-2 hover:border-[#CEAC81]/30 hover:shadow-md duration-300 transition-all group  opacity-60 hover:opacity-100"
              >
                <div className="flex-1 flex items-center justify-center border border-gray-100 rounded-2xl bg-gray-50 p-3 grayscale group-hover:grayscale-0 group-hover:bg-[#1F3A5F]/5 transition-all duration-300">
                  <img
                    src={sponsor.img}
                    alt={sponsor.sponsorName}
                    className="w-50 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>

                <p className="text-center text-gray-400 group-hover:text-[#1F3A5F] text-xs font-semibold tracking-wide transition-colors duration-300">
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