let menuBurger = document.getElementById("menu-burger");
let closeMenu = document.getElementById("closeMenu");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");

import {
    toggleMenu,
    changeColorInterval,
    headerChange
} from './functions.js';



if(menuBurger){
menuBurger.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);


    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener('click', function (event) {

            if (navbar.classList.contains("navbar-show")) {
                let isClickInsideElement = navbar.contains(event.target);
                if ((!isClickInsideElement)) {
                    //Do something click is outside specified element
                    toggleMenu();
                }
            }
        });
    });

}


let currentLinks = navbar.querySelectorAll('a[href="'+document.URL+'"]');
currentLinks.forEach(function(link) {
    link.parentNode.classList.toggle('active');
});


changeColorInterval();

window.onscroll = function() {    headerChange
    ()};