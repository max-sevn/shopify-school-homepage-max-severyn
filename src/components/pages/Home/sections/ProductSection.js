import "../../../../styles/components/sections/product.css";
import { Button } from "../../../ui/Button";

const productsData = [
  {
    id: 1,
    product: "Nike Air Max Plus White",
    price: "$280.00",
    images: [
      "/src/assets/images/product/color1variant1.jpg",
      "/src/assets/images/product/color1variant2.jpg",
      "/src/assets/images/product/color1variant3.jpg",
      "/src/assets/images/product/color1variant4.jpg",
      "/src/assets/images/product/color1variant5.jpg",
    ],
    sizes: [
      {
        size: "UK 5.5",
        available: true,
      },
      {
        size: "UK 6 (EU 39)",
        available: true,
      },
      {
        size: "UK 6 (EU 40)",
        available: true,
      },
      {
        size: "UK 6.5",
        available: true,
      },
      {
        size: "UK 7",
        available: true,
      },
      {
        size: "UK 7.5",
        available: true,
      },
    ],
  },
  {
    id: 2,
    product: "Nike Air Max Plus Black",
    price: "$320.00",
    images: [
      "/src/assets/images/product/color2variant1.jpg",
      "/src/assets/images/product/color2variant2.jpg",
      "/src/assets/images/product/color2variant3.jpg",
      "/src/assets/images/product/color2variant4.jpg",
      "/src/assets/images/product/color2variant5.jpg",
    ],
    sizes: [
      {
        size: "UK 5.5",
        available: true,
      },
      {
        size: "UK 6 (EU 39)",
        available: true,
      },
      {
        size: "UK 6 (EU 40)",
        available: true,
      },
      {
        size: "UK 6.5",
        available: true,
      },
      {
        size: "UK 7",
        available: true,
      },
      {
        size: "UK 7.5",
        available: true,
      },
    ],
  },
  {
    id: 3,
    product: "Nike Air Max Plus Pink",
    price: "$260.00",
    images: [
      "/src/assets/images/product/color3variant1.jpg",
      "/src/assets/images/product/color3variant2.jpg",
      "/src/assets/images/product/color3variant3.jpg",
      "/src/assets/images/product/color3variant4.jpg",
      "/src/assets/images/product/color3variant5.jpg",
    ],
    sizes: [
      {
        size: "UK 5.5",
        available: true,
      },
      {
        size: "UK 6 (EU 39)",
        available: true,
      },
      {
        size: "UK 6 (EU 40)",
        available: true,
      },
      {
        size: "UK 6.5",
        available: true,
      },
      {
        size: "UK 7",
        available: true,
      },
      {
        size: "UK 7.5",
        available: true,
      },
    ],
  },
];

export function ProductSection() {
  return `
    <section class="product">
      ${renderProduct(productsData)}
    </section>
    `;
}

function productSetup() {
  const currentProductId = Number(
    document.querySelector(".product__main").getAttribute("product-id")
  );
  const productsList = document.querySelectorAll(".product__main-variant");
  let productsListArray = [...productsList];
  let activeProduct = productsListArray.filter(
    (item) => Number(item.getAttribute("product-id")) === currentProductId
  )[0];
  activeProduct.classList.add("active");

  document.querySelector(".product__gallery-item").classList.add("active");

  document.querySelector(".product__main-size-variant").classList.add("active");

  function bindDelegationListener(parentClass, childClass, callback) {
    const container = document.querySelector(parentClass);
    let btn = "";
    if (container) {
      container.addEventListener("click", (e) => {
        const btn = e.target.closest(childClass);
        if (!btn) return;
        container
          .querySelectorAll(`${childClass}.active`)
          .forEach((activeBtn) => activeBtn.classList.remove("active"));
        btn.classList.add("active");
        //callback is used to be able to pass currently pressed button further
        if (callback) callback(btn);
      });
    }
    return btn;
  }

  //binding gallery controls
  bindDelegationListener(
    ".product__gallery-list",
    ".product__gallery-item",
    (btn) => {
      const getImage = btn.firstElementChild;
      if (getImage && getImage.tagName === "IMG") {
        const srcValue = getImage.getAttribute("src");
        const mainVariant = document.querySelector(
          ".product__gallery-preview-image"
        );
        mainVariant.src = srcValue;
      }
    }
  );

  //binding variants controls
  bindDelegationListener(
    ".product__main-variants",
    ".product__main-variant",
    (btn) => {
      const getId = Number(btn.getAttribute("product-id"));
      if (currentProductId === getId) return;
      const productSection = document.querySelector(".product");
      if (productSection.innerHTML) {
        productSection.innerHTML = `
        ${renderProduct(productsData, getId)}
        `;
        //re-setup swiper
        if (document.querySelector(".product__gallery-swiper")) {
          new Swiper(".product__gallery-swiper", {
            direction: "horizontal",
            spaceBetween: 16,
            allowTouchMove: true,
            slidesPerView: 3.45,
            breakpoints: {
              1280: {
                direction: "vertical",
                slidesPerView: 5,
                spaceBetween: 24,
                allowTouchMove: false,
              },
            },
          });
        }
        productSetup();
      }
    }
  );

  //binding sizes controls
  bindDelegationListener(
    ".product__main-size-variants",
    ".product__main-size-variant"
  );
}

function renderProduct(data, id = 1) {
  const currentProduct = data.filter((item) => item.id === id)[0];
  return `
   <div class="product__gallery">
      <div class="swiper product__gallery-swiper">
      <div class="swiper-wrapper product__gallery-list">
        ${currentProduct.images
          .map(
            (image, index) => `
        <button class="swiper-slide product__gallery-item">
          <img
            class="product__gallery-image"
            src="${image}"
            alt="${currentProduct.product + index}"
          />
          <div class="product__gallery-overlay"></div>
        </button>
        `
          )
          .join("")}
      </div>
      </div>
      <div class="product__gallery-preview">
        <img
          class="product__gallery-preview-image"
          src="${currentProduct.images[0]}"
          alt="previewImage"
        />
        <div class="product__gallery-badge">
          <img
            class="product__gallery-badge-icon"
            src="/src/assets/icons/star.svg"
          />
          <span class="product__gallery-badge-text">Highly Rated</span>
        </div>
      </div>
    </div>
    <div class="product__main" product-id="${currentProduct.id}">
      <div class="product__main-details">
        <h2 class="product__main-heading">${currentProduct.product}</h2>
        <p class="product__main-price">${currentProduct.price}</p>
      </div>
      <div class="product__main-variants">
        ${productsData
          .map(
            (product) => `
        <button class="product__main-variant" product-id="${product.id}">
          <img
            class="product__main-variant-image"
            src="${product.images[0]}"
            alt="variant"
          />
        </button>
        `
          )
          .join("")}
      </div>
      <div class="product__main-size">
        <label class="product__main-size-label">Select Size:</label>
        <div class="product__main-size-variants">
          ${currentProduct.sizes
            .map(
              (item) => `
          <button class="product__main-size-variant">${item.size}</button>
          `
            )
            .join("")}
        </div>
      </div>
      ${Button({
        blockClass: "product",
        label: "Add To Bag",
        variant: "dark",
        extraClass: "button-wide",
      })}
      <p class="product__main-description">
        Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air
        experience that offers premium stability and unbelievable cushioning.
      </p>
   </div>
    `;
}

requestAnimationFrame(() => {
  productSetup();
});
