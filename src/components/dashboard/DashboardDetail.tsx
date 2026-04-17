import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isPaid, setIsPaid] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    setIsPaid(localStorage.getItem("isPaid") === "true");
    setIsProfileComplete(localStorage.getItem("isProfileComplete") === "true");
    setIsApplied(localStorage.getItem("isApplied") === "true");
  }, []);

  return (
    <>
      <section id="dashboard">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 py-10 md:py-20 gap-8 md:gap-14 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">

          {/* HEADER */}
          <div className="w-full max-w-5xl bg-white border border-[#CEAC81]/20 p-5 md:p-6 rounded-2xl shadow-sm text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1F3A5F]">
              Welcome back, <span className="text-[#CEAC81]">User</span>!
            </h1>
            <p className="text-gray-500 mt-2 md:mt-1 text-sm md:text-base">
              Follow the steps below to start your internship application process.
            </p>
          </div>

          {/* STEPS */}
          <div className="w-full max-w-5xl space-y-4 md:space-y-5">

            {/* STEP 1 */}
            <div className={`p-6 rounded-2xl border shadow-sm transition ${
              isPaid
                ? "bg-[#1F3A5F]/5 border-[#1F3A5F]/30"
                : "bg-white border-gray-200"
            }`}>
              <h2 className="font-bold text-[#1F3A5F] text-lg">1. Register</h2>
              <p className="text-gray-500">Payment has been received.</p>

              <button
                disabled
                className="mt-3 px-4 py-1 rounded-full text-sm bg-gray-200 text-gray-600"
              >
                {isPaid ? "Registration Successful" : "Pending"}
              </button>
            </div>

            {/* STEP 2 */}
            <div className={`p-6 rounded-2xl border shadow-sm transition ${
              isProfileComplete
                ? "bg-[#1F3A5F]/5 border-[#1F3A5F]/30"
                : "bg-white border-gray-200"
            }`}>
              <h2 className="font-bold text-[#1F3A5F] text-lg">
                2. Complete Your Profile
              </h2>
              <p className="text-gray-500">Upload resume to proceed.</p>

              {!isProfileComplete && (
                <button
                  onClick={() => navigate("/apply/upload")}
                  className="mt-3 px-5 py-2 rounded-full font-medium text-[#1F3A5F]
                  border border-[#CEAC81]
                  hover:bg-[#CEAC81] hover:text-[#1F3A5F]
                  transition-all duration-300"
                >
                  Complete Profile
                </button>
              )}
            </div>

            {/* STEP 3 */}
            <div className={`p-6 rounded-2xl border shadow-sm transition ${
              isApplied
                ? "bg-[#1F3A5F]/5 border-[#1F3A5F]/30"
                : "bg-white border-gray-200"
            } ${!isProfileComplete ? "opacity-60" : ""}`}>
              <h2 className="font-bold text-[#1F3A5F] text-lg">
                3. Apply to Companies
              </h2>
              <p className="text-gray-500">Complete profile to unlock.</p>

              {isProfileComplete && !isApplied && (
                <button
                  onClick={() => navigate("/companies")}
                  className="mt-3 px-5 py-2 rounded-full font-medium text-[#1F3A5F]
                  bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F]
                  shadow-md hover:shadow-lg hover:scale-105
                  transition-all duration-300"
                >
                  Browse Companies
                </button>
              )}

              {isApplied && (
                <button
                  disabled
                  className="mt-3 px-4 py-1 rounded-full bg-gray-200 text-gray-600"
                >
                  Application Submitted
                </button>
              )}
            </div>

          </div>

          {/* STATS */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

            <div className="bg-white border border-[#CEAC81]/20 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Selected Companies</p>
              <p className="text-2xl font-bold text-[#1F3A5F] mt-1">0</p>
            </div>

            <div className="bg-white border border-[#CEAC81]/20 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Application Status</p>
              <p className="text-2xl font-bold text-[#1F3A5F] mt-1">
                {isApplied ? "Submitted" : "Not Started"}
              </p>
            </div>

            <div className="bg-white border border-[#CEAC81]/20 p-5 rounded-2xl shadow-sm">
              <p className="text-gray-500 text-sm">Profile Completion</p>
              <p className="text-2xl font-bold text-[#1F3A5F] mt-1">
                {isProfileComplete ? "100%" : "0%"}
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Dashboard;