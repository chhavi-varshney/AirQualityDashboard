import { FaWind } from "react-icons/fa";

function WindCard({ data, darkMode }) {
  if (!data) {
    return (
      <div className={`rounded-2xl p-6 border shadow-lg ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}>
        <h2 className="text-2xl font-bold mb-4">Wind Speed</h2>
        <p>Search a city...</p>
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
        <h2 className="text-2xl font-bold">Wind Speed</h2>
        <FaWind className="text-4xl text-cyan-400"/>
      </div>

      <h1 className="text-5xl font-bold text-cyan-400 mt-6">
        {data.weather.windSpeed} m/s
      </h1>
    </div>
  );
}

export default WindCard;