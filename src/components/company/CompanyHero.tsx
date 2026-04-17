import comp1 from "../../assets/companies/companies page/decathlon_square.png"
import comp2 from "../../assets/companies/companies page/cetpa@2x.png"
import comp3 from "../../assets/companies/companies page/urs tech@2x.png"

const CompanyHero = () => {
  return (
    <>
      <section id="Company-Hero">
        <div className="min-h-screen relative flex items-center justify-center flex-col gap-10 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] overflow-hidden">

          {/* top left */}
          <div className="absolute top-12 left-0 h-25 w-50 rounded-r-4xl bg-[#CEAC81]"></div>
          <div className="absolute top-0 left-0 h-20 w-80 rounded-br-4xl bg-[#1F3A5F]"></div>

          {/* top right */}
          <div className="absolute right-0 top-0 h-30 w-50 rounded-bl-4xl bg-[#CEAC81]"></div>

          {/* bottom right */}
          <div className="absolute bottom-0 right-0 h-20 w-80 rounded-tl-4xl bg-[#1F3A5F]"></div>
          <div className="absolute bottom-0 right-0 h-30 w-50 rounded-tl-4xl bg-[#CEAC81]"></div>

          {/* squares (softened) */}
          <div className="absolute opacity-10 ring-8 ring-[#1F3A5F]/20 h-50 w-50 top-70 left-20 rounded-2xl">
            <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-[#CEAC81]/20 rounded-2xl"></div>
          </div>
          
          <div className="absolute opacity-10 ring-8 ring-[#1F3A5F]/20 h-50 w-50 bottom-40 right-20 rounded-2xl">
            <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-[#CEAC81]/20 rounded-2xl"></div>
          </div>

          <div className="absolute opacity-10 ring-8 h-50 w-50 top-20 right-110 ring-[#1F3A5F]/20 rounded-2xl">
            <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-[#CEAC81]/20 rounded-2xl"></div>
          </div>

          {/* heading */}
          <div className="z-10 text-center">
            <p className="text-9xl font-extrabold text-[#1F3A5F]">
              Companies
            </p>
          </div>

          <p className="text-2xl font-medium text-gray-600">
            Connect with top companies across various industries
          </p>

          {/* cards */}
          <div className="flex flex-wrap gap-5 z-10">

            <div className="h-35 w-35 border object-contain overflow-hidden rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex flex-col items-center justify-center gap-2 hover:-translate-y-3 transition-all duration-300">
              <img src={comp1} alt="" className="h-50 "/>
            </div>

            <div className="h-35 w-35 border object-contain overflow-hidden rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex flex-col items-center justify-center gap-2 hover:-translate-y-3 transition-all duration-300">
              <img src={comp2} alt="" className="h-15 overflow-hidden"/>
            </div>

            <div className="h-35 w-35 border object-contain overflow-hidden rounded-2xl shadow-md border-[#CEAC81]/30 bg-white flex flex-col items-center justify-center gap-2 hover:-translate-y-3 transition-all duration-300">
              <img src={comp3} alt="" className="h-20 overflow-hidden"/>
            </div>

          </div>
        </div>    
      </section>
    </>
  )
}

export default CompanyHero;