import { Link } from "react-router"

const About = () => {
  return (
    <>
      <section id="about">
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 md:gap-12 p-6 md:p-20 py-16 md:py-20 bg-linear-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F7]">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#1F3A5F] tracking-tight text-center">
            About <span className="text-[#CEAC81]">InternHunt</span>
          </h1>

          {/* Content Box */}
          <div className="w-full max-w-4xl bg-white border border-[#CEAC81]/30 rounded-3xl shadow-lg p-6 md:p-10 text-center leading-relaxed">
            <p className="text-base md:text-xl text-[#0F172A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere, quas ratione,
              veritatis sint perferendis quaerat explicabo accusantium sit doloribus nisi fuga aut nihil voluptatem.
              <br /><br />
              Aperiam porro cupiditate consequatur, culpa dolores eum perspiciatis nostrum similique facilis nobis illum
              in error laudantium provident! Sed, saepe, minima ipsum ullam consectetur pariatur similique libero.
              <br /><br />
              Architecto, rerum. Nobis cum odio quis sit voluptatum ut libero natus, fugiat illum expedita quisquam nisi
              asperiores labore cumque obcaecati repudiandae.
            </p>
          </div>

          {/* Button */}
          <Link to="/about">
            <button className="px-10 py-3 bg-[#1F3A5F] text-white rounded-full shadow-md hover:shadow-[#1F3A5F]/30 cursor-pointer hover:scale-105 flex items-center gap-2 duration-300 hover:bg-[#CEAC81] hover:text-[#1F3A5F]">
              <p className="text-lg font-semibold">Know More</p>
              <span className="text-2xl">→</span>
            </button>
          </Link>

        </div>
      </section>
    </>
  )
}

export default About