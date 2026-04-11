const ContactPeople = () => {
  return (
    <>
      <section id="Contact-People">
        <div className="min-h-screen flex flex-col items-center p-20 bg-white relative overflow-hidden">

          <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-80 pointer-events-none"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-50 rounded-full blur-3xl opacity-80 pointer-events-none"></div>

          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Contact Us
          </p>

          <div className="flex justify-between items-end gap-8 relative z-10">
            <div className="border border-gray-100 bg-white shadow-xl shadow-gray-100 rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-56 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-violet-100 cursor-default">
              <div className="h-24 w-24 rounded-full border-2 border-violet-100 bg-violet-50 shadow-sm mt-2"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg font-semibold text-gray-900">Name</p>
                <p className="text-gray-400 text-sm">+91 999999999</p>
              </div>
              <button className="border border-gray-200 px-5 py-2 rounded-xl bg-gray-50 hover:bg-violet-50 hover:border-violet-200 text-gray-500 hover:text-violet-600 cursor-pointer transition-all text-sm font-medium mt-auto">
                LinkedIn ↗
              </button>
            </div>

            {/* Card 2 — Center (highlighted) */}
            <div className="relative border border-violet-200 bg-violet-50 shadow-2xl shadow-violet-100 rounded-3xl flex flex-col gap-5 items-center p-10 h-108 w-64 transition-all duration-300 hover:scale-105 hover:shadow-violet-200 cursor-default">
              <div className="h-28 w-28 rounded-full border-2 border-violet-300 bg-white shadow-md mt-4"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xl font-bold text-gray-900">Name</p>
                <p className="text-gray-500 text-sm">+91 999999999</p>
              </div>
              <button className="border border-violet-300 px-6 py-2 rounded-xl bg-white hover:bg-violet-100 text-violet-600 hover:text-violet-700 cursor-pointer transition-all text-sm font-semibold mt-auto shadow-sm">
                LinkedIn ↗
              </button>
            </div>

            {/* Card 3 — Right */}
            <div className="border border-gray-100 bg-white shadow-xl shadow-gray-100 rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-56 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-pink-100 cursor-default">
              <div className="h-24 w-24 rounded-full border-2 border-pink-100 bg-pink-50 shadow-sm mt-2"></div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg font-semibold text-gray-900">Name</p>
                <p className="text-gray-400 text-sm">+91 999999999</p>
              </div>
              <button className="border border-gray-200 px-5 py-2 rounded-xl bg-gray-50 hover:bg-pink-50 hover:border-pink-200 text-gray-500 hover:text-pink-600 cursor-pointer transition-all text-sm font-medium mt-auto">
                LinkedIn ↗
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPeople;