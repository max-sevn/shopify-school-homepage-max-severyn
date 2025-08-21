// import { loadComponent } from "./loadComponent.js";

import "../styles/base.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Home } from "../components/pages/Home";

document.querySelector("#header").innerHTML = Header();
document.querySelector("#footer").innerHTML = Footer();

//here you can dynamically change content of the page between header and footer
function renderContent(page) {
  const content = document.querySelector("#content");
  switch (page) {
    case "home":
      content.innerHTML = Home();
      break;
  }
}

renderContent("home");
