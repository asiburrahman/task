import React, { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const EmailVerification = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // move focus to next box if value entered
      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      return Swal.fire("Error", "Please enter the full 6-digit code", "error");
    }

    try {
      const res = await axios.post("http://localhost:3000/verify", {
        email:'asibur70@gmail.com',
        code,
      });

      Swal.fire("Success", res.data.message, "success");
    } catch (err) {
      Swal.fire("Error", err.response?.data?.message || "Verification failed", "error");
    }
  };

  const handleResend = async () => {
    try {
      await axios.post("http://localhost:3000/resend-code", { email:'asibur70@gmail.com', });
      Swal.fire("Info", "A new code has been sent to your email", "info");
    } catch (err) {
      Swal.fire("Error", "Failed to resend code", "error");
    }
  };

  return (
    <div className="min-h-screen w-[1440px] flex flex-col bg-white">
      {/* Logo */}
      <div className="top-6 left-0 px-12 py-6">
        <img
          src="/images/reg-log.png"
          alt="ScapeSync Logo"
          className="w-[137px] h-[56px]"
        />
      </div>

      {/* Back link */}
      <div className="w-full mx-auto max-w-md">
        <button className="flex items-center text-green-600 text-sm mb-6">
          <FaArrowLeft className="mr-2" /> Back
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Please check your email!
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          We’ve emailed a 6-digit confirmation code to{" "}
          <b>{email}</b>, please enter the code below to verify your email.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-black border border-gray-300 rounded-md text-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 shadow-md"
        >
          Verify
        </button>

        {/* Resend Code */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have a code?{" "}
          <button
            onClick={handleResend}
            className="text-green-600 font-medium hover:underline"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
