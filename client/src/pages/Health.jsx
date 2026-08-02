import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

import HealthStatusCard from "../components/HealthStatusCard";
import ComparisonCard from "../components/ComparisonCard";
import FilterHealthCard from "../components/FilterHealthCard";

function Health() {
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
    } catch (error) {
      console.log(error);
      alert("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
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

        <main
          className={`flex-1 p-8 transition-all duration-300 ${
            darkMode
              ? "bg-slate-950 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <h1 className="text-4xl font-bold mb-6">
            Health Dashboard
          </h1>

          <SearchBar
            onSearch={searchCity}
            darkMode={darkMode}
          />

          {loading && (
            <div className="mt-6">
              <p className="text-blue-500 text-lg">
                Loading...
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <HealthStatusCard
              data={weatherData}
              darkMode={darkMode}
            />

            <ComparisonCard
              data={weatherData}
              darkMode={darkMode}
            />

            <FilterHealthCard
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

export default Health;