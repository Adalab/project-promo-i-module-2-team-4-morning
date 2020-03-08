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
//FILL SECTION

//Recibo el valor de cada imput
const nameFill = document.querySelector(".js-fill-name");
const jobFill = document.querySelector(".js-fill-job");
const imgFill = "./assets/images/preview-photo.jpg";
const emailFill = document.querySelector(".js-fill-email");
const telFill = document.querySelector(".js-fill-tel");
const linkedinFill = document.querySelector(".js-fill-linkedin");
const githubFill = document.querySelector(".js-fill-github");

//Objeto para utilizar en la funcion los valores sin repetirlos
let clientData = {
  name: nameFill.value,
  job: jobFill.value,
  img: imgFill.src,
  email: emailFill.value,
  tel: telFill.value,
  linkedin: linkedinFill.value,
  github: githubFill.value
};
//Creo la funcion para sustituir los datos en la tarjeta preview
function changePreview(name, job, imgURL, email, tel, linkedin, github) {
  let htmlText = ` <div class="card-sample--container">
  <button class="card-sample--button"><i class="far fa-trash-alt"></i> Reset</button>
  <div class="card-sample--card">
    <h2 class="card-sample--card__title js-card-sample--card__title ">${name}</h2>
    <h3 class="card-sample--card__subtitle js-card-sample--card__subtitle">${job}</h3>
    <img src="${imgURL}" />

    <div class="card-sample--item">
      <a class="card-sample--item__link1 js-card-sample--item__link" href="${tel}"><i class="fas fa-mobile-alt"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link2 js-card-sample--item__link" href="${email}"><i class="far fa-envelope"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link3 js-card-sample--item__link" href="${linkedin}"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link4 js-card-sample--item__link" href="${github}"><i class="fab fa-github-alt"></i></a>
    </div>`;
  return htmlText;
}
//prueba para ver que obtengo de los datos del formulario
console.log(clientData);
