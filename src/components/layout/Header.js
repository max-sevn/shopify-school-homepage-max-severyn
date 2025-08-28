import "@/styles/components/header.css";

export function Header() {
  return `
<header class="header">
  <a class="header__logo logo" href="#">
    <img class="header__image" src="/src/assets/logo.svg" alt="Logo" />
  </a>
   <button class="header__hamburger">
    <img class="header__hamburger-icon" src="/src/assets/icons/hamburger.svg" alt="Hamburger menu" />
  </button>
  <nav class="header__menu" aria-label="Main navigation">
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
  <a class="header__cart cart" href="#" aria-lable="Shopping cart">
    <img
      class="header__icon-cart"
      src="/src/assets/icons/cart.svg"
      alt="Cart"
    />
  </a>
</header>
    `;
}
