import ContactHero from "../components/contact/Contacthero"
import ContactLocation from "../components/contact/ContactLocation"
import ContactPeople from "../components/contact/ContactPeople"
import ScrollToTop from "../components/layout/ScrolltoTop"

const Contact = () => {
  return (
    <>
      <section id="Contact">

        <ContactHero />
        <ContactPeople />
        <ContactLocation />
        <ScrollToTop />

      </section>
    </>
  )
}

export default Contact