export function Button({ blockClass, label, type = "light" }) {
  return `
    <button class="${blockClass}__button button button--${type}" btn-id="${blockClass}__button-id">
      ${label}
    </button>
    `;
}
