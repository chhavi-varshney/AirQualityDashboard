import { FaHome, FaTree } from "react-icons/fa";

function ComparisonCard({ data, darkMode }) {
  if (!data) {
    return (
      <div
        className={`rounded-2xl p-6 border shadow-lg min-h-[260px] transition-all duration-300 ${
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
            Indoor vs Outdoor
          </h2>

          <FaHome className="text-4xl text-green-400" />
        </div>

        <p
          className={`mt-6 ${
            darkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Search a city to compare AQI
        </p>
      </div>
    );
  }

  // Outdoor AQI from API
  const outdoorAQI = data.airQuality.main.aqi;

  // Simulated Indoor AQI
  const indoorAQI = Math.max(outdoorAQI - 1, 1);

  // Difference
  const difference = outdoorAQI - indoorAQI;

  let message = "";
  let color = "";

  if (difference >= 2) {
    message = " Indoor Air is Much Better";
    color = "text-green-400";
  } else if (difference === 1) {
    message = " Indoor Air is Slightly Better";
    color = "text-lime-400";
  } else {
    message = " Indoor Air Needs Improvement";
    color = "text-red-400";
  }

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg hover:shadow-green-500/20 transition-all duration-300 min-h-[260px] ${
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
          AQI Comparison
        </h2>

        <FaTree className="text-4xl text-green-400" />
      </div>

      <div className="mt-6 space-y-3">

        <p
          className={`text-lg ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
           Indoor AQI :
          <span className="font-bold text-green-400 ml-2">
            {indoorAQI}
          </span>
        </p>

        <p
          className={`text-lg ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
           Outdoor AQI :
          <span className="font-bold text-blue-400 ml-2">
            {outdoorAQI}
          </span>
        </p>

        <p
          className={`text-lg ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
           Difference :
          <span className="font-bold text-yellow-400 ml-2">
            {difference}
          </span>
        </p>

        <p className={`mt-6 text-lg font-semibold ${color}`}>
          {message}
        </p>

      </div>
    </div>
  );
}

export default ComparisonCard;