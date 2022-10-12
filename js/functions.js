export const toggleMenu = () =>{
    navbar.classList.toggle("navbar-show");
}

// intro, header
let colors = ['green', 'blue', 'lightBlue'];
let cnt = 0;



const changeColor = (elementToHighlight) =>{

    elementToHighlight.classList.remove(`highlight--${colors[cnt]}`);
    header.classList.remove(`highlight--${colors[cnt]}`);
        cnt++;
        if (cnt > 2) cnt = 0;
        elementToHighlight.classList.add(`highlight--${colors[cnt]}`);
        header.classList.add(`highlight--${colors[cnt]}`);
    
}

export const changeColorInterval = (elementToHighlight) =>{
    //need to create an anonymous function so the actual function isn't executed right away.
    setInterval( function() { changeColor(elementToHighlight); }, 1000 );
}


export const headerChange = () =>{
    if (window.scrollY) {
    header.classList.add('highlight--white'); 
    } else     header.classList.remove('highlight--white'); 
  }