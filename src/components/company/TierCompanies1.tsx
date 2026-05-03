import { Link } from "react-router"
import { Rocket } from "lucide-react";
// import Multyfi from "../../assets/companies/companies page/Tier1 _Images/multyfi_logo.jpg"
// import Web3task from "../../assets/companies/companies page/Tier1 _Images/web3task_logo.jpg"
// import Edzer from "../../assets/companies/companies page/Tier1 _Images/Edzer_logo.jpg"
// import Kit19 from "../../assets/companies/companies page/Tier1 _Images/Kit19_logo.jpg"
// import UrsTech from "../../assets/companies/recruiters/urstech.png"

const TierCompanies1 = () => {
  // const company1 = [
  //   { img: Multyfi, companyName: "Multyfi", description: "Multyfi is a SEBI-registered research analyst firm that delivers AI-driven automated investment strategies for stable and optimized returns. It combines human expertise, advanced technology, and data-driven insights to create smarter investment solutions.", knowmore: "pdf" },
  //   { img: Web3task, companyName: "Web3task", description: "Web3task is an India-based IT firm delivering customized solutions for global businesses. It offers agile, cost-effective services across emerging technologies and software development. The company focuses on tailored solutions to help businesses grow and scale.", knowmore: "pdf" },
  //   { img: Edzer, companyName: "Edzer", description: "Edzer is an edtech platform transforming how students and job seekers prepare for their careers. It offers expert-curated courses and Edzer Edge, featuring AI-powered tools, case studies, and mock interviews.The platform bridges the gap between academics and industry to drive career-ready learning.", knowmore: "pdf" },
  //   { img: Kit19, companyName: "Kit19", description: "Kit19 provides a dynamic and comprehensive online business profile to strengthen digital presence. It serves as a centralized platform for marketing across channels and attracting new customers. The solution helps businesses showcase their identity effectively and drive growth.", knowmore: "pdf" },
  //   { img: UrsTech, companyName: "UrsTech Solution", description: "UrsTech Solution is a technology-driven IT services and consultancy company helping businesses build, scale, and streamline operations through smart digital solutions. From software development and web & mobile application development to IT consulting and digital transformation, they empower organizations to turn ideas into impactful systems.", knowmore: "pdf" }
  // ];

  return (
    <>
      <section id="Tier-1-company">
        {/* Releasing soon */}
        <div className="min-h-screen flex flex-col justify-center items-center  p-6 md:p-20 py-16 md:py-20 relative overflow-hidden bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">
          {/* subtle gradient background */}
          <div className="absolute inset-0  pointer-events-none"></div>

          {/* soft glow */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-200/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/10 rounded-full blur-3xl opacity-40"></div>

          {/* content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-5">

            {/* badge */}
            <div className="mb-6 px-6 py-2 flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Rocket /> Coming Soon
            </div>

            {/* heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1F3A5F] mb-6">
              Companies Releasing Soon
            </h1>

            {/* subtext */}
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              We’re onboarding top-tier companies for this season. Stay tuned — exciting opportunities are about to drop.
            </p>

            <Link to="/dashboard">
              <button className="w-full cursor-pointer px-8 md:px-10 md:w-auto py-3 md:py-2 text-lg sm:text-xl md:text-2xl rounded-full shadow-lg border-black/20 font-medium text-[#1F3A5F] bg-linear-to-r from-[#D8B893] via-[#CEAC81] to-[#BFA06F] hover:shadow-lg hover:scale-105 transition-all duration-300">View Dashboard</button>
            </Link>

            {/* animated loader */}
            <div className="flex gap-2 mt-8">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span>
            </div>

          </div>
        </div>

        {/* Tier 1 companies */}
        {/* <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] flex flex-col items-center p-6 md:p-20 py-16 md:py-20 relative overflow-hidden">

          <div className="absolute inset-0  pointer-events-none"></div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CEAC81]/15 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CEAC81]/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-yellow-400"></div>
              <span className="px-5 py-1.5 rounded-full bg-yellow-50 border border-yellow-300 text-yellow-700 text-xs font-bold tracking-widest uppercase shadow-sm">
                ★  Gold Tier
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-yellow-400"></div>
            </div>
            <p className="text-5xl md:text-6xl font-extrabold tracking-widest text-[#1F3A5F]">
              Tier <span className="text-[#CEAC81]">1</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly gap-y-8 relative z-10 w-full max-w-7xl">
            {company1.map((company, idx) => (
              <div
                key={idx}
                className="relative border border-black/10 bg-white shadow-lg rounded-3xl flex flex-col w-full sm:w-90 p-5 md:p-7 gap-4 md:gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:border-yellow-50 group  mx-4 sm:mx-0"
              >

                <div className="h-20 w-20 self-center  p-1 rounded-md border border-black/10 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-50 transition-all duration-300">
                  <img src={company.img} />
                </div>

                <p className="text-center font-bold uppercase  text-shadow-lg text-lg text-gray-900 bg-gray-50 rounded-xl py-2.5 border border-gray-100 shadow">
                  {company.companyName}
                </p>

                <div className="bg-gray-50 text-justify rounded-xl p-4 text-gray-500 leading-relaxed text-sm border border-gray-100 text-shadow-sm shadow">
                  {company.description}
                </div>

                <div className="flex gap-3">
                  <Link to={"/apply/companies"} className="flex-1 w-full">
                    <button className="w-full font-bold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-linear-to-r from-slate-500 to-gray-400 text-white hover:from-slate-600 hover:to-gray-500 transition-all text-sm tracking-wide shadow-md hover:shadow-slate-300">
                      Apply
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div> */}
      </section>
    </>
  );
};

export default TierCompanies1;