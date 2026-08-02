import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

import TemperatureCard from "../components/TemperatureCard";
import HumidityCard from "../components/HumidityCard";
import WindCard from "../components/WindCard";
import PressureCard from "../components/PressureCard";
import VisibilityCard from "../components/VisibilityCard";
import FeelsLikeCard from "../components/FeelsLikeCard";

function Weather() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

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
        handleLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="flex">
        <Sidebar darkMode={darkMode} />

        <main className="flex-1 p-8">

          <SearchBar
            onSearch={searchCity}
            darkMode={darkMode}
          />

          {loading && (
            <h2 className="text-blue-500 text-xl mt-6">
              Loading...
            </h2>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <TemperatureCard
              data={weatherData}
              darkMode={darkMode}
            />

            <HumidityCard
              data={weatherData}
              darkMode={darkMode}
            />

            <FeelsLikeCard
              data={weatherData}
              darkMode={darkMode}
            />

            <WindCard
              data={weatherData}
              darkMode={darkMode}
            />

            <PressureCard
              data={weatherData}
              darkMode={darkMode}
            />

            <VisibilityCard
              data={weatherData}
              darkMode={darkMode}
            />

          </div>

          <div className="mt-10">
            <Footer darkMode={darkMode} />
          </div>

        </main>
      </div>
    </div>
  );
}

export default Weather;