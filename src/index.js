import "./general.css";
import createSearchForm from "./GUI";

const loadGUI = () =>{
    console.log("Loading the GUI");
    const searchBar = document.body.appendChild(createSearchForm());
}

loadGUI();