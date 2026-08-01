import { FaHeartbeat } from "react-icons/fa";

function HealthCard({ data }) {
  if (!data) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg min-h-[260px]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Health Tips</h2>

          <FaHeartbeat className="text-4xl text-red-500" />
        </div>

        <p className="text-slate-400 mt-8">
          Search a city to view health tips.
        </p>
      </div>
    );
  }

  const aqi = data.airQuality.main.aqi;

  let title = "";
  let color = "";
  let tips = [];

  switch (aqi) {
    case 1:
      title = "Good Air Quality";
      color = "text-green-400";
      tips = [
        "Enjoy outdoor activities",
        "Fresh air is safe",
        "Perfect for exercise"
      ];
      break;

    case 2:
      title = "Fair Air Quality";
      color = "text-lime-400";
      tips = [
        "Normal outdoor activity",
        "Stay hydrated",
        "Sensitive people should be careful"
      ];
      break;

    case 3:
      title = "Moderate Air Quality";
      color = "text-yellow-400";
      tips = [
        "Drink plenty of water",
        "Wear a mask if sensitive",
        "Outdoor activity is okay"
      ];
      break;

    case 4:
      title = "Poor Air Quality";
      color = "text-orange-400";
      tips = [
        "Avoid long outdoor activities",
        "Wear an N95 mask",
        "Keep windows closed"
      ];
      break;

    case 5:
      title = "Very Poor Air Quality";
      color = "text-red-500";
      tips = [
        "Stay indoors",
        "Use an air purifier",
        "Avoid exercise outside"
      ];
      break;

    default:
      title = "Unknown";
      color = "text-gray-400";
      tips = ["No recommendations available"];
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-red-500/20 transition min-h-[260px]">

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          Health Tips
        </h2>

        <FaHeartbeat className="text-4xl text-red-500" />

      </div>

      <h3 className={`text-xl font-bold mt-6 ${color}`}>
        {title}
      </h3>

      <ul className="mt-5 space-y-3">

        {tips.map((tip, index) => (
          <li key={index} className="text-lg">
            ✅ {tip}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default HealthCard;