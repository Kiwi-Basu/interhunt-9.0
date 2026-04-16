import CurrentSponsor from "../components/sponsor/CurrentSponsor"
import PreviousSponsor from "../components/sponsor/PreviousSponsor"
import SponsorHero from "../components/sponsor/SponsorHero"

const Sponsor = () => {
  return (
    <>
      <section id='Sponsor'>
        <SponsorHero />
        <CurrentSponsor />        
        <PreviousSponsor />
      </section>
    </>
  )
}

export default Sponsor