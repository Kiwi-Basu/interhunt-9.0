const ContactLocation = () => {
  return (
    <>
      <section id="Contact-location">
        <div className="min-h-screen p-6 md:p-20 py-16 md:py-20 flex flex-col items-center bg-gradient-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] relative overflow-hidden">

          {/* Soft theme blobs */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <p className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center">
            Locate <span className="text-[#CEAC81]">Us</span>
          </p>

          {/* Map card */}
          <div className="border border-[#CEAC81]/20 w-full max-w-6xl p-2 md:p-3 rounded-3xl shadow-xl bg-white relative z-10 hover:shadow-lg transition-all duration-300 mx-4 md:mx-0">
            <iframe
              className="w-full h-64 md:h-100 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79224.85153473914!2d77.06527153622272!3d28.6514277638802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5567911807%3A0x996e86fe24144daf!2sInstitute%20of%20Information%20Technology%20and%20Management%20(IITM)!5e0!3m2!1sen!2sin!4v1727263090895!5m2!1sen!2sin"
              loading="lazy"
              title="IITM Janakpuri Location"
            ></iframe>
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 md:mt-12 w-full md:w-full max-w-6xl relative z-10 px-4 md:px-0">

            {/* Email */}
            <div className="flex-1 border border-[#CEAC81]/20 bg-white shadow-md rounded-3xl flex items-center gap-6 p-7 hover:border-[#CEAC81]/40 hover:bg-[#CEAC81]/10 hover:shadow-lg transition-all duration-300 group cursor-default">
              <div className="h-16 w-16 border border-[#CEAC81]/30 rounded-2xl bg-[#1F3A5F]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                <span className="text-[#1F3A5F] text-2xl select-none">✉</span>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide text-[#1F3A5F]">Email</p>
                <p className="text-gray-400 text-sm mt-1">internware@iitm.ac.in</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex-1 border border-[#CEAC81]/20 bg-white shadow-md rounded-3xl flex items-center gap-6 p-7 hover:border-[#CEAC81]/40 hover:bg-[#CEAC81]/10 hover:shadow-lg transition-all duration-300 group cursor-default">
              <div className="h-16 w-16 border border-[#CEAC81]/30 rounded-2xl bg-[#1F3A5F]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                <span className="text-[#1F3A5F] text-2xl select-none">📞</span>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide text-[#1F3A5F]">Phone</p>
                <p className="text-gray-400 text-sm mt-1">+91 99999 99999</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactLocation;