import { Link } from "react-router";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Hero = () => {
  // const user = JSON.parse(localStorage.getItem("user") || "null");
  const { user } = useAuth();

  return (
    <section id="hero">
      <div className="min-h-screen relative flex items-center justify-center flex-col px-4 md:px-0 overflow-hidden">

        {/* top left */}
        <div className="absolute top-6 sm:top-10 md:top-12 left-0 
          h-12 sm:h-16 md:h-25 
          w-28 sm:w-40 md:w-50 
          rounded-r-3xl md:rounded-r-4xl bg-[#CEAC81]" />

        <div className="absolute top-0 left-0 
          h-12 sm:h-16 md:h-20 
          w-40 sm:w-60 md:w-80 
          rounded-br-3xl md:rounded-br-4xl bg-[#0F1E3D]" />

        {/* top right */}
        <div className="absolute right-0 top-0 
          h-14 sm:h-20 md:h-30 
          w-28 sm:w-40 md:w-50 
          rounded-bl-3xl md:rounded-bl-4xl bg-[#CEAC81]" />

        {/* bottom right */}
        <div className="absolute bottom-0 right-0 
          h-12 sm:h-16 md:h-20 
          w-40 sm:w-60 md:w-80 
          rounded-tl-3xl md:rounded-tl-4xl bg-[#0F1E3D]" />

        <div className="absolute bottom-0 right-0 
          h-14 sm:h-20 md:h-30 
          w-28 sm:w-40 md:w-50 
          rounded-tl-3xl md:rounded-tl-4xl bg-[#CEAC81]" />

        {/* animated square (top-left area) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 0.15,
            scale: [1, 1.02, 1],
            x: [0, 8, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="hidden sm:block absolute ring-6 md:ring-10 ring-black/10 
            h-28 sm:h-40 md:h-50 
            w-28 sm:w-40 md:w-50 
            top-40 md:top-70 left-4 sm:left-10 md:left-20 rounded-2xl z-0"
        >
          <motion.div
            animate={{
              x: [0, 6, 0],
              y: [0, -6, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute ring-6 md:ring-10 
              h-full w-full 
              top-6 md:top-10 left-6 md:left-15 
              ring-black/10 rounded-2xl"
          />
        </motion.div>

        {/* bottom square */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="hidden sm:block absolute opacity-20 ring-6 md:ring-10 ring-black/10  
            h-28 sm:h-40 md:h-50 
            w-28 sm:w-40 md:w-50 
            bottom-20 md:bottom-40 right-4 sm:right-10 md:right-20 rounded-2xl z-0"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute ring-6 md:ring-10 h-full w-full top-6 md:top-10 left-6 md:left-15 ring-black/10 rounded-2xl"
          />
        </motion.div>

        {/* extra square (desktop only) */}
        <motion.div
          animate={{
            x: [0, 6, 0],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="hidden md:block absolute opacity-20 ring-10 
            h-50 w-50 top-20 right-110 ring-black/10 rounded-2xl z-0"
        >
          <motion.div
            animate={{
              x: [0, -5, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl"
          />
        </motion.div>

        {/* content */}
        <div className="flex flex-col items-center mb-6 md:mb-10 text-center z-10">
          <div className="text-4xl sm:text-6xl md:text-8xl font-extrabold">
            <span className="font-rayakan tracking-wider">InternHunt</span>{" "}
            <span className="text-[#1E3B56] font-rayakan tracking-wider">9.0</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl mt-2 font-medium">
            Where the hunt ends and the career begins
          </p>
        </div>

        {/* date */}
        <div className="text-4xl sm:text-5xl md:text-9xl font-bold border mb-8 md:mb-10 
          px-4 sm:px-6 md:px-10 
          py-3 sm:py-4 md:py-5 
          rounded-2xl shadow-lg border-white/20 bg-[#f6f2f2] z-10">
          <p className="text-center">MAY 09,</p>
          <p className="text-center text-[#0F1E3D]">2026</p>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 z-10 w-full sm:w-auto">
          {user ? (
            <Link to="/apply/payment" className="w-full sm:w-auto">
              <button className="w-full cursor-pointer px-8 md:px-20 py-3 text-lg sm:text-xl md:text-2xl rounded-full font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                Register Now
              </button>
            </Link>
          ) : (
            <>
              <Link to="/auth" className="w-full sm:w-auto">
                <button className="w-full cursor-pointer px-8 md:px-10 md:w-50 py-3 md:py-2 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link to="/auth" className="w-full sm:w-auto">
                <button className="w-full cursor-pointer px-8 md:px-10 md:w-50 py-3 md:py-2 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;