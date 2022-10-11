const slugify = (str) =>
  str
  .toLowerCase()
  .trim()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[\s_-]+/g, "-")
  .replace(/^-+|-+$/g, "");

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

  //is it possible to solve this shit easier ???

  document.querySelectorAll(".realisations__tag").forEach((tag) => tag.classList.remove("bold"));
//asynchronous js 
  setTimeout(function () {
    let currentTags = document.querySelectorAll(`.realisations__tag.${slugify(tagReceived)}`);
    currentTags.forEach(function (tag) {
      tag.classList.toggle("bold");
    }, 0);
  });


};