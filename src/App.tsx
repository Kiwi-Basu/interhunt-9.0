import { Route, Routes } from "react-router"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Companies from "./pages/Companies"
import Contact from "./pages/Contact"
import Sponsor from "./pages/Sponsor"
import Auth from "./components/Authentication/Auth"
import Onboarding from "./components/Authentication/Onboarding"
import Footer from "./components/layout/Footer"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Upload from "./components/apply/UploadResume"
import Payment from "./components/apply/PaymentGateway"
import ApplyCompanies from "./components/apply/ApplyCompanies"

const App = () => {
  return (
    <>
      <section id="App" >

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Companies />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/apply/upload" element={<Upload />} />
          <Route path="/apply/payment" element={<Payment />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} />

        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App