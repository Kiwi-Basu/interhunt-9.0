const ProfileDetail = () => {
  return (
    <>
      <section id="Profile-Detail">
        <div className="min-h-screen bg-gray-50 p-20 flex flex-col items-center  overflow-hidden">

          <p className="text-6xl mb-10 leading-normal font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg ">
            My Profile
          </p>

          <div className="w-250 p-8 flex flex-col gap-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-200 relative z-10">

            <div className="flex flex-col gap-5 border border-gray-100 shadow-md p-7 rounded-2xl bg-gray-50">

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl border border-violet-100 bg-violet-50 flex items-center justify-center shrink-0">
                  <span className="text-violet-500 text-base select-none">📄</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">Resume</p>
              </div>

              <p className="text-gray-400 text-sm">Upload Your Resume (PDF Only)</p>

              <div className="bg-green-50 px-5 py-4 rounded-xl border border-green-100 flex items-center gap-3">
                <span className="text-green-500 text-lg select-none">✓</span>
                <p className="text-green-600 font-semibold tracking-wide text-sm">
                  Resume Uploaded Successfully
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-linear-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl hover:scale-[0.97] hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg shadow-violet-200 cursor-pointer">
                  Upload Resume
                </button>
                <button className="flex-1 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all duration-200 cursor-pointer text-sm font-medium bg-white">
                  View Resume
                </button>
              </div>

            </div>

            <div className="flex flex-col gap-5 border border-gray-100 p-7 rounded-2xl shadow-md bg-gray-50">

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl border border-pink-100 bg-pink-50 flex items-center justify-center shrink-0">
                  <span className="text-pink-500 text-base select-none">👤</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">Personal Information</p>
              </div>

              <div className="flex flex-wrap gap-4">

                <div className="flex flex-col w-[32%] bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Name</span>
                  <span className="font-semibold text-gray-900 text-sm">Sunish Suresh</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Enrollment</span>
                  <span className="font-semibold text-gray-900 text-sm">04721102024</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Email</span>
                  <span className="font-semibold text-gray-900 text-sm">sunishjune8@gmail.com</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Course</span>
                  <span className="font-semibold text-gray-900 text-sm">BCA</span>
                </div>

                <div className="flex flex-col w-[32%] bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Year</span>
                  <span className="font-semibold text-gray-900 text-sm">2nd Year</span>
                </div>

                <div className="flex flex-col w-full bg-white border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">College</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    Institute of Information Technology and Management
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetail;