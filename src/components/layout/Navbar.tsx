import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";

const Navbar = () => {
  const scrollYProgress = useScroll().scrollYProgress

  const width = useTransform(scrollYProgress, [0.02, 0.06], ["95%", "50%"]);

  const bg = useTransform(scrollYProgress, [0.04, 0.06], ["rgba(255,255,255,0)", "rgba(255,255,255)"]);

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Company", link: "/company" },
    { name: "Sponsor", link: "/sponsor" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <section id="Navbar">
        <motion.div
          style={{
            width,
            backgroundColor: bg,
          }}
          className="fixed p-3.75 top-4 left-1/2 -translate-x-1/2 z-50 rounded-full flex justify-between items-center px-6"
        >
          <p className="font-semibold">Internhunt</p>

          <div className="flex gap-5 text-sm">
            {navItems.map((nav, idx) => {
              return (
                <Link to={nav.link} key={idx} className="relative text-xl cursor-pointer group">
                  {nav.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              )
            })}
          </div>

          <p className="text-sm font-medium">Login</p>
        </motion.div>
      </section>

    </>
  );
};

export default Navbar;