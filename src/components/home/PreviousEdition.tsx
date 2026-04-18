import { useState, useEffect } from "react";
import { motion } from "motion/react";

import hunt1 from "../../assets/Home/IH 1.0.png";
import hunt2 from "../../assets/Home/IH 2.0.png";
import hunt3 from "../../assets/Home/IH 3.0.png";
import hunt4 from "../../assets/Home/IH 4.0.png";
import hunt5 from "../../assets/Home/IH 5.0.png";
import hunt6 from "../../assets/Home/IH 6.0.png";
import hunt7 from "../../assets/Home/IH 7.0.png";
import hunt8 from "../../assets/Home/IH 8.0.png";

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
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);       // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3);                               // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const visibleCards = previousIntern.slice(index, index + cardsPerView);

  const next = () => {
    if (index < previousIntern.length - cardsPerView) setIndex(index + 1);
    else setIndex(0);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(previousIntern.length - cardsPerView);
  };

  const totalDots = previousIntern.length - (cardsPerView - 1);

  return (
    <section id="previous-editions">
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-14 p-4 py-16 md:p-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] overflow-hidden">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F3A5F] tracking-tight text-center"
        >
          Previous <span className="text-[#CEAC81]">Editions</span>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center w-full max-w-6xl px-2 sm:px-4 md:px-0"
        >

          {/* Left Arrow (Desktop) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-20 z-10 text-2xl w-12 h-12 rounded-full bg-white border border-[#CEAC81]/30 shadow-md cursor-pointer hover:scale-110 transition-all duration-300 justify-center items-center text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-4 md:gap-12 w-full justify-center items-stretch px-4 md:px-0 pb-4">
            {visibleCards.map((card, i) => (
              <div
                key={i}
                className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-3xl shadow-md border border-[#CEAC81]/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Header */}
                <div className="p-4 sm:p-6 flex justify-center items-center">
                  <img src={card.image} alt="internhunt" className="h-20 object-contain" />
                </div>

                {/* Year */}
                <div className="flex items-center justify-center bg-linear-to-b from-[#F5F6F7] to-white py-8">
                  <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1F3A5F] tracking-wide">
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

          {/* Right Arrow (Desktop) */}
          <button
            onClick={next}
            className="hidden md:flex absolute -right-20 z-10 text-2xl w-12 h-12 rounded-full bg-white border border-[#CEAC81]/30 shadow-md cursor-pointer hover:scale-110 transition-all duration-300 justify-center items-center text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
          >
            →
          </button>
        </motion.div>

        {/* Mobile/Tablet Arrows */}
        <div className="flex md:hidden justify-center gap-6 w-full mt-2 mb-2">
          <button onClick={prev} className="text-2xl w-10 h-10 rounded-full bg-white border border-[#CEAC81]/30 shadow-md flex justify-center items-center text-[#1F3A5F] cursor-pointer">
            ←
          </button>
          <button onClick={next} className="text-2xl w-10 h-10 rounded-full bg-white border border-[#CEAC81]/30 shadow-md flex justify-center items-center text-[#1F3A5F] cursor-pointer">
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-3">
          {Array.from({ length: totalDots }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#1F3A5F] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PreviousEdition;