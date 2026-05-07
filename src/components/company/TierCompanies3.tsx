// import { Link } from "react-router-dom";
import Shray from "../../assets/companies/companies page/Tier3_Images/shray_projectsindia_logo.jpg"
import Maysan from "../../assets/companies/companies page/Tier3_Images/Maysanlabs_logo.webp"
import Ameriliquid from "../../assets/companies/companies page/Tier3_Images/Ameriliquid_logo.png"
import Travelwithpravah from "../../assets/companies/companies page/Tier3_Images/Travelwithparvah.jpg"
import MInversity from "../../assets/companies/companies page/Tier3_Images/Minversity_logo.jpg"
import silver from "../../assets/companies/companies page/Tier3_Images/Silver_arc_logo.png"
import Samyak from "../../assets/companies/companies page/Tier3_Images/samyakcomputerclasses_logo.jpg"




const TierCompanies3 = () => {
  const company3 = [
    { img: Shray, companyName: "Shray Projects", description: "Shray Projects is a leading real estate services firm based in New Delhi, established in the 1980s. It has grown into a trusted broking house, handling major corporate and individual transactions. Known for its ethical professionalism, the firm has built strong credibility in a highly fragmented market.", knowmore: "/resumes/Shray Projects JD.pdf" },
    { img: Maysan, companyName: "Maysan Labs", description: "Maysan Labs is a technology-driven company that delivers innovative digital solutions, including website development, product design, and scalable software services. It focuses on combining creativity and technical expertise to create user-friendly experiences that help businesses build a strong online presence.", knowmore: "/resumes/Maysan Labs JD.pdf" },
    { img: Ameriliquid, companyName: "AmeriLiquid India", description: "AmeriLiquid India is a place where you can easily get cash from your assets. It is working on making liquidity of real estate, businesses, and investments easy. The platform uses a simple approach and, with a trust element, wants to make liquidity available for all.", knowmore: "/resumes/AmeriLiquid India JD.pdf" },
    { img: Travelwithpravah, companyName: "travelwithpravah", description: "Travel With Pravah is a travel technology company developing data-driven systems to enhance travel planning, cost optimization, and operational efficiency. It combines intelligent infrastructure, structured deployment, and performance-driven insights to build scalable and reliable travel solutions.", knowmore: "/resumes/travelwithpravah JD.pdf" },
    { img: MInversity, companyName: "MInversity", description: "Minversity is an edtech platform that helps students build future-ready skills through engaging learning. It offers interactive courses across subjects like AI, coding, and business. With a personalized approach, Minversity aims to nurture curiosity and confidence in young learners.", knowmore: "/resumes/Minversity JD.pdf" },
    { img: silver, companyName: "Silver arc corporate solutions", description: "Silver Arc Corporate Solutions specializes in premium corporate gifting, creative graphic designing, high-quality printing solutions, and customized branding merchandise that help businesses build a strong and lasting brand identity. The company delivers innovative, impactful, and tailored branding solutions designed to meet diverse corporate needs while enhancing brand visibility and professional presence.", knowmore: "/resumes/Silver Arc Corporate Ltd JD.pdf" },
    { img: Samyak, companyName: "Samyak Computer Classes", description: "Samyak Computer Classes is a leading institute offering 300+ comprehensive computer courses for all skill levels. With expert instructors, it equips learners with practical knowledge in software, programming, and technology. The institute empowers individuals to achieve their personal and professional goals.", knowmore: "/resumes/Samyak jd.pdf" },
  ];

  return (
    <>
      <section id="Tier-3-company">
        <div className="min-h-screen bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7] flex flex-col items-center p-6 md:p-20 py-16 md:py-20 relative overflow-hidden">

          <div className="absolute inset-0  pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CEAC81]/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

          {/* Tier badge + heading */}
          <div className="relative z-10 flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-amber-500"></div>
              <span className="px-5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-widest uppercase shadow-sm">
                ✦  Bronze Tier
              </span>
              <div className="h-px w-16 bg-linear-to-l from-transparent to-amber-500"></div>
            </div>
            <p className="text-5xl md:text-6xl font-extrabold tracking-widest text-[#1F3A5F] drop-shadow-lg">
              Tier <span className="text-[#CEAC81]">3</span>
            </p>
          </div>

          {/* Company cards */}
          <div className="flex flex-wrap justify-evenly gap-y-8 relative z-10 w-full max-w-7xl">
            {company3.map((company, idx) => (
              <div
                key={idx}
                className="relative border border-black/10 bg-white shadow-lg rounded-3xl flex flex-col w-full sm:w-90 p-5 md:p-7 gap-4 md:gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:border-yellow-50 group  mx-4 sm:mx-0"
              >

                {/* Logo placeholder */}
                <div className="h-20 w-20 self-center p-1 rounded-md  border border-black/10 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                  <img src={company.img} alt={company.companyName} />
                </div>

                {/* Company name */}
                <p className="text-center font-bold text-lg text-shadow-lg text-gray-900 bg-gray-50 rounded-xl py-2.5 border border-gray-100 shadow">
                  {company.companyName}
                </p>

                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-4 text-gray-500 leading-relaxed text-sm border border-gray-100 text-justify text-shadow-sm shadow">
                  {company.description}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a href={company.knowmore} target="_blank" className="flex-1 text-center font-semibold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all text-sm tracking-wide">
                    Know More
                  </a>
                  {/* <Link to={"/dashboard"} className="flex-1 w-full">
                    <button className="w-full font-bold cursor-pointer hover:scale-95 duration-150 rounded-xl py-2.5 bg-linear-to-r from-slate-500 to-gray-400 text-white hover:from-slate-600 hover:to-gray-500 transition-all text-sm tracking-wide shadow-md hover:shadow-slate-300">
                      Apply
                    </button>
                  </Link> */}
                  <div className="flex-1 w-full">
                    <button disabled className="w-full flex-1  font-bold cursor-not-allowed rounded-xl py-2.5 bg-linear-to-r from-slate-500 to-gray-400 text-white hover:from-slate-600 hover:to-gray-500 transition-all text-sm tracking-wide shadow-md hover:shadow-slate-300">
                      Closed
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TierCompanies3;