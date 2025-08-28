import { HeroSection, initHeroSection } from "./sections/HeroSection";
import {
  CollectionSection,
  initCollectionSection,
} from "./sections/CollectionSection";
import { FaqSection, initFaqSection } from "./sections/FaqSection";
import { ProductSection, initProductSection } from "./sections/ProductSection";
import { FormSection, initFormSection } from "./sections/FormSection";

export function Home() {
  return `
${HeroSection()}
${CollectionSection()}
${FaqSection()}
${ProductSection()}
${FormSection()}
    `;
}

export function initHome() {
  initHeroSection();
  initCollectionSection();
  initFaqSection();
  initProductSection();
  initFormSection();
}
