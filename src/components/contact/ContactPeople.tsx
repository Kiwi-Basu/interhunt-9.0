const ContactPeople = () => {
  return (
    <>
      <section id="Contact-People">
        <div className="min-h-screen flex flex-col items-center p-6 md:p-20 py-16 md:py-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden">

          {/* subtle theme glow */}
          <div className="absolute top-10 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-60 md:w-80 h-60 md:h-80 bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            Contact <span className="text-[#CEAC81]">Us</span>
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 relative z-10">

            {/* Card 1 */}
            <div className="border border-[#CEAC81]/20 bg-white shadow-md rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-56 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default">
              <div className="h-24 w-24 rounded-full border-2 border-[#CEAC81]/30 bg-[#1F3A5F]/5 shadow-sm mt-2"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg font-semibold text-[#1F3A5F]">Name</p>
                <p className="text-gray-400 text-sm">+91 999999999</p>
              </div>
              <button className="border border-[#CEAC81]/30 px-5 py-2 rounded-xl bg-white hover:bg-[#CEAC81]/10 text-[#1F3A5F] hover:text-[#CEAC81] cursor-pointer transition-all text-sm font-medium mt-auto">
                LinkedIn ↗
              </button>
            </div>

            {/* Card 2 — Center (highlighted) */}
            <div className="relative border-2 border-[#CEAC81] bg-white shadow-xl rounded-3xl flex flex-col gap-5 items-center p-10 h-108 w-64 transition-all duration-300 hover:scale-105 cursor-default">
              <div className="h-28 w-28 rounded-full border-2 border-[#CEAC81] bg-[#1F3A5F]/5 shadow-md mt-4"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-[#1F3A5F]">Name</p>
                <p className="text-gray-500 text-sm">+91 999999999</p>
              </div>
              <button className="border border-[#CEAC81] px-6 py-2 rounded-xl bg-[#1F3A5F] text-white hover:bg-[#CEAC81] hover:text-[#1F3A5F] cursor-pointer transition-all text-sm font-semibold mt-auto shadow-sm">
                LinkedIn ↗
              </button>
            </div>

            {/* Card 3 */}
            <div className="border border-[#CEAC81]/20 bg-white shadow-md rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-56 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default">
              <div className="h-24 w-24 rounded-full border-2 border-[#CEAC81]/30 bg-[#1F3A5F]/5 shadow-sm mt-2"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg font-semibold text-[#1F3A5F]">Name</p>
                <p className="text-gray-400 text-sm">+91 999999999</p>
              </div>
              <button className="border border-[#CEAC81]/30 px-5 py-2 rounded-xl bg-white hover:bg-[#CEAC81]/10 text-[#1F3A5F] hover:text-[#CEAC81] cursor-pointer transition-all text-sm font-medium mt-auto">
                LinkedIn ↗
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPeople;