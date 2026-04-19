import AboutHero from "../components/about/AboutHero"
import AboutInterhunt from "../components/about/AboutInterhunt"
import AboutInternware from "../components/about/AboutInternware"
import ScrollToTop from "../components/layout/ScrolltoTop"

const About = () => {
  return (
    <>
      <section id="About">
        <AboutHero />
        <AboutInternware />
        <AboutInterhunt />
        <ScrollToTop />
      </section>
    </>
  )
}

export default About