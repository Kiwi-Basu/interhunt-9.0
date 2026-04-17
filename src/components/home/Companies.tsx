import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Companies = () => {
  const companies = [
    { name: "Cetpa", initials: "CT" },
    { name: "Decathlon", initials: "DC" },
    { name: "CSA Investments", initials: "CSA" },
    { name: "Growthclues", initials: "GC" },
    { name: "Kalakriti", initials: "KK" },
    { name: "Easy My Storage", initials: "EMS" },
    { name: "Device Disk", initials: "DD" },
    { name: "Datsme", initials: "DM" },
    { name: "Gradhub", initials: "GH" },
    { name: "Group Media", initials: "GM" },
  ];

  return (
    <>
      <section id="Home-Company">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 py-16 md:py-20 gap-8 md:gap-14 bg-linear-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9]">

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1F3A5F] tracking-tight text-center">
            Our <span className="text-[#CEAC81]">Companies</span>
          </h1>

          {/* Grid FIXED */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl">
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-[#CEAC81]/20 shadow-sm rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 30px rgba(31,58,95,0.18)",
                }}
              >
                {/* Logo */}
                <div className="w-14 h-14 rounded-full bg-[#1F3A5F] flex items-center justify-center shadow-md">
                  <span className="text-[#CEAC81] font-bold text-lg">
                    {company.initials}
                  </span>
                </div>

                {/* Name */}
                <p className="text-[#0F172A] font-medium text-center text-sm">
                  {company.name}
                </p>

                {/* Accent */}
                <div className="w-6 h-[2px] bg-[#CEAC81]/60"></div>
              </motion.div>
            ))}
          </div>

          {/* Button FIXED */}
          <Link to="/company">
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