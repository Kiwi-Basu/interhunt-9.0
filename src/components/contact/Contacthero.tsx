import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section id="Contact-Hero">
      <div className="min-h-screen relative flex items-center justify-center flex-col gap-5 text-center px-4 sm:px-6 md:px-10 overflow-hidden">

        {/* 🌈 Glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 
          w-[500px] sm:w-[700px] md:w-[900px] 
          h-[500px] sm:h-[600px] md:h-[700px] 
          bg-[#CEAC81]/20 blur-[140px] opacity-40 pointer-events-none z-0">
        </div>

        <div className="absolute bottom-[-120px] right-[-120px] 
          w-[350px] sm:w-[450px] 
          h-[350px] sm:h-[450px] 
          bg-[#1F3A5F]/20 blur-[120px] opacity-40 pointer-events-none z-0">
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 
          h-12 sm:h-16 md:h-20 
          w-32 sm:w-52 md:w-72 
          rounded-br-3xl bg-[#0F1E3D] z-0">
        </div>

        <div className="absolute bottom-0 right-0 
          h-12 sm:h-16 md:h-20 
          w-32 sm:w-52 md:w-72 
          rounded-tl-3xl bg-[#0F1E3D] z-0">
        </div>

        {/* ===== CONTENT ===== */}

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1F3A5F] z-10"
        >
          CONTACT <span className="text-[#CEAC81]">US</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg md:max-w-2xl text-md sm:text-base md:text-lg text-gray-600 z-10"
        >
          Have questions about InternHunt?
        </motion.p>

        {/* ===== CARDS (COMPANY STYLE) ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 z-10 w-full flex flex-col items-center gap-6"
        >

          {/* Top Row */}
          <div className="flex gap-6 justify-center w-full">

            {/* Email */}
            <div className="group w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 p-4 rounded-2xl 
              bg-white/80 backdrop-blur-lg border border-white/40 
              shadow-md hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 flex flex-col items-center justify-center">

              <p className="text-2xl md:text-3xl group-hover:scale-110 transition">{'📧'}</p>
              <p className="font-semibold mt-2 text-xs sm:text-sm md:text-base text-[#1F3A5F]">
                Email Us
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                24/7 Support
              </p>
            </div>

            {/* Phone */}
            <div className="group w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 p-4 rounded-2xl 
              bg-white/80 backdrop-blur-lg border border-white/40 
              shadow-md hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 flex flex-col items-center justify-center">

              <p className="text-2xl md:text-3xl group-hover:scale-110 transition">{'📞'}</p>
              <p className="font-semibold mt-2 text-xs sm:text-sm md:text-base text-[#1F3A5F]">
                Call Us
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Quick Response
              </p>
            </div>

          </div>

          {/* Bottom Center */}
          <div className="flex justify-center w-full">

            {/* Location */}
            <div className="group w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 p-4 rounded-2xl 
              bg-white/80 backdrop-blur-lg border border-white/40 
              shadow-md hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 flex flex-col items-center justify-center">

              <p className="text-2xl md:text-3xl group-hover:scale-110 transition">{'📍'}</p>
              <p className="font-semibold mt-2 text-xs sm:text-sm md:text-base text-[#1F3A5F]">
                Visit Us
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                IITM Campus
              </p>
            </div>

          </div>

        </motion.div>

        {/* CTA */}
        <div className="mt-6 z-10">
          <button className="px-8 py-3 rounded-full 
            bg-gradient-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] 
            text-white font-semibold shadow-lg 
            hover:scale-105 hover:shadow-xl 
            active:scale-95
            transition-all duration-300">
            Send a Message
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;