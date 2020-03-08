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
  } else if (currentTarget.classList.contains("js-radio-design-palette-2")) {
    console.log("Han seleccionado la paleta 2");
  } else if (currentTarget.classList.contains("js-radio-design-palette-3")) {
    console.log("Han seleccionado la paleta 3");
  }
}

selectPalette1.addEventListener("change", handlePreviewCard);
selectPalette2.addEventListener("change", handlePreviewCard);
selectPalette3.addEventListener("change", handlePreviewCard);

//styles preview card

// Rellena section

const nameBtn = document.querySelector(".js-fill-name");
console.log(nameBtn);

function changeCardInfo() {}

nameBtn.addEventListener("click", changeCardInfo);
