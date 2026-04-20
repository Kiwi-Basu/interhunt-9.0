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
  type PaymentStatus = 'initiated' | 'completed' | 'failed' | 'dropped';

  const [cashfree, setCashfree] = useState<any>(null);

  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

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

  // Initialize Cashfree SDK
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


  // Poll payment status
  const pollPaymentStatus = async (orderIdParam: string) => {
    let attempts = 0;
    const maxAttempts = 60; // Poll for 5 minutes (60 * 5 seconds)

    const poll = async () => {
      try {
        const response = await axios.get(
          `${backendURL}/api/leadershipTalk3/registrationStatus?orderId=${orderIdParam}`,
          {
            withCredentials: true,
          }
        );

        const status: PaymentStatus = response.data.paymentStatus;

        if (status === 'completed') {
          setPaymentProcessing(false);
          setPaymentSuccess(true);
          // Refetch user data to update committee information
          // await refetchUserData();
          return true;
        } else if (status === 'failed') {
          setPaymentProcessing(false);
          setPaymentFailed(true);
          return true;
        } else if (status === 'dropped') {
          setPaymentProcessing(false);
          setPaymentCancelled(true);
          return true;
        } else if (status === 'initiated' && attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 2000); // Poll every 2 seconds
        } else {
          // Timeout reached
          setPaymentProcessing(false);
          setPaymentFailed(true);
          return true;
        }
      } catch (error) {
        console.error('Error polling payment status:', error);
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 2000);
        } else {
          setPaymentProcessing(false);
          setPaymentFailed(true);
        }
      }
    };

    poll();
  };

  // Handle coupon application
  // const handleCouponApplied = (discountAmount: number, code: string) => {
  //     setDiscount(discountAmount);
  //     setCouponCode(code);
  // };

  // Handle payment
  const handlePayment = async () => {
    setPaymentLoading(true);

    try {
      const response = await axios.post(`${backendURL}/api/payment/createOrder`, {
        eventName: "InternHunt 9.0"
      }, {
        withCredentials: true,
      });

      const paymentSessionId = response.data.paymentSessionId;
      const orderIdFromResponse = response.data.orderId;

      if (paymentSessionId && cashfree) {
        const checkoutOptions = {
          paymentSessionId,
          payment_session_id: paymentSessionId,
          redirectTarget: '_modal',
        };

        await cashfree.checkout(checkoutOptions)
          .then(() => {
            setPaymentProcessing(true);
            setPaymentLoading(false);
            pollPaymentStatus(orderIdFromResponse);
          })
          .catch((err: Error) => {
            console.error(err.message, 'Failed to complete payment');
            setPaymentLoading(false);
          });
      }
    } catch (error) {
      console.error(error, 'Failed to create orderId');
      setPaymentLoading(false);
    }
  };

  // Handle try again
  const handleTryAgain = () => {
    setPaymentFailed(false);
    setPaymentCancelled(false);
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
                    disabled={paymentLoading}
                    className={`px-8 py-4 rounded-full font-extrabold shadow-2xl text-[#1F3A5F] bg-[#CEAC81] cursor-pointer hover:scale-105 transition-all duration-200 ${paymentLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {paymentLoading ? "Processing..." : "Pay Now"}
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
        onTryAgain={handleTryAgain}
        onGoToProfile={() => navigate("/dashboard")}
      />
    </>
  );
};

export default PaymentGateway;