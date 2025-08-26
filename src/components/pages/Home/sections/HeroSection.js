import "../../../../styles/components/sections/hero.css";
import { Button } from "../../../ui/Button";

export function HeroSection() {
  return `
    <section class="hero">
      <div class="swiper hero__swiper">
        <div class="swiper-wrapper hero__slides-wrapper">
          <div
            class="swiper-slide hero__slide"
            style="background-image: url('/src/assets/images/heroImage-1.jpg')"
          ></div>
          <div
            class="swiper-slide hero__slide"
            style="background-image: url('/src/assets/images/heroImage-2.jpg')"
          ></div>
          <div
            class="swiper-slide hero__slide"
            style="background-image: url('/src/assets/images/heroImage-3.jpg')"
          ></div>
        </div>
        <div class="hero__inner">
          <div class="hero__content">
            <div class="hero__content-wrapper">
            <h1 class="hero__heading">
              More than just shoes — it's a part of your story.
            </h1>
            <p class="hero__text">
              Original sneakers from Nike and other top brands that make every
              step feel special.
            </p>
            </div>
            ${Button({ blockClass: "hero", label: "Shop the Collection" })}
          </div>
        </div>
        <div class="swiper-pagination hero__pagination"></div>
      </div>
    </section>
    `;
}

export function initHeroSection() {
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
}
