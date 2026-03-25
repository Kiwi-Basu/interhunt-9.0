const TierCompanies3 = () => {
  const company3 = [
    {
      img: "image",
      companyName: "Something",
      description: "something something something",
      knowmore: "pdf"
    },
    {
      img: "image2",
      companyName: "TechNova",
      description: "A leading company in AI and machine learning solutions.",
      knowmore: "pdf"
    },
    {
      img: "image3",
      companyName: "CodeCraft",
      description: "Focused on building scalable web and mobile applications.",
      knowmore: "pdf"
    },
    {
      img: "image4",
      companyName: "DataSphere",
      description: "Provides advanced data analytics and cloud services.",
      knowmore: "pdf"
    },
    {
      img: "image5",
      companyName: "InnoSoft",
      description: "Innovative software solutions for modern businesses.",
      knowmore: "pdf"
    },
    {
      img: "image6",
      companyName: "NextGen Systems",
      description: "Specializes in cybersecurity and IT infrastructure.",
      knowmore: "pdf"
    }
  ];
  return (
    <>
      <section id="Tier-3-company">
        <div className="min-h-screen bg-linear-to-br from-[#f6f0f0] via-[#e8dede] to-[#d6cfcf] flex flex-col items-center p-20">
          
          <p className="text-6xl mb-5 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">
            Tier 3
          </p>
          <div className="flex flex-wrap justify-evenly">
            {company3.map((company,idx)=> {
              return (
                <div key={idx} className="relative  border-2 border-[#a75e11]/40 bg-black/10 backdrop-blur-xl shadow-2xl rounded-3xl flex flex-col w-75 p-6 gap-4 mt-10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  
                  <img 
                    src={company.img} 
                    alt="" 
                    className="bg-white/80 p-3 rounded-2xl h-24 w-24 self-center shadow-md transition-transform duration-300 hover:rotate-6 hover:scale-110"
                  />

                  <p className="text-center font-bold text-2xl text-gray-900 bg-white/70 backdrop-blur-md rounded-xl py-1 shadow-inner">
                    {company.companyName}
                  </p>

                  <div className=" bg-white/60 backdrop-blur-md rounded-xl p-3 text-justify  text-gray-700 leading-relaxed shadow-inner">
                    {company.description}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 font-mono hover:cursor-pointer hover:scale-95 duration-75   rounded-xl py-2 bg-white/60 px-1  tracking-wider text-xl ">Know More</button>
                    <button className="flex-1 font-mono hover:cursor-pointer hover:scale-95 duration-75  rounded-xl py-2 bg-white/60 px-1  tracking-wider text-xl ">Apply</button>
                  </div>

                </div>

              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default TierCompanies3