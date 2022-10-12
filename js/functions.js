export const toggleMenu = () =>{
    navbar.classList.toggle("navbar-show");
}


let colors = ['green', 'blue', 'lightBlue'];
let cnt = 0;
const changeColor = () =>{

        document.querySelector(".intro").classList.remove(`highlight--${colors[cnt]}`);
        document.querySelector(".header").classList.remove(`highlight--${colors[cnt]}`);
        cnt++;
        if (cnt > 2) cnt = 0;
        document.querySelector(".intro").classList.add(`highlight--${colors[cnt]}`);
        document.querySelector(".header").classList.add(`highlight--${colors[cnt]}`);
    
}

export const changeColorInterval = () =>{
    setInterval(changeColor, 1000);
}


export const headerChange = () =>{
    header.classList.add('highlight--white');
  

  }