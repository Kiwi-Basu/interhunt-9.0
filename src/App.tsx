import { Route, Routes } from "react-router"
import Navbar from "./components/layout/Navbar"
import About from "./pages/About"
import Companies from "./pages/Companies"
import Contact from "./pages/Contact"
import Sponsor from "./pages/Sponsor"
import Profile from "./pages/Profile"

  const App = () => {
    return (
        <>
          <section id = "App" >
            
            <Navbar />
            <Routes>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/company" element={<Companies/>}/>
              <Route path="/sponsor" element={<Sponsor/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </section>
        </>
    )
  }

  export default App