# Shopify School Homepage Task

**Live Demo:** \[[link](https://shopify-test-task-max-severyn.netlify.app/)]

A lightweight landing page built with **Vanilla JS, HTML, CSS** on **Vite**. It uses a component-like approach with template literals (Header, Footer, UI Button, Sections) and mounts dynamic content into a central container.

---

## Tech Stack

* Vite (dev server & bundler)
* Vanilla JavaScript 
* HTML5 / CSS3
* Swiper for sliders

---

## Getting Started (Local Setup)

### Prerequisites

* **Node.js** ≥ 18
* **npm** 

### Install & Run

```bash
# 1) Git Clone
git clone https://github.com/max-sevn/shopify-school-homepage-max-severyn.git

# 2) Install dependencies
npm install

# 3) Start dev server
npm run dev
# open the printed local URL (e.g. http://localhost:5173)

# 4) Build for production
npm run build

# 5) Preview the production build locally
npm run preview
```

## What This Project Is About

* Implemented a **component design approach** using **vanilla JS template literals** (no frameworks).
* Static **Header** & **Footer** mount once; **middle content** (sections/pages) is injected dynamically.
* Reusable **UI primitives** (e.g., Button) and simple section composition (hero, collections, etc.).
* Swiper-powered sections.

---

## Known Issues / Future Improvements

* **Images & performance/accessibility**: Large images cause longer loads. I’d introduce responsive images via `srcset`/`sizes`, compression, and `loading="lazy"`, plus meaningful `alt` text.
* **Keyboard accessibility**: Closed accordions aren’t operable via keyboard (Tab/Enter/Space). I’d rework them to use `<button>` triggers with proper `aria-expanded`, `aria-controls`, and focus management.
* **Architecture**: Consider a more **atomic design** structure and stricter naming to reduce coupling. Extract smaller units (atoms/molecules) where needed.
* **Refactoring**: Some file logic is messy and needs cleanup.
* **General polish**: Error states, empty data handling, local storage/cookies support and scalability.

