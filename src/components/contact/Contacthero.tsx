const ContactHero = () => {
  return (
    <>
      <section id="hero">
        <div className="min-h-screen relative flex items-center justify-center flex-col gap-10 text-center px-10">

          {/* ===== SHAPES (UNCHANGED) ===== */}
          <div className="absolute top-12 left-0 h-25 w-50 rounded-r-4xl bg-[#CEAC81]"></div>
          <div className="absolute top-0 left-0 h-20 w-80 rounded-br-4xl bg-[#0F1E3D]"></div>

          <div className="absolute bottom-0 right-0 h-20 w-80 rounded-tl-4xl bg-[#0F1E3D]"></div>
          <div className="absolute bottom-0 right-0 h-30 w-50 rounded-tl-4xl bg-[#CEAC81]"></div>

          <div className="absolute right-0 top-0 h-30 w-50 rounded-bl-4xl bg-[#CEAC81]"></div>

          <div className="absolute opacity-20 ring-10 ring-black/10 h-50 w-50 top-70 left-20 rounded-2xl z-0">
            <div className="absolute ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl"></div>
          </div>

          <div className="absolute opacity-20 ring-10 ring-black/10 h-50 w-50 bottom-40 right-20 rounded-2xl z-0">
            <div className="absolute ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl"></div>
          </div>

          <div className="absolute opacity-20 ring-10 h-50 w-50 top-20 right-110 ring-black/10 rounded-2xl z-0">
            <div className="absolute ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl"></div>
          </div>

          {/* ===== CONTENT ===== */}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-center">
            CONTACT <span className="text-[#CEAC81]">US</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-base md:text-lg text-gray-600 text-center">
            Have questions about InternHunt? We’re here to help. Reach out to us
            for sponsorship opportunities, registrations, or any other details.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 w-full sm:w-auto px-4 sm:px-0">

            {/* Email */}
            <div className="w-full sm:w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📧</p>
              <p className="font-semibold mt-3 text-sm md:text-base">24/7</p>
              <p className="text-xs md:text-sm text-gray-500">Email Support</p>
            </div>

            {/* Phone */}
            <div className="w-full sm:w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📞</p>
              <p className="font-semibold mt-3 text-sm md:text-base">Available</p>
              <p className="text-xs md:text-sm text-gray-500">Phone Support</p>
            </div>

            {/* Location */}
            <div className="w-full sm:w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📍</p>
              <p className="font-semibold mt-3 text-sm md:text-base">IITM</p>
              <p className="text-xs md:text-sm text-gray-500">Campus Location</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 w-full sm:w-auto px-4 sm:px-0">
            
            <button className="w-full px-8 py-3 rounded-full bg-[#CEAC81] text-white font-semibold shadow hover:scale-105 transition">
              Send a Message
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactHero;