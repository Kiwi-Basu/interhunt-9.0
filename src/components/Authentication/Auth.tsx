import GoogleIcon from "../../assets/google-icon-logo-svgrepo-com.svg"

const Auth = () => {
  return (
    <>
      <section id="Auth">
        <div className="min-h-screen p-20 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
          
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 w-[450px] shadow-2xl border border-gray-200 flex flex-col gap-6">
            
            <h1 className="text-3xl font-extrabold text-center tracking-wide text-gray-800">
              Welcome Back
            </h1>

            <p className="text-center text-gray-600 leading-relaxed">
              Sign in with your Google account to register for 
              <span className="font-semibold text-gray-800"> InterHunt 9.0</span> 
              and start your registration.
            </p>

            <div className="flex items-center justify-center gap-4 bg-white px-6 py-3 rounded-xl shadow-md border border-gray-300 cursor-pointer hover:border-gray-800 hover:shadow-xl transition-all duration-300 group">
              
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full group-hover:scale-110 transition-transform">
                <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6"/>
              </div>

              <span className="text-lg font-semibold text-gray-800 group-hover:text-black">
                Continue with Google
              </span>
            </div>

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