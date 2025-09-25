import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/register", formData);

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: res.data.message,
        confirmButtonColor: "#16a34a", // green-600
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen w-[1440px] flex flex-col justify-center bg-white">
      {/* Logo */}
      <div className="top-6 left-0 px-12 py-6">
        <img
          src="/images/reg-log.png"
          alt="ScapeSync Logo"
          className="w-[137px] h-[56px]"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md text-center mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Create your Account</h2>
        <p className="text-gray-500 mt-1">When sports Meets smart Tech.</p>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <AiOutlineEye className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <AiOutlineEye className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" required className="accent-green-600" />
            <span>
              I agree to Tech Takes{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>.
            </span>
          </div>

          {/* Submit */}
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
