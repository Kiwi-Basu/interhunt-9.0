import { useState } from "react";

const tier1Companies = ["Google", "Microsoft", "Amazon"];
const tier2Companies = ["Zomato", "Swiggy", "Flipkart", "Meesho"];
const tier3Companies = ["Startup A", "Startup B", "Startup C", "Startup D"];

const ApplyCompanies = () => {
  const [tier1, setTier1] = useState<string | null>(null);
  const [tier2, setTier2] = useState<string[]>([]);
  const [tier3, setTier3] = useState<string[]>([]);

  // handlers
  const handleTier1 = (company: string) => {
    setTier1(company);
  };

  const handleTier2 = (company: string) => {
    if (tier2.includes(company)) {
      setTier2(tier2.filter(c => c !== company));
    } else {
      if (tier2.length < 2) {
        setTier2([...tier2, company]);
      }
    }
  };

  const handleTier3 = (company: string) => {
    if (tier3.includes(company)) {
      setTier3(tier3.filter(c => c !== company));
    } else {
      if (tier3.length < 3) {
        setTier3([...tier3, company]);
      }
    }
  };

  const handleSubmit = () => {
    // console.log({
    //   tier1,
    //   tier2,
    //   tier3
    // });

    localStorage.setItem("isApplied", "true");
    alert("Applications submitted!");
  };

  const Card = (
    company: string,
    selected: boolean,
    onClick: () => void
  ) => (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 md:p-5 w-[45%] sm:w-[30%] md:w-50 h-40 md:h-50 rounded-2xl border flex flex-col items-center justify-center transition-all duration-200 shadow-sm
        ${selected
          ? "bg-[#1F3A5F] text-white border-[#1F3A5F]"
          : "bg-white hover:shadow-md border-gray-200"
        }`}
    >
      <img src="src/assets/react.svg" className="h-30 border w-30 rounded-md mb-2" alt="" />
      <p className="font-semibold text-lg">{company}</p>
    </div>
  );

  return (
    <section className="min-h-screen p-6 py-10 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] space-y-8 md:space-y-10">

      <h1 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] text-center">
        Apply to Companies
      </h1>

      {/* TIER 1 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1F3A5F]">
          Tier 1 (Select 1)
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-10">
          {tier1Companies.map(company =>
            Card(company, tier1 === company, () => handleTier1(company))
          )}
        </div>
      </div>

      {/* TIER 2 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1F3A5F]">
          Tier 2 (Select 2)
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-10">
          {tier2Companies.map(company =>
            Card(company, tier2.includes(company), () => handleTier2(company))
          )}
        </div>

        <p className="text-sm text-gray-500">
          Selected: {tier2.length}/2
        </p>
      </div>

      {/* TIER 3 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1F3A5F]">
          Tier 3 (Select 3)
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-10">
          {tier3Companies.map(company =>
            Card(company, tier3.includes(company), () => handleTier3(company))
          )}
        </div>

        <p className="text-sm text-gray-500">
          Selected: {tier3.length}/3
        </p>
      </div>

      {/* SUBMIT */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          disabled={!tier1 || tier2.length !== 2 || tier3.length !== 3}
          className="px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto rounded-xl bg-linear-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] font-bold shadow-lg hover:scale-105 transition disabled:opacity-50"
        >
          Submit Applications
        </button>
      </div>

    </section>
  );
};

export default ApplyCompanies;