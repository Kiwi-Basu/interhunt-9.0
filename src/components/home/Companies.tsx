// import { motion } from "motion/react";
import { Link } from "react-router-dom";
// import { Rocket } from "lucide-react";
import { motion } from "motion/react"

import Multyfi from "../../assets/companies/companies page/Tier1 _Images/multyfi_logo.jpg"
import Web3task from "../../assets/companies/companies page/Tier1 _Images/web3task_logo.jpg"
import Edzer from "../../assets/companies/companies page/Tier1 _Images/Edzer_logo.jpg"
import Kit19 from "../../assets/companies/companies page/Tier1 _Images/Kit19_logo.jpg"
import UrsTech from "../../assets/companies/recruiters/urstech.png"

import Meraki from "../../assets/companies/companies page/Tier2_Images/merakii_logo.jpg"
import Samyak from "../../assets/companies/companies page/Tier2_Images/samyakcomputerclasses_logo.jpg"
import Tpr from "../../assets/companies/companies page/Tier2_Images/tpr_india_foundation_logo.jpg"
import Pocketful from "../../assets/companies/companies page/Tier2_Images/Pocketful_logo.jpg"
import Kalakrit from "../../assets/companies/companies page/Tier2_Images/kalaakrit_logo.jpg"

const Companies = () => {
  const companies = [
    { name: "Multyfi", img: Multyfi, initials: "Mu" },
    { name: "Web3Task", img: Web3task, initials: "WE" },
    { name: "Edzer", img: Edzer, initials: "ED" },
    { name: "Kit19", img: Kit19, initials: "Ki" },
    { name: "UrsTech Solution", img: UrsTech, initials: "UT" },
    { name: "Merakii", img: Meraki, initials: "ME" },
    { name: "Samyak Computer Classes", img: Samyak, initials: "SA" },
    { name: "TPR India Foundation", img: Tpr, initials: "TPR" },
    { name: "Pocketful", img: Pocketful, initials: "PO" },
    { name: "Kalakrit", img: Kalakrit, initials: "KA" },
  ]

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <>
      <section id="Home-Company">
        {/* <div className="min-h-screen flex flex-col justify-center items-center  p-6 md:p-20 py-16 md:py-20 relative overflow-hidden bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">
          <div className="absolute inset-0  pointer-events-none"></div>

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/10 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-5">

            <div className="mb-6 px-6 py-2 flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Rocket /> Coming Soon
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1F3A5F] mb-6">
              Companies Releasing Soon
            </h1>

            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              We’re onboarding top-tier companies for this season. Stay tuned — exciting opportunities are about to drop.
            </p>
            
            <Link to="/dashboard">
              <button className="w-full cursor-pointer px-8 md:px-10 md:w-auto py-3 md:py-2 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">View Dashboard</button>
            </Link>

            <div className="flex gap-2 mt-8">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span>
            </div>

          </div>
        </div> */}

        {/* replace when actual data comes in */}

        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 py-16 md:py-20 gap-8 md:gap-14 bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9]">

          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1F3A5F] tracking-tight text-center">
            Our <span className="text-[#CEAC81]">Companies</span>
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl">
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-[#CEAC81]/20 shadow-sm rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 30px rgba(31,58,95,0.18)",
                }}
              >
                <div className="w-14 h-14 rounded-full bg-[#1F3A5F] flex items-center justify-center ">
                  <img src={company.img} alt="" />
                </div>

                <p className="text-[#0F172A] font-medium text-center text-sm">
                  {company.name}
                </p>

                <div className="w-6 h-[2px] bg-[#CEAC81]/60"></div>
              </motion.div>
            ))}
          </div>

          <Link to="/company" onClick={scrollToTop}>
            <button className="px-10 py-3 bg-[#1F3A5F] text-white rounded-full shadow-md hover:shadow-[#1F3A5F]/30 cursor-pointer hover:scale-105 flex items-center gap-2 duration-300 hover:bg-[#CEAC81] hover:text-[#1F3A5F]">
              <span className="text-lg font-semibold">View All Companies</span>
              <span className="text-2xl">→</span>
            </button>
          </Link>

        </div>
      </section>
    </>
  );
};

export default Companies;