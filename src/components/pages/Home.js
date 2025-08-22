import "../../styles/components/sections/hero.css";
import "../../styles/components/sections/collection.css";
import "../../styles/components/sections/faq.css";
import { Button } from "../ui/Button";
import { CollectionCard } from "../collectionCard";
import { QuestionCard } from "../questionCard";

function test() {
  console.log("test");
}

export function Home() {
  const collectionsData = [
    {
      src: "/src/assets/images/collection-1.jpg",
      heading: "Nike Streakfly 2",
      price: "300",
    },
    {
      src: "/src/assets/images/collection-2.jpg",
      heading: "Nike Pegasus Premium",
      price: "350",
    },
    {
      src: "/src/assets/images/collection-3.jpg",
      heading: "Nike Pegasus 41",
      price: "280",
    },
    {
      src: "/src/assets/images/collection-4.jpg",
      heading: "Nike Revolution 7",
      price: "440",
    },
  ];
  const questionsData = [
    {
      heading: "What are Nike's delivery options?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
    {
      heading: "What are Nike's delivery options?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
  ];
  //Duplicating items for collection swiper to work
  const duplicateItems = [...collectionsData, ...collectionsData];
  const collectionsHTML = duplicateItems
    .map((card) => CollectionCard(card))
    .join("");

  const questionsHTML = questionsData
    .map((card) => QuestionCard(card))
    .join("");
  return `
<section class="hero">
      <div class="swiper hero__swiper">
        <div class="swiper-wrapper">
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
          <div class="hero__inner-text_wrapper">
            <h1 class="hero__heading">
              More than just shoes — it’s a part of your story.
            </h1>
            <p class="hero__text">
              Original sneakers from Nike and other top brands that make every
              step feel special.
            </p>
            ${Button({ blockClass: "hero", label: "Shop the Collection" })}
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
</section>
<section class="collection">
      <h1 class="collection__heading">Featured Collection</h1>
      <div class='collection__wrapper'>
      <div class="swiper collection__swiper">
        <div class="swiper-wrapper collection__list">
          ${collectionsHTML}
        </div>
      </div>
      <div class="swiper-button-next collection__list-swiper">
            <img src="/src/assets/icons/arrow-right.svg" alt="arrowRight" />
        </div>
      <div>
</section> 
<section class="faq">
      <div class="faq-text_wrapper">
        <h1 class="faq-heading">Frequently asked questions</h1>
        <p class="faq-text">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <div class="faq__questions-wrapper">
        ${questionsHTML}
      </div>
    </section>
    `;
}

// binding the event after rendering
requestAnimationFrame(() => {
  const btn = document.querySelector(`[btn-id="hero__button-id"]`);
  if (btn) {
    btn.addEventListener("click", test);
  }
});
