import { useState } from "react";
import DainikBhaskar from "../../assets/Sponsor/Previous Sponsor/Dainik Jagran@4x.png";

const tier1Companies = [
  { name: "Company A", img: DainikBhaskar },
  { name: "Company B", img: DainikBhaskar }
];

const tier2Companies = [
  { name: "Company A", img: DainikBhaskar },
  { name: "Company B", img: DainikBhaskar }
];

const tier3Companies = [
  { name: "Company A", img: DainikBhaskar },
  { name: "Company B", img: DainikBhaskar },
  { name: "Company C", img: DainikBhaskar },
  { name: "Company D", img: DainikBhaskar },
];

const ApplyCompanies = () => {
  const [tier1, setTier1] = useState<string | null>(null);
  const [tier2, setTier2] = useState<string | null>(null);
  const [tier3, setTier3] = useState<string[]>([]);

  // handlers
  const handleTier1 = (company: string) => {
    setTier1(prev => (prev === company ? null : company)); 
  };

  const handleTier2 = (company: string) => {
    setTier2(prev => (prev === company ? null : company)); 
  }

  const handleTier3 = (company: string) => {
    if (tier3.includes(company)) {
      setTier3(tier3.filter(c => c !== company));
    } else if (tier3.length < 2) {
      setTier3([...tier3, company]);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("isApplied", "true");
    alert("Applications submitted!");
  };

  return (
    <section className="min-h-screen p-6 py-10 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] space-y-10">

      <h1 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] text-center">
        Apply to Companies
      </h1>

      {/* ================= TIER 1 ================= */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 1 (Select 1)
        </h2>

        <div className="flex flex-wrap gap-8">
          {tier1Companies.map((company, idx) => {
            const selected = tier1 === company.name;

            return (
              <div
                key={idx}
                onClick={() => handleTier1(company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img src={company.img} className="h-12" />
                </div>

                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300  border-black/10 text-sm"
                    >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTier1(company.name);
                    }}
                    className={`flex-1 rounded-xl py-2 text-sm font-bold cursor-pointer hover:scale-105 transition-all duration-300
                      ${selected
                        ? "bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F]"
                        : "bg-gradient-to-r from-slate-500 to-gray-400 text-white"
                      }`}
                  >
                    {selected ? "✓ Selected" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[#1F3A5F] font-semibold">
          Selected: {tier1 ? 1 : 0}/1
        </p>
      </div>

      {/* ================= TIER 2 ================= */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 2 (Select 2)
        </h2>

        <div className="flex flex-wrap gap-8">
          {tier2Companies.map((company, idx) => {
            const selected = tier2 === company.name;

            return (
              <div
                key={idx}
                onClick={() => handleTier2(company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img src={company.img} className="h-12" />
                </div>

                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300  border-black/10 text-sm"
                  >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTier2(company.name);
                    }}
                    className={`flex-1 rounded-xl py-2 text-sm font-bold cursor-pointer hover:scale-105 transition-all duration-300
                      ${selected
                        ? "bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F]"
                        : "bg-gradient-to-r from-slate-500 to-gray-400 text-white"
                      }`}
                  >
                    {selected ? "✓ Selected" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[#1F3A5F] font-semibold">
          Selected: {tier1 ? 1 : 0}/1
        </p>
      </div>

      {/* ================= TIER 3 ================= */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 3 (Select 3)
        </h2>

        <div className="flex flex-wrap gap-8">
          {tier3Companies.map((company, idx) => {
            const selected = tier3.includes(company.name);

            return (
              <div
                key={idx}
                onClick={() => handleTier3(company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img src={company.img} className="h-12" />
                </div>

                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300  border-black/10 text-sm"
                  >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTier3(company.name);
                    }}
                    className={`flex-1 rounded-xl py-2 text-sm font-bold cursor-pointer hover:scale-105 transition-all duration-300
                      ${selected
                        ? "bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F]"
                        : "bg-gradient-to-r from-slate-500 to-gray-400 text-white"
                      }`}
                  >
                    {selected ? "✓ Selected" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[#1F3A5F] font-semibold">
          Selected: {tier3.length}/2
        </p>
      </div>

      {/* SUBMIT */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={!tier1 || !tier2 || tier3.length !== 2 }
          className="px-10 py-3 rounded-xl cursor-pointer bg-linear-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] font-bold shadow-lg hover:scale-105 transition disabled:opacity-50"
        >
          Submit Applications
        </button>
      </div>

    </section>
  );
};

export default ApplyCompanies;