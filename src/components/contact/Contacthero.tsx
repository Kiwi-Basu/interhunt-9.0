import { Mail, Phone, MapPin } from "lucide-react";
const ContactHero = () => {
  return (
    <section id="hero">
      <div className="min-h-screen relative flex items-center justify-center flex-col gap-3 md:gap-10 text-center px-4 md:px-6 overflow-hidden bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">

        {/* ===== SHAPES (RESPONSIVE) ===== */}

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

        {/* squares */}
        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-black/10 
          h-28 sm:h-40 md:h-50 
          w-28 sm:w-40 md:w-50 
          top-40 md:top-70 left-4 sm:left-10 md:left-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 
            h-full w-full 
            top-6 md:top-10 left-6 md:left-15 
            ring-black/10 rounded-2xl" />
        </div>

        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-black/10 
          h-28 sm:h-40 md:h-50 
          w-28 sm:w-40 md:w-50 
          bottom-20 md:bottom-40 right-4 sm:right-10 md:right-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 
            h-full w-full 
            top-6 md:top-10 left-6 md:left-15 
            ring-black/10 rounded-2xl" />
        </div>

        <div className="hidden md:block absolute opacity-10 ring-8 
          h-50 w-50 top-20 right-110 
          ring-black/10 rounded-2xl">
          <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl" />
        </div>

        {/* ===== TITLE ===== */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold z-10">
          CONTACT <span className="text-[#CEAC81]">US</span>
        </h1>

        {/* ===== SUBTITLE ===== */}
        <p className="max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 z-10">
          Have questions about InternHunt?
        </p>

        {/* ===== CARDS ===== */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 z-10">

          {/* Email */}
          <div className="w-40 sm:w-52 md:w-64 p-4 md:p-6 rounded-2xl border border-black/10 bg-white shadow hover:-translate-y-2 transition">
            <Mail className="text-2xl md:text-3xl mx-auto text-[#CEAC81]" />
            <p className="font-semibold mt-2 md:mt-3 text-sm md:text-base">internware@gmail.com</p>
            <p className="text-xs md:text-sm text-gray-500">Email Support</p>
          </div>

          {/* Phone */}
          <div className="w-40 sm:w-52 md:w-64 p-4 md:p-6 rounded-2xl border border-black/10 bg-white shadow hover:-translate-y-2 transition">
            <Phone className="text-2xl md:text-3xl mx-auto text-[#CEAC81]" />
            <p className="font-semibold mt-2 md:mt-3 text-sm md:text-base">
              +91 97859 78501
            </p>
            <p className="text-xs md:text-sm text-gray-500">Phone Support</p>
          </div>

          {/* Location */}
          <div className="w-40 sm:w-52 md:w-64 p-4 md:p-6 rounded-2xl border border-black/10 bg-white shadow hover:-translate-y-2 transition">
            <MapPin className="text-2xl md:text-3xl mx-auto text-[#CEAC81]" />
            <p className="font-semibold mt-2 md:mt-3 text-sm md:text-base">IITM Janakpuri</p>
            <p className="text-xs md:text-sm text-gray-500">Campus Location</p>
          </div>

        </div>

        {/* ===== BUTTON ===== */}
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-6 z-10">
          <button onClick={() => window.scrollTo({ top: 950, behavior: "smooth" })} className="px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full bg-[#CEAC81] text-white font-semibold shadow hover:scale-105 transition cursor-pointer">
            Send a Message
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;