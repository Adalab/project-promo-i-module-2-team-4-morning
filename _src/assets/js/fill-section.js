/* eslint-disable no-debugger */
/* eslint-disable no-console */
//FILL SECTION

// eslint-disable-next-line strict

'use strict';

let clientData = {
  palette: 0,
  name: '',
  job: '',
  imgURL: '',
  email: '',
  phone: 0,
  linkedin: '',
  github: ''
};

//Recoge los input de fill
const paletteA = getInputSelector('.js-radio-design-palette-1');
const paletteB = getInputSelector('.js-radio-design-palette-2');
const paletteC = getInputSelector('.js-radio-design-palette-3');
const name = getInputSelector('.js-fill-name');
const job = getInputSelector('.js-fill-job');
const img = getInputSelector('.js-fill-file');
const email = getInputSelector('.js-fill-email');
const phone = getInputSelector('.js-fill-tel');
const linkedin = getInputSelector('.js-fill-linkedin');
const github = getInputSelector('.js-fill-github');

function inputHandler(ev) {
  // mete en el objeto lo que se escribe en los inputs
  clientData.name = name.value;
  clientData.job = job.value;
  clientData.imgURL = img.value;
  clientData.email = email.value;
  clientData.phone = parseInt(phone.value);
  clientData.linkedin = linkedin.value;
  clientData.github = github.value;
  paintForm();
  setInLS();
  console.log(clientData);
}

//recoge selectores
function getInputSelector(selector) {
  return document.querySelector(selector);
}

//añade listeners
paletteA.addEventListener('change', paintColorsPalette);
paletteB.addEventListener('change', paintColorsPalette);
paletteC.addEventListener('change', paintColorsPalette);
name.addEventListener('keyup', inputHandler);
job.addEventListener('keyup', inputHandler);
img.addEventListener('change', inputHandler);
email.addEventListener('keyup', inputHandler);
phone.addEventListener('keyup', inputHandler);
linkedin.addEventListener('keyup', inputHandler);
github.addEventListener('keyup', inputHandler);

//recoge los elementos de la preview
const namePreview = getInputSelector('.js-card-sample--card__title');
const jobPreview = getInputSelector('.js-card-sample--card__subtitle');
const imgPreview = getInputSelector('.js-card-sample--card__img');
const emailPreview = getInputSelector('.js-email-preview');
const phonePreview = getInputSelector('.js-tel-preview');
const linkedinPreview = getInputSelector('.js-linkedin-preview');
const githubPreview = getInputSelector('.js-github-preview');

//Pinta en el preview
function paintForm(ev) {
  if (clientData.name === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = clientData.name;
  }
  if (clientData.job === '') {
    jobPreview.innerHTML = 'Front-end developer';
  } else {
    jobPreview.innerHTML = clientData.job;
  }
  // imgPreview.setAttribute('src', clientData.imgURL);
  emailPreview.setAttribute('href', `mailto: ${clientData.email}`);
  phonePreview.setAttribute('href', `tel: +34 ${clientData.phone}`);
  linkedinPreview.setAttribute('href', clientData.linkedin);
  githubPreview.setAttribute('href', clientData.github);
}

function paintColorsPalette(event) {
  const currentTarget = event.currentTarget;
  if (currentTarget.classList.contains('js-radio-design-palette-1')) {
    addPalette1();
    clientData.palette = 1;
  } else if (currentTarget.classList.contains('js-radio-design-palette-2')) {
    addPalette2();
    clientData.palette = 2;
  } else if (currentTarget.classList.contains('js-radio-design-palette-3')) {
    addPalette3();
    clientData.palette = 3;
  }
  setInLS();
  console.log(clientData);
}

function paintPaletteLS() {
  if (clientData.palette === 1 || clientData.palette === 0) {
    addPalette1();
    document.querySelector('.js-radio-design-palette-1').checked = true;
  } else if (clientData.palette === 2) {
    addPalette2();
    document.querySelector('.js-radio-design-palette-2').checked = true;
  } else if (clientData.palette === 3) {
    addPalette3();
    document.querySelector('.js-radio-design-palette-3').checked = true;
  }
}

const linksCard = document.querySelectorAll('.js-card-sample--item__link');

function addPalette1() {
  namePreview.classList.add('title--palette-1');
  namePreview.classList.remove('title--palette-2', 'title--palette-3');
  jobPreview.classList.add('subtitle--palette-1');
  jobPreview.classList.remove('subtitle--palette-2', 'subtitle--palette-3');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-1');
    linksCard[i].classList.remove('link--palette-2', 'link--palette-3');
  }
}

function addPalette2() {
  namePreview.classList.add('title--palette-2');
  namePreview.classList.remove('title--palette-1', 'title--palette-3');
  jobPreview.classList.add('subtitle--palette-2');
  jobPreview.classList.remove('subtitle--palette-1', 'subtitle--palette-3');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-2');
    linksCard[i].classList.remove('link--palette-1', 'link--palette-3');
  }
}

function addPalette3() {
  namePreview.classList.add('title--palette-3');
  namePreview.classList.remove('title--palette-1', 'title--palette-2');
  jobPreview.classList.add('subtitle--palette-3');
  jobPreview.classList.remove('subtitle--palette-1', 'subtitle--palette-2');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-3');
    linksCard[i].classList.remove('link--palette-1', 'link--palette-2');
  }
}
getFromLS();

//Local Storage

function getFromLS() {
  const LSData = JSON.parse(localStorage.getItem('Data'));
  if (LSData !== null) {
    clientData = LSData;
  }
  paintForm();
  paintPaletteLS();
}

function setInLS() {
  localStorage.setItem('Data', JSON.stringify(clientData));
}
