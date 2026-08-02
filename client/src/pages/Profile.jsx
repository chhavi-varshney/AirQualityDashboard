import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar
        user={user}
        handleLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="flex">
        <Sidebar darkMode={darkMode} />

        <main
          className={`flex-1 p-8 ${
            darkMode
              ? "bg-slate-950 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div
            className={`max-w-3xl mx-auto rounded-2xl shadow-xl border p-8 ${
              darkMode
                ? "bg-slate-900 border-slate-700"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center">

              <FaUserCircle className="text-8xl text-blue-500" />

              <h2 className="text-3xl font-bold mt-4">
                {user?.name || "User"}
              </h2>

              <p className="text-gray-400">
                {user?.email}
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h3 className="font-semibold">Role</h3>
                <p>User</p>
              </div>

              <div>
                <h3 className="font-semibold">Theme</h3>
                <p>{darkMode ? "Dark" : "Light"}</p>
              </div>

              <div>
                <h3 className="font-semibold">Account Status</h3>
                <p className="text-green-500">Active</p>
              </div>

              <div>
                <h3 className="font-semibold">Version</h3>
                <p>1.0.0</p>
              </div>

            </div>

            <button
              onClick={handleLogout}
              className="mt-10 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

          <div className="mt-10">
            <Footer darkMode={darkMode} />
          </div>

        </main>
      </div>
    </div>
  );
}

export default Profile;