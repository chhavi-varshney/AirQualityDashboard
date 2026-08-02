import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { generateAQIData } from "../../utils/chartUtils";

function AirQualityChart({ aqi, darkMode }) {
  const chartData = generateAQIData(aqi || 3);

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border mt-8 transition-all duration-300 ${
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
        Weekly AQI Trend
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={darkMode ? "#334155" : "#D1D5DB"}
            />

            <XAxis
              dataKey="day"
              stroke={darkMode ? "#CBD5E1" : "#374151"}
            />

            <YAxis
              stroke={darkMode ? "#CBD5E1" : "#374151"}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                border: "1px solid #64748b",
                borderRadius: "8px",
                color: darkMode ? "#ffffff" : "#111827",
              }}
            />

            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AirQualityChart;