import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"
// import { useNavigate } from "react-router"
// import axios from "axios"
// import { useAuth } from "../../context/AuthContext"
// import { useState } from "react"


const Auth = () => {

  // const {setUser, setIsAuthenticated} = useAuth()
  // const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(false);
  // const backendURL = import.meta.env.VITE_BACKEND_URL

  // this is the login clicking and that thing if login then home page nahi toh onboard page and login wala
  // const googleResponse = async (authResult : any) => {
  //   try {

  //     if (authResult["code"]) {
  //       const response = await axios.get(
  //         `${backendURL}/api/auth/google/callback?code=${authResult["code"]}`,
  //         {
  //           withCredentials : true
  //         }
  //       )
      

  //       if (response.data.exist) {
  //         if (setIsAuthenticated) {
  //           setIsAuthenticated(true)
  //         }

  //         try {

  //           const [studentResponse , companiesResponse] = await Promise.all([
  //             axios.get(`${backendURL}/api/students` , {withCredentials : true}),    // student ka api bhi change ig mostly yahi hona chiye waise
  //             axios.get(`${backendURL}/api/Companies` , {withCredentials : true})   // api replace with company wala
  //           ])

  //           const student = studentResponse.data.studentData;
  //           const CompanyName = companiesResponse.data?.registered ? companiesResponse.data.companyName : undefined

  //           if (setUser && student) {
  //             setUser( {
  //               id : student._id || student.id,
  //               name : student.name,
  //               email : student.email,
  //               phoneNumber : student.phoneNumber,
  //               college : student.college || student.otherCollageName,
  //               course : student.course, 
  //               year : student.year,
  //               company : student.company, // change this according to api 
  //               profileImage : student.profileImage
  //             })
  //           }

  //         } catch (error) {
  //           console.error("Error fetching profile data : " , error)
            
  //           if (setUser) {
  //             setUser ({
  //               email : response.data.email,
  //               id : response.data.userId
  //             })
  //           }
  //         }
        

  //         navigate("/")

  //       }
  //       else {
  //         if (setUser){
  //           setUser ({
  //             email : response.data.email,
  //           })
  //         }
  //         navigate("/onboarding")
  //       }
  //     }

  //   } catch (error) {
  //     console.error (error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // google error handler
  // const handleGoogleError = (error : any) => {
  //   if ( error.error === "popup_closed_by_user" || error.error === "access_denied") {
  //     console.log("Account Selection Cancelled")
  //   }
  //   else {
  //     console.log("Google Login Failed")
  //   }
  //   setIsLoading(false)
  // }

  //  checks success or fail
  // const googleLogin = useGoogleLogin ({
  //   onSuccess : googleResponse ,
  //   onError : handleGoogleError,
  //   flow : "auth-code"
  // })

  return (
    <>
      <section id="Auth">
        <div className="min-h-screen p-20 flex flex-col items-center justify-center bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden">
          
          {/* subtle theme glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1F3A5F]/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CEAC81]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 w-[450px] shadow-xl border border-[#CEAC81]/20 flex flex-col gap-6 relative z-10">
            
            <h1 className="text-3xl font-extrabold text-center tracking-wide text-[#1F3A5F]">
              Welcome Back
            </h1>

            <p className="text-center text-gray-600 leading-relaxed">
              Sign in with your Google account to register for 
              <span className="font-semibold text-[#1F3A5F]"> InternHunt 9.0 </span> 
              and start your registration.
            </p>

            <button 
              // onClick={() => {
              //   if (!isloading) {
              //     setIsLoading(true)
              //     googleLogin()
              //   }
              // }} //button unfreeze krdena
              className="flex items-center justify-center gap-4 bg-white px-6 py-3 rounded-xl shadow-md border border-[#CEAC81]/30 cursor-pointer hover:border-[#1F3A5F] hover:shadow-lg transition-all duration-300 group">
              
              <div className="w-10 h-10 flex items-center justify-center bg-[#1F3A5F]/5 rounded-full group-hover:scale-110 transition-transform">
                <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6"/>
              </div>

              <span className="text-lg font-semibold text-[#1F3A5F] group-hover:text-[#CEAC81]">
                {/* {isLoading ? "Signing in..." : "Continue with Google"}   changes accordingly */}
              </span>
            </button>

            <p className="text-xs text-center text-gray-500">
              By continuing, you agree to our Terms & Privacy Policy
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default Auth