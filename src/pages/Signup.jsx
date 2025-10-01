import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/login.jpg"; 

const Signup = () => {
  return (
    <div className="h-full flex items-center justify-center relative pt-12 pb-15">
      <div className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative w-full max-w-md bg-white/25 backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Create Account
        </h2>
        <p className="text-sm text-gray-200 mb-8 text-center">
          Sign up to book your favorite movies
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Confirm Password
            </label>
            <input
              type="confirm password"
              placeholder="******"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
