import { motion, useScroll, useTransform } from "motion/react";
import { Link, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/Asset 1@4x.png";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();

  // 🔥 user from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // 🔥 dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 🔥 scroll animation
  const scrollYProgress = useScroll().scrollYProgress;

  const width = useTransform(scrollYProgress, [0.02, 0.06], ["95%", "50%"]);

  const bg = useTransform(
    scrollYProgress,
    [0.04, 0.06],
    ["rgba(255,255,255,0)", "#1F3A5F"]
  );

  const color = useTransform(
    scrollYProgress,
    [0.04, 0.06],
    ["#1F3A5F", "#ffffff"]
  );

  // 🔥 navbar items
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Company", link: "/company" },
    { name: "Sponsor", link: "/sponsor" },
    { name: "Contact", link: "/contact" },
  ];

  // 🔥 close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsOpen(false);
    navigate("/"); // go home
    window.location.reload(); // force UI refresh (since using localStorage)
  };

  return (
    <section id="Navbar">
      <motion.div
        style={{
          width,
          backgroundColor: bg,
          color: color,
        }}
        className="fixed p-3.75 top-4 left-1/2 -translate-x-1/2 z-50 rounded-full flex justify-between items-center px-6"
      >
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="InternHunt 9.0" className="h-5" />
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-5 text-sm">
          {navItems.map((nav, idx) => (
            <Link
              to={nav.link}
              key={idx}
              className="relative text-xl cursor-pointer group"
            >
              {nav.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#CEAC81] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="relative" ref={dropdownRef}>
          {user ? (
            <>
              {/* PROFILE ICON */}
              <IoPersonCircleOutline
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              />

              {/* DROPDOWN */}
              {isOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                  <Link
                    to="/dashboard/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    DashBoard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/auth"
              className="relative text-xl cursor-pointer hover:text-[#CEAC81] transition"
            >
              Login
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;