import {
  FaUserCircle,
  FaBell,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({
  user,
  handleLogout,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav
      className={`w-full border-b px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-gray-300"
      }`}
    >
      {/* Left */}

      <div>
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Air Quality Dashboard
        </h1>

        <p
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Live Air Quality Monitoring
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Theme Toggle */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl hover:scale-110 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-blue-600" />
          )}
        </button>

        {/* Notification */}

        <button
          className={`text-xl ${
            darkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <FaBell />
        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-500" />

          <div>
            <h2
              className={`font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {user?.name || "User"}
            </h2>

            <p
              className={`text-sm ${
                darkMode
                  ? "text-slate-400"
                  : "text-gray-600"
              }`}
            >
              {user?.email}
            </p>
          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;