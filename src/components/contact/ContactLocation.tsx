const ContactLocation = () => {
  return (
    <>
      <section id="Contact-location">
        <div className="min-h-screen p-20 flex flex-col items-center bg-linear-to-br from-[#f6f0f0] via-[#e8dede] to-[#d6cfcf]">

          <p className="text-6xl mb-10 font-extrabold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-black via-gray-700 to-black drop-shadow-lg">Locate Us</p>

          <div className="border-2 border-white/70 p-2 rounded-2xl shadow-xl backdrop-blur-2xl">
            <iframe className="w-6xl h-100  rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79224.85153473914!2d77.06527153622272!3d28.6514277638802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5567911807%3A0x996e86fe24144daf!2sInstitute%20of%20Information%20Technology%20and%20Management%20(IITM)!5e0!3m2!1sen!2sin!4v1727263090895!5m2!1sen!2sin"  loading="lazy"  title="IITM Janakpuri Location" ></iframe>
          </div>

          <div className="flex gap-10 my-10 justify-between  w-6xl">

            <div className="flex-1 border items-center flex gap-5 p-5 rounded-2xl border-white/30 bg-white/20 backdrop-blur-xl shadow-xl">
              
              <div className="h-25 w-25 border rounded-2xl">
              {/* img */}
              </div>

              <p className="font-extrabold text-4xl tracking-widest">Email</p>

            </div>
            <div className="flex-1 border items-center flex gap-5 p-5 rounded-2xl border-white/30 bg-white/20 backdrop-blur-xl shadow-xl">
              
              <div className="h-25 w-25 border rounded-2xl">
              {/* img */}
              </div>

              <p className="font-extrabold text-4xl tracking-widest">Phone</p>

            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default ContactLocation