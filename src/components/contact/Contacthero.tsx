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

          {/* Top Tag */}
          <div className="px-5 py-2 rounded-full border border-white/30 bg-white/10 text-sm backdrop-blur">
            Get in Touch
          </div>

          {/* Title */}
          <h1 className="text-6xl font-extrabold">
            CONTACT <span className="text-[#CEAC81]">US</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg text-gray-600">
            Have questions about InternHunt? We’re here to help. Reach out to us
            for sponsorship opportunities, registrations, or any other details.
          </p>

          {/* Cards */}
          <div className="flex gap-6 mt-6">

            {/* Email */}
            <div className="w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📧</p>
              <p className="font-semibold mt-3">24/7</p>
              <p className="text-sm text-gray-500">Email Support</p>
            </div>

            {/* Phone */}
            <div className="w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📞</p>
              <p className="font-semibold mt-3">Available</p>
              <p className="text-sm text-gray-500">Phone Support</p>
            </div>

            {/* Location */}
            <div className="w-64 p-6 rounded-2xl border border-black/10 bg-white shadow">
              <p className="text-3xl">📍</p>
              <p className="font-semibold mt-3">IITM</p>
              <p className="text-sm text-gray-500">Campus Location</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-6">

            <button className="px-8 py-3 rounded-full bg-[#CEAC81] text-white font-semibold shadow hover:scale-105 transition">
              Send a Message
            </button>

            <button className="px-8 py-3 rounded-full border border-[#CEAC81] text-[#CEAC81] font-semibold hover:bg-[#CEAC81] hover:text-white transition">
              Download Brochure
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactHero;