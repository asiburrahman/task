import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
const Forgot = () => {
    return (
        <div className="min-h-screen w-[1440px] flex flex-col   bg-white">
            {/* Logo */}
            <div className=" top-6   left-0 px-12 py-6">
                <img src="/images/reg-log.png" alt="ScapeSync Logo" className="w-[137px] h-[56px] " />

            </div>

            {/* Back link */}
            <div className="w-full max-w-md mx-auto">
                <button className="flex items-center text-green-600 text-sm mb-6">
                    <FaArrowLeft className="mr-2" /> Back
                </button>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Forgot your password?
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                    Please enter the email address associated with your account, and we'll email you a link to reset your password.
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-between mb-8">

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500                                       "
                    />

                </div>

                {/* Verify Button */}
                <button className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 shadow-md">
                    Verify
                </button>

                {/* Resend Code */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have a code?{" "}
                    <button className="text-green-600 font-medium hover:underline">
                        Reset Password
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Forgot;