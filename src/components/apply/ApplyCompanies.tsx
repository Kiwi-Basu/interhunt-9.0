import { useState, useEffect, useRef } from "react";
import { internHuntService } from "../services/internHuntService";
import { useNavigate } from "react-router";

// tier 1
import Multyfi from "../../assets/companies/companies page/Tier1 _Images/multyfi_logo.jpg"
import Kit19 from "../../assets/companies/companies page/Tier1 _Images/Kit19_logo.jpg"
import UrsTech from "../../assets/companies/recruiters/urstech.png"

// tier 2 
import Web3task from "../../assets/companies/companies page/Tier2_Images/web3task_logo.jpg"
import Meraki from "../../assets/companies/companies page/Tier2_Images/merakii_logo.jpg"
import Tpr from "../../assets/companies/companies page/Tier2_Images/tpr_india_foundation_logo.jpg"
import Pocketful from "../../assets/companies/companies page/Tier2_Images/Pocketful_logo.jpg"
import Kalakrit from "../../assets/companies/companies page/Tier2_Images/kalaakrit_logo.jpg"
import Ems from "../../assets/companies/companies page/Tier2_Images/Easymystorage_logo.jpg"
import Webgross from "../../assets/companies/companies page/Tier2_Images/webgross_logo.jpg"
import Devlofox from "../../assets/companies/companies page/Tier2_Images/devlofox_logo.jpg"
import Cetpa from "../../assets/companies/recruiters/cetpa@2x.png"
import Spillmate from "../../assets/companies/companies page/Tier2_Images/spillmate_logo.jpg"
import Harnium from "../../assets/companies/companies page/Tier2_Images/harnium_logo.jpg"
import Teri from "../../assets/companies/companies page/Tier2_Images/teri_enterprise_logo.svg"
import Righto from "../../assets/companies/companies page/Tier2_Images/teri_enterprise_logo.svg"


// tier 3
import Samyak from "../../assets/companies/companies page/Tier3_Images/samyakcomputerclasses_logo.jpg"
import Shray from "../../assets/companies/companies page/Tier3_Images/shray_projectsindia_logo.jpg"
import Maysan from "../../assets/companies/companies page/Tier3_Images/Maysanlabs_logo.webp"
import Ameriliquid from "../../assets/companies/companies page/Tier3_Images/Ameriliquid_logo.png"
import Travelwithpravah from "../../assets/companies/companies page/Tier3_Images/Travelwithparvah.jpg"
import MInversity from "../../assets/companies/companies page/Tier3_Images/Minversity_logo.jpg"
import Glovomega from "../../assets/companies/companies page/Tier2_Images/Glovomega_logo.webp"
import silver from "../../assets/companies/companies page/Tier3_Images/Silver_arc_logo.png"



type TierKey = "TIER_1" | "TIER_2" | "TIER_3";
type ToastType = "error" | "success" | "info";
interface Company { _id: string; name: string; tier: string; jobRoles: { roleName: string }[] }
interface ToastState { message: string; type: ToastType }
const LIMITS: Record<TierKey, number> = { TIER_1: 1, TIER_2: 2, TIER_3: 1 };
const TIER_LIST: { key: TierKey; label: string }[] = [
  { key: "TIER_1", label: "Tier 1" },
  { key: "TIER_2", label: "Tier 2" },
  { key: "TIER_3", label: "Tier 3" },
];

const ApplyCompanies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<Record<TierKey, string[]>>({ TIER_1: [], TIER_2: [], TIER_3: [] });
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showKnowMoreFor, setShowKnowMoreFor] = useState<Company | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [retryTrigger, setRetryTrigger] = useState(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const companyImageMap: { [key: string]: string } = {
    // TIER 1
    "Multyfi": Multyfi,
    "Kit19": Kit19,
    "UrsTech Solution": UrsTech,
    
    // TIER 2
    "Web3task": Web3task,
    "Meraki": Meraki,
    "Samyak Computer classes": Samyak,
    "TPR India Foundation": Tpr,
    "Pocketful": Pocketful,
    "Kalakrit": Kalakrit,
    "Easy My Storage": Ems,
    "Webgross": Webgross,
    "Devlofox Technologies": Devlofox,
    "Cetpa": Cetpa,
    "Spillmate": Spillmate,
    "Harnium": Harnium,
    "Teri Enterprise": Teri,
    "Glovomega Private Limited":Glovomega,
    "RightO" : Righto,
    
    
    // TIER 3
    "Shray Projects": Shray,
    "Maysan Labs": Maysan,
    "Travelwithpravah": Travelwithpravah,
    "AmeriLiquid India": Ameriliquid,
    "MInversity" :MInversity,
    "Silver Arc Corporate Solutions ":silver,
  };

  const showToast = (message: string, type: ToastType = "info") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, type });
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Fetch companies independently so a getUserCompanies failure
      // (e.g. 404 for users who haven't selected yet) doesn't block the list
      // Use Promise.all wisely, don't just ask AI to do your work, read your code
      try {
        const res = await internHuntService.getAllCompanies();
        if (cancelled) return;
        const raw = res.data ?? res ?? {};
        setCompanies((Array.isArray(raw) ? raw : Object.values(raw)) as Company[]);
      } catch {
        if (!cancelled) setFetchError(true);
      } finally {
        if (!cancelled) setTimeout(() => {
          setLoading(false);
          setTimeout(() => setCardsVisible(true), 50);
        }, 2000);
      }

      if (cancelled) return;
      try {
        const userRes = await internHuntService.getUserCompanies();
        if (cancelled) return;
        const totalSelected: number = userRes.totalSelected ?? 0;
        if (totalSelected > 0) {
          setHasSelected(true);
          const raw = userRes.selectedCompanies as { tier1?: {companyName: string}[]; tier2?: {companyName: string}[]; tier3?: {companyName: string}[] };
          setSelectedCompanies({
            TIER_1: (raw.tier1 || []).map(c => c.companyName),
            TIER_2: (raw.tier2 || []).map(c => c.companyName),
            TIER_3: (raw.tier3 || []).map(c => c.companyName),
          });
        }
      } catch { /* not yet selected */ }
    };

    load();
    return () => {
      cancelled = true;
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [retryTrigger]);

  const getByTier = (tier: TierKey) => companies.filter(c => c.tier === tier);

  const handleSelectCompany = (tier: TierKey, name: string) => {
    if (hasSelected) return;
    setSelectedCompanies(prev => {
      const cur = [...prev[tier]];
      if (cur.includes(name)) return { ...prev, [tier]: cur.filter(c => c !== name) };
      if (cur.length >= LIMITS[tier]) {
        showToast(`Tier ${tier.split("_")[1]} is full — deselect a company to pick another.`, "error");
        return prev;
      }
      return { ...prev, [tier]: [...cur, name] };
    });
  };

  const handleSubmitClick = () => {
    const total = selectedCompanies.TIER_1.length + selectedCompanies.TIER_2.length + selectedCompanies.TIER_3.length;
    if (total === 0) { showToast("Please select at least one company before submitting.", "error"); return; }
    setShowConfirm(true);
  };

  const handleConfirmedSubmit = async () => {
    const now = new Date().toISOString();

    const toTierPayload = (names: string[]) =>
      names.map(name => {
        const co = companies.find(c => c.name === name);
        return { companyId: co?._id ?? "", companyName: name, appliedAt: now };
      });

    const payload = {
      tier1: toTierPayload(selectedCompanies.TIER_1),
      tier2: toTierPayload(selectedCompanies.TIER_2),
      tier3: toTierPayload(selectedCompanies.TIER_3),
    };

    setSubmitting(true);
    try {
      const res = await internHuntService.selectCompanies(payload);
      if (res.success) { setShowConfirm(false); setHasSelected(true); }
    } catch (e: unknown) {
      const err = e as { response?: { data?: { message?: string } } };
      showToast(err.response?.data?.message || "Failed to submit. Please try again.", "error");
    } finally { setSubmitting(false); }
  };

  // ── Toast ──────────────────────────────────────────────────────────────────
  const Toast = () => {
    if (!toast) return null;
    const bg = { error: "bg-red-500", success: "bg-emerald-500", info: "bg-[#1F3A5F]" }[toast.type];
    const icon = { error: "✕", success: "✓", info: "ℹ" }[toast.type];
    return (
      <div style={{ animation: "slideInRight 0.3s ease" }} className={`fixed top-5 right-5 z-100 flex items-start gap-3 px-4 py-3 rounded-2xl text-white shadow-2xl max-w-xs ${bg}`}>
        <span className="mt-0.5 shrink-0">{icon}</span>
        <p className="text-sm font-medium leading-snug flex-1">{toast.message}</p>
        <button onClick={() => setToast(null)} className="text-white/70 hover:text-white cursor-pointer ml-1 shrink-0">✕</button>
      </div>
    );
  };

  // ── Confirm Modal ──────────────────────────────────────────────────────────
  const ConfirmModal = () => {
    if (!showConfirm) return null;
    return (
      <div className="fixed inset-0 z-90 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={e => { if (e.target === e.currentTarget) setShowConfirm(false); }}>
        <div style={{ animation: "scaleIn 0.2s ease" }} className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 flex flex-col gap-5">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#1F3A5F]">Review Your Applications</h2>
            <p className="text-slate-500 text-sm mt-1">Double-check before submitting — this cannot be undone.</p>
          </div>
          <div className="space-y-3">
            {TIER_LIST.map(({ key, label }) => (
              <div key={key}>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1.5">{label}</p>
                {selectedCompanies[key].length === 0 ? (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-amber-500 text-xs">⚠</span>
                    <span className="text-xs text-amber-700 font-medium">No company selected for this tier</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    {selectedCompanies[key].map(name => {
                      const co = companies.find(c => c.name === name);
                      return (
                        <div key={name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#1F3A5F]/5 border border-[#1F3A5F]/10">
                          <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
                            <img src={companyImageMap[name] || "/default-logo.png"} className="h-5 object-contain" alt={name} />
                          </div>
                          <span className="text-sm font-semibold text-[#1F3A5F]">{name}</span>
                          {co?.jobRoles?.[0] && <span className="ml-auto text-xs text-slate-400 truncate max-w-[130px]">{co.jobRoles[0].roleName}</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-100">
            <span className="text-red-400 shrink-0">⚠</span>
            <p className="text-xs text-red-600 font-medium">This action is permanent and cannot be changed after submission.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowConfirm(false)} disabled={submitting}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition cursor-pointer">Cancel</button>
            <button onClick={handleConfirmedSubmit} disabled={submitting}
              className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] font-bold text-sm hover:scale-[1.02] transition-all cursor-pointer disabled:opacity-50">
              {submitting ? "Submitting…" : "Confirm & Submit →"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ── Know More Drawer ───────────────────────────────────────────────────────
  const KnowMoreDrawer = () => {
    if (!showKnowMoreFor) return null;
    const co = showKnowMoreFor;
    return (
      <>
        <div className="fixed inset-0 z-80 bg-black/30 backdrop-blur-sm" onClick={() => setShowKnowMoreFor(null)} />
        <div style={{ animation: "slideInRight 0.3s ease" }} className="fixed right-0 top-0 bottom-0 z-85 w-full max-w-sm bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-[#1F3A5F]">{co.name}</h3>
            <button onClick={() => setShowKnowMoreFor(null)} className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition cursor-pointer">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm">
                <img src={companyImageMap[co.name] || "/default-logo.png"} className="h-14 object-contain" alt={co.name} />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Available Roles</p>
              <div className="space-y-2">
                {co.jobRoles.map((role, i) => (
                  <div key={i} className="flex items-start gap-3 px-3 py-2.5 rounded-xl bg-slate-50">
                    <span className="text-[#CEAC81] mt-0.5 shrink-0">⚙</span>
                    <span className="text-sm text-slate-700 font-medium">{role.roleName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


  if (loading) {
    const SkeletonCard = () => (
      <div className="border border-slate-200 rounded-3xl flex flex-col w-full sm:w-64 p-5 gap-4 bg-white animate-pulse">
        <div className="h-16 w-16 self-center rounded-2xl bg-slate-200" />
        <div className="h-4 w-3/4 self-center rounded-full bg-slate-200" />
        <div className="h-3 w-1/2 self-center rounded-full bg-slate-100" />
        <div className="flex gap-2"><div className="flex-1 h-8 rounded-xl bg-slate-200" /><div className="flex-1 h-8 rounded-xl bg-slate-300" /></div>
      </div>
    );
    const SkeletonTier = ({ count }: { count: number }) => (
      <div className="space-y-5">
        <div className="h-6 w-48 rounded-full bg-[#1F3A5F]/20 animate-pulse" />
        <div className="flex flex-wrap gap-5">{Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}</div>
        <div className="h-1.5 w-40 rounded-full bg-[#CEAC81]/30 animate-pulse" />
      </div>
    );
    return (
      <section className="min-h-screen p-6 py-10 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] space-y-12">
        <div className="h-10 w-64 mx-auto rounded-full bg-[#1F3A5F]/20 animate-pulse" />
        <SkeletonTier count={3} />
        <SkeletonTier count={5} />
        <SkeletonTier count={2} />
        <div className="flex justify-center"><div className="h-12 w-52 rounded-xl bg-[#CEAC81]/40 animate-pulse" /></div>
      </section>
    );
  }

  if (fetchError) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] p-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center gap-4 max-w-sm w-full text-center">
          <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center text-2xl">⚠</div>
          <h2 className="text-xl font-bold text-[#1F3A5F]">Could not load companies</h2>
          <p className="text-slate-500 text-sm">There was a problem reaching the server. Please check your connection and try again.</p>
          <button
            onClick={() => { setFetchError(false); setLoading(true); setCardsVisible(false); setRetryTrigger(n => n + 1); }}
            className="mt-2 px-6 py-2.5 rounded-xl bg-[#1F3A5F] text-white font-semibold text-sm hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition-all cursor-pointer">Try Again</button>
        </div>
      </section>
    );
  }

  if (hasSelected) {
    const allSelected = [
      ...selectedCompanies.TIER_1.map(n => ({ name: n, tier: "Tier 1" })),
      ...selectedCompanies.TIER_2.map(n => ({ name: n, tier: "Tier 2" })),
      ...selectedCompanies.TIER_3.map(n => ({ name: n, tier: "Tier 3" })),
    ];
    return (
      <section className="min-h-screen p-6 py-12 md:p-20 bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] flex items-center justify-center">
        <div style={{ animation: "scaleIn 0.3s ease" }} className="w-full max-w-xl bg-white rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col gap-6">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1F3A5F]/10 mb-2">
              <svg className="w-8 h-8 text-[#1F3A5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#1F3A5F]">Applications Submitted</h1>
            <p className="text-slate-500 text-sm">Your company preferences have been locked in.</p>
          </div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 overflow-hidden">
            {allSelected.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3.5 bg-white hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#1F3A5F]/10 flex items-center justify-center">
                    <img src={companyImageMap[item.name] || "/default-logo.png"} className="h-5 object-contain" alt={item.name} />
                  </div>
                  <span className="font-semibold text-[#1F3A5F] text-sm">{item.name}</span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#CEAC81]/20 text-[#9a7a4e]">{item.tier}</span>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("/dashboard/profile")}
            className="w-full bg-[#1F3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition-all duration-300 cursor-pointer">
            Back to Dashboard
          </button>
        </div>
      </section>
    );
  }

  const totalSelected = selectedCompanies.TIER_1.length + selectedCompanies.TIER_2.length + selectedCompanies.TIER_3.length;

  const renderCompanyCard = (company: Company, tier: TierKey, showKnowMore = false) => {
    const selected = selectedCompanies[tier].includes(company.name);
    const tierFull = selectedCompanies[tier].length >= LIMITS[tier];
    const locked = tierFull && !selected;
    const topRoles = (company.jobRoles || []).slice(0, 2);
    const extraRoles = (company.jobRoles || []).length - 2;
    return (
      <div
        key={company._id}
        onClick={() => !locked && handleSelectCompany(tier, company.name)}
        onKeyDown={e => { if ((e.key === "Enter" || e.key === " ") && !locked) handleSelectCompany(tier, company.name); }}
        role="button" tabIndex={locked ? -1 : 0} aria-pressed={selected}
        style={{ animation: cardsVisible ? `fadeInUp 0.4s ease both` : "none" }}
        className={`group rounded-3xl flex flex-col w-full sm:w-64 p-5 gap-3 transition-all duration-300 border outline-none focus-visible:ring-2 focus-visible:ring-[#CEAC81]
          ${locked ? "opacity-40 cursor-not-allowed bg-white border-slate-100" :
            selected ? "cursor-pointer bg-[#1F3A5F] text-white shadow-2xl scale-[1.03] border-[#1F3A5F]" :
              "cursor-pointer bg-white border-slate-200 hover:shadow-xl hover:border-[#CEAC81]/60"}`}
      >
        <div className={`h-16 w-16 self-center rounded-2xl flex items-center justify-center ${selected ? "bg-white/10" : "bg-slate-50"}`}>
          <img src={companyImageMap[company.name] || "/default-logo.png"} className="h-10 object-contain" alt={company.name} />
        </div>
        <p className="text-center font-bold text-sm leading-snug">{company.name}</p>
        {topRoles.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {topRoles.map((r, i) => (
              <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${selected ? "bg-white/15 text-white/80" : "bg-slate-100 text-slate-500"}`}>
                {r.roleName.length > 28 ? r.roleName.slice(0, 28) + "…" : r.roleName}
              </span>
            ))}
            {extraRoles > 0 && <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${selected ? "bg-white/10 text-white/60" : "bg-slate-100 text-slate-400"}`}>+{extraRoles} more</span>}
          </div>
        )}
        <div className="flex gap-2 mt-auto">
          {showKnowMore && (
            <button onClick={e => { e.stopPropagation(); setShowKnowMoreFor(company); }}
              className={`flex-1 rounded-xl py-2 text-xs font-semibold border transition-all duration-200 hover:scale-95 cursor-pointer
                ${selected ? "border-white/30 text-white/80 hover:bg-white/10" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
              Know More
            </button>
          )}
          <button onClick={e => { e.stopPropagation(); if (!locked) handleSelectCompany(tier, company.name); }}
            disabled={locked}
            className={`flex-1 rounded-xl py-2 text-xs font-bold transition-all duration-300
              ${locked ? "cursor-not-allowed opacity-30 bg-slate-200 text-slate-400" :
                selected ? "cursor-pointer hover:scale-105 bg-linear-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] group-hover:from-red-100 group-hover:to-red-200 group-hover:text-red-600" :
                  "cursor-pointer hover:scale-105 bg-linear-to-r from-[#1F3A5F] to-[#2d5491] text-white"}`}>
            {selected ? <span><span className="group-hover:hidden">✓ Selected</span><span className="hidden group-hover:inline">✕ Deselect</span></span> : "Select"}
          </button>
        </div>
      </div>
    );
  };

  const renderTierSection = (label: string, tier: TierKey, limit: number, accentColor: string, showKnowMore = false) => {
    const count = selectedCompanies[tier].length;
    const remaining = limit - count;
    const full = count >= limit;
    return (
      <div className="space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${accentColor}`}>{label}</span>
          <h2 className="text-lg font-bold text-[#1F3A5F]">{remaining > 0 ? `Select ${remaining} more` : "Selection complete ✓"}</h2>
          {full && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Deselect to change</span>}
          <span className="ml-auto text-sm font-semibold text-slate-400">{count}/{limit}</span>
        </div>
        <div className="flex flex-wrap gap-5">
          {getByTier(tier).map((company, idx) => (
            <div key={company._id} style={{ animationDelay: `${idx * 45}ms` }}>
              {renderCompanyCard(company, tier, showKnowMore)}
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden w-full max-w-xs">
          <div className="h-full bg-linear-to-r from-[#CEAC81] to-[#BFA06F] rounded-full transition-all duration-500" style={{ width: `${Math.min((count / limit) * 100, 100)}%` }} />
        </div>
      </div>
    );
  };

  const renderProgressIndicator = () => (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {TIER_LIST.map(({ key, label }, i) => {
        const done = selectedCompanies[key].length >= LIMITS[key];
        return (
          <div key={key} className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${done ? "bg-[#1F3A5F] text-white" : "bg-white border border-slate-200 text-slate-500"}`}>
              <span>{done ? "✓" : "○"}</span>
              <span>{label} {selectedCompanies[key].length}/{LIMITS[key]}</span>
            </div>
            {i < TIER_LIST.length - 1 && <div className={`h-px w-6 ${done ? "bg-[#1F3A5F]" : "bg-slate-200"}`} />}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Toast />
      <ConfirmModal />
      <KnowMoreDrawer />
      <section className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-16 md:py-16 space-y-12 pb-36">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1F3A5F]">Apply to Companies</h1>
            <p className="text-slate-500 text-sm md:text-base">Select your preferred companies across tiers. Your picks are final once submitted.</p>
            {renderProgressIndicator()}
          </div>
          <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />
          {renderTierSection("Tier 1", "TIER_1", 1, "bg-[#1F3A5F]", true)}
          <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
          {renderTierSection("Tier 2", "TIER_2", 2, "bg-[#2d5491]", true)}
          <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
          {renderTierSection("Tier 3", "TIER_3", 1, "bg-slate-500", true)}
        </div>

        {/* Sticky bottom bar with company name chips */}
        <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/85 border-t border-slate-200 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex items-center gap-4 flex-wrap">
            <div className="flex-1 flex items-center gap-4 flex-wrap min-w-0">
              {TIER_LIST.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-slate-400 shrink-0">{label}</span>
                  {selectedCompanies[key].length === 0 ? (
                    <span className="text-xs px-2.5 py-1 rounded-full border border-dashed border-slate-300 text-slate-400">— empty —</span>
                  ) : (
                    selectedCompanies[key].map(name => (
                      <span key={name} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#1F3A5F] text-white font-medium">
                        {name}
                        <button onClick={() => handleSelectCompany(key, name)} className="hover:text-[#CEAC81] transition-colors cursor-pointer ml-0.5" aria-label={`Remove ${name}`}>✕</button>
                      </span>
                    ))
                  )}
                </div>
              ))}
            </div>
            <button onClick={handleSubmitClick}
              className={`shrink-0 px-7 py-2.5 rounded-xl font-bold text-sm transition-all duration-300
                ${totalSelected === 0 ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-linear-to-r from-[#CEAC81] to-[#BFA06F] text-[#1F3A5F] shadow-lg hover:scale-105 cursor-pointer"}`}>
              Submit Applications
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyCompanies;