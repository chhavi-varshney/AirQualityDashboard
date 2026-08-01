import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-10">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Login
          </h1>

          <p className="text-gray-400 mt-2">
            Air Quality Analytics Dashboard
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="mt-8 text-center text-gray-400">
          Don't have an account?

          <Link
            to="/signup"
            className="ml-2 text-blue-500 hover:text-blue-400 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;