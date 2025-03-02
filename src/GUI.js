import { searchWeather, changeBackground } from "./logic.js";
import { format } from "date-fns";
import { findIcon } from "./icons.js";
import icons from "./icons.js";

export const createSearchForm = () => {
  const div = Object.assign(document.createElement("div"), {
    className: "SearchBarDiv",
  });
  const form = Object.assign(document.createElement("form"), {
    action: "#",
  });

  const label = Object.assign(document.createElement("label"), {
    for: "searchBar",
  });

  const searchIcon = Object.assign(document.createElement("img"), {
    src: icons.search,
  });
  const input = Object.assign(document.createElement("input"), {
    type: "text",
    name: "searchBar",
    id: "searchBar",
    pattern: "[A-Za-z]+",
    placeholder: "Search a City",
    required: true,
  });
  input.setAttribute("minlength", "3");
  input.setAttribute("maxlength", "35");

  const button = Object.assign(document.createElement("button"), {
    id: "submitBtn",
    name: "submitBtn",
  });
  button.appendChild(searchIcon);

  //handle the event listener for the submit btn
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    let previous = document.querySelector(".weatherInfoContainer");
    if (input.value) {
      if (previous) {
        previous.remove();
      }

      const loadingElement = document.createElement("div");
      loadingElement.innerText = "Loading...";
      loadingElement.id = "loading";
      document.body.appendChild(loadingElement);

      setTimeout(() => {}, "2000"); //in order to display de loading text

      try {
        const weatherElement = await getWeather(input.value);
        document.body.appendChild(weatherElement);
      } catch (e) {
        alert("Please try searching for a different city!");
        console.error(e);
        return;
      } finally {
        document.body.removeChild(loadingElement);
      }
    }
  });

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);
  div.appendChild(form);

  return div;
};

const createElement = (tag, className, text = "", src = "") => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.innerText = text;
  if (src) element.src = src;
  return element;
};

const getWeather = async (formValue) => {
  const info = await searchWeather(formValue);

  const divContainer = createElement("div", "weatherInfoContainer");
  const leftDiv = createElement("div", "leftPart");
  const rightDiv = createElement("div", "rightPart");

  divContainer.append(
    createElement("h1", "cityName", info[0]),
    leftDiv,
    rightDiv,
  );

  let weather = document.createElement("div");
  let degrees = Object.assign(document.createElement("span"), {
    className: "temperature",
  });
  degrees.append(createElement("h1", "temp", info[3]));
  degrees.append(createElement("p", "a", "C"));

  weather.append(degrees, createElement("p", "conditions", info[4]));
  leftDiv.append(
    createElement("p", "date", format(new Date(), "EEE, MMM d ")),
    createElement("img", "iconImage", "", findIcon(info[2])),
    weather,
  );

  let rightInfo = ["Humidity", "Visibility", "Wind"];
  let units = ["%", "KM", "KPH"];
  rightInfo.forEach((e, index) => {
    let div = document.createElement("div");

    if (info[5 + index] == null || info[5 + index] == 0) {
      info[5 + index] = "-";
    }

    div.append(
      createElement("span", "", e),
      createElement("span", "", info[5 + index] + ` ${units[index]}`),
    );
    rightDiv.append(div);
  });

  divContainer.append(leftDiv, rightDiv);

  return divContainer;
};

const defaultWeather = await getWeather("Guadalajara");
document.body.appendChild(defaultWeather);

export default createSearchForm;
