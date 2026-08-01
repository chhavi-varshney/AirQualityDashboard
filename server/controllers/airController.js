const {
  getWeather,
  getAirQuality,
} = require("../services/airService");

// Get Air Quality + Weather
const getAirData = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }

    // Weather
    const weather = await getWeather(city);

    const lat = weather.coord.lat;
    const lon = weather.coord.lon;

    // AQI
    const air = await getAirQuality(lat, lon);

    res.status(200).json({
      success: true,
      city: weather.name,
      country: weather.sys.country,

      weather: {
        temperature: weather.main.temp,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        feelsLike: weather.main.feels_like,
        description: weather.weather[0].description,
        icon: weather.weather[0].icon,
        windSpeed: weather.wind.speed,
      },

      airQuality: air.list[0],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAirData,
};