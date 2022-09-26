let menuBurger = document.getElementById("menu-burger");
let navbar = document.getElementById("navbar");


import {
    toggleMenu
} from './functions.js';



if(menuBurger){
menuBurger.addEventListener("click", toggleMenu);
}
