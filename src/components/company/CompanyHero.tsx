import comp1 from "../../assets/companies/companies page/decathlon_square.png"
import comp2 from "../../assets/companies/companies page/cetpa@2x.png"
import comp3 from "../../assets/companies/companies page/urs tech@2x.png"

const CompanyHero = () => {
  return (
    <section id="Company-Hero">
      <div className="min-h-screen relative flex items-center justify-center flex-col gap-8 md:gap-10 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] overflow-hidden px-4">

        {/* top left */}
        <div className="absolute top-6 sm:top-10 md:top-12 left-0 
          h-12 sm:h-16 md:h-25 
          w-28 sm:w-40 md:w-50 
          rounded-r-3xl md:rounded-r-4xl bg-[#CEAC81]">
        </div>

        <div className="absolute top-0 left-0 
          h-12 sm:h-16 md:h-20 
          w-40 sm:w-60 md:w-80 
          rounded-br-3xl md:rounded-br-4xl bg-[#1F3A5F]">
        </div>

        {/* top right */}
        <div className="absolute right-0 top-0 
          h-14 sm:h-20 md:h-30 
          w-28 sm:w-40 md:w-50 
          rounded-bl-3xl md:rounded-bl-4xl bg-[#CEAC81]">
        </div>

        {/* bottom right */}
        <div className="absolute bottom-0 right-0 
          h-12 sm:h-16 md:h-20 
          w-40 sm:w-60 md:w-80 
          rounded-tl-3xl md:rounded-tl-4xl bg-[#1F3A5F]">
        </div>

        <div className="absolute bottom-0 right-0 
          h-14 sm:h-20 md:h-30 
          w-28 sm:w-40 md:w-50 
          rounded-tl-3xl md:rounded-tl-4xl bg-[#CEAC81]">
        </div>

        {/* squares */}
        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-[#1F3A5F]/20 
          h-28 sm:h-40 md:h-50 
          w-28 sm:w-40 md:w-50 
          top-40 md:top-70 left-4 sm:left-10 md:left-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 
            h-full w-full 
            top-6 md:top-10 left-6 md:left-15 
            ring-[#CEAC81]/20 rounded-2xl">
          </div>
        </div>

        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-[#1F3A5F]/20 
          h-28 sm:h-40 md:h-50 
          w-28 sm:w-40 md:w-50 
          bottom-20 md:bottom-40 right-4 sm:right-10 md:right-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 
            h-full w-full 
            top-6 md:top-10 left-6 md:left-15 
            ring-[#CEAC81]/20 rounded-2xl">
          </div>
        </div>

        <div className="hidden md:block absolute opacity-10 ring-8 
          h-50 w-50 top-20 right-110 
          ring-[#1F3A5F]/20 rounded-2xl">
          <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-[#CEAC81]/20 rounded-2xl"></div>
        </div>

        {/* heading */}
        <div className="z-10 text-center">
          <p className="text-5xl sm:text-6xl md:text-9xl font-extrabold text-[#1F3A5F]">
            Companies
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-600 text-center">
          Connect with top companies across various industries
        </p>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 z-10">

          <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-35 md:w-35 border rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex items-center justify-center hover:-translate-y-3 transition-all duration-300 overflow-hidden">
            <img src={comp1} alt="" className="h-16 sm:h-20 md:h-24 object-contain" />
          </div>

          <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-35 md:w-35 border rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex items-center justify-center hover:-translate-y-3 transition-all duration-300 overflow-hidden">
            <img src={comp2} alt="" className="h-10 sm:h-12 md:h-15 object-contain" />
          </div>

          <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-35 md:w-35 border rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex items-center justify-center hover:-translate-y-3 transition-all duration-300 overflow-hidden">
            <img src={comp3} alt="" className="h-12 sm:h-16 md:h-20 object-contain" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default CompanyHero;