import { motion, useScroll, useTransform } from "motion/react";
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/Asset 1@4x.png";
import { IoPersonCircleOutline, IoMenu, IoClose } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ FIXED (single call)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const scrollYProgress = useScroll().scrollYProgress;

  const width = useTransform(scrollYProgress, [0.02, 0.06], ["95%", "50%"]);
  const bg = useTransform(
    scrollYProgress,
    [0.02, 0.06],
    ["rgba(255,255,255,0)", "#1F3A5F"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.02, 0.06],
    ["#1F3A5F", "#ffffff"]
  );

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Companies", link: "/company" },
    { name: "Sponsor Us", link: "/sponsor" },
    { name: "Contact Us", link: "/contact" },
  ];

  // ✅ Resolve image safely
  const getProfileImage = (img?: string) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `${import.meta.env.VITE_BACKEND_URL}/${img}`;
  };

  const profileImg = getProfileImage(user?.profileImage);

  // Close dropdown outside click
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

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <section id="Navbar">
      <motion.div
        style={{ width, backgroundColor: bg, color }}
        className="fixed p-2 lg:p-3.75 top-2 lg:top-4 left-1/2 -translate-x-1/2 z-50 rounded-full flex justify-between items-center px-4 lg:px-6 w-[95%] lg:w-auto min-w-[300px]"
      >
        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center pr-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl cursor-pointer"
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={scrollToTop}
          className="mr-auto lg:mr-0 flex items-center"
        >
          <img src={logo} alt="InternHunt 9.0" className="h-5" />
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-5 text-sm">
          {navItems.map((nav, idx) => (
            <NavLink
              to={nav.link}
              key={idx}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `relative text-lg cursor-pointer group transition-colors ${isActive ? "text-[#CEAC81]" : "hover:text-[#CEAC81]"
                }`
              }
            >
              {nav.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#CEAC81] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="relative" ref={dropdownRef}>
          {user ? (
            <>
              {/* ✅ FIXED PROFILE IMAGE */}
              {profileImg ? (
                <img
                  key={profileImg} // 🔥 forces refresh when image changes
                  src={profileImg}
                  alt="profile"
                  className="h-10 w-10 rounded-full cursor-pointer object-cover"
                  onClick={() => setIsOpen((prev) => !prev)}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              ) : (
                <IoPersonCircleOutline
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              )}

              {/* DROPDOWN */}
              {isOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50 text-black">
                  <NavLink
                    to="/dashboard/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </NavLink>

                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    DashBoard
                  </NavLink>

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
            <NavLink
              to="/auth"
              className="relative text-base lg:text-xl cursor-pointer hover:text-[#CEAC81] transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[95%] bg-[#1F3A5F] text-white rounded-2xl shadow-xl flex flex-col items-center py-6 gap-4 z-40 border border-[#CEAC81]/20 backdrop-blur-md">
          {navItems.map((nav, idx) => (
            <NavLink
              to={nav.link}
              key={idx}
              className="text-lg font-medium hover:text-[#CEAC81] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      )}
    </section>
  );
};

export default Navbar;