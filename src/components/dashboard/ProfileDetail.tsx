import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const ProfileDetail = () => {

  const { user } = useAuth();

  const navigate = useNavigate();


  return (
    <>
      <section id="Profile-Detail">
        <div className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] p-6 md:p-20 flex flex-col items-center overflow-hidden">

          <p className="text-4xl md:text-6xl mb-6 md:mb-10 leading-normal font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg text-center">
            My Profile
          </p>

          <div className="w-full max-w-5xl md:w-250 p-6 md:p-8 flex flex-col gap-6 md:gap-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-200 relative z-10 m-4 md:m-0">

            {/* ================= PERSONAL INFO ================= */}
            <div className="flex flex-col gap-4 md:gap-5 border border-gray-100 p-5 md:p-7 rounded-2xl shadow-md bg-gray-50">

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl border border-pink-100 bg-pink-50 flex items-center justify-center shrink-0">
                  <span className="text-pink-500 text-base">👤</span>
                </div>
                <p className="text-xl md:text-2xl font-bold text-gray-900">Personal Information</p>
              </div>

              <div className="flex flex-wrap gap-4">

                <div className="flex flex-col w-full sm:w-[48%] md:w-[32%] bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">Name</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    {user?.name || "Not provided"}
                  </span>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[32%] bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">Phone</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    {user?.phoneNumber || "Not provided"}
                  </span>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[32%] bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">Email</span>
                  <span className="font-semibold text-gray-900 text-sm">

                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[32%] bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">Course</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    {user?.course || "Not provided"}
                  </span>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[32%] bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">Year</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    {user?.year || "Not provided"}
                  </span>
                </div>

                <div className="flex flex-col w-full bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-xs text-gray-400 mb-1.5">College</span>
                  <span className="font-semibold text-gray-900 text-sm">
                    {user?.college || "Not provided"}
                  </span>
                </div>

              </div>

            </div>

            {/* OPTIONAL BUTTON (if you want quick access) */}
            <button
              onClick={() => navigate("/apply/payment")}
              className="mt-4 px-6 py-3 rounded-xl bg-[#1F3A5F] text-white font-medium hover:scale-105 transition"
            >
              Apply For Companies
            </button>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetail;