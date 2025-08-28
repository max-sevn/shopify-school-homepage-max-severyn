import "@/styles/base.css";
import { Header } from "@/components/layout/Header";
import { Footer, initFooter } from "@/components/layout/Footer";
import { Home, initHome } from "@/components/pages/Home/Home";
import { initPopup, Popup } from "@/components/popup";

document.querySelector("#popup").innerHTML = Popup();
initPopup();

document.querySelector("#header").innerHTML = Header();

document.querySelector("#footer").innerHTML = Footer();
initFooter();

//here you can dynamically change content of the page between header and footer
function renderContent(page) {
  const content = document.querySelector("#content");
  switch (page) {
    case "home":
      content.innerHTML = Home();
      initHome();
      break;
  }
}

renderContent("home");
