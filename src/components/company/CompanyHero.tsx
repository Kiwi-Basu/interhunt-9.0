import { motion } from "motion/react";
import sharekhan from "../../assets/companies/recruiters/sharekhan.png";
import pehchaanschool from "../../assets/companies/recruiters/PehchaanSchool.png";
import wipro from "../../assets/companies/recruiters/wipro-logo.png";
import timesofindia from "../../assets/companies/recruiters/TOI.png";
import decathlon from "../../assets/companies/recruiters/decathlon.png";
import oyo from "../../assets/companies/recruiters/oyo.png"
import nescafe from "../../assets/companies/recruiters/nescafe.png"
import careerlauncher from "../../assets/companies/recruiters/career.png"
import mte from "../../assets/companies/recruiters/mte.jpg"
import cetpa from "../../assets/companies/recruiters/cetpa@2x.png";
import urs from "../../assets/companies/recruiters/urstech.png";
import csa from "../../assets/companies/recruiters/csa.png";
import growthclues from "../../assets/companies/recruiters/Growthclues.png";
import worldsofwonder from "../../assets/companies/recruiters/wow.png"
import kalakriti from "../../assets/companies/recruiters/kalakrit.webp";
import easymystorage from "../../assets/companies/recruiters/easymystorage.png";
import aimindia from "../../assets/companies/recruiters/aimindia.png";
import bluntt from "../../assets/companies/recruiters/BLUNTT.webp";
import eazyrecruitz from "../../assets/companies/recruiters/EazyRecruitz.png";

// ─── Company data ─────────────────────────────────────────────────────────────
// `logo` = imported image → renders as <img> (grayscale → colour on hover)
// `logo` = null → renders a clean text wordmark
// Add real logo imports and wire them up as the list grows.
type Company = { name: string; logo: string | null };

const COMPANIES: Company[] = [
  { name: "Sharekhan", logo: sharekhan },
  { name: "Pehchaan School", logo: pehchaanschool },
  { name: "Wipro", logo: wipro },
  { name: "Times of India", logo: timesofindia },
  { name: "Decathlon", logo: decathlon },
  { name: "Oyo", logo: oyo },
  { name: "Nescafé", logo: nescafe },
  { name: "Career Launcher", logo: careerlauncher },
  { name: "MTE", logo: mte },
  { name: "CETPA", logo: cetpa },
  { name: "URS Tech", logo: urs },
  { name: "CSA Investments", logo: csa },
  { name: "Growthclues", logo: growthclues },
  { name: "World of Wonder", logo: worldsofwonder },
  { name: "Kalakriti", logo: kalakriti },
  { name: "Easy My Storage", logo: easymystorage },
  { name: "Aim India", logo: aimindia },
  { name: "Bluntt", logo: bluntt },
  { name: "EazyRecruitz", logo: eazyrecruitz },
];

// Duplicate once → seamless loop when we animate x from 0 → -50%
const TRACK = [...COMPANIES, ...COMPANIES];

// ─── Single logo slot ─────────────────────────────────────────────────────────
const LogoSlot = ({ company }: { company: Company }) => (
  <motion.div
    className="flex-shrink-0 flex items-center justify-center px-8 sm:px-10 md:px-12"
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    {company.logo ? (
      // Real logo — grayscale by default, full colour on hover
      <motion.img
        src={company.logo}
        alt={company.name}
        className="h-8 sm:h-9 md:h-10 w-auto object-contain"
        style={{ filter: "grayscale(100%) opacity(0.45)" }}
        whileHover={{ filter: "grayscale(0%) opacity(1)" } as Parameters<typeof motion.img>[0]["whileHover"]}
        transition={{ duration: 0.25, ease: "easeOut" }}
        draggable={false}
      />
    ) : (
      // Text wordmark — minimal, no box
      <span
        className="text-sm sm:text-base font-bold tracking-wide
          text-[#1F3A5F]/30 hover:text-[#1F3A5F]/75
          transition-colors duration-250 whitespace-nowrap select-none cursor-default
          uppercase"
      >
        {company.name}
      </span>
    )}
  </motion.div>
);

// ─── Separator dot ─────────────────────────────────────────────────────────────
const Dot = () => (
  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#CEAC81]/40" />
);

// ─── Main component ────────────────────────────────────────────────────────────
const CompanyHero = () => {
  return (
    <section id="Company-Hero">
      <div className="min-h-screen relative flex flex-col justify-between
        bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] overflow-hidden">

        {/* ── Corner decorations (same pattern as Hero / AboutHero) ── */}
        <div className="absolute top-6 sm:top-10 md:top-12 left-0
          h-12 sm:h-16 md:h-25 w-28 sm:w-40 md:w-50
          rounded-r-3xl md:rounded-r-4xl bg-[#CEAC81]" />
        <div className="absolute top-0 left-0
          h-12 sm:h-16 md:h-20 w-40 sm:w-60 md:w-80
          rounded-br-3xl md:rounded-br-4xl bg-[#1F3A5F]" />
        <div className="absolute right-0 top-0
          h-14 sm:h-20 md:h-30 w-28 sm:w-40 md:w-50
          rounded-bl-3xl md:rounded-bl-4xl bg-[#CEAC81]" />
        <div className="absolute bottom-0 right-0
          h-12 sm:h-16 md:h-20 w-40 sm:w-60 md:w-80
          rounded-tl-3xl md:rounded-tl-4xl bg-[#1F3A5F]" />
        <div className="absolute bottom-0 right-0
          h-14 sm:h-20 md:h-30 w-28 sm:w-40 md:w-50
          rounded-tl-3xl md:rounded-tl-4xl bg-[#CEAC81]" />

        {/* ── Ring-square decorations ── */}
        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-[#1F3A5F]/20
          h-28 sm:h-40 md:h-50 w-28 sm:w-40 md:w-50
          top-40 md:top-70 left-4 sm:left-10 md:left-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 h-full w-full
            top-6 md:top-10 left-6 md:left-15 ring-[#CEAC81]/20 rounded-2xl" />
        </div>
        <div className="hidden sm:block absolute opacity-10 ring-6 md:ring-8 ring-[#1F3A5F]/20
          h-28 sm:h-40 md:h-50 w-28 sm:w-40 md:w-50
          bottom-32 md:bottom-52 right-4 sm:right-10 md:right-20 rounded-2xl">
          <div className="absolute ring-6 md:ring-8 h-full w-full
            top-6 md:top-10 left-6 md:left-15 ring-[#CEAC81]/20 rounded-2xl" />
        </div>
        <div className="hidden md:block absolute opacity-10 ring-8
          h-50 w-50 top-20 right-110 ring-[#1F3A5F]/20 rounded-2xl">
          <div className="absolute ring-8 h-50 w-50 top-10 left-15 ring-[#CEAC81]/20 rounded-2xl" />
        </div>

        {/* ── Hero headline — centred in remaining space ── */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-5 z-10 px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-5xl sm:text-6xl md:text-9xl font-extrabold text-[#1F3A5F] text-center">
            Companies
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-500 text-center max-w-xl">
            Connect with top companies across various industries
          </p>
        </motion.div>

        {/* ── Logo strip — anchored to the bottom of the hero ── */}
        <motion.div
          className="relative z-10 w-full pb-20 sm:pb-24 md:pb-28 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Label */}
          <p className="text-center text-[10px] sm:text-[11px] font-bold
            tracking-[0.22em] uppercase text-[#1F3A5F]/30 mb-5">
            Previously partnered with
          </p>

          {/* Top hairline */}
          <div className="w-full h-px bg-gradient-to-r
            from-transparent via-[#CEAC81]/35 to-transparent mb-1" />

          {/* ── Marquee ── */}
          <div className="relative overflow-hidden py-5">

            {/* Left fade mask */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-36 md:w-48 z-10
              bg-gradient-to-r from-[#F8FAFC] to-transparent" />
            {/* Right fade mask */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-36 md:w-48 z-10
              bg-gradient-to-l from-[#F8FAFC] to-transparent" />

            {/* Framer Motion scrolling track */}
            <motion.div
              className="flex items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 38,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {TRACK.map((company, idx) => (
                <div key={idx} className="flex items-center">
                  <LogoSlot company={company} />
                  {/* Only show a dot between items, not after the last */}
                  {idx !== TRACK.length - 1 && <Dot />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom hairline */}
          <div className="w-full h-px bg-gradient-to-r
            from-transparent via-[#CEAC81]/35 to-transparent mt-1" />
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyHero;