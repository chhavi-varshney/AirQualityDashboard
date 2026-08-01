import { FaCloudSun } from "react-icons/fa";

function WeatherCard({ data }) {
  if (!data) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg min-h-[260px]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Weather</h2>
          <FaCloudSun className="text-4xl text-yellow-400" />
        </div>

        <p className="text-slate-400 mt-8">
          Search a city to view weather
        </p>
      </div>
    );
  }

  const weather = data.weather;

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-yellow-500/20 transition min-h-[260px]">

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          Weather
        </h2>

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather"
          className="w-16 h-16"
        />

      </div>

      <h1 className="text-6xl font-bold text-yellow-400 mt-4">
        {Math.round(weather.temperature)}°C
      </h1>

      <p className="text-xl text-slate-300 mt-2 capitalize">
        {weather.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div>
          <p className="text-slate-400">Humidity</p>
          <p className="text-xl font-semibold">
            {weather.humidity}%
          </p>
        </div>

        <div>
          <p className="text-slate-400">Wind</p>
          <p className="text-xl font-semibold">
            {weather.windSpeed} m/s
          </p>
        </div>

        <div>
          <p className="text-slate-400">Pressure</p>
          <p className="text-xl font-semibold">
            {weather.pressure} hPa
          </p>
        </div>

        <div>
          <p className="text-slate-400">Feels Like</p>
          <p className="text-xl font-semibold">
            {Math.round(weather.feelsLike)}°C
          </p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;