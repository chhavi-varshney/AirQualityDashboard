import {
  FaSmog,
  FaCloud,
  FaLeaf,
} from "react-icons/fa";

function PollutantsCard({ data, darkMode }) {
  if (!data) {
    return (
      <div
        className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-gray-300"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Pollutants
        </h2>

        <p
          className={
            darkMode ? "text-slate-400" : "text-gray-600"
          }
        >
          Search a city to view pollutants.
        </p>
      </div>
    );
  }

  const p = data.airQuality.components;

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Pollutants
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaSmog className="text-gray-400" />
            PM2.5
          </span>
          <span className="font-bold">{p.pm2_5}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaSmog className="text-gray-500" />
            PM10
          </span>
          <span className="font-bold">{p.pm10}</span>
        </div>

        <div className="flex justify-between">
          <span>CO</span>
          <span className="font-bold">{p.co}</span>
        </div>

        <div className="flex justify-between">
          <span>NO₂</span>
          <span className="font-bold">{p.no2}</span>
        </div>

        <div className="flex justify-between">
          <span>SO₂</span>
          <span className="font-bold">{p.so2}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaLeaf className="text-green-500" />
            O₃
          </span>
          <span className="font-bold">{p.o3}</span>
        </div>

      </div>
    </div>
  );
}

export default PollutantsCard;