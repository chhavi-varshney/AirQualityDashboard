import { FaWind } from "react-icons/fa";

function AQICard({ data }) {
  if (!data) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">
            Air Quality
          </h2>

          <FaWind className="text-4xl text-cyan-400" />
        </div>

        <p className="text-slate-400 mt-6">
          Search a city to view AQI
        </p>
      </div>
    );
  }

  const aqi = data.airQuality.main.aqi;

  let status = "";
  let color = "";

  switch (aqi) {
    case 1:
      status = "Good";
      color = "text-green-400";
      break;

    case 2:
      status = "Fair";
      color = "text-lime-400";
      break;

    case 3:
      status = "Moderate";
      color = "text-yellow-400";
      break;

    case 4:
      status = "Poor";
      color = "text-orange-400";
      break;

    case 5:
      status = "Very Poor";
      color = "text-red-500";
      break;

    default:
      status = "Unknown";
      color = "text-gray-400";
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-cyan-500/20 transition">

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          Air Quality
        </h2>

        <FaWind className="text-4xl text-cyan-400" />

      </div>

      <p className="text-slate-400 mt-5">
        {data.city}, {data.country}
      </p>

      <h1 className={`text-6xl font-bold mt-4 ${color}`}>
        {aqi}
      </h1>

      <p className={`text-2xl font-semibold mt-3 ${color}`}>
        {status}
      </p>

    </div>
  );
}

export default AQICard;