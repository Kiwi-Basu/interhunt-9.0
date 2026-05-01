import { useState, useEffect } from "react";
import { internHuntService } from "../services/internHuntService";

const ApplyCompanies = () => {
  const [companies, setCompanies] = useState<{ name: string; tier: string; jobRoles: any[]; _id: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasSelected, setHasSelected] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<{ [key: string]: string[] }>({
    TIER_1: [],
    TIER_2: [],
    TIER_3: []
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch companies from backend
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const [allCompaniesRes, userCompaniesRes] = await Promise.all([
        internHuntService.getAllCompanies(),
        internHuntService.getUserCompanies()
      ]);

      setCompanies(allCompaniesRes.data || []);

      // console.log("=== COMPANIES DEBUG ===");
      // console.log("All companies:", companies);
      // console.log("TIER_1:", companies.filter(c => c.tier === "TIER_1"));
      // console.log("TIER_2:", companies.filter(c => c.tier === "TIER_2"));
      // console.log("TIER_3:", companies.filter(c => c.tier === "TIER_3"));


      // Check if user already selected companies
      if (userCompaniesRes.data?.selectedCompanies?.length > 0) {
        setHasSelected(true);
        const selected: { [key: string]: string[] } = { TIER_1: [], TIER_2: [], TIER_3: [] };
        userCompaniesRes.data.selectedCompanies.forEach((comp: any) => {
          if (selected[comp.tier]) {
            selected[comp.tier].push(comp.name);
          }
        });
        setSelectedCompanies(selected);
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get companies by tier
  const getCompaniesByTier = (tier: string) => {
    return companies.filter(company => company.tier === tier);
  };

  // Handlers for selection
  const handleSelectCompany = (tier: string, companyName: string) => {
    if (hasSelected) return;

    setSelectedCompanies(prev => {
      const current = [...prev[tier]];

      if (current.includes(companyName)) {
        return { ...prev, [tier]: current.filter(c => c !== companyName) };
      } else {
        const limits = { TIER_1: 1, TIER_2: 2, TIER_3: 1 };
        if (current.length >= limits[tier]) {
          alert(`You can only select ${limits[tier]} company from ${tier}`);
          return prev;
        }
        return { ...prev, [tier]: [...current, companyName] };
      }
    });
  };

  const handleSubmit = async () => {
    const allSelected = [...selectedCompanies.TIER_1, ...selectedCompanies.TIER_2, ...selectedCompanies.TIER_3];

    if (allSelected.length === 0) {
      alert("Please select at least one company");
      return;
    }

    setSubmitting(true);
    try {
      const response = await internHuntService.selectCompanies(allSelected);
      if (response.success) {
        alert("Applications submitted successfully!");
        setHasSelected(true);
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to submit applications");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading companies...</div>;
  }

  if (hasSelected) {
    return (
      <section className="min-h-screen p-6 py-10 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-[#1F3A5F] text-center mb-6">
            Your Selected Companies
          </h1>
          <div className="space-y-4">
            {selectedCompanies.TIER_1.map(name => (
              <div key={name} className="border rounded-xl p-4 bg-green-50">
                <p className="font-semibold">{name} (TIER 1)</p>
              </div>
            ))}
            {selectedCompanies.TIER_2.map(name => (
              <div key={name} className="border rounded-xl p-4 bg-green-50">
                <p className="font-semibold">{name} (TIER 2)</p>
              </div>
            ))}
            {selectedCompanies.TIER_3.map(name => (
              <div key={name} className="border rounded-xl p-4 bg-green-50">
                <p className="font-semibold">{name} (TIER 3)</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => window.history.back()}
            className="mt-6 w-full bg-[#1F3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen p-6 py-10 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] text-center">
        Apply to Companies
      </h1>

      {/* TIER 1 */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 1 (Select {1 - selectedCompanies.TIER_1.length} more)
        </h2>
        <div className="flex flex-wrap gap-8">
          {getCompaniesByTier("TIER_1").map((company) => {
            const selected = selectedCompanies.TIER_1.includes(company.name);

            return (
              <div
                key={company._id}
                onClick={() => handleSelectCompany("TIER_1", company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                {/* LOGO */}
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img
                    src={company.img || "/default-logo.png"} // fallback if API has no image
                    className="h-12 object-contain"
                    alt={company.name}
                  />
                </div>

                {/* NAME */}
                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // add modal / redirect here
                    }}
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300 border-black/10 text-sm"
                  >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectCompany("TIER_1", company.name);
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
          Selected: {selectedCompanies.TIER_1.length}/1
        </p>
      </div>

      {/* TIER 2 */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 2 (Select {2 - selectedCompanies.TIER_2.length} more)
        </h2>
        <div className="flex flex-wrap gap-8">
          {getCompaniesByTier("TIER_2").map((company) => {
            const selected = selectedCompanies.TIER_2.includes(company.name);

            return (
              <div
                key={company._id}
                onClick={() => handleSelectCompany("TIER_2", company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                {/* LOGO */}
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img
                    src={company.img || "/default-logo.png"} // fallback if API has no image
                    className="h-12 object-contain"
                    alt={company.name}
                  />
                </div>

                {/* NAME */}
                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // add modal / redirect here
                    }}
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300 border-black/10 text-sm"
                  >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectCompany("TIER_2", company.name);
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
          Selected: {selectedCompanies.TIER_2.length}/2
        </p>
      </div>

      {/* TIER 3 */}
      <div>
        <h2 className="text-xl font-bold text-[#1F3A5F] mb-4">
          Tier 3 (Select {1 - selectedCompanies.TIER_3.length} more)
        </h2>
        <div className="flex flex-wrap gap-8">
          {getCompaniesByTier("TIER_3").map((company) => {
            const selected = selectedCompanies.TIER_3.includes(company.name);

            return (
              <div
                key={company._id}
                onClick={() => handleSelectCompany("TIER_3", company.name)}
                className={`cursor-pointer border rounded-3xl flex flex-col w-full sm:w-72 p-5 gap-4 transition-all duration-300
                  ${selected
                    ? "bg-[#1F3A5F] text-white shadow-xl scale-105"
                    : "bg-white border-slate-200 hover:shadow-xl"
                  }`}
              >
                {/* LOGO */}
                <div className="h-20 w-20 self-center bg-slate-50 rounded-xl flex items-center justify-center">
                  <img
                    src={company.img || "/default-logo.png"} // fallback if API has no image
                    className="h-12 object-contain"
                    alt={company.name}
                  />
                </div>

                {/* NAME */}
                <p className="text-center font-bold text-lg">
                  {company.name}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // add modal / redirect here
                    }}
                    className="flex-1 rounded-xl py-2 text-black bg-white border cursor-pointer hover:scale-95 transition-all duration-300 border-black/10 text-sm"
                  >
                    Know More
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectCompany("TIER_3", company.name);
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
          Selected: {selectedCompanies.TIER_3.length}/1
        </p>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={
            submitting ||
            selectedCompanies.TIER_1.length !== 1 ||
            selectedCompanies.TIER_2.length !== 2 ||
            selectedCompanies.TIER_3.length !== 1
          }
          className="px-10 py-3 rounded-xl cursor-pointer bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] font-bold shadow-lg hover:scale-105 transition disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Applications"}
        </button>
      </div>
    </section>
  );
};

export default ApplyCompanies;