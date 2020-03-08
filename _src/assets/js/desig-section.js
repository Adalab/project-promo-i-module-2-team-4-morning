"use strict";

// data

//listen events
const selectPalette1 = document.querySelector(".js-radio-design-palette-1");
const selectPalette2 = document.querySelector(".js-radio-design-palette-2");
const selectPalette3 = document.querySelector(".js-radio-design-palette-3");

function handlePreviewCard(event) {
  const currentTarget = event.currentTarget;
  if (currentTarget.classList.contains("js-radio-design-palette-1")) {
    console.log("Han seleccionado la paleta 1");
    addPalette1();
  } else if (currentTarget.classList.contains("js-radio-design-palette-2")) {
    console.log("Han seleccionado la paleta 2");
    addPalette2();
  } else if (currentTarget.classList.contains("js-radio-design-palette-3")) {
    console.log("Han seleccionado la paleta 3");
    addPalette3();
  }
}

selectPalette1.addEventListener("change", handlePreviewCard);
selectPalette2.addEventListener("change", handlePreviewCard);
selectPalette3.addEventListener("change", handlePreviewCard);

//styles preview card

const titleCard = document.getElementsByClassName(
  "js-card-sample--card__title"
);
console.log(titleCard);

const subtitleCard = document.getElementsByClassName(
  "js-card-sample--card__subtitle"
);
console.log(subtitleCard);

const linksCard = document.getElementsByClassName("js-card-sample--item__link");
console.log(linksCard);

function addPalette1() {
  titleCard.classList.add("title--palette-1");
  titleCard.classList.remove("title--palette-2", "title--palette-3");
  subtitleCard.classList.add("subtitle--palette-1");
  subtitleCard.classList.remove("subtitle--palette-2", "subtitle--palette-3");
  linksCard.add("link--palette-1");
  linksCard.remove("link--palette-2", "link--palette-3");
}

function addPalette2() {
  titleCard.classList.add("title--palette-2");
  titleCard.classList.remove("title--palette-1", "title--palette-3");
  subtitleCard.classList.add("subtitle--palette-2");
  subtitleCard.classList.remove("subtitle--palette-1", "subtitle--palette-3");
  linksCard.add("link--palette-2");
  linksCard.remove("link--palette-1", "link--palette-3");
}

function addPalette3() {
  titleCard.classList.add("title--palette-3");
  titleCard.classList.remove("title--palette-1", "title--palette-2");
  subtitleCard.classList.add("subtitle--palette-3");
  subtitleCard.classList.remove("subtitle--palette-1", "subtitle--palette-2");
  linksCard.add("link--palette-3");
  linksCard.remove("link--palette-1", "link--palette-2");
}
