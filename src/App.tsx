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
import { useAuth } from "./context/AuthContext"

const App = () => {

  const { setUser , isAuthenticated , setIsAuthenticated} = useAuth()

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
          <Route path="/onboarding" element={<Onboarding />} />

          {/* <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} /> */}


          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} />
          


          {/* <Route
            path="/dashboard"
            element={
              <RenderProtectedRoute
                condition={isAuthenticated}
                renderPage={<Dashboard />}
                fallback={!isAuthenticated ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path="/apply/payment"
            element={
              <RenderProtectedRoute
                condition={isAuthenticated}
                renderPage={<PaymentGateway />}
                fallback={!isAuthenticated ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path="/apply/companies"
            element={
              <RenderProtectedRoute
                condition={isAuthenticated}
                renderPage={<ApplyCompanies />}
                fallback={!isAuthenticated ? "/auth" : "/apply/payment"}
                errorMessage="Access denied"
              />
            }
          />

          <Route
            path = "/onboarding"
            element ={
              <RenderProtectedRoute
                condition={isAuthenticated}
                renderPage={<Onboarding />}
                fallback={!isAuthenticated ? "/auth" : "/dashboard"}
                errorMessage="Access not denied"
              />
            }
          /> */}


        </Routes>
        <Footer />
      </section>
    </>
  )
}

export default App