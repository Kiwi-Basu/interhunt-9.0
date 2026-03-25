import CurrentSponsor from "../components/sponsor/CurrentSponsor"
import PreviousSponsor from "../components/sponsor/PreviousSponsor"

const Sponsor = () => {
  return (
    <>
      <section id='Sponsor'>
        <CurrentSponsor />        
        <PreviousSponsor />
      </section>
    </>
  )
}

export default Sponsor