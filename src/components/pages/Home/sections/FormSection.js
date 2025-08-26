import "../../../../styles/components/form.css";
import { Button } from "../../../ui/Button";

export function FormSection() {
  return `
    <section class="form">
      <h2 class="form__heading">Need Help?</h2>
     <form class="form__contact">
      <div class="form__contact-row">
        <div class="form__contact-field">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>

        <div class="form__contact-field">
          <label for="phone">Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Number"
            required
          />
        </div>
      </div>

      <div class="form__contact-field">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
        />
      </div>

      <div class="form__contact-field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Enter Message"
          required
        ></textarea>
      </div>
      ${Button({
        blockClass: "form__contact",
        label: "Submit",
        variant: "dark",
        type: "submit",
      })}
    </form>
    </section>
    `;
}

export function initFormSection() {
  const form = document.querySelector(".form__contact");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        form.reset();
      }
    });
  }
}
