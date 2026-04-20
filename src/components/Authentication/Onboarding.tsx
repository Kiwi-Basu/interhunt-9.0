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
  const [isLoading, setIsLoading] = useState(false)
  const backendURL = import.meta.env.VITE_BACKEND_URL
  const { user, setUser, setIsAuthenticated, setIsRegistered } = useAuth()

  const getYearOptions = (course : string) => {
    switch (course) {
      case "BTech":
        return [1, 2, 3, 4];
      case "MBA":
      case "MCA":
        return [1, 2];
      case "BCA":
      case "BBA":
      case "Bcom":
      case "BA(JMC)":
        return [1, 2, 3];
      default:
        return [];
    }
  };


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
    const { name, phoneNumber, collageName, course, year, otherCollageName, otherCourse } = formData

    return !!name.trim() &&
      phoneNumber.length === 10 &&
      !!collageName &&
      !!course &&
      !!year &&
      (collageName !== "OTHER" || !!otherCollageName.trim()) &&
      (course !== "OTHER" || !!otherCourse.trim());
  }

  const handleSubmit = async () => {
    const finalData = {
      ...formData,
      collageName: formData.collageName === "OTHER" ? formData.otherCollageName : formData.collageName,
      course: formData.course === "OTHER" ? formData.otherCourse : formData.course,
    }

    // console.log("submitted", finalData)

    // ✅ UNCOMMENT AND FIX THIS
    setIsLoading(true)

    try {
      const response = await axios.post(`${backendURL}/api/students`, {
        name: formData.name,
        email: user?.email,  // Make sure user.email exists from Google login
        phoneNumber: formData.phoneNumber,
        collageName: finalData.collageName,
        course: finalData.course,
        year: formData.year
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })

      // console.log("API Response:", response.data)

      if (response.status === 201 || response.status === 200) {
        // Update localStorage
        const userData = {
          id: response.data.data?.id || response.data.id,
          email: response.data.data?.email || response.data.email,
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          college: finalData.collageName,
          course: finalData.course,
          year: formData.year,
          collageName: finalData.collageName,
        }

        if (setIsAuthenticated) {
          setIsAuthenticated(true)
        }
        setIsRegistered(true)

        if (setUser) {
          setUser(userData)
        }

        navigate("/")
      }
    } catch (error) {
      // console.log("Error creating account", (error as import("axios").AxiosError)?.response?.data || error)
      const axiosError = error as import("axios").AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || "Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }





  return (
    <>
      <section id="Onboarding">
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 flex items-center justify-center bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">

          <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#CEAC81]/20 p-6 sm:p-8 md:p-10 flex flex-col gap-6">

            {/* Header */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F]">
                Create your account
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Complete your profile to continue
              </p>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    type="tel"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>

              </div>

              {/* College */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">College / Institution</label>
                <select
                  name="collageName"
                  value={formData.collageName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                >
                  <option value="" disabled>Select</option>
                  <option value="IITM">IITM</option>
                  <option value="IINTM">IINTM</option>
                  <option value="ICE">ICE (MDU)</option>
                  <option value="OTHER">Other College</option>
                </select>
              </div>

              {/* Other College */}
              {formData.collageName === "OTHER" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">College Name</label>
                  <input
                    name="otherCollageName"
                    value={formData.otherCollageName}
                    onChange={handleInputChange}
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>
              )}

              {/* Course + Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  >
                    <option value="" disabled>Select...</option>
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
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    disabled={!formData.course} // optional UX improvement
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  >
                    <option value="" disabled>Select...</option>

                    {getYearOptions(formData.course).map((year) => (
                      <option key={year} value={year}>
                        {year === 1 ? "1st Year" :
                        year === 2 ? "2nd Year" :
                        year === 3 ? "3rd Year" :
                        "4th Year"}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Other Course */}
              {formData.course === "OTHER" && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Course Name</label>
                  <input
                    name="otherCourse"
                    value={formData.otherCourse}
                    onChange={handleInputChange}
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#CEAC81]/50 focus:border-[#CEAC81]"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid()}
                className="mt-2 bg-[#1F3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#CEAC81] hover:text-[#1F3A5F] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onboarding;