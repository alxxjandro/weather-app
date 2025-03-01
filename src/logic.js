//This module contains the functions that take care of fetching and loading data both from Unsplash and visualCrossing

//Unplash
export const changeBackground = async (background, search, index) => {
  const image = await searchImage(search, index);
  background.src = image;
};

export default changeBackground;

const searchImage = async (search, index) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=LTwuJxAgrhNFWOpd9BBr7EWyr6YTPtUdvnsBPr-pI3Y`,
    { mode: "cors" },
  );
  const images = await response.json();
  return images.results[index].urls.regular;
};

//visualCrossing
export const searchWeather = async (search) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=REB796NNBGFXYLXEKXHT5UNLX`,
      { mode: "cors" },
    );
    const data = await response.json();
    const info = [
      data.resolvedAddress,
      data.days[0].datetime,
      data.currentConditions.icon,
      data.currentConditions.temp,
      data.currentConditions.conditions,
      data.currentConditions.humidity,
      data.currentConditions.visibility,
      data.currentConditions.windspeed,
    ];
    return info;
  } catch (e) {
    console.error(e);
    return;
  }
};
