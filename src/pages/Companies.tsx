import CompanyHero from "../components/company/CompanyHero"
import TierCompanies1 from "../components/company/TierCompanies1"
import TierCompanies2 from "../components/company/TierCompanies2"
import TierCompanies3 from "../components/company/TierCompanies3"
import ScrollToTop from "../components/layout/ScrolltoTop"

const Companies = () => {
  return (
    <>
      <section id="Companies">
        <CompanyHero />
        <TierCompanies1 />
        <TierCompanies2 />
        <TierCompanies3 />
        <ScrollToTop />

      </section>
    </>
  )
}

export default Companies