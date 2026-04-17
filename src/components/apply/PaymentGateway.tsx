const PaymentGateway = () => {

    // logic and last mai dashboard mai chale jayega
  return (
    <section id="Payment">
      <div className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">

        <div className="w-full max-w-xl bg-white border border-[#CEAC81]/20 rounded-3xl shadow-2xl p-10 flex flex-col gap-8 text-center">

          {/* TITLE */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-[#1F3A5F]">
              Unlock Dashboard
            </h1>
            <p className="text-gray-500">
              Complete your registration to access company applications
            </p>
          </div>

          {/* PRICE CARD */}
          <div className="bg-[#1F3A5F]/5 border border-[#1F3A5F]/20 rounded-2xl p-8 flex flex-col gap-3">

            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Registration Fee
            </p>

            <h2 className="text-5xl font-bold text-[#1F3A5F]">
              ₹100
            </h2>

            <p className="text-gray-400 text-sm">
              One-time payment to unlock full dashboard access
            </p>

          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-3 text-left">

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <p className="text-gray-700 text-sm">Access to all companies</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <p className="text-gray-700 text-sm">Apply to multiple companies</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <p className="text-gray-700 text-sm">Track application status</p>
            </div>

          </div>

          {/* BUTTON */}
          <button
            className="mt-4 bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-95 transition-all duration-300 cursor-pointer"
          >
            Pay ₹100 & Continue
          </button>

          {/* NOTE */}
          <p className="text-xs text-gray-400 mt-2">
            Secure payment powered by Cashfree
          </p>

        </div>

      </div>
    </section>
  );
};

export default PaymentGateway;