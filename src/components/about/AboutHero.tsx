import { FaUsers, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section id="About-Hero">
      <div className="min-h-screen relative flex items-center justify-center flex-col gap-10 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] overflow-hidden">

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

        {/* content */}
        <div className="z-10 text-center">
          <p className="text-5xl sm:text-6xl md:text-9xl font-extrabold text-[#1F3A5F]">
            About <span className="text-[#CEAC81]">Us</span>
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-600 px-4 text-center">
          Where passion meets opportunity
        </p>

        {/* cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 z-10 px-4">

          {/* Card 1 */}
          <div className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
            <FaCalendarAlt className="text-[#CEAC81] text-xl sm:text-2xl" />
            <p className="text-2xl sm:text-3xl font-bold text-[#1F3A5F]">9+</p>
            <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">Years</p>
          </div>

          {/* Card 2 */}
          <div className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
            <FaUsers className="text-[#CEAC81] text-xl sm:text-2xl" />
            <p className="text-2xl sm:text-3xl font-bold text-[#1F3A5F]">3,500+</p>
            <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">Students Placed</p>
          </div>

          {/* Card 3 */}
          <div className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 border shadow-md border-[#CEAC81]/30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition">
            <FaBriefcase className="text-[#CEAC81] text-xl sm:text-2xl" />
            <p className="text-2xl sm:text-3xl font-bold text-[#1F3A5F]">50+</p>
            <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">Members</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;