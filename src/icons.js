import wind from "./icons/wind.svg";
import thunder from "./icons/thunder.svg";
import thunderShowersNight from "./icons/thunder-showers-night.svg";
import thunderShowersDay from "./icons/thunder-showers-day.svg";
import thunderRain from "./icons/thunder-rain.svg";
import snow from "./icons/snow.svg";
import snowShowersNight from "./icons/snow-showers-night.svg";
import snowShowersDay from "./icons/snow-showers-day.svg";
import sleet from "./icons/sleet.svg";
import showersNight from "./icons/showers-night.svg";
import showersDay from "./icons/showers-day.svg";
import rain from "./icons/rain.svg";
import rainSnow from "./icons/rain-snow.svg";
import rainSnowShowersNight from "./icons/rain-snow-showers-night.svg";
import rainSnowShowersDay from "./icons/rain-snow-showers-day.svg";
import partlyCloudyNight from "./icons/partly-cloudy-night.svg";
import partlyCloudyDay from "./icons/partly-cloudy-day.svg";
import hail from "./icons/hail.svg";
import fog from "./icons/fog.svg";
import cloudy from "./icons/cloudy.svg";
import clearNight from "./icons/clear-night.svg";
import clearDay from "./icons/clear-day.svg";
import search from "./icons/search.svg";

const icons = {
  wind,
  thunder,
  thunderShowersNight,
  thunderShowersDay,
  thunderRain,
  snow,
  snowShowersNight,
  snowShowersDay,
  sleet,
  showersNight,
  showersDay,
  rain,
  rainSnow,
  rainSnowShowersNight,
  rainSnowShowersDay,
  partlyCloudyNight,
  partlyCloudyDay,
  hail,
  fog,
  cloudy,
  clearNight,
  clearDay,
  search,
};

export const findIcon = (iconName) => {
  const formattedString = iconName
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");

  return icons[formattedString];
};

export default icons;
