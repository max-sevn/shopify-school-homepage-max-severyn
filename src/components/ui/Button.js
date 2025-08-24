export function Button({
  blockClass,
  label,
  variant = "light",
  type = "button",
  extraClass,
}) {
  return `
    <button class="${blockClass}-button button button--${variant} ${extraClass}" btn-id="${blockClass}-button-id" type="${type}">
      ${label}
    </button>
    `;
}
