import { useState } from "react";
import API from "../services/api";
import PollutantsCard from "../components/PollutantsCard";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

import AQICard from "../components/AQICard";
import AirQualityChart from "../components/charts/AirQualityChart";

function AirQuality() {

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const searchCity = async (city) => {
    try {

      setLoading(true);

      const res = await API.get(`/air?city=${city}`);

      setWeatherData(res.data);

    } catch (err) {

      alert("City not found");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      <Navbar
        user={user}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleLogout={() => {}}
      />

      <div className="flex">

        <Sidebar darkMode={darkMode} />

        <main className="flex-1 p-8">

          <SearchBar
            onSearch={searchCity}
            darkMode={darkMode}
          />

          {loading && (
            <h2 className="text-xl text-blue-500">
              Loading...
            </h2>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <AQICard
              data={weatherData}
              darkMode={darkMode}
            />

            <PollutantsCard
              data={weatherData}
              darkMode={darkMode}
            />

          </div>

          <AirQualityChart
            aqi={weatherData?.airQuality?.main?.aqi}
            darkMode={darkMode}
          />

          <Footer darkMode={darkMode} />

        </main>

      </div>

    </div>

  );
}

export default AirQuality;