import { FaEye } from "react-icons/fa";

function VisibilityCard({ data, darkMode }) {

  if (!data) {
    return (
      <div className={`rounded-2xl p-6 border shadow-lg ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}>
        <h2 className="text-2xl font-bold">Visibility</h2>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 border shadow-lg ${
      darkMode
        ? "bg-slate-900 border-slate-700"
        : "bg-white border-gray-300"
    }`}>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Visibility</h2>

        <FaEye className="text-4xl text-blue-400"/>
      </div>

      <h1 className="text-5xl font-bold text-blue-400 mt-6">
        {data.weather.visibility / 1000} km
      </h1>

    </div>
  );
}

export default VisibilityCard;