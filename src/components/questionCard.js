import plusCircleIcon from "@/assets/icons/plus-circle.svg";

export function QuestionCard({ heading, content }, index) {
  return `
    <div class="faq__accordion-item">
      <button class="accordion-header faq__accordion-header" aria-expanded="false" aria-controls="faq${index}">
        <h2 class="faq__accordion-heading">${heading}</h2>
        <img
          class="faq__accordion-icon"
          src="${plusCircleIcon}"
          alt="Icon expand"
        />
      </button>
      <div id="faq${index}" class="accordion-content faq__accordion-content" role="region">
        <p>${content}</p>
      </div>
    </div>
    `;
}
