import { FaCompressAlt } from "react-icons/fa";

function PressureCard({ data, darkMode }) {

  if (!data) {
    return (
      <div className={`rounded-2xl p-6 border shadow-lg ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}>
        <h2 className="text-2xl font-bold">Pressure</h2>
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
        <h2 className="text-2xl font-bold">Pressure</h2>

        <FaCompressAlt className="text-4xl text-yellow-400"/>
      </div>

      <h1 className="text-5xl font-bold text-yellow-400 mt-6">
        {data.weather.pressure} hPa
      </h1>

    </div>
  );
}

export default PressureCard;