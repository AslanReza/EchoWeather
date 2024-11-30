export const weatherCodes = {
  clear: [1000], // Clear/Sunny
  clouds: [1003, 1006, 1009], // Partly Cloudy, Cloudy, Overcast
  mist: [1030, 1135, 1147], // Mist, Fog, Freezing Fog
  drizzle: [1150, 1153], // Light Drizzle
  freezing_drizzle: [1168, 1171], // Freezing Drizzle, Heavy Freezing Drizzle
  rain: [
    1063,
    1180,
    1183,
    1198,
    1201,
    1240,
    1243,
    1246, // Patchy Light Rain, Light Rain, Freezing Rain
    1273,
    1276, // Patchy Rain with Thunder, Moderate/Heavy Rain with Thunder
  ],
  moderate_heavy_rain: [1186, 1189, 1192, 1195], // Moderate Rain, Heavy Rain
  sleet: [1069, 1204, 1207, 1249, 1252], // Sleet, Light/Heavy Sleet Showers
  snow: [
    1066,
    1072,
    1114,
    1117, // Snow-related conditions
    1210,
    1213,
    1216,
    1219,
    1222,
    1225, // Light to Heavy Snow
    1255,
    1258,
    1279,
    1282, // Snow Showers, Snow with Thunder
  ],
  ice_pellets: [1237, 1261, 1264], // Ice Pellets, Showers of Ice Pellets
  thunder: [1087, 1279, 1282], // Thundery Outbreaks, Snow with Thunder
  thunder_rain: [1273, 1276], // Rain with Thunder
  heavy_snow: [1225, 1258, 1282], // Heavy Snow
};
export default weatherCodes;
