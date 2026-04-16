import { useState } from "react";

const Onboarding = () => {
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");

  return (
    <>
      <section id="Onboarding">
        <div className="min-h-screen p-10 flex items-center justify-center bg-linear-to-br from-gray-100 via-gray-200 to-gray-300">

          <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-10 flex flex-col gap-8">

            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-3xl font-extrabold text-gray-800 tracking-wide">
                Create your account
              </p>
              <p className="text-gray-600 text-sm">
                Complete your profile to continue
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6">

              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {/* College */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">College / Institution</label>
                <select
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="IITM">IITM</option>
                  <option value="IINTM">IINTM</option>
                  <option value="ICE">ICE (MDU)</option>
                  <option value="OTHER">Other College</option>
                </select>
              </div>

              {/* College Name */}
              {college === "OTHER" && (
                <div className="flex flex-col gap-1 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700">College Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Course</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="Bcom">B.Com</option>
                    <option value="BA(JMC)">BA (JMC)</option>
                    <option value="BTech">B.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="OTHER">Other Course</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Academic Year</label>
                  <select
                    className="border  border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="" disabled selected>
                      Select...
                    </option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

              </div>

              {course === "OTHER" && (
                <div className="flex flex-col gap-1 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700">Course Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              )}

              <button className="mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
                Register
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onboarding;