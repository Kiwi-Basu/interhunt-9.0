import ContactHero from "../components/contact/Contacthero"
import ContactLocation from "../components/contact/ContactLocation"
import ContactPeople from "../components/contact/ContactPeople"

const Contact = () => {
  return (
    <>
      <section id="Contact">

        <ContactHero />
        <ContactPeople />
        <ContactLocation />

      </section>
    </>
  )
}

export default Contact