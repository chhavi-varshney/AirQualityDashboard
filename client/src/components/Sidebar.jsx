import {
  FaHome,
  FaCloudSun,
  FaWind,
  FaHeartbeat,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Menu
      </h2>

      <ul className="space-y-3">

        <li className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white cursor-pointer">
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 cursor-pointer">
          <FaCloudSun />
          <span>Air Quality</span>
        </li>

        <li className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 cursor-pointer">
          <FaWind />
          <span>Weather</span>
        </li>

        <li className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 cursor-pointer">
          <FaHeartbeat />
          <span>Health</span>
        </li>

        <li className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 cursor-pointer">
          <FaUser />
          <span>Profile</span>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;