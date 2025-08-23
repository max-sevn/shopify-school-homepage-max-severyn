import "../../styles/components/footer.css";

export function Footer() {
  const navigationData = [
    {
      heading: "Resources",
      navigationLinks: [
        {
          name: "Find a Store",
          link: "#",
        },
        {
          name: "Nike Journal",
          link: "#",
        },
        {
          name: "Become a Member",
          link: "#",
        },
        {
          name: "Feedback",
          link: "#",
        },
        {
          name: "Promo Codes",
          link: "#",
        },
      ],
    },
    {
      heading: "Help",
      navigationLinks: [
        {
          name: "Get Help",
          link: "#",
        },
        {
          name: "Order Status",
          link: "#",
        },
        {
          name: "Shipping and Delivery",
          link: "#",
        },
        {
          name: "Returns",
          link: "#",
        },
        {
          name: "Payment Options",
          link: "#",
        },
      ],
    },
    {
      heading: "Company",
      navigationLinks: [
        {
          name: "About Nike",
          link: "#",
        },
        {
          name: "News",
          link: "#",
        },
        {
          name: "Careers",
          link: "#",
        },
        {
          name: "Investors",
          link: "#",
        },
        {
          name: "Sustainability",
          link: "#",
        },
      ],
    },

    {
      heading: "Menu",
      navigationLinks: [
        {
          name: "New & Featured",
          link: "#",
        },
        {
          name: "Men",
          link: "#",
        },
        {
          name: "Women",
          link: "#",
        },
        {
          name: "Kids",
          link: "#",
        },
      ],
    },
  ];

  const navigationMenu = (currentNavigationData) => {
    return `
   <nav class="footer__menu">
      <h1 class="footer__heading">${currentNavigationData.heading}</h1>
      <ul class="footer-list">
        ${currentNavigationData.navigationLinks
          .map(
            (currentLink) => `
        <li class="footer__menu-item">
          <a class="footer__menu-link" href="${currentLink.link}"
            >${currentLink.name}</a
          >
        </li>
        `
          )
          .join("")}
      </ul>
    </nav>
    `;
  };

  const navigationHTML = navigationData
    .map((currentData) => navigationMenu(currentData))
    .join("");

  return `
  <footer class="footer">
      <div class="footer__menu-wrapper">${navigationHTML}</div>
      <div class="footer__misc">
        <span class="footer__misc-copyright">© 2025 Nike, Inc. All rights reserved</span>
        <nav class="footer__misc-menu">
          <ul class="footer__misc-list">
            <li class="footer__misc-menu-item">
              <a class="footer__misc-menu-link" href="#">Terms & Use</a>
            </li>
            <li class="footer__misc-menu-item">
              <a class="footer__misc-menu-link" href="#"
                >Privacy & Cookie Policy</a
              >
            </li>
            <li class="footer__misc-menu-item">
              <a class="footer__misc-menu-link" href="#"
                >Privacy & Cookie Setting</a
              >
            </li>
          </ul>
        </nav>
      </div>
  </footer>
    `;
}

{
  /* <footer class="footer">
      <nav class="footer__menu">
        <h1 class="footer__heading">Resources</h1>
        <ul class="footer-list">
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">New & Featured</a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">Men</a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">Women</a>
          </li>
          <li class="footer__menu-item">
            <a class="footer__menu-link" href="#">Kids</a>
          </li>
        </ul>
      </nav>
  </footer> */
}
