const ContactLocation = () => {
  return (
    <>
      <section id="Contact-location">
        <div className="min-h-screen p-20 flex flex-col items-center bg-gray-50 relative overflow-hidden">

          {/* Soft blobs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Locate Us
          </p>


          {/* Map card */}
          <div className="border border-gray-100 p-3 rounded-3xl shadow-2xl shadow-gray-200 bg-white relative z-10 hover:shadow-gray-300 transition-all duration-300">
            <iframe
              className="w-6xl h-100 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79224.85153473914!2d77.06527153622272!3d28.6514277638802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5567911807%3A0x996e86fe24144daf!2sInstitute%20of%20Information%20Technology%20and%20Management%20(IITM)!5e0!3m2!1sen!2sin!4v1727263090895!5m2!1sen!2sin"
              loading="lazy"
              title="IITM Janakpuri Location"
            ></iframe>
          </div>

          {/* Contact info cards */}
          <div className="flex gap-8 mt-12 w-6xl relative z-10">

            <div className="flex-1 border border-violet-100 bg-white shadow-lg shadow-violet-50 rounded-3xl flex items-center gap-6 p-7 hover:border-violet-200 hover:bg-violet-50 hover:shadow-violet-100 hover:shadow-xl transition-all duration-300 group cursor-default">
              <div className="h-16 w-16 border border-violet-100 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-violet-100 transition-all duration-300">
                <span className="text-violet-500 text-2xl select-none">✉</span>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide text-gray-900">Email</p>
                <p className="text-gray-400 text-sm mt-1">internware@iitm.ac.in</p>
              </div>
            </div>

            <div className="flex-1 border border-pink-100 bg-white shadow-lg shadow-pink-50 rounded-3xl flex items-center gap-6 p-7 hover:border-pink-200 hover:bg-pink-50 hover:shadow-pink-100 hover:shadow-xl transition-all duration-300 group cursor-default">
              <div className="h-16 w-16 border border-pink-100 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-100 transition-all duration-300">
                <span className="text-pink-500 text-2xl select-none">📞</span>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide text-gray-900">Phone</p>
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