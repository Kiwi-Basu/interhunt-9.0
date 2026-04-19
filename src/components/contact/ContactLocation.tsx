import { motion } from "motion/react";

const ContactLocation = () => {
  return (
    <>
      <section id="Contact-location">
        <div className="min-h-screen p-6 md:p-20 py-16 md:py-20 flex flex-col items-center bg-gradient-to-br from-[#FFFFFF] via-[#FAFAFA] to-[#F1F5F9] relative overflow-hidden">

          {/* Soft theme blobs */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          {/* Heading */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl mb-8 md:mb-10 font-extrabold tracking-tight text-[#1F3A5F] text-center"
          >
            Locate <span className="text-[#CEAC81]">Us</span>
          </motion.p>

          {/* Map card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-[#CEAC81]/20 w-full max-w-6xl p-2 md:p-3 rounded-3xl shadow-xl bg-white relative z-10 hover:shadow-lg transition-all duration-300 mx-4 md:mx-0"
          >
            <iframe
              className="w-full h-64 md:h-100 rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79224.85153473914!2d77.06527153622272!3d28.6514277638802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5567911807%3A0x996e86fe24144daf!2sInstitute%20of%20Information%20Technology%20and%20Management%20(IITM)!5e0!3m2!1sen!2sin!4v1727263090895!5m2!1sen!2sin"
              loading="lazy"
              title="IITM Janakpuri Location"
            ></iframe>
          </motion.div>

          {/* Contact info cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-12 w-full max-w-6xl relative z-10 px-4 md:px-0"
          >

            {/* Email */}
            <div onClick={() => window.location.href='mailto:internware@gmail.com'} className="flex-1 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#CEAC81]/30 shadow-lg rounded-3xl flex items-center gap-6 p-7 hover:-translate-y-1 hover:shadow-2xl hover:border-[#CEAC81]/60 transition-all duration-300 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CEAC81]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#1F3A5F]/10 to-[#CEAC81]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1F3A5F]/10 transition-all duration-300 shadow-sm border border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex flex-col relative z-10">
                <p className="font-extrabold text-xl tracking-wide text-[#1F3A5F] mb-0.5">Email Us</p>
                <p className="text-[#CEAC81] font-semibold text-[15px]">internware@gmail.com</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 relative z-10">
                <div className="h-10 w-10 rounded-full bg-[#1F3A5F] flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div onClick={() => window.location.href='tel:+919785978501'} className="flex-1 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#CEAC81]/30 shadow-lg rounded-3xl flex items-center gap-6 p-7 hover:-translate-y-1 hover:shadow-2xl hover:border-[#CEAC81]/60 transition-all duration-300 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CEAC81]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#1F3A5F]/10 to-[#CEAC81]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1F3A5F]/10 transition-all duration-300 shadow-sm border border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#1F3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="flex flex-col relative z-10">
                <p className="font-extrabold text-xl tracking-wide text-[#1F3A5F] mb-0.5">Call Us</p>
                <div className="flex items-center gap-2">
                  <span className="text-[#CEAC81] font-semibold text-[15px]">+91 97859 78501</span>
                </div>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0 relative z-10">
                <div className="h-10 w-10 rounded-full bg-[#1F3A5F] flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ContactLocation;