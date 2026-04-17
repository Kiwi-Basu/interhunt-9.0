import Hero from "../components/home/Hero";
import AboutEventSection from "../components/home/About";
import RecruitersSection from "../components/home/Companies";
import PreviousEditionsSection from "../components/home/PreviousEdition";
import FAQSection from "../components/home/FAQ";

const Home = () => {
  return (
    <>
      <section id="Home">
        <Hero />
        <AboutEventSection />
        <RecruitersSection />
        <PreviousEditionsSection />
        <FAQSection />
      </section>
    </>
  );
};


export default Home;
