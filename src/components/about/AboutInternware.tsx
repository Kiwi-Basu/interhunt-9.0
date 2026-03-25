const AboutInternware = () => {
  return (
    <>
      <section id="About-Internware">
        <div className="min-h-screen p-20 flex flex-col items-center">
          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">About InternWare</p>
          
          <div className="w-6xl flex flex-col gap-10">
            <p className="text-xl text-center">
              InternWare is a student-led organization at IITM, Janakpuri dedicated to bridging the gap between academic learning and industry requirements. We focus on providing students with practical exposure and opportunities to enhance their skills through internships, workshops, and industry collaborations.
            </p>
            <p className="text-xl text-center">
              Founded with a vision to empower students with real-world experience, InternWare has grown to become a platform that connects talented students with leading companies across various sectors. Our flagship event, InternHunt, is a testament to our commitment to creating meaningful opportunities for students.
            </p>

            <div className="flex mt-10 gap-10">

              <div className="h-35 w-100 border rounded-2xl border-black/10 shadow-xl flex items-center p-5 gap-10">
                <div className="border h-25 w-25 rounded-2xl border-black/20">
                  {/* img */}
                </div>
                
                <p className="text-2xl">
                  9+ Years
                </p>

              </div>
              <div className="h-35 w-100 border rounded-2xl border-black/10 shadow-xl flex items-center p-5 gap-10">
                <div className="border h-25 w-25 rounded-2xl border-black/20">
                  {/* img */}
                </div>
                
                <p className="text-2xl">
                  16+ Members
                </p>

              </div>
              <div className="h-35 w-100 border rounded-2xl border-black/10 shadow-xl flex items-center p-5 gap-10">
                <div className="border h-25 w-25 rounded-2xl border-black/20">
                  {/* img */}
                </div>
                
                <p className="text-2xl">
                  50+ Events
                </p>

              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default AboutInternware