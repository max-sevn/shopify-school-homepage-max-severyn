import "@/styles/sections/faq.css";
import { QuestionCard } from "@/components/questionCard";
import plusCircleIcon from "@/assets/icons/plus-circle.svg";
import minusCircleIcon from "@/assets/icons/minus-circle.svg";

export function FaqSection() {
  const questionsData = [
    {
      heading: "What are Nike's delivery options?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
    {
      heading: "What is Nike's returns policy?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
    {
      heading: "Where is my Nike order?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
    {
      heading: "How do I find the right size and fit?",
      content:
        "When you shop Nike online, either in the Nike App or on Nike.com, you can return items that are unworn and unwashed and still have their product tags attached within 30 days of purchase (some exceptions apply). That includes custom Nike By You sneakers.",
    },
  ];

  const questionsHTML = questionsData
    .map((card, index) => QuestionCard(card, index + 1))
    .join("");

  return `
    <section class="faq" aria-lable="FAQ">
      <div class="faq__content">
        <h2 class="faq__heading">Frequently asked questions</h2>
        <p class="faq__text">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
      </div>
      <div class="faq__accordion">${questionsHTML}</div>
    </section>
    `;
}

export function initFaqSection() {
  //accordion logic
  const faqContainer = document.querySelector(".faq__accordion");
  if (faqContainer) {
    document.querySelectorAll(".faq__accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const contentBlock = header.nextElementSibling;
        const collapseIcon = header.lastElementChild;
        if (contentBlock.style.maxHeight) {
          //collapse accordion content
          contentBlock.style.maxHeight = null;
          collapseIcon.src = `${plusCircleIcon}`;
          header.setAttribute("aria-expanded", "false");
        } else {
          //expand to full height accordion content
          contentBlock.style.maxHeight = contentBlock.scrollHeight + "px";
          collapseIcon.src = `${minusCircleIcon}`;
          header.setAttribute("aria-expanded", "true");
        }
        const item = header.parentElement;
        item.classList.toggle("active");
      });
    });
  }
}
