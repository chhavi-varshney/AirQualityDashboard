import {
  FaHome,
  FaCloudSun,
  FaWind,
  FaHeartbeat,
  FaUser,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar({ darkMode }) {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white"
        : darkMode
        ? "text-white hover:bg-slate-800"
        : "text-gray-800 hover:bg-gray-200"
    }`;

  return (
    <aside
      className={`w-64 min-h-screen border-r p-6 transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-gray-300"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Menu
      </h2>

      <ul className="space-y-3">

        <li>
          <NavLink to="/dashboard" className={menuClass}>
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/air-quality" className={menuClass}>
            <FaCloudSun />
            <span>Air Quality</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/weather" className={menuClass}>
            <FaWind />
            <span>Weather</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/health" className={menuClass}>
            <FaHeartbeat />
            <span>Health</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={menuClass}>
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;