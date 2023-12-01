"use strict";
// SELECTION
const h1 = document.querySelector(".heading-primary");

const headingNav = document.querySelector(".header");

const mobileBtnNav = document.querySelector(".btn-mobile-nav");

const copyrightYear = document.querySelector(".year");

// NAV-MOBILE-BTN-FUNCTION
mobileBtnNav.addEventListener("click", function () {
  headingNav.classList.toggle("nav-open");
});

// COPYRIGHT-YEAR-UPPDATE-FUNCTION
let date = new Date().getFullYear();

const yearUpdate = function () {
  copyrightYear.textContent = date;
  copyrightYear.style.color = "#555";
};

yearUpdate();

//  Implementing Smooth Scrolling
// ------INCLUDE THIS:
/* 
<script
defer
src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
></script>
*/
// ----------

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headingNav.classList.toggle("nav-open");
    }
  });
});

// Implementing a Sticky Navigation Bar
const hero_SectionEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-110px",
  }
);

observer.observe(hero_SectionEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
