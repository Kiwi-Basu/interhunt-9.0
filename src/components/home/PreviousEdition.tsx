import { useState } from "react";
import hunt1 from "../../assets/Home/IH 1.0.png"
import hunt2 from "../../assets/Home/IH 2.0.png"
import hunt3 from "../../assets/Home/IH 3.0.png"
import hunt4 from "../../assets/Home/IH 4.0.png"
import hunt5 from "../../assets/Home/IH 5.0.png"
import hunt6 from "../../assets/Home/IH 6.0.png"
import hunt7 from "../../assets/Home/IH 7.0.png"
import hunt8 from "../../assets/Home/IH 8.0.png"

const previousIntern = [
  { image: hunt8, year: 2025, studentsPlaced: "550+", companies: "30+", links: "" },
  { image: hunt7, year: 2024, studentsPlaced: "550+", companies: "30+", links: "https://iitminternware.com/2024-25/events/Internhunt7/final.php" },
  { image: hunt6, year: 2023, studentsPlaced: "480+", companies: "25+", links: "https://www.iitminternware.com/2023-24/Internhunt6/index.php" },
  { image: hunt5, year: 2022, studentsPlaced: "420+", companies: "20+", links: "https://iitminternware.com/2021-22/Internhunt5.0/" },
  { image: hunt4, year: 2021, studentsPlaced: "450+", companies: "20+", links: "https://www.iitminternware.com/2021-22/Internhunt%204//" },
  { image: hunt3, year: 2020, studentsPlaced: "550+", companies: "12+", links: "" },
  { image: hunt2, year: 2019, studentsPlaced: "550+", companies: "18+", links: "https://iitminternware.com/events/internhunt2.php" },
  { image: hunt1, year: 2018, studentsPlaced: "500+", companies: "15+", links: "https://iitminternware.com/events/internhunt1.php" },
];

const PreviousEdition = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = previousIntern.slice(index, index + 3);

  const next = () => {
    if (index < previousIntern.length - 3) setIndex(index + 1);
    else setIndex(0);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(previousIntern.length - 3);
  };

  const totalDots = previousIntern.length - 2;

  return (
    <>
      <section id="previous-editions">
        <div className="min-h-screen flex flex-col items-center justify-center gap-14 p-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">

          {/* Title */}
          <div className="text-5xl font-extrabold text-[#1F3A5F] tracking-tight">
            Previous <span className="text-[#CEAC81]">Editions</span>
          </div>

          {/* Carousel */}
          <div className="relative flex items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute -left-20 text-2xl w-12 h-12 rounded-full bg-white border border-[#CEAC81]/30 shadow-md cursor-pointer hover:scale-110 transition-all duration-300 flex justify-center items-center text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
            >
              ←
            </button>

            {/* Cards */}
            <div className="flex gap-12">
              {visibleCards.map((card, i) => (
                <div
                  key={i}
                  className="w-72 bg-white rounded-3xl shadow-md border border-[#CEAC81]/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="p-6 flex justify-center items-center">
                    <img src={card.image} alt="internhunt" className="h-20 object-contain" />
                  </div>

                  {/* Big Year */}
                  <div className="flex items-center justify-center bg-linear-to-b from-[#F5F6F7] to-white py-8">
                    <h1 className="text-6xl font-extrabold text-[#1F3A5F] tracking-wide">
                      {card.year}
                    </h1>
                  </div>

                  {/* Stats */}
                  <div className="p-5 flex flex-col gap-5">

                    <div className="flex justify-between text-center">
                      <div>
                        <p className="text-gray-500 text-sm">Students</p>
                        <p className="text-xl font-bold text-[#0F172A]">
                          {card.studentsPlaced}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Companies</p>
                        <p className="text-xl font-bold text-[#0F172A]">
                          {card.companies}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#CEAC81]/30"></div>

                    {/* Button */}
                    <a href={card.links} target="_blank">
                      <button className="cursor-pointer w-full py-2 rounded-xl bg-[#1F3A5F] text-white font-semibold transition-all duration-300 hover:bg-[#CEAC81] hover:text-[#1F3A5F]">
                        Read More
                      </button>
                    </a>

                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute -right-20 text-2xl w-12 h-12 rounded-full bg-white border border-[#CEAC81]/30 shadow-md cursor-pointer hover:scale-110 transition-all duration-300 flex justify-center items-center text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-3">
            {Array.from({ length: totalDots }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-[#1F3A5F] scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default PreviousEdition;