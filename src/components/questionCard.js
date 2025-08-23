export function QuestionCard({ heading, content }) {
  return `
    <div class="faq__accordion-item">
        <div class="faq__accordion-header">
          <h2 class="faq__accordion-heading">
            ${heading}
          </h2>
          <img class="faq__accordion_icon" src="/src/assets/icons/plus-circle.svg" alt="expandPlusIcon" />
          </div>
          <div class='faq__accordion-content'>
          <p>${content}</p>
          </div>
    </div>
    `;
}
