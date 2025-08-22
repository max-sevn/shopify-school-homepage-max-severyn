export function CollectionCard({ src, heading, price }) {
  return `
    <div class="swiper-slide collection__list-item">
          <img class='collection__list-item-image' src="${src}" alt="${heading}" />
          <div class="collection__list-item-text_wrapper">
            <h2 class="collection__list-item-heading">${heading}</h2>
            <p class="collection__list-item-price">$${price}</p>
          </div>
    </div>
    `;
}
