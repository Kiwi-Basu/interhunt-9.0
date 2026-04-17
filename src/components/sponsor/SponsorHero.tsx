const SponsorHero = () => {
  return (
    <>
      <section id="hero">
        <div className="min-h-screen relative flex items-center justify-center flex-col gap-10 px-4 md:px-0 overflow-hidden text-center">
          {/* top right*/}
          <div className="absolute top-12 left-0 h-25 w-50 rounded-r-4xl bg-[#CEAC81]"></div>
          <div className="absolute top-0 left-0 h-20 w-80 rounded-br-4xl bg-[#0F1E3D]"></div>
          {/* bottom left*/}
          <div className="absolute bottom-0 right-0 h-20 w-80 rounded-tl-4xl bg-[#0F1E3D]"></div>
          <div className="absolute bottom-0 right-0 h-30 w-50 rounded-tl-4xl bg-[#CEAC81]"></div>

          {/* top left */}
          <div className="absolute right-0 top-0 h-30 w-50 rounded-bl-4xl bg-[#CEAC81]"></div>

          {/* squares */}
          <div className="absolute opacity-20 ring-10 ring-black/10  h-50 w-50 top-70 left-20  rounded-2xl z-0 ">
            <div className="absolute  ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl">
            </div>
          </div>
          
          <div className="absolute opacity-20 ring-10 ring-black/10  h-50 w-50 bottom-40 right-20  rounded-2xl z-0 ">
            <div className="absolute  ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl">
            </div>
          </div>

          <div className="absolute opacity-20 ring-10 h-50 w-50 top-20 right-110 ring-black/10 rounded-2xl z-0 ">
            <div className="absolute  ring-10 h-50 w-50 top-10 left-15 ring-black/10 rounded-2xl">
            </div>
          </div>

          <div className="z-10">
            <p className="text-5xl md:text-6xl font-extrabold text-[#1F3A5F]">Sponsor Us</p>
          </div>

          <p className="text-lg md:text-2xl font-medium text-gray-600 px-4 z-10">Partner with us to connect with top talent and showcase your brand</p>

          <div className="z-10 w-full px-4 sm:w-auto sm:px-0">
            <button className="w-full px-5 py-3 md:py-2 rounded-full bg-[#CEAC81] text-lg md:text-2xl text-white font-medium cursor-pointer shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">Download Sponsor Proposal</button>
          </div>

          
        </div>    
      </section>
    </>
  )
}

export default SponsorHero