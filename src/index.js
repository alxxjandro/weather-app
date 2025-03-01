import "./general.css";
import createSearchForm from "./GUI";

const loadGUI = () => {
  const searchBar = document.body.appendChild(createSearchForm());
};

loadGUI();
