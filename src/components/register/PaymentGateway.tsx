import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useNavigate } from "react-router-dom";

import RegisterForm from "./registerForm";
import PricingSummary from "./PricingSummary";
import PaymentOverlays from "./PaymentOverlays";

import { useAuth } from "../../context/AuthContext";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [cashfree, setCashfree] = useState<any>(null);

  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // ✅ IITM CHECK (fixed field)
  const isIITMStudent = (() => {
    const college = user?.college || "";
    return (
      college.includes("IITM") ||
      college.includes("IINTM") ||
      college.includes("ICE (MDU)") ||
      college.includes("IPITM (MDU)")
    );
  })();

  // ✅ INIT SDK
  useEffect(() => {
    const init = async () => {
      try {
        const sdk = await load({ mode: "production" });
        setCashfree(sdk);
      } catch (err) {
        console.error("Cashfree init error:", err);
      }
    };
    init();
  }, []);

  // ✅ CREATE ORDER SESSION
  // Only change the sessionGenerator function
  // ✅ CREATE ORDER SESSION
  const sessionGenerator = async () => {
    try {
      // ✅ Correct endpoint - matches your backend route
      const res = await axios.post(`${backendURL}/api/payment/createOrder`, {// Note: "createOrder" not "create-order"

        eventName: "InternHunt 9.0",
      },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // console.log("Order response:", res.data);

      // Your backend returns: { success: true, data: { paymentSessionId, orderId } }
      return res?.data?.paymentSessionId || null;

    } catch (err) {
      console.error("Session error:", err);
      return null;
    }
  };

  // ✅ REGISTER USER AFTER PAYMENT
  const registerStudent = async () => {
    try {
      await axios.post(`${backendURL}/api/internHunt9/register`, {
        email: user?.email,
        name: user?.name,
        number: user?.phoneNumber,
        collegeName: user?.college,
        course: user?.course,
        year: user?.year,
        amount: isIITMStudent ? "100" : "120",
        paymentMode: "Online",
      });
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  // ✅ MAIN PAYMENT FLOW
  const handlePayment = async () => {
    setPaymentProcessing(true);

    try {
      if (!cashfree) throw new Error("Payment SDK not loaded");

      const sessionId = await sessionGenerator();

      if (!sessionId) throw new Error("Failed to create payment session");

      const result = await cashfree.checkout({
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      });

      if (result?.paymentDetails) {
        await registerStudent();
        setPaymentSuccess(true);
      } else {
        setPaymentFailed(true);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setPaymentFailed(true);
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <>
      <section id="payment">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]"
        >
          <div className="container mx-auto px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto">

              <div className="rounded-2xl shadow-xl p-8 bg-white">

                {/* ✅ USER INFO + BENEFITS */}
                <RegisterForm />

                {/* ✅ PRICING */}
                <PricingSummary isIITMStudent={isIITMStudent} />

                {/* ✅ PAYMENT BUTTON */}
                <div className="text-center mt-10">
                  <button
                    onClick={handlePayment}
                    className="px-8 py-4 rounded-full font-extrabold shadow-2xl text-[#1F3A5F] bg-[#CEAC81] cursor-pointer hover:scale-105 transition-all duration-200"
                  >
                    Pay Now
                  </button>

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

      {/* ✅ OVERLAYS */}
      <PaymentOverlays
        paymentProcessing={paymentProcessing}
        paymentSuccess={paymentSuccess}
        paymentFailed={paymentFailed}
        paymentCancelled={paymentCancelled}
        onTryAgain={() => {
          setPaymentFailed(false);
          setPaymentCancelled(false);
        }}
        onGoToProfile={() => navigate("/dashboard/profile")}
      />
    </>
  );
};

export default PaymentGateway;