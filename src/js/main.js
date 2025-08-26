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
          loop: true,
          spaceBetween: 24,
          breakpoints: {
            0: {
              slidesPerView: 1.1,
              navigation: false,
              allowTouchMove: true,
              spaceBetween: 16,
            },

            768: {
              slidesPerView: 2.5,
              navigation: false,
              allowTouchMove: true,
            },
            1280: {
              slidesPerView: 4,
              navigation: {
                nextEl: ".swiper-button-next",
                clickable: true,
              },
              allowTouchMove: false,
            },
          },
        });
      }

      if (document.querySelector(".product__gallery-swiper")) {
        new Swiper(".product__gallery-swiper", {
          direction: "horizontal",
          spaceBetween: 16,
          allowTouchMove: true,
          slidesPerView: 3.45,
          breakpoints: {
            540: {
              allowTouchMove: false,
            },
            1280: {
              direction: "vertical",
              slidesPerView: 5,
              spaceBetween: 24,
              allowTouchMove: false,
            },
          },
        });
      }
      break;
  }
}

renderContent("home");
