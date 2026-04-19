import axios from "axios";
import { useEffect, useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import useLocalStorage from "../../hooks/useLocalStroage";
import { useNavigate } from "react-router-dom";
import type { UserInfo } from "../../types/user";

const orderId = `order_${new Date().getTime()}`;
let paymentSessionId = "";

interface Cashfree {
  checkout: (options: { paymentSessionId: string; redirectTarget: string }) => Promise<{
    paymentDetails?: unknown;
    error?: unknown;
  }>;
}

const PaymentButton = () => {
  const navigate = useNavigate();
  const [cashfree, setCashfree] = useState<Cashfree | null>(null);
  const url = import.meta.env.VITE_SERVER_URL;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [gmail] = useLocalStorage<string>("gmail", "");
  const [userInfo] = useLocalStorage<UserInfo>("userInfo", {});
  const [registered, setRegistered] = useLocalStorage<string | boolean>("isRegistered", false);
  const [isIITMStudent, setIsIITMStudent] = useState(false);

  useEffect(() => {
    setIsIITMStudent(
      userInfo.collageName?.includes("IITM") ||
      userInfo.collageName?.includes("IINTM") ||
      userInfo.collageName?.includes("ICE (MDU)") ||
      userInfo.collageName?.includes("IPITM (MDU)") || false
    );
  }, [userInfo.collageName]);

  const [isLoading, setIsLoading] = useState(false);
  const data = {
    email: gmail,
    name: userInfo.name,
    number: userInfo.phoneNumber,
    collegeName: userInfo.collageName,
    course: userInfo.course,
    year: userInfo.year,
    amount: isIITMStudent ? "100" : "120",
    orderId: orderId,
    paymentMode: "Online",
    isRegistered: registered === "true" || registered === true,
    outsider: !isIITMStudent,
    paymentId: paymentSessionId,
  };

  const registerStudent = async () => {
    if (gmail.length > 0) {
      try {
        await axios
          .post(`${backendURL}/api/internHunt/register`, data)//change
          .then((res) => {
            console.log(".then Response: ", res.data);
            if (res.data.exist === false && res.data.success) {
              console.log("Registered Successfully");
              setRegistered("true");
            } else if (res.data.success === false) {
              console.log("Failed to register, Please Try again");
            }
          });
      } catch (error) {
        console.log("Internal Server Error! Please Try Again Later");
        console.error(error);
      }
    }
  };

  const sessionGenerator = async () => {
    console.log("User College Name: ", "\"" + userInfo.collageName + "\"")
    console.log("Is Outsider: ", "\"" + !isIITMStudent + "\"")
    try {
      const response = await axios.post(`${url}/create-order`, {
        order_amount: `${isIITMStudent ? 100 : 120}`,
        order_id: orderId,
        order_currency: "INR",
        customer_details: {
          customer_id: orderId,
          customer_name: userInfo.name,
          customer_email: gmail,
          customer_phone: userInfo.phoneNumber,
        },
      });
      // setLoading(false);
      if (response?.data && response?.data?.payment_session_id) {
        paymentSessionId = response?.data?.payment_session_id; // Store the payment session ID
        console.log("Order confirmed! You can now proceed to payment. 🤩");
      } else {
        console.log("Failed to retrieve payment session ID.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      console.log("Failed to generate payment session.");
      setIsLoading(false);
    }
  };

  const handlePayNow = async () => {
    if (!paymentSessionId && orderId !== "") {
      console.error("Error Occurred while generation of Order ID 😰.");
      return;
    }
    //setLoading(true);

    if (cashfree) {
      const checkoutOptions = {
        paymentSessionId: paymentSessionId, // Use paymentSessionId from response
        redirectTarget: "_modal", // Opens the payment modal
      };

      try {
        const result = await cashfree.checkout(checkoutOptions);
        if (result?.paymentDetails) {
          await registerStudent();
        }
      } catch (error) {
        console.error(error);
        console.log("Error during payment. Please try again.");
      }
    } else {
      //setLoading(false);
      console.log(
        "Some Network Error Occurred Try To Connect With A Stable Network Or Refresh The Page 😴"
      );
    }
  };

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        // const sdk = await load({ mode: "sandbox" });
        const sdk = await load({ mode: "production" });
        setCashfree(sdk);
      } catch (error) {
        console.error("Error initializing Cashfree SDK:", error);
      }
    };

    initializeSDK();
  }, []);

  return (
    <div>
      <button
        className="px-8 py-4 rounded-full font-medium text-white bg-linear-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
        onClick={async () => {
          console.log("Clicked");
          setIsLoading(true);
          await sessionGenerator();
          if (paymentSessionId) {
            await handlePayNow().then(() => {
              setIsLoading(false);
              navigate("/");
            });
          }
        }}
      >
        {isLoading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150"
            className="h-5 w-5"
          >
            <path
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="300 385"
              strokeDashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animate>
            </path>
          </svg>
        ) : (
          <p >hiiiiii</p>
        )}
        {isLoading ? "Almost There..." : "Register"}
      </button>
    </div>
  );
};

export default PaymentButton;
