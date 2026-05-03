import { Link } from "react-router-dom";
import Meraki from "../../assets/companies/companies page/Tier2_Images/merakii_logo.jpg"
import Samyak from "../../assets/companies/companies page/Tier2_Images/samyakcomputerclasses_logo.jpg"
import Tpr from "../../assets/companies/companies page/Tier2_Images/tpr_india_foundation_logo.jpg"
import Pocketful from "../../assets/companies/companies page/Tier2_Images/Pocketful_logo.jpg"
import Kalakrit from "../../assets/companies/companies page/Tier2_Images/kalaakrit_logo.jpg"
import Ems from "../../assets/companies/companies page/Tier2_Images/Easymystorage_logo.jpg"
import Webgross from "../../assets/companies/companies page/Tier2_Images/webgross_logo.jpg"
import Devlofox from "../../assets/companies/companies page/Tier2_Images/devlofox_logo.jpg"
import Cetpa from "../../assets/companies/recruiters/cetpa@2x.png"
import Maysan from "../../assets/companies/companies page/Tier2_Images/Maysanlabs_logo.webp"
import Spillmate from "../../assets/companies/companies page/Tier2_Images/spillmate_logo.jpg"
import Ameriliquid from "../../assets/companies/companies page/Tier2_Images/Ameriliquid_logo.png"
import Harnium from "../../assets/companies/companies page/Tier2_Images/harnium_logo.jpg"
import Travelwithpravah from "../../assets/companies/companies page/Tier2_Images/Travelwithparvah.jpg"
import Teri from "../../assets/companies/companies page/Tier2_Images/teri_enterprise_logo.svg"
import Sukudo from "../../assets/companies/companies page/Tier2_Images/sukudo_studios_logo.jpg"


const TierCompanies2 = () => {
  const company2 = [
    { img: Meraki, companyName: "Merakii", description: "something something something", knowmore: "pdf" },
    { img: Samyak, companyName: "Samyak Computer Classes", description: "A leading company in AI and machine learning solutions.", knowmore: "pdf" },
    { img: Tpr, companyName: "TPR India Foundation", description: "Focused on building scalable web and mobile applications.", knowmore: "pdf" },
    { img: Pocketful, companyName: "Pocketful", description: "Provides advanced data analytics and cloud services.", knowmore: "pdf" },
    { img: Kalakrit, companyName: "Kalakrit", description: "Innovative software solutions for modern businesses.", knowmore: "pdf" },
    { img: Ems, companyName: "Easy My Storage ", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Webgross, companyName: "Webgross", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Devlofox, companyName: "Devlofox Technologies", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Cetpa, companyName: "Cetpa", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Maysan, companyName: "Maysan Labs", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Spillmate, companyName: "Spillmate", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Ameriliquid, companyName: "AmeriLiquid India", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Harnium, companyName: "Harnium", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Travelwithpravah, companyName: "travelwithpravah", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Teri, companyName: "Teri Enterprise", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
    { img: Sukudo, companyName: "Sukudo Studios", description: "Specializes in cybersecurity and IT infrastructure.", knowmore: "pdf" },
  ];

  return (
    <>
      <section id="Tier-2-company">
        <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] flex flex-col items-center p-6 md:p-20 py-16 md:py-20 relative overflow-hidden">

          {/* Soft silver tint */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-gray-50 to-slate-100 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

          {/* Tier badge + heading */}
          <div className="relative z-10 flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-slate-400"></div>
              <span className="px-5 py-1.5 rounded-full bg-slate-50 border border-slate-300 text-slate-600 text-xs font-bold tracking-widest uppercase shadow-sm">
                ✦  Silver Tier
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-slate-400"></div>
            </div>
            <p className="text-5xl md:text-6xl font-extrabold tracking-widest text-[#1F3A5F]  drop-shadow-lg">
              Tier <span className="text-[#CEAC81]">2</span> 
            </p>
          </div>

          {/* Company cards */}
          <div className="flex flex-wrap justify-evenly gap-y-8 relative z-10 w-full max-w-7xl">
            {company2.map((company, idx) => (
              <div
                key={idx}
                className="relative border border-slate-200 bg-white shadow-lg shadow-slate-100 rounded-3xl flex flex-col w-full sm:w-72 p-5 md:p-7 gap-4 md:gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-slate-200 hover:border-slate-300 group  mx-4 sm:mx-0"
              >
                {/* Logo placeholder */}
                <div className="h-20 w-20 p-1  self-center rounded-md bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-300">
                  <img src={company.img} alt="" />
                </div>

                {/* Company name */}
                <p className="text-center font-bold text-shadow-lg text-lg text-gray-900 bg-gray-50 rounded-xl py-2.5 border border-gray-100 shadow">
                  {company.companyName}
                </p>

                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-4 text-gray-500 leading-relaxed text-sm border border-gray-100 text-center shadow">
                  {company.description}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a href="#" target="_blank" className="flex-1 font-semibold text-center cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all text-sm tracking-wide">
                    Know More
                  </a>
                  <Link to={"/apply/companies"} className="flex-1 w-full">
                    <button className="w-full font-bold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-linear-to-r from-slate-500 to-gray-400 text-white hover:from-slate-600 hover:to-gray-500 transition-all text-sm tracking-wide shadow-md hover:shadow-slate-300">
                      Apply
                    </button>
                  </Link> 
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TierCompanies2;