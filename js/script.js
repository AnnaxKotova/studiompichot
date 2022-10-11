let menuBurger = document.getElementById("menu-burger");
let closeMenu = document.getElementById("closeMenu");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");
let homepage;

import { toggleMenu, changeColorInterval, headerChange } from "./functions.js";

import { slideToggle } from "./slideToggle.js";

import { generateProjects } from "./generateProjects.js";

if (menuBurger) {
  menuBurger.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);

  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("click", function (event) {
      if (navbar.classList.contains("navbar-show")) {
        let isClickInsideElement = navbar.contains(event.target);
        if (!isClickInsideElement) {
          //Do something click is outside specified element
          toggleMenu();
        }
      }
    });
  });
}

let currentLinks = navbar.querySelectorAll('a[href="' + document.URL + '"]');
currentLinks.forEach(function (link) {
  link.parentNode.classList.toggle("active");
});

if (homepage) {
  changeColorInterval();

  window.onscroll = function () {
    headerChange();
  };
}

let openersQuestions = Array.from(
  document.getElementsByClassName("faq__open-question")
);

if (openersQuestions) {
  openersQuestions.forEach((openerQuestion) => {
    openerQuestion.addEventListener("click", function toggleQuestion(event) {
      // when the function is anonyme, this is undefined...
      //class "opened" serves for arrow rotation
      this.parentNode.classList.toggle("opened");
      slideToggle(this.nextElementSibling, 500);
    });
  });
}

fetch("../js/projects.json")
  .then((res) => res.json())
  .then((json) => {
    let tagName = "Tout";
    generateProjects(json, tagName);

    let tags = document.querySelectorAll(".realisations__tag");
    tags.forEach((tag) => {
      tag.addEventListener("click", function (event) {
        document.querySelector(".realisations__main").replaceChildren([]);
        generateProjects(json, tag.textContent);
      });
    });
  });
