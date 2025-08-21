import "../../styles/components/header.css";

export function Header() {
  return `
<header class="header">
  <a class="header__logo logo" href="#">
    <img class="header__image" src="/src/assets/logo.svg" alt="logo" />
  </a>
  <nav class="header__menu">
    <ul class="header__menu-list">
      <li class="header__menu-item">
        <a class="header__menu-link" href="#">New & Featured</a>
      </li>
      <li class="header__menu-item">
        <a class="header__menu-link" href="#">Men</a>
      </li>
      <li class="header__menu-item">
        <a class="header__menu-link" href="#">Women</a>
      </li>
      <li class="header__menu-item">
        <a class="header__menu-link" href="#">Kids</a>
      </li>
    </ul>
  </nav>
  <a class="header__cart cart" href="#">
    <img
      class="header__icon-cart"
      src="/src/assets/icons/cart.svg"
      alt="iconCart"
    />
  </a>
</header>
    `;
}
