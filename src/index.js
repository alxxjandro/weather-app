import "./general.css";

async function searchImage(search, index) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}&client_id=LTwuJxAgrhNFWOpd9BBr7EWyr6YTPtUdvnsBPr-pI3Y`,
    { mode: "cors" },
  );
  const images = await response.json();
  console.log(images.results[index]);
  return images.results[index].urls.regular;
}

async function changeBackground(background, search, index) {
  const image = await searchImage(search, index);
  background.src = image;
}

const image = document.querySelector("#imagen");
changeBackground(image, "f1", 7);
