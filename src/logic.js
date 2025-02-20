
//This module contains the functions that take care of fetching and loading data both from Unsplash and visualCrossing
const searchImage = async (search, index) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=LTwuJxAgrhNFWOpd9BBr7EWyr6YTPtUdvnsBPr-pI3Y`,
    { mode: "cors" },
  );
  const images = await response.json();
  return images.results[index].urls.regular;
};

export const searchWeather = async (search) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=REB796NNBGFXYLXEKXHT5UNLX`,
    { mode: "cors" },
  );
  const data = await response.json();
  return data.currentConditions.conditions;
};

export const getCityName = async (search) =>{
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=REB796NNBGFXYLXEKXHT5UNLX`,
    { mode: "cors" },
  );
  const data = await response.json();
  return data.resolvedAddress;
}

export const changeBackground = async (background, search, index) => {
  const image = await searchImage(search, index);
  background.src = image;
};
export default changeBackground;

