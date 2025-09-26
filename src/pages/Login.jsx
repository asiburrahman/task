import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://backend-ecru-pi-97.vercel.app/login",
        { email, password },
        { withCredentials: true }
      );

      setSuccess("✅ Login successful!");
      setTimeout(() => {
        navigate("/"); // redirect to home after 1s
      }, 1000);

      console.log(res.data.user); // you can store this in context/state
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[1440px] min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="absolute top-0 left-0 px-12 py-6">
        <Link to='/'><img
          src="./images/reg-log.png"
          alt="ScapeSync Logo"
          className="w-[137px] h-[56px]"
        /></Link>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md text-center pt-20 mb-20 mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Welcome to ScapeSync
        </h2>
        <p className="text-gray-500 mt-1">
          Please share your login details so you can access the website.
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 bg-red-100 py-2 rounded-md mt-4">{error}</p>
        )}

        {/* Success */}
        {success && (
          <p className="text-green-600 bg-green-100 py-2 rounded-md mt-4">
            {success}
          </p>
        )}

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiOutlineEye
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                defaultChecked
                className="accent-green-600"
              />
              <span>Remember me</span>
            </div>
            <Link to='/forgot' type="button" className="text-green-500">
              Forgot Password
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center"
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Log In"}
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
          <FaGoogle className="mr-2" /> Log in with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 font-medium">
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
