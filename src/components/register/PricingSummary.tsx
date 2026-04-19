interface Props {
  isIITMStudent: boolean;
}

const PricingSummary = ({ isIITMStudent }: Props) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
        Registration Fee
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 border-2 border-[#CEAC81] bg-[#CEAC81]/10">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold text-[#1F3A5F]">
              {isIITMStudent ? "IITM Group" : "Other Colleges"}
            </h3>
            <span className="bg-[#1F3A5F] text-white text-xs px-3 py-1 rounded-full">
              Your Category
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            {isIITMStudent
              ? "For IITM, IINTM & ICE (MDU) students"
              : "For all other institutions"}
          </p>

          <p className="text-3xl font-bold text-[#1F3A5F]">
            ₹{isIITMStudent ? 100 : 120}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;