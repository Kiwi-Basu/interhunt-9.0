import HeroSection from "../components/home/HeroSection";
import AboutEventSection from "../components/home/AboutEventSection";
import RecruitersSection from "../components/home/RecruitersSection";
import PreviousEditionsSection from "../components/home/PreviousEditionsSection";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
  return (
    <>
      <section id="Home">
        <HeroSection />
        <AboutEventSection />
        <RecruitersSection />
        <PreviousEditionsSection />
        <FAQSection />
      </section>
    </>
  );
};

export default Home;
