// import { Link } from "react-router-dom";

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
import Righto from "../../assets/companies/companies page/Tier2_Images/Righto_logo.jpeg"
import Glovomega from "../../assets/companies/companies page/Tier2_Images/Glovomega_logo.webp"




const TierCompanies2 = () => {
  const company2 = [
    { img: Web3task, companyName: "Web3task", description: "Web3task is an India-based IT firm delivering customized solutions for global businesses. It offers agile,  cost-effective services across emerging technologies and software development. The company focuses on tailored solutions to help businesses grow and scale.", knowmore: "/resumes/Web3task JD.pdf" },
    { img: Meraki, companyName: "Merakii", description: "Merakii BrandPro is a growing digital marketing company delivering distinct, end-to-end branding solutions for businesses.Through content, advertising, and social media management, the company helps brands connect, convert, and scale effectively.", knowmore: "/resumes/Merakii JD.pdf" },

    { img: Tpr, companyName: "TPR India Foundation", description: "The Project Raahi (TPR India Foundation) is a Delhi-based non-profit founded in 2020 and officially registered in 2022. It focuses on empowering underprivileged communities through digital literacy, education, and awareness programs. The organization works across domains like health, hunger elimination, and women empowerment.", knowmore: "/resumes/TPR India Foundation JD.pdf" },
    { img: Pocketful, companyName: "Pocketful", description: "Pocketful is a new-age stockbroking platform redefining the trading experience. It offers innovative products backed by Nobel-winning financial research and advanced technology. The platform aims to make trading smarter, efficient, and accessible.", knowmore: "/resumes/Pocketful JD.pdf" },
    { img: Kalakrit, companyName: "Kalakrit", description: "Kalakrit is a localization and cultural adaptation company helping brands connect with untapped audiences across India and global markets. Through voice-overs, dubbing, cultural translations, e-learning localization, and regional content creation, they ensure brands sound authentic in every language and region.", knowmore: "/resumes/Kalakrit JD.pdf" },
    { img: Ems, companyName: "Easy My Storage ", description: "Easy My Storage provides flexible and secure warehousing solutions designed to help families and businesses free up space without stress. From pickup and packing to safe storage and return delivery, they offer a seamless storage experience tailored to changing needs.", knowmore: "/resumes/Easy My Storage JD.pdf" },
    { img: Webgross, companyName: "Webgross", description: "Webgross is a branding agency that helps businesses build strong online visibility and brand recognition. It offers services like SEO, website design and development, content creation, and digital marketing strategies. By combining creative ideas and technical expertise, Webgross delivers effective solutions that help brands grow and stand out in a competitive digital space.", knowmore: "/resumes/Webgross JD.pdf" },
    { img: Devlofox, companyName: "Devlofox Technologies", description: "Devlofox Technologies is a digital solutions company that helps businesses strengthen their online presence through innovative design and technology. It offers services such as website development, graphic design, branding, and digital marketing. By focusing on scalable solutions, Devlofox enables businesses to build a strong digital identity in a competitive market.", knowmore: "/resumes/Devlofox Technologies JD.pdf" },
    { img: Cetpa, companyName: "Cetpa", description: "CETPA Infotech Pvt. Ltd. is an IT services and consulting company providing software and web development, digital marketing, IT support, and manpower outsourcing. It focuses on industry-oriented training and helping individuals and businesses grow in the digital era", knowmore: "/resumes/Cetpa JD.pdf" },
    { img: Spillmate, companyName: "Spillmate", description: "Spillmate is a mental healthcare platform that creates a safe and supportive space for individuals to share and process their emotions. It focuses on making mental well-being more accessible through empathetic support and user-friendly solutions.", knowmore: "/resumes/Spillmate JD.pdf" },
    { img: Harnium, companyName: "Harnium", description: "Harnium is an online marketing company that assists small businesses and fresh startups to enhance their digital footprint. The company offers impactful content, powerful branding, and strategies that resonate with people. It combines creative expertise and a bespoke approach to convert your next big idea into meaningful digital experiences.", knowmore: "/resumes/Harnium JD.pdf" },
    { img: Teri, companyName: "Teri Enterprise", description: "TERI Enterprise is a financial services firm that supports investment banks, M&A advisory firms, and private capital teams with research, valuation, and financial modeling. It combines structured analysis, disciplined execution, and client-aligned processes to deliver accurate and reliable deal support solutions.", knowmore: "/resumes/Teri Enterprise JD.pdf" },
    { img: Righto, companyName: "RightO", description: "Righto Services is a dynamic recruitment and sourcing organization specializing in end-to-end hiring solutions. We focus on delivering quality talent through strategic sourcing and efficient hiring processes across multiple industries", knowmore: "/resumes/RightO JD.pdf" },
    { img: Glovomega, companyName: "Glovomega Private Limited", description: "Glovomega Private Limited combines AI, design, and advanced technology to craft next-generation digital experiences. From web and app development to immersive 3D ecosystems, the company builds intelligent solutions that redefine innovation.", knowmore: "/resumes/Glovomega Private Limited JD.pdf " },


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
                className="relative border border-black/10 bg-white shadow-lg rounded-3xl flex flex-col w-full sm:w-90 p-5 md:p-7 gap-4 md:gap-5 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:border-yellow-50 group  mx-4 sm:mx-0"
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

export default TierCompanies2;