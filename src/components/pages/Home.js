import "../../styles/components/sections/hero.css";
import "../../styles/components/sections/collection.css";

export function Home() {
  return `
   <section class="hero">
  <div class="hero__inner">
    <div class="hero__inner-text_wrapper">
      <h1 class="hero__heading">
        More than just shoes — it’s a part of your story.
      </h1>
      <p class="hero__text">
        Original sneakers from Nike and other top brands that make every
        step feel special.
      </p>
    </div>
    <button class="hero__button button button--light">
      Shop the Collection
    </button>
  </div>
</section>
<section class="collection">test</section>
    `;
}
