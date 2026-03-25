const ProfileDetail = () => {
  return (
    <>
      <section id="Profile-Detail">
        <div className="min-h-screen bg-linear-to-br from-[#f9f0f0] via-[#efe4e4] to-[#e3dada] p-20 flex flex-col items-center"> 
          
          <div className="w-250 p-8 flex flex-col gap-12 border mt-10 border-black/10 rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl">
            
            {/* Resume Upload Section */}
            <div className="flex flex-col gap-6 border border-black/10 shadow-lg p-6 rounded-2xl bg-white/40 backdrop-blur-md">
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg border bg-white/60 shadow-inner"></div>
                <p className="text-2xl font-semibold text-gray-800">Resume</p>
              </div>

              <p className="text-gray-600">Upload Your Resume (PDF Only)</p>

              <div className="bg-green-400/80 px-4 py-3 rounded-xl border border-black/10 shadow-inner">
                <p className="text-white font-medium tracking-wide">
                  Resume Uploaded Successfully
                </p>
              </div>
  
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white py-3 rounded-xl hover:scale-95 transition duration-200">
                  Upload Resume 
                </button>
                <button className="flex-1 border border-black/20 py-3 rounded-xl hover:bg-black hover:text-white transition duration-200">
                  View Resume 
                </button>
              </div>

            </div>
            
            {/* Personal Information */}
            <div className="flex flex-col gap-6 border border-black/10 p-6 rounded-2xl shadow-lg bg-white/40 backdrop-blur-md">
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg border bg-white/60 shadow-inner"></div>
                <p className="text-2xl font-semibold text-gray-800">Personal Information</p>
              </div>
              
              <div className="flex flex-wrap gap-4">

                <div className="flex flex-col w-[32%] bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">Name</span>
                  <span className="font-medium">Sunish Suresh</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">Enrollment</span>
                  <span className="font-medium">04721102024</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">Email</span>
                  <span className="font-medium">sunishjune8@gmail.com</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">Course</span>
                  <span className="font-medium">BCA</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">Year</span>
                  <span className="font-medium">2nd Year</span>
                </div>

                <div className="flex flex-col w-full bg-white/60 border border-black/10 rounded-lg p-3">
                  <span className="text-xs text-gray-500">College</span>
                  <span className="font-medium">
                    Institute of Information Technology and Management
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default ProfileDetail