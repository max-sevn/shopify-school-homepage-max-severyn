import "../../../../styles/components/sections/collection.css";
import { CollectionCard } from "../../../collectionCard";

export function CollectionSection() {
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
  //Duplicating items for collection swiper to work
  const duplicateItems = [...collectionsData, ...collectionsData];
  const collectionsHTML = duplicateItems
    .map((card) => CollectionCard(card))
    .join("");

  return `
    <section class="collection">
      <h1 class="collection__heading">Featured Collection</h1>
      <div class='collection__wrapper'>
      <div class="swiper collection__swiper">
        <div class="swiper-wrapper collection__list">
          ${collectionsHTML}
        </div>
      </div>
      <div class="swiper-button-next collection__button-next">
            <img src="/src/assets/icons/arrow-right.svg" alt="arrowRight" />
        </div>
      <div>
    </section> 
    `;
}
