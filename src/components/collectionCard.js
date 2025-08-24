export function CollectionCard({ src, heading, price }) {
  return `
    <div class="swiper-slide collection__item">
      <img class="collection__item-image" src="${src}" alt="${heading}" />
      <div class="collection__item-content">
        <h2 class="collection__item-heading">${heading}</h2>
        <p class="collection__item-price">$${price}</p>
      </div>
    </div>
    `;
}
