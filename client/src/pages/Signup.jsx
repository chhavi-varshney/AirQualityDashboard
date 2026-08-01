import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">

        {/* Left Section */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-14 text-white">

          <h1 className="text-5xl font-bold leading-tight">
            Air Quality
            <br />
            Analytics
            <br />
            Dashboard
          </h1>

          <p className="mt-8 text-lg text-blue-100 leading-8">
            Monitor air quality, weather conditions,
            pollutant levels and health recommendations
            from one intelligent dashboard.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-14">

            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">200+</h2>
              <p className="mt-2 text-blue-100">
                Cities Covered
              </p>
            </div>

            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">24/7</h2>
              <p className="mt-2 text-blue-100">
                Live Monitoring
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="bg-slate-900 p-8 md:p-12">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Create Account
            </h2>

            <p className="mt-3 text-slate-400">
              Air Quality Analytics Dashboard
            </p>

          </div>

          <form className="mt-10 space-y-6">

            {/* Full Name */}

            <div>

              <label className="block text-slate-300 mb-2">
                Full Name
              </label>

              <div className="relative">

                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="block text-slate-300 mb-2">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block text-slate-300 mb-2">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="block text-slate-300 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold text-lg"
            >
              Create Account
            </button>

          </form>

          <p className="mt-8 text-center text-slate-400">

            Already have an account?

            <Link
              to="/"
              className="ml-2 text-blue-500 hover:text-blue-400 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Signup;