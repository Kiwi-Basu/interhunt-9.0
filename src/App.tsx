import { Route, Routes } from "react-router"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Companies from "./pages/Companies"
import Contact from "./pages/Contact"
import Sponsor from "./pages/Sponsor"
import Profile from "./pages/Profile"
import Auth from "./components/Authentication/Auth"
import Onboarding from "./components/Authentication/Onboarding"
import Footer from "./components/layout/Footer"

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App