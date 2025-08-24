import "../styles/base.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Home } from "../components/pages/Home/Home";

document.querySelector("#header").innerHTML = Header();
document.querySelector("#footer").innerHTML = Footer();

//here you can dynamically change content of the page between header and footer
function renderContent(page) {
  const content = document.querySelector("#content");
  switch (page) {
    case "home":
      content.innerHTML = Home();
      if (document.querySelector(".hero__swiper")) {
        new Swiper(".hero__swiper", {
          loop: true,
          autoplay: { delay: 5000 },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }

      if (document.querySelector(".collection__swiper")) {
        new Swiper(".collection__swiper", {
          slidesPerView: 4,
          loop: true,
          spaceBetween: 24,
          navigation: {
            nextEl: ".swiper-button-next",
            clickable: true,
          },
          allowTouchMove: false,
        });
      }
      break;
  }
}

renderContent("home");
