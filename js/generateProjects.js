const slugify = (str) =>
  str
  .toLowerCase()
  .trim()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[\s_-]+/g, "-")
  .replace(/^-+|-+$/g, "");


  const changeTagName = (tagReceived) => {
    let currentTags = document.querySelectorAll(`.realisations__tag.${slugify(tagReceived)}`);
    currentTags.forEach(function (tag) {
      tag.classList.toggle("bold");
    });
  }

  let genRandomElements = (list) => {
    let arrayCopy = [...list];
  let newArray = [];
  for(let i = 0; i < 2; i++) {
      let randNum = Math.floor(Math.random()*arrayCopy.length);
      let splicedItem = arrayCopy.splice(randNum, 1)[0]
      newArray.push(splicedItem);
    }
    return newArray;
  }




export const generateProjects = (json, tagReceived) => {
  //in case later to use double map for creation new key-value and modification of this value as an array
  // let latinJson = json.map((item) => ({
  //   ...item,
  //   latinTags: item.tags.map((x) => slugify(x)),
  // }));
  let sortedItems;

  if (tagReceived === "Tout") {
    sortedItems = json;
  } else
    sortedItems = json.filter((item) => item.tags.includes(tagReceived));
  for (let i = 0; i < sortedItems.length; i++) {
    let realisationsMain = document.querySelector(".realisations__main");
    let realisationsTemplate = document.querySelector("#realisations__items").content;
    realisationsMain.append(realisationsTemplate.cloneNode(true));
    const realisationsImage = document.querySelectorAll(".realisations__image");
    const realisationsTitle = document.querySelectorAll(".realisations__title");
    realisationsImage[i].setAttribute("src", `${json[i].thumbnail}`);
    realisationsTitle[i].textContent = json[i].title;
  }


  document.querySelectorAll(".realisations__tag").forEach((tag) => tag.classList.remove("bold"));
//asynchronous js 
  setTimeout(changeTagName(tagReceived), 0);



};






export const generatePoster = (json, projectName) => {
  let receivedItem = json.filter((item) => (item.title === projectName))[0];
  let realisationsWall = document.querySelector(".realisations__wall");
    let realisationsTemplate = document.querySelector("#realisations__presentation").content;
    realisationsWall.append(realisationsTemplate.cloneNode(true));
    const realisationsName = document.querySelector(".realisations__name");
    const realisationsDescription = document.querySelector(".realisations__description");
    const realisationsPoster = document.querySelector(".realisations__poster");
    realisationsName.textContent = receivedItem.title;
    realisationsDescription.textContent = receivedItem.description;
    realisationsPoster.setAttribute("src", receivedItem.poster);



    document.querySelector(".realisations__back").addEventListener('click', function (event) {
      realisationsWall.replaceChildren([]);
    }  );
    document.querySelector(".realisations__background").addEventListener('click', e => {
      if(e.target === e.currentTarget) {
      realisationsWall.replaceChildren([]);}
    }  );

  

    let otherProjectsJson = genRandomElements(json.filter((item) => (item.title !== projectName)));
    console.log(otherProjectsJson);
    let otherProjectsContainer = document.querySelector(".realisations__other-projects") ;
    
    console.log(otherProjectsContainer);
    for (let i = 0; i < otherProjectsJson.length; i++) {
      let realisationsTemplate = document.querySelector("#realisations__other-items").content;
      otherProjectsContainer.append(realisationsTemplate.cloneNode(true));
      const otherProjectsImage = document.querySelectorAll(".realisations__other-image");
      const otherProjectsTitle = document.querySelectorAll(".realisations__other-title");
      otherProjectsImage[i].setAttribute("src", `${otherProjectsJson[i].thumbnail}`);
      otherProjectsTitle[i].textContent = otherProjectsJson[i].title;
    }

  
}