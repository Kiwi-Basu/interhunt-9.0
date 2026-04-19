import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useNavigate } from "react-router-dom";

import RegisterForm from "./registerForm";
import PricingSummary from "./PricingSummary";
import PaymentOverlays from "./PaymentOverlays";

import type { UserInfo } from "../../types/user";

const PaymentGateway = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [isIITMStudent, setIsIITMStudent] = useState(false);

  const [cashfree, setCashfree] = useState<any>(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);

  const url = import.meta.env.VITE_SERVER_URL;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserInfo(data);

    const college = data.collageName || "";
    setIsIITMStudent(
      college.includes("IITM") ||
      college.includes("IINTM") ||
      college.includes("ICE (MDU)") ||
      college.includes("IPITM (MDU)")
    );
  }, []);

  useEffect(() => {
    load({ mode: "production" }).then(setCashfree);
  }, []);

  const sessionGenerator = async () => {
    const orderId = `order_${Date.now()}`;

    const res = await axios.post(`${url}/create-order`, {
      order_amount: isIITMStudent ? "100" : "120",
      order_id: orderId,
      order_currency: "INR",
      customer_details: {
        customer_id: orderId,
        customer_name: userInfo.name,
        customer_email: localStorage.getItem("gmail"),
        customer_phone: userInfo.phoneNumber,
      },
    });

    return res?.data?.payment_session_id;
  };

  const registerStudent = async () => {
    await axios.post(`${backendURL}/`, {
      email: localStorage.getItem("gmail"),
      ...userInfo,
      amount: isIITMStudent ? "100" : "120",
    });
  };

  const handlePayment = async () => {
    setPaymentProcessing(true);

    try {
      const sessionId = await sessionGenerator();

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
    } catch {
      setPaymentFailed(true);
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <>
      <section id="payment">
        <motion.div className="min-h-screen bg-linear-to-br from-[#a9a7a7] via-[#F8FAFC] to-[#EEF2F7]">
          <div className="container mx-auto px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto">

              <div className="rounded-2xl shadow-xl p-8 bg-white">

                <RegisterForm userInfo={userInfo} />
                <PricingSummary isIITMStudent={isIITMStudent} />

                <div className="text-center mt-10">
                  <button
                    onClick={handlePayment}
                    className="px-8 py-4 rounded-full text-white bg-blue-600 hover:scale-105"
                  >
                    Pay Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

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