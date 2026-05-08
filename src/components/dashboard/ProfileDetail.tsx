import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { Star, Rocket, Target, Building, User } from "lucide-react";
import { useEffect, useState } from "react";
import { internHuntService } from "../services/internHuntService"

interface TierCompany { companyId?: string; companyName: string; _id?: string }
interface CompaniesByTier { tier1: TierCompany[]; tier2: TierCompany[]; tier3: TierCompany[] }

const ProfileDetail = () => {

  const { user, hasSelected } = useAuth();
  const navigate = useNavigate();
  const [selectedCompanies, setSelectedCompanies] = useState<CompaniesByTier>({ tier1: [], tier2: [], tier3: [] });

  useEffect(() => {
    if (!hasSelected) return;  // BUG-009: skip API call for users who haven't selected
    internHuntService.getUserCompanies().then(res => {
      const raw = res.selectedCompanies;
      if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
        setSelectedCompanies({ tier1: raw.tier1 || [], tier2: raw.tier2 || [], tier3: raw.tier3 || [] });
      }
    }).catch(err => console.error(err));
  }, [hasSelected]);


  // const fetchSelectedCompanies = async () => {
  //   try {
  //     const response = await internHuntService.getUserCompanies();
  //     console.log("Selected companies:", response.data?.selectedCompanies);
  //     setSelectedCompanies(response.data?.selectedCompanies || []);
  //   } catch (error) {
  //     console.error("Error fetching selected companies:", error);
  //   }
  // };
  return (
    <>
      <section id="Profile-Detail">
        <div className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] p-6 md:p-20 flex flex-col items-center overflow-hidden">

          <p className="text-4xl md:text-6xl mb-6 md:mb-10 leading-normal font-extrabold tracking-widest text-[#1F3A5F] text-center">
            My <span className="text-[#CEAC81] ">Profile</span>
          </p>

          <div className="w-full max-w-5xl md:w-250 p-6 md:p-8 flex flex-col gap-6 md:gap-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-200 relative z-10 m-4 md:m-0">

            {/* ================= PERSONAL INFO ================= */}
            <div className="flex flex-col gap-4 md:gap-5 border border-gray-100 p-5 md:p-7 rounded-2xl shadow-md bg-gray-50">

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl border border-pink-100 bg-pink-50 flex items-center justify-center shrink-0">
                  <User className="text-pink-500 text-base" />
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
                    {user?.email || "Not provided"}
                  </span>
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

            <button
              onClick={() => navigate("/apply/companies")}
              className="mt-4 px-6 py-3 rounded-xl bg-[#1F3A5F] text-white font-medium hover:scale-105 transition cursor-pointer"
            >
              {hasSelected ? "View Selected Companies →" : "Apply For Companies →"}
            </button>
            {/* <button
              disabled
              onClick={() => navigate("/apply/companies")}
              className="mt-4 px-6 py-3 rounded-xl bg-[#1F3A5F] text-white font-medium cursor-not-allowed"
            >
              {"Company Selection Closed"}
            </button> */}

          </div>

          {/* SELECTED COMPANIES */}
          {hasSelected ? (
            <>
              <p className="text-4xl md:text-6xl mb-6 md:mb-10 leading-normal font-extrabold tracking-widest text-[#1F3A5F] text-center">
                Selected <span className="text-[#CEAC81] ">Companies</span>
              </p>
              <div className="w-full   max-w-5xl md:w-250 p-6 md:p-8 flex flex-col gap-6 md:gap-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-200 relative z-10 m-4 md:m-0">
                <div className="flex flex-col gap-4 md:gap-5 border border-gray-100 p-5 md:p-7 rounded-2xl shadow-md bg-gray-50">

                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0 shadow-sm">
                      <Building className="text-blue-500 text-base" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">
                        Selected Companies
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">Companies you have been selected for</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="flex flex-col bg-linear-to-b from-amber-50/50 to-white border border-amber-100/60 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center gap-2">
                          <Star size={20} /> Tier 1
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        {selectedCompanies.tier1.length === 0
                          ? <p className="text-xs text-gray-400 italic">None selected</p>
                          : selectedCompanies.tier1.map(co => (
                            <div key={co._id || co.companyId} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white">
                              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                                {co.companyName.charAt(0)}
                              </div>
                              <span className="font-semibold text-gray-800 text-sm">{co.companyName}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-col bg-linear-to-b from-blue-50/50 to-white border border-blue-100/60 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center gap-2">
                          <Rocket size={20} /> Tier 2
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        {selectedCompanies.tier2.length === 0
                          ? <p className="text-xs text-gray-400 italic">None selected</p>
                          : selectedCompanies.tier2.map(co => (
                            <div key={co._id || co.companyId} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white">
                              r                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                                {co.companyName.charAt(0)}
                              </div>
                              <span className="font-semibold text-gray-800 text-sm">{co.companyName}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-col bg-linear-to-b from-emerald-50/50 to-white border border-emerald-100/60 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold flex items-center gap-2">
                          <Target size={20} /> Tier 3
                        </h3>
                      </div>

                      <div className="flex flex-col gap-3">
                        {selectedCompanies.tier3.length === 0
                          ? <p className="text-xs text-gray-400 italic">None selected</p>
                          : selectedCompanies.tier3.map(co => (
                            <div key={co._id || co.companyId} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white">
                              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                                {co.companyName.charAt(0)}
                              </div>
                              <span className="font-semibold text-gray-800 text-sm">{co.companyName}</span>
                            </div>
                          ))}
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </>

          ) : (

            <>


            </>

          )
          }


        </div>



      </section>
    </>
  );
};

export default ProfileDetail;