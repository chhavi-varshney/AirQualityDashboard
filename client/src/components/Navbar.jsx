import { FaUserCircle, FaBell } from "react-icons/fa";

function Navbar({ user, handleLogout }) {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 px-8 py-4 flex items-center justify-between">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-white">
          Air Quality Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Live Air Quality Monitoring
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="text-xl text-white hover:text-blue-400">
          <FaBell />
        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-500" />

          <div>
            <h2 className="text-white font-semibold">
              {user?.name || "User"}
            </h2>

            <p className="text-sm text-slate-400">
              {user?.email}
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;