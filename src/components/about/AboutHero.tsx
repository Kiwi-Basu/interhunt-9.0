import { FaUsers, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const AboutHero = () => {
  return (
    <>
      <section id="About-Hero">
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

          {/* content */}
          <div className="z-10 text-center">
            <p className="text-9xl font-extrabold text-[#1F3A5F]">
              About <span className="text-[#CEAC81]">Us</span>
            </p>  
          </div>

          <p className="text-2xl font-medium text-gray-600">
            Where passion meets opportunity
          </p>

          {/* cards */}
          <div className="flex flex-wrap gap-5 z-10">

            {/* Card 1 */}
            <div className="h-40 w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
              <FaCalendarAlt className="text-[#CEAC81] text-2xl" />
              <p className="text-3xl font-bold text-[#1F3A5F]">9+</p>
              <p className="text-xs text-gray-500 tracking-wide">Years</p>
            </div>

            {/* Card 2 */}
            <div className="h-40 w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
              <FaUsers className="text-[#CEAC81] text-2xl" />
              <p className="text-3xl font-bold text-[#1F3A5F]">500+</p>
              <p className="text-xs text-gray-500 tracking-wide">Students Placed</p>
            </div>

            {/* Card 3 */}
            <div className="h-40 w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
              <FaBriefcase className="text-[#CEAC81] text-2xl" />
              <p className="text-3xl font-bold text-[#1F3A5F]">50+</p>
              <p className="text-xs text-gray-500 tracking-wide">members</p>
            </div>

          </div>

        </div>    
      </section>
    </>
  )
}

export default AboutHero