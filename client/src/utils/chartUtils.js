export const generateAQIData = (aqi) => {
  return [
    { day: "Mon", aqi: Math.max(aqi - 8, 1) },
    { day: "Tue", aqi: Math.max(aqi - 5, 1) },
    { day: "Wed", aqi: Math.max(aqi - 2, 1) },
    { day: "Thu", aqi: aqi },
    { day: "Fri", aqi: aqi + 2 },
    { day: "Sat", aqi: aqi - 1 },
    { day: "Sun", aqi: aqi + 1 },
  ];
};