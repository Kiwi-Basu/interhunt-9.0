import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { internHuntService } from "../services/internHuntService";

// tier 1
import Multyfi from "../../assets/companies/companies page/Tier1 _Images/multyfi_logo.jpg";
import Web3task from "../../assets/companies/companies page/Tier1 _Images/web3task_logo.jpg";
import Edzer from "../../assets/companies/companies page/Tier1 _Images/Edzer_logo.jpg";
import Kit19 from "../../assets/companies/companies page/Tier1 _Images/Kit19_logo.jpg";
import UrsTech from "../../assets/companies/recruiters/urstech.png";

// tier 2
import Meraki from "../../assets/companies/companies page/Tier2_Images/merakii_logo.jpg";
import Samyak from "../../assets/companies/companies page/Tier2_Images/samyakcomputerclasses_logo.jpg";
import Tpr from "../../assets/companies/companies page/Tier2_Images/tpr_india_foundation_logo.jpg";
import Pocketful from "../../assets/companies/companies page/Tier2_Images/Pocketful_logo.jpg";
import Kalakrit from "../../assets/companies/companies page/Tier2_Images/kalaakrit_logo.jpg";
import Ems from "../../assets/companies/companies page/Tier2_Images/Easymystorage_logo.jpg";
import Webgross from "../../assets/companies/companies page/Tier2_Images/webgross_logo.jpg";
import Devlofox from "../../assets/companies/companies page/Tier2_Images/devlofox_logo.jpg";
import Cetpa from "../../assets/companies/recruiters/cetpa@2x.png";
import Maysan from "../../assets/companies/companies page/Tier2_Images/Maysanlabs_logo.webp";
import Spillmate from "../../assets/companies/companies page/Tier2_Images/spillmate_logo.jpg";
import Ameriliquid from "../../assets/companies/companies page/Tier2_Images/Ameriliquid_logo.png";
import Harnium from "../../assets/companies/companies page/Tier2_Images/harnium_logo.jpg";
import Travelwithpravah from "../../assets/companies/companies page/Tier2_Images/Travelwithparvah.jpg";
import Teri from "../../assets/companies/companies page/Tier2_Images/teri_enterprise_logo.svg";
import Sukudo from "../../assets/companies/companies page/Tier2_Images/sukudo_studios_logo.jpg";

// tier 3
import Shray from "../../assets/companies/companies page/Tier3_Images/shray_projectsindia_logo.jpg";

const companyImageMap: Record<string, string> = {
  Multyfi, Web3task, Edzer, Kit19, "UrsTech Solution": UrsTech,
  Meraki, "Samyak Computer classes": Samyak, "TPR India Foundation": Tpr,
  Pocketful, Kalakrit, "Easy My Storage": Ems, Webgross,
  "Devlofox Technologies": Devlofox, Cetpa, "Maysan Labs": Maysan,
  Spillmate, "AmeriLiquid India": Ameriliquid, Harnium,
  Travelwithpravah, "Teri Enterprise": Teri, "Sukudo Studios": Sukudo,
  "Shray Projects": Shray,
};

interface TierCompany { companyId?: string; companyName: string; appliedAt?: string }
interface CompaniesByTier { tier1: TierCompany[]; tier2: TierCompany[]; tier3: TierCompany[] }

const TIER_LABELS: Record<string, string> = {
  TIER_1: "Tier 1", TIER_2: "Tier 2", TIER_3: "Tier 3",
};
const TIER_ACCENT: Record<string, string> = {
  TIER_1: "from-amber-50 border-amber-100",
  TIER_2: "from-blue-50 border-blue-100",
  TIER_3: "from-emerald-50 border-emerald-100",
};
const TIER_BADGE: Record<string, string> = {
  TIER_1: "bg-[#1F3A5F] text-white",
  TIER_2: "bg-[#2d5491] text-white",
  TIER_3: "bg-slate-500 text-white",
};

const DashboardDetail = () => {
  const navigate = useNavigate();
  const { user, hasPurchased, hasSelected } = useAuth();
  const [selectedCompanies, setSelectedCompanies] = useState<CompaniesByTier>({ tier1: [], tier2: [], tier3: [] });
  const [totalSelected, setTotalSelected] = useState(0);
  const [loadingCompanies, setLoadingCompanies] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Stagger in the cards after mount
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!hasSelected) return;
    setLoadingCompanies(true);
    internHuntService.getUserCompanies()
      .then(res => {
        setSelectedCompanies(res.selectedCompanies || { tier1: [], tier2: [], tier3: [] });
        setTotalSelected(res.totalSelected || 0);
      })
      .catch(console.error)
      .finally(() => setLoadingCompanies(false));
  }, [hasSelected]);

  const TIER_KEYS: Record<string, keyof CompaniesByTier> = {
    TIER_1: "tier1", TIER_2: "tier2", TIER_3: "tier3",
  };

  const StepCard = ({
    index, title, description, done, actionLabel, doneLabel, onClick, disabled, delay,
  }: {
    index: number; title: string; description: string; done: boolean;
    actionLabel: string; doneLabel: string; onClick?: () => void; disabled?: boolean; delay: number;
  }) => (
    <div
      style={{
        animation: visible ? `fadeInUp 0.45s ease both` : "none",
        animationDelay: `${delay}ms`,
      }}
      className={`relative rounded-3xl border p-6 md:p-8 shadow-sm transition-all duration-300 overflow-hidden
        ${done ? "bg-white border-emerald-200" : "bg-white border-slate-200 hover:border-[#CEAC81]/60 hover:shadow-md"}`}
    >
      {/* Step index pill */}
      <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
        ${done ? "bg-emerald-100 text-emerald-700" : "bg-[#1F3A5F]/10 text-[#1F3A5F]"}`}>
        {done ? "✓" : index}
      </div>

      {/* Subtle decorative gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl
        ${done ? "bg-gradient-to-r from-emerald-300 to-emerald-500" : "bg-gradient-to-r from-[#CEAC81] to-[#BFA06F]"}`} />

      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${done ? "text-emerald-600" : "text-[#CEAC81]"}`}>
        Step {index}
      </p>
      <h2 className="text-xl font-bold text-[#1F3A5F] mb-1">{title}</h2>
      <p className="text-slate-500 text-sm">{description}</p>

      <button
        onClick={onClick}
        disabled={disabled}
        className={`mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
          ${disabled
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] hover:scale-[1.03] hover:shadow-md cursor-pointer"}`}
      >
        {done ? (
          <><span>✓</span> {doneLabel}</>
        ) : (
          <>{actionLabel} <span>→</span></>
        )}
      </button>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-10 md:py-16 space-y-8">

          {/* ── HERO HEADER ─────────────────────────────────────── */}
          <div
            style={{ animation: visible ? "fadeInUp 0.4s ease both" : "none" }}
            className="bg-white rounded-3xl border border-[#CEAC81]/20 px-7 py-7 shadow-sm"
          >
            <div className="flex items-start gap-4">
              {/* Avatar / initials */}
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#1F3A5F] to-[#2d5491] flex items-center justify-center text-white text-xl font-bold shadow-md">
                {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-[#CEAC81] mb-0.5">InternHunt 9.0</p>
                <h1 className="text-2xl md:text-3xl font-bold text-[#1F3A5F] leading-tight">
                  Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}!
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Track your internship application journey below.
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-slate-500">Overall Progress</span>
                <span className="text-xs font-bold text-[#1F3A5F]">
                  {[hasPurchased, hasSelected].filter(Boolean).length} / 2 steps
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#CEAC81] to-[#BFA06F] rounded-full transition-all duration-700"
                  style={{ width: `${([hasPurchased, hasSelected].filter(Boolean).length / 2) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* ── STEP CARDS ─────────────────────────────────────── */}
          <StepCard
            index={1}
            title="Register & Pay"
            description={hasPurchased
              ? "Payment confirmed. You're officially registered for InternHunt 9.0."
              : "Complete your registration payment to unlock the company selection portal."}
            done={hasPurchased}
            actionLabel="Go to Payment"
            doneLabel="Payment Confirmed"
            onClick={() => navigate("/apply/payment")}
            disabled={hasPurchased}
            delay={100}
          />

          <StepCard
            index={2}
            title="Select Your Companies"
            description={hasSelected
              ? "Your company preferences have been submitted and locked in."
              : "Choose your preferred companies across Tier 1, Tier 2, and Tier 3."}
            done={hasSelected}
            actionLabel="Select Companies"
            doneLabel="Selections Submitted"
            onClick={() => navigate("/apply/companies")}
            disabled={hasSelected}
            delay={200}
          />

          {/* ── SELECTED COMPANIES PANEL ────────────────────────── */}
          {hasSelected && (
            <div
              style={{ animation: visible ? "scaleIn 0.4s ease both 0.3s" : "none", opacity: visible ? undefined : 0 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Panel header */}
              <div className="px-7 py-5 border-b border-slate-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#1F3A5F]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#1F3A5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-[#1F3A5F] text-base">Your Selected Companies</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Locked in — selections are final</p>
                </div>
                <span className="ml-auto text-xs font-semibold px-3 py-1 rounded-full bg-[#CEAC81]/20 text-[#9a7a4e]">
                  {totalSelected} Applied
                </span>
              </div>

              {/* Loading skeleton */}
              {loadingCompanies ? (
                <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {["TIER_1", "TIER_2", "TIER_3"].map(t => (
                    <div key={t} className="rounded-2xl border border-slate-100 p-5 space-y-3 animate-pulse">
                      <div className="h-4 w-20 bg-slate-200 rounded-full" />
                      <div className="h-12 bg-slate-100 rounded-xl" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {["TIER_1", "TIER_2", "TIER_3"].map(tier => {
                    const tierKey = TIER_KEYS[tier];
                    const companies = selectedCompanies[tierKey] || [];
                    return (
                      <div
                        key={tier}
                        className={`flex flex-col bg-gradient-to-b ${TIER_ACCENT[tier]} to-white border rounded-2xl p-5`}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${TIER_BADGE[tier]}`}>
                            {TIER_LABELS[tier]}
                          </span>
                          <span className="text-xs text-slate-400 ml-auto font-medium">{companies.length} selected</span>
                        </div>
                        <div className="flex flex-col gap-2.5">
                          {companies.length === 0 ? (
                            <div className="text-xs text-slate-400 italic py-2 text-center">No company selected</div>
                          ) : companies.map((co, i) => (
                            <div
                              key={co.companyId || i}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
                            >
                              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                                {companyImageMap[co.companyName] ? (
                                  <img
                                    src={companyImageMap[co.companyName]}
                                    className="h-6 w-6 object-contain"
                                    alt={co.companyName}
                                  />
                                ) : (
                                  <span className="font-bold text-[#1F3A5F] text-sm">
                                    {co.companyName.charAt(0)}
                                  </span>
                                )}
                              </div>
                              <span className="font-semibold text-[#1F3A5F] text-sm leading-tight">
                                {co.companyName}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Footer CTA */}
              <div className="px-7 pb-6">
                <button
                  onClick={() => navigate("/apply/companies")}
                  className="w-full py-3 rounded-2xl border-2 border-[#1F3A5F]/10 text-[#1F3A5F] text-sm font-semibold
                    hover:bg-[#1F3A5F] hover:text-white hover:border-[#1F3A5F] transition-all duration-300 cursor-pointer"
                >
                  View Full Details →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardDetail;