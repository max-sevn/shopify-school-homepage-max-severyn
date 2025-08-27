import "../styles/components/popup.css";

import { Button } from "./ui/Button";

export function Popup() {
  return `
    <div class="popup">
      <div class="popup__wrapper">
      <div class="popup__main">
        <div class="popup__content">
          <h1 class="popup__heading">Here's $10 Off Your First Order!</h1>
          <p class="popup__text">
            Join our newsletter and get a $10 discount code sent straight to
            your inbox. New customers only.
          </p>
        </div>
        <form class="popup__form">
          <div class="popup__form-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>
          ${Button({
            blockClass: "form__popup",
            label: "Send",
            variant: "dark",
            type: "submit",
            extraClass: "button-wide",
          })}
        </form>
        </div>
        <img class="popup__image" src="/src/assets/images/popup/popup-1.jpg" />
        <button class="popup__close">
          <img class="popup__close-icon" src="/src/assets/icons/close.svg" />
        </button>
      </div>
    </div>
    `;
}

function showPopup() {
  setTimeout(() => {
    document.querySelector(".popup").classList.add("show");
  }, 1000);
}

function checkForm() {
  const form = document.querySelector(".popup__form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        document.querySelector(".popup").classList.remove("show");
      }
    });
  }
}

export function initPopup() {
  document.querySelector(".popup__close").addEventListener("click", () => {
    document.querySelector(".popup").classList.remove("show");
  });
  showPopup();
  checkForm();
}
