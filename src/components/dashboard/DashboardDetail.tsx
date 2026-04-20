import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { Rocket } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isRegistered } = useAuth();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#eef2f7] via-white to-[#eef2f7] flex flex-col items-center px-4 py-10">

      {/* HEADER */}
      <div className="w-full max-w-4xl bg-white border border-[#CEAC81]/20 rounded-2xl p-6 shadow-sm mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1F3A5F]">
          Welcome back, User 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Follow the steps below to start your internship application process.
        </p>
      </div>

      {/* STEPS CONTAINER */}
      <div className="w-full max-w-4xl space-y-5">

        {/* STEP 1 - PAYMENT */}
        <div
          className={`p-6 rounded-2xl border shadow-sm transition ${
            isRegistered
              ? "bg-green-50 border-green-200"
              : "bg-white border-gray-200"
          }`}
        >
          <h2 className="font-semibold text-[#1F3A5F] text-lg">
            1. Register (Payment)
          </h2>

          <p className="text-gray-500 mt-1">
            {isRegistered
              ? "Payment completed successfully."
              : "Complete payment to continue."}
          </p>

          <button
            onClick={() => navigate("/apply/payment")}
            disabled={isRegistered}
            className={`mt-4 px-5 py-2 rounded-full text-sm font-medium transition ${
              isRegistered
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] hover:scale-105"
            }`}
          >
            {isRegistered ? "Completed" : "Go to Payment"}
          </button>
        </div>

        {/* STEP 2 - COMPANIES (LOCKED) */}
        <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm opacity-80 cursor-not-allowed">
          <h2 className="font-semibold text-[#1F3A5F] text-lg">
            2. Apply to Companies
          </h2>

          <p className="text-gray-500 mt-1">
            Company selection starting soon <Rocket />
          </p>

          {/* OLD BUTTON (COMMENTED OUT) */}
          {/*
          <button
            onClick={() => navigate("/companies")}
            disabled={!isRegistered}
            className={`mt-4 px-5 py-2 rounded-full text-sm font-medium transition ${
              !isRegistered
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] hover:scale-105"
            }`}
          >
            Browse Companies
          </button>
          */}

          {/* CURRENT LOCKED BUTTON */}
          <button
            disabled
            className="mt-4 px-5 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-500 cursor-not-allowed"
          >
            Coming Soon
          </button>

          {/* OPTIONAL BADGE */}
          <span className="inline-block mt-3 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
            Upcoming Feature
          </span>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;