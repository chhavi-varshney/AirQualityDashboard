import { FaHeartbeat } from "react-icons/fa";

function HealthStatusCard({ data, darkMode }) {
  if (!data) {
    return (
      <div
        className={`rounded-2xl p-6 border shadow-lg ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-gray-300"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">
          Health Status
        </h2>

        <p>Search a city...</p>
      </div>
    );
  }

  const aqi = data.airQuality.main.aqi;

  let status = "";
  let color = "";
  let tips = [];

  switch (aqi) {
    case 1:
      status = "Excellent";
      color = "text-green-500";
      tips = [
        " Safe for outdoor activities",
        " Fresh air",
        " Keep windows open",
      ];
      break;

    case 2:
      status = "Fair";
      color = "text-lime-500";
      tips = [
        " Outdoor activity is fine",
        " Stay hydrated",
        " Sensitive people should be careful",
      ];
      break;

    case 3:
      status = "Moderate";
      color = "text-yellow-500";
      tips = [
        " Wear a mask if needed",
        " Reduce long outdoor exercise",
        " Drink plenty of water",
      ];
      break;

    case 4:
      status = "Poor";
      color = "text-orange-500";
      tips = [
        " Avoid outdoor exercise",
        " Wear N95 mask",
        " Stay indoors",
      ];
      break;

    case 5:
      status = "Very Poor";
      color = "text-red-500";
      tips = [
        " Avoid going outside",
        " Use Air Purifier",
        " Wear mask",
      ];
      break;

    default:
      status = "Unknown";
      color = "text-gray-500";
  }

  return (
    <div
      className={`rounded-2xl p-6 border shadow-lg ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Health Status
        </h2>

        <FaHeartbeat className="text-4xl text-red-500" />

      </div>

      <h1 className={`text-5xl font-bold mt-6 ${color}`}>
        {status}
      </h1>

      <div className="mt-6 space-y-3">

        {tips.map((tip, index) => (
          <p key={index}>{tip}</p>
        ))}

      </div>

    </div>
  );
}

export default HealthStatusCard;