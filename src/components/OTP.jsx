// export default function OTP() {
//   return (
//     <div className="max-w-xs rounded-md  flex flex-col items-center justify-center bg-white my-10 p-4 text-black">
//       <div>
//         <img src="/images/logo.jpg" alt="UPSA Logo" />
//         <div>
//           <h2 className="text-xl font-bold text-center mt-3">Verify</h2>
//           <p className="text-xs text-center text-gray-400 mt-1">
//             Your code was sent to you via email
//           </p>
//         </div>
//         <form>
//           <div class="flex gap-2 my-5 justify-center">
//             <input
//               type="text"
//               maxlength="6"
//               required
//               className="w-full border border-gray-300 rounded text-xl text-center"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-[#06033F] text-white px-4 py-2 rounded-md w-full font-bold"
//           >
//             Verify
//           </button>
//         </form>
//         <p className="text-xs text-center text-gray-400 mt-5">
//           Didn’t receive code?{" "}
//           <span className="text-blue-700">Request again</span>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { UserContext } from "../context/User";
import { useContext } from "react";

export default function OTP({ userType }) {
  const form = useRef();
  const [userOTP, setUserOTP] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const { indexNumber } = useContext(UserContext);

  // Generate and send OTP
  const sendOTP = (e) => {
    e.preventDefault();

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    localStorage.setItem("otp", otp); // Store OTP in localStorage

    const userEmail = form.current.userEmail.value;

    emailjs
      .send(
        // SERVICE_ID
        "service_c1p5z4j",

        // TEMPLATE_ID
        "template_39la4zs",
        {
          userEmail: userEmail,
          otp: otp,
        },
        // PUBLIC_KEY
        "Wx1LvbjHg_W8TMcZO"
      )
      .then(
        () => alert(`OTP sent to ${userEmail}`),
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send OTP: " + error.text || error.message);
        }
      );
  };

  // Validate the entered OTP
  const verifyOTP = () => {
    const storedOTP = localStorage.getItem("otp");

    if (userOTP === storedOTP) {
      setIsVerified(true);
      alert("✅ OTP verified successfully!");

      // Route based on userType
      if (userType === "voter") {
        router.push("/where");
      } else if (userType === "candidate") {
        router.push("/candidate");
      } else if (userType === "admin") {
        router.push("/admin");
      } else {
        alert("Invalid user type. Please try again.");
      }
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Email OTP Verification
        </h2>

        <form ref={form} onSubmit={sendOTP} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Email Address</span>
            <input
              value={`${indexNumber}@upsamail.edu.gh`}
              disabled
              type="email"
              name="userEmail"
              placeholder="index@upsmail.edu.com"
              required
              className="mt-1 block w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send OTP
          </button>
        </form>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="text-gray-700">Enter OTP</span>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={userOTP}
              onChange={(e) => setUserOTP(e.target.value)}
              className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-200 outline-none"
            />
          </label>
          <button
            onClick={verifyOTP}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Verify OTP
          </button>
        </div>

        {isVerified && (
          <p className="text-green-700 text-center mt-4 font-medium">
            ✅ OTP Verified Successfully!
          </p>
        )}
      </div>
    </div>
  );
}
