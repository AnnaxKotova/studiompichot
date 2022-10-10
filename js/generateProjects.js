export const generateProjects = (json, tagReceived) =>{
  let sortedItems;

  if(tagReceived === "Tout"){
    sortedItems = json;
  } else sortedItems = json.filter(item => item.tags.includes(tagReceived));
  console.log(tagReceived, sortedItems, json);
    for (let i = 0; i < sortedItems.length; i++) {
        let realisationsMain = document.querySelector(".realisations__main");
        let realisationsTemplate = document.querySelector("#realisations__items").content;    
        realisationsMain.append(realisationsTemplate.cloneNode(true));
        const realisationsImage = document.querySelectorAll('.realisations__image');
        const realisationsTitle = document.querySelectorAll('.realisations__title');
        realisationsImage[i].setAttribute('src', `${json[i].thumbnail}`);
        realisationsTitle[i].textContent = json[i].title;
      }


      //is it possible to solve this shit easier ???

      document.querySelectorAll(".realisations__tag").forEach(tag =>   tag.classList.remove("bold"));
}
