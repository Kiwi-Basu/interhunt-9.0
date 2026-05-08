import { Route, Routes } from "react-router"
import {
  lazy,
  // Suspense
} from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import RenderProtectedRoute from "./components/utils/RenderProtectedRoute"
// import PageLoader from "./components/utils/PageLoader"
import { useAuth } from "./context/AuthContext"
import { AuthGuard } from "./components/Authentication/AuthGuard"

// Lazy load components
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Companies = lazy(() => import("./pages/Companies"))
const Contact = lazy(() => import("./pages/Contact"))
const Sponsor = lazy(() => import("./pages/Sponsor"))
const Auth = lazy(() => import("./components/Authentication/Auth"))
const Onboarding = lazy(() => import("./components/Authentication/Onboarding"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Profile = lazy(() => import("./pages/Profile"))
// const PaymentGateway = lazy(() => import("./components/register/PaymentGateway"))
const ApplyCompanies = lazy(() => import("./components/apply/ApplyCompanies"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App = () => {

  const { isAuthenticated, hasProfile, hasPurchased, isLoading } = useAuth()
  return (
    <>
      <section id="App" >

        <Navbar />
        <AuthGuard>
          {/* <Suspense fallback={<PageLoader />}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Companies />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={
              <RenderProtectedRoute
                condition={!isAuthenticated}
                renderPage={<Auth />}
                fallback="/dashboard"
                errorMessage="You are already logged in"
                isLoading={isLoading}
              />
            } />

            {/* <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} /> */}


            <Route path="/dashboard/profile" element={
              <RenderProtectedRoute
                condition={isAuthenticated}
                renderPage={<Profile />}
                fallback={"/auth"}
                errorMessage="Access denied"
                isLoading={isLoading}
                devMode
              />
            } />
            {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply/payment" element={<PaymentGateway />} />
          <Route path="/apply/companies" element={<ApplyCompanies />} /> */}


            <Route
              path="/dashboard"
              element={
                <RenderProtectedRoute
                  condition={isAuthenticated && hasProfile && hasPurchased}
                  renderPage={<Dashboard />}
                  fallback={!isAuthenticated ? "/auth" : "/"}
                  errorMessage="Access denied: payment required"
                  isLoading={isLoading}
                  devMode
                />
              }
            />

            {/* <Route
              path="/apply/payment"
              element={
                <RenderProtectedRoute
                  condition={isAuthenticated && hasProfile && !hasPurchased}
                  renderPage={<PaymentGateway />}
                  fallback={!isAuthenticated ? "/auth" : !hasProfile ? "/onboarding" : "/dashboard"}
                  errorMessage="Access denied: already purchased or no profile"
                  isLoading={isLoading}
                />
              }
            /> */}

            <Route
              path="/apply/companies"
              element={
                <RenderProtectedRoute
                  condition={isAuthenticated && hasProfile && hasPurchased}
                  renderPage={<ApplyCompanies />}
                  fallback={!isAuthenticated ? "/auth" : !hasProfile ? "/onboarding" : "/apply/payment"}
                  errorMessage="Access denied: payment required"
                  isLoading={isLoading}
                />
              }
            />

            <Route
              path="/onboarding"
              element={
                <RenderProtectedRoute
                  condition={isAuthenticated}
                  renderPage={<Onboarding />}
                  fallback="/auth"
                  errorMessage="Access denied"

                />
              }
            />


            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* </Suspense> */}
        </AuthGuard>
        <Footer />
      </section>
    </>
  )
}

export default App