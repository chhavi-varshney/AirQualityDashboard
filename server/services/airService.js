const axios = require("axios");

const API_KEY = process.env.OPENWEATHER_API_KEY;

// Get Current Weather
const getWeather = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw new Error("Unable to fetch weather data");
}
};

// Get Air Pollution
const getAirQuality = async (lat, lon) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch AQI data");
  }
};

module.exports = {
  getWeather,
  getAirQuality,
};