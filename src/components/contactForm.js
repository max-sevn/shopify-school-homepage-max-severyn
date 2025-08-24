import "../styles/components/form.css";
import { Button } from "./ui/Button";

export function Form() {
  return `
    <form class="contact-form">
      <div class="contact-form__row">
        <div class="contact-form__field">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>

        <div class="contact-form__field">
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

      <div class="contact-form__field">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
        />
      </div>

      <div class="contact-form__field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter Message"
          required
        ></textarea>
      </div>
       ${Button({
         blockClass: "contact-form",
         label: "Submit",
         variant: "dark",
         type: "submit",
       })}
    </form>
    `;
}

requestAnimationFrame(() => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        form.reset();
      }
    });
  }
});
