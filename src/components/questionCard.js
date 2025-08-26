export function QuestionCard({ heading, content }) {
  return `
    <div class="faq__accordion-item">
      <button class="accordion-header faq__accordion-header">
        <h2 class="faq__accordion-heading">${heading}</h2>
        <img
          class="faq__accordion-icon"
          src="/src/assets/icons/plus-circle.svg"
          alt="expandPlusIcon"
        />
      </button>
      <div class="accordion-content faq__accordion-content">
        <p>${content}</p>
      </div>
    </div>
    `;
}
