export function Button({
  blockClass,
  label,
  variant = "light",
  type = "button",
}) {
  return `
    <button class="${blockClass}__button button button--${variant}" btn-id="${blockClass}__button-id" type="${type}">
      ${label}
    </button>
    `;
}
