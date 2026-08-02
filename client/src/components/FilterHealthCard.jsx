import { FaShieldAlt } from "react-icons/fa";

function FilterHealthCard({ data, darkMode }) {
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
            Filter Health
          </h2>

          <FaShieldAlt className="text-4xl text-green-400" />
        </div>

        <p
          className={`mt-6 ${
            darkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Search a city to view filter health
        </p>
      </div>
    );
  }

  const pm25 = data.airQuality.components.pm2_5;

  let filter = 100;

  if (pm25 > 10) filter = 90;
  if (pm25 > 20) filter = 80;
  if (pm25 > 30) filter = 70;
  if (pm25 > 40) filter = 60;
  if (pm25 > 50) filter = 50;
  if (pm25 > 70) filter = 40;
  if (pm25 > 90) filter = 30;

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-green-500/20 ${
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
          Filter Health
        </h2>

        <FaShieldAlt className="text-4xl text-green-400" />
      </div>

      <p
        className={`mt-5 ${
          darkMode ? "text-slate-400" : "text-gray-600"
        }`}
      >
        PM2.5 : {pm25}
      </p>

      <h1 className="text-5xl font-bold text-green-400 mt-4">
        {filter}%
      </h1>

      <div
        className={`w-full h-4 rounded-full mt-6 ${
          darkMode ? "bg-slate-700" : "bg-gray-300"
        }`}
      >
        <div
          className="h-4 bg-green-500 rounded-full"
          style={{ width: `${filter}%` }}
        />
      </div>

      <p
        className={`mt-4 ${
          darkMode ? "text-slate-300" : "text-gray-700"
        }`}
      >
        Filter Efficiency
      </p>
    </div>
  );
}

export default FilterHealthCard;