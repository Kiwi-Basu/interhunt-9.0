import CurrentSponsor from "../components/sponsor/CurrentSponsor"
import PreviousSponsor from "../components/sponsor/PreviousSponsor"
import SponsorHero from "../components/sponsor/SponsorHero"
import ScrollToTop from "../components/layout/ScrolltoTop"

const Sponsor = () => {
  return (
    <>
      <section id='Sponsor'>
        <SponsorHero />
        <CurrentSponsor />        
        <PreviousSponsor />
        <ScrollToTop />
      </section>
    </>
  )
}

export default Sponsor