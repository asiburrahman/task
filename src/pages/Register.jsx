import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // ✅ Spinner

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ Spinner state

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

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
      return;
    }

    setLoading(true); // ✅ Start loading

    try {
      const res = await axios.post("https://backend-ecru-pi-97.vercel.app/register", formData);

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "User registered! Please check your email for verification code.",
        confirmButtonColor: "#16a34a",
      }).then(() => {
        navigate("/verification", { state: { formData } });
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="w-[1440px] min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className=" absolute top-0 left-0 px-12 py-6">
        <img
          src="./images/reg-log.png"
          alt="ScapeSync Logo"
          className="w-[137px] h-[56px]"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md text-center mb-20 pt-20 mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Create your Account</h2>
        <p className="text-gray-500 mt-1">When sports Meets smart Tech.</p>

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
              <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </span>
          </div>

          {/* Register Button with Spinner */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Create Account"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-in */}
        <button className="w-full flex items-center justify-center text-black border rounded-md py-2 hover:bg-gray-50 transition">
          <FaGoogle className="mr-2" /> Log in with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium">
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
