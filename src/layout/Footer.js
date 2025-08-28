import "@/styles/footer.css";
import chevronIcon from "@/assets/icons/chevron.svg";

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

  const navigationMenu = (currentNavigationData, index) => {
    return `
   <nav class="footer__menu" aria-label="Footer primary navigation">
      <button class="accordion-header footer__accordion-header" aria-expanded="false" aria-controls="nav${index}">
      <h2 class="footer__heading">${currentNavigationData.heading}</h2>
      <img class="footer__icon" src="${chevronIcon}" alt="Icon chevron" />
      </button>
      <ul id="nav${index}" class="accordion-content footer__list" role="region">
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
    .map((currentData, index) => navigationMenu(currentData, index + 1))
    .join("");

  return `
  <footer class="footer">
      <div class="footer__wrapper">${navigationHTML}</div>
      <div class="footer__misc">
        <span class="footer__misc-copyright">© 2025 Stellar Soft. All rights reserved</span>
        <nav class="footer__misc-navigation" aria-label="Footer secondary navigation">
          <ul class="footer__misc-list">
            <li class="footer__misc-item">
              <a class="footer__misc-link" href="#">Terms & Use</a>
            </li>
            <li class="footer__misc-item">
              <a class="footer__misc-link" href="#"
                >Privacy & Cookie Policy</a
              >
            </li>
            <li class="footer__misc-item">
              <a class="footer__misc-link" href="#"
                >Privacy & Cookie Setting</a
              >
            </li>
          </ul>
        </nav>
      </div>
  </footer>
    `;
}

export function initFooter() {
  //accordion logic
  const navContainer = document.querySelector(".footer__menu");
  if (navContainer) {
    document.querySelectorAll(".footer__accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const contentBlock = header.nextElementSibling;
        const collapseIcon = header.lastElementChild;
        if (contentBlock.style.maxHeight) {
          //collapse accordion content
          contentBlock.style.maxHeight = null;
          collapseIcon.style.transform = "rotate(0deg)";
          header.setAttribute("aria-expanded", "false");
        } else {
          //expand to full height accordion content
          contentBlock.style.maxHeight = contentBlock.scrollHeight + "px";
          collapseIcon.style.transform = "rotate(180deg)";
          header.setAttribute("aria-expanded", "true");
        }
        const item = header.parentElement;
        item.classList.toggle("active");
      });
    });
  }
}
