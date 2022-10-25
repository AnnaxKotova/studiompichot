let menuBurger = document.getElementById("menu-burger");
let closeMenu = document.getElementById("closeMenu");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");
let intro = document.querySelector(".intro");
let personalPresentation = document.querySelector(".personal-presentation__about");

import { toggleMenu, changeColorInterval, headerChange, scrollFunction } from "./functions.js";

import { slideToggle } from "./slideToggle.js";

import { generateProjects, generatePoster } from "./generateProjects.js";

const getProjectForPoster = (json) => setTimeout(function () {
  let allProjectsButtons = document.querySelectorAll(".realisations__item");

  allProjectsButtons.forEach(button => {
    
    button.addEventListener("click", function (event) {
      let projectName = button.querySelector(".realisations__title").textContent;
      generatePoster(json, projectName);
    });
  })
  //we have to wain until all the images download
}, 10);


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
console.log(currentLinks);
currentLinks.forEach(function (link) {
  console.log(link);
  link.classList.toggle("active");
});


//pages

let homePage = (document.URL.split("/").length === 6);
let aboutMe = (document.URL.split("/").includes("about-me"));
let realisations = (document.URL.split("/").includes("realisations"));
let services = (document.URL.split("/").includes("services"));
let openersQuestions = Array.from(
  document.getElementsByClassName("faq__open-question")
);

console.log(realisations);



if(homePage){
  changeColorInterval(intro);
  document.addEventListener("scroll", function () {
    headerChange();
  });
}

if(aboutMe){
  changeColorInterval(personalPresentation);
  window.onscroll = function () {
    headerChange();
  };
}



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

if(realisations){
fetch("../wp-content/themes/studiompichot/js/projects.json")
  .then((res) => res.json())
  .then((json) => {
    let tagName = "Tout";
    generateProjects(json, tagName);
    getProjectForPoster(json);
    let tags = document.querySelectorAll(".realisations__tag");
    tags.forEach((tag) => {
      tag.addEventListener("click", function (event) {
        document.querySelector(".realisations__main").replaceChildren([]);
        generateProjects(json, tag.textContent);
        getProjectForPoster(json);
      });

    });


    

});
}


if(services){
  let servicesItems = document.querySelectorAll(".offers__item");
  if (servicesItems.length === 4){
    servicesItems.forEach(function (item) {
      item.classList.add("readable-ipad");
  });
  }
}




//backtotop + header color change on scroll
let mybutton = document.getElementById("backToTop");
window.onscroll = function() {scrollFunction(mybutton)};

mybutton.addEventListener('click', function(e){
document.documentElement.scrollTop = 0;
  
})

scrollFunction(mybutton);