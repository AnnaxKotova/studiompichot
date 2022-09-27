let menuBurger = document.getElementById("menu-burger");
let closeMenu = document.getElementById("closeMenu");
let navbar = document.getElementById("navbar");


import {
    toggleMenu
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