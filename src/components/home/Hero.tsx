const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="min-h-screen relative flex items-center justify-center flex-col gap-10">
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

          <div className="text-6xl font-extrabold "><span className="font-rayakan tracking-wider">InternHunt</span> <span className="text-[#1E3B56] font-rayakan tracking-wider">9.0</span>
            <p className="text-xl mt-2 font-medium">Where the hunt ends and the career begins</p>
          </div>

          <div className="text-9xl font-bold border px-10 py-5 rounded-2xl shadow-xl border-black/20 bg-[#e6e4e4d2] z-1 ">
            <p>MAY 09,</p>
            <p className="text-center text-[#0F1E3D]">2026</p>
          </div>

          <div className="flex gap-5">
            <button className="border w-30 px-4 py-2 rounded-full shadow-2xl border-black/20 hover:shadow-black/20 cursor-pointer hover:scale-105">Login</button>
            <button className="border w-30 px-4 py-2 rounded-full shadow-2xl border-black/20 hover:shadow-black/20 cursor-pointer hover:scale-105">Sign Up</button>
          </div>

        </div>    
      </section>
    </>
  )
}

export default Hero