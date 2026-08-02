import { FaTint } from "react-icons/fa";

function HumidityCard({ data, darkMode }) {
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
            Humidity
          </h2>

          <FaTint className="text-4xl text-blue-400" />
        </div>

        <p
          className={`mt-6 ${
            darkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Search a city to view humidity
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-blue-500/20 ${
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
          Humidity
        </h2>

        <FaTint className="text-4xl text-blue-400" />
      </div>

      <p
        className={`mt-5 ${
          darkMode ? "text-slate-400" : "text-gray-600"
        }`}
      >
        {data.city}, {data.country}
      </p>

      <h1 className="text-6xl font-bold text-blue-400 mt-4">
        {data.weather.humidity}%
      </h1>

      <p
        className={`text-lg mt-3 ${
          darkMode ? "text-slate-300" : "text-gray-700"
        }`}
      >
        Relative Humidity
      </p>
    </div>
  );
}

export default HumidityCard;