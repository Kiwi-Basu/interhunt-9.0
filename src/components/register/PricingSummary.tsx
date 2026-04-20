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

          <p className="text-3xl font-bold text-[#1F3A5F]">
            ₹{isIITMStudent ? 100 : 120}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;