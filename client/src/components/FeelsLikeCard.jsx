import { FaTemperatureHigh } from "react-icons/fa";

function FeelsLikeCard({ data, darkMode }) {

  if (!data) {
    return (
      <div className={`rounded-2xl p-6 border shadow-lg ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}>
        <h2 className="text-2xl font-bold">
          Feels Like
        </h2>
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

        <h2 className="text-2xl font-bold">
          Feels Like
        </h2>

        <FaTemperatureHigh className="text-4xl text-red-400"/>

      </div>

      <h1 className="text-5xl font-bold text-red-400 mt-6">
        {Math.round(data.weather.feelsLike)}°C
      </h1>

    </div>
  );
}

export default FeelsLikeCard;