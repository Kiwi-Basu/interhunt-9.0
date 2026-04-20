import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
import { useNavigate } from "react-router"
import axios from "axios"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"



const Auth = () => {

  const { setUser, setIsAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL

  // this is the login clicking and that thing if login then home page nahi toh onboard page and login wala
  const googleResponse = async (authResult: any) => {
    try {

      if (authResult["code"]) {
        const response = await axios.get(
          `${backendURL}/api/auth/google/callback?code=${authResult["code"]}`,
          {
            withCredentials: true
          }
        )


        if (response.data.exist) {
          if (setIsAuthenticated) {
            setIsAuthenticated(true)
          }

          try {

            const [studentResponse] = await Promise.all([  // companiesResponse is not used so removed "comma dal ka company ka dalna"
              axios.get(`${backendURL}/api/students`, { withCredentials: true }),    // student ka api bhi change ig mostly yahi hona chiye waise
              // axios.get(`${backendURL}/api/companies` , {withCredentials : true})   // api replace with company wala
            ])

            const student = studentResponse.data.studentData;

            // phase 2 ka hai
            // const CompanyName = companiesResponse.data?.registered ? companiesResponse.data.companyName : undefined

            if (setUser && student) {
              setUser({
                id: student._id || student.id,
                name: student.name,
                email: student.email,
                phoneNumber: student.phoneNumber,
                college: student.college || student.otherCollageName,
                course: student.course,
                year: student.year,
                // company : student.company, // change this according to api 
                profileImage: student.profileImage
              })
            }

          } catch (error) {
            console.error("Error fetching profile data : ", error)

            if (setUser) {
              setUser({
                email: response.data.email,
                id: response.data.userId
              })
            }
          }


          navigate("/")

        }
        else {
          if (setUser) {
            setUser({
              email: response.data.email,
            })
          }
          if (setIsAuthenticated) {
            setIsAuthenticated(true)
          }
          navigate("/onboarding")
        }
      }

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  // google error handler
  const handleGoogleError = (error: any) => {
    if (error.error === "popup_closed_by_user" || error.error === "access_denied") {
      // console.log("Account Selection Cancelled")
    }
    else {
      // console.log("Google Login Failed")
    }
    setIsLoading(false)
  }

  //  checks success or fail
  const googleLogin = useGoogleLogin({
    onSuccess: googleResponse,
    onError: handleGoogleError,
    flow: "auth-code"
  })

  return (
    <>
      <section id="Auth">
        <div className="min-h-screen p-6 md:p-20 flex flex-col items-center justify-center bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden">

          {/* subtle theme glow */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 w-full max-w-[450px] shadow-xl border border-[#CEAC81]/20 flex flex-col gap-5 md:gap-6 relative z-10 m-4 md:m-0">

            <h1 className="text-2xl md:text-3xl font-extrabold text-center tracking-wide text-[#1F3A5F]">
              Welcome Back
            </h1>

            <p className="text-center text-gray-600 leading-relaxed">
              Sign in with your Google account to register for
              <span className="font-semibold text-[#1F3A5F]"> InternHunt 9.0 </span>
              and start your registration.
            </p>

            <button
              onClick={() => {
                if (!isLoading) {
                  setIsLoading(true)
                  googleLogin()
                }
              }} //button unfreeze krdena
              className="flex items-center justify-center gap-3 md:gap-4 bg-white px-4 md:px-6 py-3 rounded-xl shadow-md border border-[#CEAC81]/30 cursor-pointer hover:border-[#1F3A5F] hover:shadow-lg transition-all duration-300 group">

              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#1F3A5F]/5 rounded-full group-hover:scale-110 transition-transform">
                <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="text-base md:text-lg font-semibold text-[#1F3A5F]">Signing in...</span>
                </div>
              ) : (
                <span className="text-base md:text-lg font-semibold text-[#1F3A5F] group-hover:text-[#CEAC81]">
                  Continue with Google
                </span>
              )}
            </button>

            <p className="text-xs text-center text-gray-500">
              By continuing, you agree to our <span className="font-semibold text-[#1F3A5F]">Terms & Privacy Policy</span>
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default Auth