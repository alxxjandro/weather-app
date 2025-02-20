import { searchWeather, changeBackground, getCityName } from "./logic.js";

export const createSearchForm = () =>{
    const div = document.createElement("div");
    const form = Object.assign(document.createElement("form"), {
        action: "#",
    })
    
    const label = Object.assign(document.createElement("label"), {
        for: "searchBar",
    })

    const input = Object.assign(document.createElement("input"), {
        type: "text",
        name: "searchBar",
        id: "searchBar",
        pattern: "[A-Za-z]+",
        placeholder: "Search a City",
        required: true
    })
    input.setAttribute("minlength", "3");
    input.setAttribute("maxlength", "35");

    const button = Object.assign(document.createElement("button"), {
        id: "submitBtn",
        name: "submitBtn",
        textContent: "Search",
    })
    
    //handle the event listener
   button.addEventListener("click", async (e) => {
        e.preventDefault();
        if (document.querySelector(".result")) { document.querySelector(".result").remove() };
        document.body.appendChild( await getWeather(input.value));
    });

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    div.appendChild(form);

    return div;
};


const getWeather = async (form) =>{
    const div = document.createElement("div");
    div.classList.add("result");

    const cityName = document.createElement("h2");
    cityName.innerText = await getCityName(form);

    const weatherInfo = document.createElement("h3");
    weatherInfo.innerText = await searchWeather(form);

    const weatherImage = document.createElement("img");
    const imageQuery = `${cityName.innerText}, ${weatherInfo.innerText}`;
    await changeBackground(weatherImage, imageQuery, 0);

    div.appendChild(cityName);
    div.appendChild(weatherInfo);
    div.appendChild(weatherImage);

    return div;
};
export default createSearchForm;

