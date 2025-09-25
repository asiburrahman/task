import React from "react";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
const Login = () => {
    return (
        <div className="min-h-screen w-[1440px] flex flex-col  justify-center bg-white">
              {/* Logo */}
              <div className=" top-6  absolute left-0 px-12 py-6">
                <img src="/images/reg-log.png" alt="ScapeSync Logo" className="w-[137px] h-[56px] " />
                
              </div>
        
              {/* Form Container */}
              <div className="w-full max-w-md text-center mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900">Welcome to ScapeSync</h2>
                <p className="text-gray-500 mt-1">Please share your login details so you can access the website.</p>
        
                {/* Form */}
                <form className="mt-8 space-y-4">
                  
        
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
        
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <AiOutlineEye className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
                  </div>
        
                  <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <input type="checkbox" defaultChecked className="accent-green-600" />
                    <span>
                      Remember me
                    </span>
                  </div>
                  <button className="text-green-500">Forgot Password</button>
                    </div>
                  {/* Submit */}
                  <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                    Create Account
                  </button>
                </form>
        
                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="px-4 text-gray-500 text-sm">OR</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>
        
                {/* Google Sign-in */}
                <button className="w-full flex items-center justify-center text-black border rounded-md py-2 hover:bg-gray-50 transition">
                  <FaGoogle className="  mr-2" /> Log in with Google
                </button>
        
                {/* Footer */}
                <p className="text-sm text-gray-600 mt-6">
                  Don't have an account? <a href="#" className="text-green-600 font-medium">Get started</a>
                </p>
              </div>
            </div>
    );
};

export default Login;