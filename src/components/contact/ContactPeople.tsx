const ContactPeople = () => {
  return (
    <>
      <section id="Contact-People">
        <div className="min-h-screen flex flex-col items-center p-20 bg-linear-to-br from-[#f6f0f0] via-[#e8dede] to-[#d6cfcf]">

          <p className="text-6xl mb-16 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Contact Us
          </p>

          <div className="w-5xl flex justify-between items-end">

            {/* Card 1 */}
            <div className="border border-white/30 bg-white/20 backdrop-blur-xl shadow-xl rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-55 transition-all duration-300 hover:scale-105">
              <div className="h-24 w-24 rounded-full border-2 border-gray-400 bg-white/50"></div>

              <p className="text-xl font-semibold text-gray-800">Name</p>
              <p className="text-gray-600">+91 999999999</p>

              <button className="border border-gray-400 px-4 py-1 rounded-lg bg-white/60 hover:bg-white hover:cursor-pointer transition">
                Linkedin
              </button>
            </div>

            {/* Card 2 (highlighted center) */}
            <div className="border border-white/40 bg-white/30 backdrop-blur-xl shadow-2xl rounded-3xl flex flex-col gap-5 items-center p-10 h-105 w-60 scale-110 transition-all duration-300 hover:scale-115">
              <div className="h-28 w-28 rounded-full border-2 border-gray-500 bg-white/60"></div>

              <p className="text-2xl font-bold text-gray-900">Name</p>
              <p className="text-gray-700">+91 999999999</p>

              <button className="border border-gray-500 px-5 py-1 rounded-lg bg-white/70 hover:bg-white hover:cursor-pointer transition font-medium">
                Linkedin
              </button>
            </div>

            {/* Card 3 */}
            <div className="border border-white/30 bg-white/20 backdrop-blur-xl shadow-xl rounded-3xl flex flex-col gap-5 items-center p-8 h-90 w-55 transition-all duration-300 hover:scale-105">
              <div className="h-24 w-24 rounded-full border-2 border-gray-400 bg-white/50"></div>

              <p className="text-xl font-semibold text-gray-800">Name</p>
              <p className="text-gray-600">+91 999999999</p>

              <button className="border border-gray-400 px-4 py-1 rounded-lg bg-white/60 hover:bg-white hover:cursor-pointer transition">
                Linkedin
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default ContactPeople