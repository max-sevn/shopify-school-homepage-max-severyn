import { Form } from "../../../contactForm";

export function FormSection() {
  return `
    <section class="form">
      <h2 class="form__heading">Need Help?</h2>
      ${Form()}
    </section>
    `;
}
