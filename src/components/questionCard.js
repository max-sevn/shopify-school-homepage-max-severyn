export function QuestionCard({ heading, content }) {
  return `
    <div class="faq__questions-question">
          <h2 class="faq__questions-question-heading">
            ${heading}
          </h2>
          <img src="/src/assets/icons/plus-circle.svg" alt="expandPlusIcon" />
    </div>
    `;
}
