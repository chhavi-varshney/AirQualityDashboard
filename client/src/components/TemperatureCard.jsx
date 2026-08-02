import { FaTemperatureHigh } from "react-icons/fa";

function TemperatureCard({ data, darkMode }) {
  if (!data) {
    return (
      <div
        className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-gray-300"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Temperature
          </h2>

          <FaTemperatureHigh className="text-4xl text-orange-400" />
        </div>

        <p
          className={`mt-6 ${
            darkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Search a city to view temperature
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-orange-500/20 ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Temperature
        </h2>

        <FaTemperatureHigh className="text-4xl text-orange-400" />
      </div>

      <p
        className={`mt-5 ${
          darkMode ? "text-slate-400" : "text-gray-600"
        }`}
      >
        {data.city}, {data.country}
      </p>

      <h1 className="text-6xl font-bold text-orange-400 mt-4">
        {Math.round(data.weather.temperature)}°C
      </h1>

      <p
        className={`text-lg mt-3 ${
          darkMode ? "text-slate-300" : "text-gray-700"
        }`}
      >
        Feels Like {Math.round(data.weather.feelsLike)}°C
      </p>
    </div>
  );
}

export default TemperatureCard;