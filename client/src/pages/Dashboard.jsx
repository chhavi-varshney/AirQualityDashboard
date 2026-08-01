import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AQICard from "../components/AQICard";
import WeatherCard from "../components/WeatherCard";
import HealthCard from "../components/HealthCard";
import Footer from "../components/Footer";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchCity = async (city) => {
  try {
    setLoading(true);

    const res = await API.get(`/air?city=${city}`);

    setWeatherData(res.data);
    console.log("Weather Data:", res.data);

    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert("City not found");
  } finally {
    setLoading(false);
  }
};

console.log("Current State:", weatherData);
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar
        user={user}
        handleLogout={handleLogout}
      />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8 bg-slate-950 overflow-y-auto">

          <SearchBar onSearch={searchCity} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

            <AQICard data={weatherData} />

            <WeatherCard data={weatherData} />

            <HealthCard data={weatherData} />

          </div>

          <div className="mt-12">
            {/* {loading && (
              <p className="mt-5 text-blue-400">
                Loading...
              </p>
            )}

            {weatherData && (
              <pre className="mt-5 bg-slate-900 p-4 rounded-xl overflow-auto">
                {JSON.stringify(weatherData, null, 2)}
              </pre>
            )} */}
            <Footer />
          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;