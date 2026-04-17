import { Link } from "react-router";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Companies", href: "/company" },
    { name: "Sponsor", href: "/sponsor" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <section id="footer">
        <div className="bg-[#f5f6f743] text-[#0F172A]">

          {/* Top */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-[#1F3A5F] rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-[#CEAC81] font-extrabold text-sm">IH</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1F3A5F]">InternHunt 9.0</p>
                    <p className="text-xs text-gray-500">by Internware · IITM</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                  Where the hunt ends and the career begins. India's premier campus internship drive.
                </p>

                {/* Social */}
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-white border border-[#CEAC81]/30 rounded-full flex items-center justify-center hover:bg-[#1F3A5F] hover:text-white transition duration-300">
                    <span>in</span>
                  </a>
                  <a href="#" className="w-9 h-9 bg-white border border-[#CEAC81]/30 rounded-full flex items-center justify-center hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition duration-300">
                    <span>ig</span>
                  </a>
                  <a href="#" className="w-9 h-9 bg-white border border-[#CEAC81]/30 rounded-full flex items-center justify-center hover:bg-[#1F3A5F] hover:text-white transition duration-300">
                    <span>x</span>
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-semibold text-sm mb-5 uppercase tracking-wider text-[#1F3A5F]">
                  Quick Links
                </h3>

                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-500 text-sm hover:text-[#CEAC81] transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-sm mb-5 uppercase tracking-wider text-[#1F3A5F]">
                  Contact
                </h3>

                <div className="space-y-4">

                  <a
                    href="mailto:internware@iitm.ac.in"
                    className="flex items-center gap-3 text-gray-500 text-sm hover:text-[#1F3A5F] transition"
                  >
                    📧 internware@iitm.ac.in
                  </a>

                  <div className="flex items-start gap-3 text-gray-500 text-sm">
                    📍
                    <p>
                      Internship Cell, IITM <br />
                      Janakpuri, New Delhi
                    </p>
                  </div>

                  {/* Event Card */}
                  <div className="mt-4 p-4 bg-white border border-[#CEAC81]/30 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                    <p className="text-[#CEAC81] text-xs font-semibold">Event Date</p>
                    <p className="text-[#1F3A5F] font-bold mt-1">May 09, 2026</p>
                    <p className="text-gray-500 text-xs mt-1">On-campus · IITM Campus</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#CEAC81]/20">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              
              <p className="text-gray-400 text-xs text-center sm:text-left">
                © 2026 InternHunt 9.0 · Internware · Internship Cell, IITM
              </p>

              <div className="flex gap-5 flex-wrap justify-center">
                <a href="https://iitminternware.com/termAndconditions" target="_blank" className="text-gray-500 text-sm hover:text-[#CEAC81] transition duration-200">
                  Terms & Conditions
                </a>
                <a href="https://iitminternware.com/policy.html" target="_blank" className="text-gray-500 text-sm hover:text-[#CEAC81] transition duration-200">
                  Privacy Policy
                </a>
                <a href="https://iitminternware.com/cancellationPolicy" target="_blank" className="text-gray-500 text-sm hover:text-[#CEAC81] transition duration-200">
                  Cancellation Policy
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Footer;