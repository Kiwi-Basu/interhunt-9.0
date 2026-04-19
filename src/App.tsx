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
import PaymentGateway from "./components/register/PaymentGateway"
import ApplyCompanies from "./components/apply/ApplyCompanies"
import RenderProtectedRoute from "./components/utils/RenderProtectedRoute"
import useLocalStorage from "./hooks/useLocalStorage"

const App = () => {

  const [isLoggedIn] = useLocalStorage("isLoggedIn", true)
  const [isRegistered] = useLocalStorage("isRegistered", true)
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
          <Route path="/auth" element={<Auth />} />

          {/* <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} /> */}


          <Route path="/dashboard/profile" element={<Profile />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/upload" element={<Upload />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} />
           */}


          <Route
            path="/dashboard"
            element={
              <RenderProtectedRoute
                condition={isLoggedIn && isRegistered}
                renderPage={<Dashboard />}
                fallback={!isLoggedIn ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path="/apply/payment"
            element={
              <RenderProtectedRoute
                condition={isLoggedIn && isRegistered}
                renderPage={<PaymentGateway />}
                fallback={!isLoggedIn ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path="/apply/companies"
            element={
              <RenderProtectedRoute
                condition={isLoggedIn && isRegistered}
                renderPage={<ApplyCompanies />}
                fallback={!isLoggedIn ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path = "/onboarding"
            element ={
              <RenderProtectedRoute
                condition={isLoggedIn}
                renderPage={<Onboarding />}
                fallback={!isLoggedIn ? "/auth"}
                errorMessage="Access denied"
              />
            }
          />


        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App