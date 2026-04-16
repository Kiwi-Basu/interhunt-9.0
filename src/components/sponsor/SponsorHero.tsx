const SponsorHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f6f7] overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Shapes */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-[#1e3a5f] rounded-br-[100px] opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#c9a87c] rounded-tl-[100px] opacity-90"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1e293b]">
          Sponsor{" "}
          <span className="text-[#1e3a5f]">InterHunt</span>{" "}
          <span className="text-[#c9a87c]">9.0</span>
        </h1>

        {/* Short line */}
        <p className="text-gray-600 text-base max-w-xl">
          Connect with top talent and grow your brand.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-6">

          <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#162c47] transition">
            Become a Sponsor
          </button>

          <button className="border border-[#1e3a5f] text-[#1e3a5f] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1e3a5f] hover:text-white transition">
            Brochure
          </button>

        </div>

      </div>
    </section>
  );
};

export default SponsorHero;