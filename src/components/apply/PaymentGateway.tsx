import { useEffect, useState } from "react";
import PaymentButton from "../utils/PaymentButton";
import { motion } from "framer-motion";

import type { UserInfo } from "../../types/user";

const PaymentGateway = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [isIITMStudent, setIsIITMStudent] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);

      const college = parsedUserInfo.collageName || "";
      setIsIITMStudent(
        college.includes("IITM") ||
        college.includes("IINTM") ||
        college.includes("ICE (MDU)") ||
        college.includes("IPITM (MDU)")
      );
    }
  }, []);

  return (
    <>
      <section id="payment">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7] relative overflow-hidden"
        >

          {/* Background accents */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#CEAC81]/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#1F3A5F]/10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
            <div className="max-w-4xl mx-auto">

              {/* HEADER */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F3A5F]">
                  Register for{" "}
                  <span className="text-[#CEAC81]">InternHunt 9.0</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Complete your registration by making the payment
                </p>
              </div>

              {/* MAIN CARD */}
              <div className="rounded-2xl shadow-xl p-8 mb-10 border border-[#CEAC81]/20 bg-white">

                {/* USER INFO */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
                    Registration Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <p className="font-medium">Name:</p>
                      <p>{userInfo.name || "Not available"}</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>{localStorage.getItem("gmail") || "Not available"}</p>
                    </div>
                    <div>
                      <p className="font-medium">College:</p>
                      <p>{userInfo.collageName || "Not available"}</p>
                    </div>
                    <div>
                      <p className="font-medium">Course:</p>
                      <p>{userInfo.course || "Not available"}</p>
                    </div>
                    <div>
                      <p className="font-medium">Year:</p>
                      <p>{userInfo.year || "Not available"}</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p>{userInfo.phoneNumber || "Not available"}</p>
                    </div>
                  </div>
                </div>

                {/* PRICING */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
                    Registration Fee
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    {isIITMStudent ? (
                      <div className="rounded-xl p-6 border-2 border-[#CEAC81] bg-[#CEAC81]/10">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-xl font-bold text-[#1F3A5F]">
                            IITM Group
                          </h3>
                          <span className="bg-[#1F3A5F] text-white text-xs px-3 py-1 rounded-full">
                            Your Category
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                          For IITM, IINTM & ICE (MDU) students
                        </p>

                        <p className="text-3xl font-bold text-[#1F3A5F]">
                          ₹100
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-xl p-6 border-2 border-[#CEAC81] bg-[#CEAC81]/10">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-xl font-bold text-[#1F3A5F]">
                            Other Colleges
                          </h3>
                          <span className="bg-[#1F3A5F] text-white text-xs px-3 py-1 rounded-full">
                            Your Category
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                          For all other institutions
                        </p>

                        <p className="text-3xl font-bold text-[#1F3A5F]">
                          ₹120
                        </p>
                      </div>
                    )}

                  </div>
                </div>

                {/* BENEFITS */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-[#1F3A5F]">
                    Benefits of Registration
                  </h2>

                  <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                    {[
                      "Access to exclusive internship opportunities",
                      "Networking with industry professionals",
                      "Workshops & skill sessions",
                      "Resume review",
                      "Interview opportunities",
                      "Real-world experience",
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#CEAC81]">✔</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PAYMENT */}
                <div className="text-center mt-10">
                  <div className="inline-block">
                    <PaymentButton />
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    By completing payment, you agree to our{" "}
                    <a
                      href="https://iitminternware.com/termAndconditions"
                      target="_blank"
                      className="underline text-[#1F3A5F] hover:text-[#CEAC81]"
                    >
                      terms & conditions
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>

        </motion.div>
      </section>
    </>
  );
};

export default PaymentGateway;