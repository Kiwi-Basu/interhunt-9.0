import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

interface FormData {
    name: string;
    phoneNumber: string;
    collageName: string;
    course: string;
    year: string;
    otherCollageName: string;
    otherCourse: string;
}

const Onboarding = () => {

  const navigate = useNavigate()
  // const [isLoading, setIsLoading] = useState(false)
  // const backendURL = import.meta.env.VITE_BACKEND_URL
  // const { user , setUser ,setIsAuthenticated } = useAuth()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    collageName: "",
    otherCollageName: "",
    course: "",
    otherCourse: "",
    year: ""
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
      if (name === "phoneNumber") {
        const phoneNumber = value.replace(/\D/g, "");
        if (phoneNumber.length <= 10) {
          setFormData(prev => ({ ...prev, [name]: phoneNumber }));
        }
      } 
      else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    };

    const isFormValid = () => {
      const {name , phoneNumber , collageName , course , year , otherCollageName , otherCourse } = formData

      return !!name.trim() && 
      phoneNumber.length === 10 &&
      !!collageName &&
      !!course &&     
      !!year &&
      (collageName !== "OTHER" || !!otherCollageName.trim()) &&
      (course !== "OTHER" || !!otherCourse.trim());
    }

    const handleSubmit = async () => {

      // test
      const finalData = {
        ...formData,
        collageName : formData.collageName === "OTHER" ? formData.otherCollageName : formData.collageName,
        course : formData.course === "OTHER" ? formData.otherCourse : formData.course,
      }
      console.log("submitted" , finalData)
      alert("registered")
      localStorage.setItem("user", JSON.stringify(finalData))
      navigate("/")

      
      // api wala
      // setIsLoading(true)
      
      // replace with apiiiiiiiiii
      // try {
        
      //   const response = await axios.post(`${backendURL}/api/students/`, {
      //     name : formData.name,
      //     email : user?.email,
      //     phoneNumber : formData.phoneNumber,
      //     collageName : formData.collageName === "OTHER" ? formData.otherCollageName : formData.collageName,
      //     course : formData.course === "OTHER" ? formData.otherCourse : formData.course,
      //     year : formData.year
      //   }, {
      //     withCredentials : true,
      //     headers : {
      //       "Content-Type" : "application/json"
      //     }
      //   })

      //   if (response.status === 201) {
      //     if(setIsAuthenticated) {
      //       setIsAuthenticated(true)
      //     }
      //     if (setUser) {
      //       setUser( {
      //         email : response.data.email,
      //         id : response.data.id,
      //         name : formData.name,
      //         phoneNumber : formData.phoneNumber,
      //         college : formData.collageName === "OTHER" ? formData.otherCollageName : formData.collageName,
      //         course : formData.course === "OTHER" ? formData.otherCourse : formData.course,
      //         year : formData.year
      //       })
      //     }

      //     console.log("Account created successfully")
      //     navigate("/")
      //   }

      // } catch (error) {
      //     console.log("Error creating account" , error)
      // } finally {
      //   setIsLoading(false)
      // }

    }



  return (
    <>
      <section id="Onboarding">
        <div className="min-h-screen p-10 flex items-center justify-center bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] from">

          <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#CEAC81]/20 p-10 flex flex-col gap-8">

            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-3xl font-extrabold text-[#1F3A5F] tracking-wide">
                Create your account
              </p>
              <p className="text-gray-600 text-sm">
                Complete your profile to continue
              </p>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
              }}
            >

              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    name = "name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    name = "phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    type="tel"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>
              </div>

              {/* College */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">College / Institution</label>
                <select
                  name = "collageName"
                  value={formData.collageName}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="IITM">IITM</option>
                  <option value="IINTM">IINTM</option>
                  <option value="ICE">ICE (MDU)</option>
                  <option value="OTHER">Other College</option>
                </select>
              </div>

              {/* College Name */}
              {formData.collageName === "OTHER" && (
                <div className="flex flex-col gap-1 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700">College Name</label>
                  <input
                    name = "otherCollageName"
                    value={formData.otherCollageName}
                    onChange={handleInputChange}
                    required
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Course</label>
                  <select
                    name = "course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="Bcom">B.Com</option>
                    <option value="BA(JMC)">BA (JMC)</option>
                    <option value="BTech">B.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="OTHER">Other Course</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Academic Year</label>
                  <select
                    name = "year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>

              </div>

              {formData.course === "OTHER" && (
                <div className="flex flex-col gap-1 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700">Course Name</label>
                  <input
                    name = "otherCourse"
                    value={formData.otherCourse}
                    onChange={handleInputChange}
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>
              )}

              <button 
                type="submit"
                disabled = {!isFormValid()}
                className="mt-4 bg-[#1F3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                Register
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onboarding;