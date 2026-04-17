import { Link } from "react-router";

const Hero = () => {

  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <>
      <section id="hero">
        <div className="min-h-screen relative flex items-center justify-center flex-col ">
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

          <div className="flex flex-col items-center mb-10">
            <div className="text-8xl font-extrabold "><span className="font-rayakan tracking-wider">InternHunt</span> <span className="text-[#1E3B56] font-rayakan tracking-wider">9.0</span>
            </div>
            <p className="text-xl mt-2 font-medium">Where the hunt ends and the career begins</p>
          </div>

          <div className="text-9xl font-bold border mb-10 px-10 py-5 rounded-2xl shadow-lg border-white/20 bg-[#f6f2f2] z-1 ">
            <p>MAY 09,</p>
            <p className="text-center text-[#0F1E3D]">2026</p>
          </div>

          <div className="flex gap-5">
            {user ? (
              <Link to="/company"><button className="px-20 py-3 text-2xl rounded-full font-medium text-[#1F3A5F]  bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Apply for Companies</button></Link>
            ) : (
              <>
                <Link to="/auth"><button className="px-10 w-50 cursor-pointer py-2 text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">Login</button></Link>
                <Link to="/auth"><button className="px-10 w-50 cursor-pointer py-2 text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">Sign Up</button></Link>
              </>
            )}
          </div>

        </div>    
      </section>
    </>
  )
}

export default Hero