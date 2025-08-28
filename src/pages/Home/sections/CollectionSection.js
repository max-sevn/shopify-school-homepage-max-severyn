import "@/styles/sections/collection.css";
import { CollectionCard } from "@/components/collectionCard";
import rightArrowIcon from "@/assets/icons/arrow-right.svg";
import collectionImage1 from "@/assets/images/collection-1.jpg";
import collectionImage2 from "@/assets/images/collection-2.jpg";
import collectionImage3 from "@/assets/images/collection-3.jpg";
import collectionImage4 from "@/assets/images/collection-4.jpg";

export function CollectionSection() {
  const collectionsData = [
    {
      src: collectionImage1,
      heading: "Nike Streakfly 2",
      price: "300",
    },
    {
      src: collectionImage2,
      heading: "Nike Pegasus Premium",
      price: "350",
    },
    {
      src: collectionImage3,
      heading: "Nike Pegasus 41",
      price: "280",
    },
    {
      src: collectionImage4,
      heading: "Nike Revolution 7",
      price: "440",
    },
  ];
  //Duplicating items for collection swiper to work
  const duplicateItems = [...collectionsData, ...collectionsData];
  const collectionsHTML = duplicateItems
    .map((card) => CollectionCard(card))
    .join("");

  return `
    <section class="collection" aria-label="Featured products">
      <h2 class="collection__heading">Featured Collection</h2>
      <div class='collection__wrapper'>
      <div class="swiper collection__swiper" role="region" aria-roledescription="carousel">
        <div class="swiper-wrapper collection__list">
          ${collectionsHTML}
        </div>
      </div>
      <div class="swiper-button-next collection__button-next" aria-label="Next product">
            <img src="${rightArrowIcon}" alt="Icon arrow-right" />
        </div>
      <div>
    </section> 
    `;
}

export function initCollectionSection() {
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
}
