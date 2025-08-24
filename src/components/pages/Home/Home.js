import { HeroSection } from "./sections/HeroSection";
import { CollectionSection } from "./sections/CollectionSection";
import { FaqSection } from "./sections/FaqSection";
import { ProductSection } from "./sections/ProductSection";
import { FormSection } from "./sections/FormSection";

function test() {
  console.log("test");
}

export function Home() {
  return `
${HeroSection()}
${CollectionSection()}
${FaqSection()}
${ProductSection()}
${FormSection()}
    `;
}

// binding the event after rendering
requestAnimationFrame(() => {
  const btn = document.querySelector(`[btn-id="hero__button-id"]`);
  if (btn) {
    btn.addEventListener("click", test);
  }
});
