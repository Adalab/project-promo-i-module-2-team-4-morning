/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
'use strict';

const buttonReset = document.querySelector('.js-card-sample--button');

function confirmReset() {
  Swal.fire({
    html: ' <h2 class="swal2-title" id="swal2-title" style="display: flex; font-size:1.25em; font-family: merriweather;">Se van a borrar los cambios, ¿está seguro?</h2>',
    width: 400,
    showCancelButton: true,
    cancelButtonColor: '#CB4335',
    cancelButtonText: 'No, volver al editor',
    confirmButtonColor: '#28B463',
    confirmButtonText: 'Si, borrar cambios',
    background: '#fff',
    backdrop: `
			rgba(0,0,123,0.4)
			url("./assets/images/nyan-cat-2.gif")
			left top
			no-repeat 
		`
  }).then(resetForm);
}

function resetForm() {
  clientData.palette = 0;
  clientData.name = '';
  clientData.job = '';
  clientData.imgURL = '';
  clientData.email = '';
  clientData.tel = 0;
  clientData.linkedin = '';
  clientData.github = '';
  name.value = '';
  job.value = '';
  email.value = '';
  tel.value = '';
  linkedin.value = '';
  github.value = '';
  setInLS();
  paintForm();
  paintPaletteLS();
}

buttonReset.addEventListener('click', confirmReset);

//COLAPSABLES

const arrows = document.querySelectorAll('.js-arrow');

//OCULTA SECCIÓN DESIGN
const getDesignTitle = document.querySelector('.design--container__1');
const getDesignSection = document.querySelector('.design--container__2');

function hidDesignSection(ev) {
  getDesignSection.classList.toggle('hidden');
  arrows[0].classList.toggle('closed');
}

getDesignTitle.addEventListener('click', hidDesignSection);

//OCULTA SECCIÓN FILL
const getFillTitle = document.querySelector('.js-fill-title');
const getFillSection = document.querySelector('.js-fill--div');

function hidFillSection(ev) {
  getFillSection.classList.toggle('hidden');
  arrows[1].classList.toggle('closed');
}

getFillTitle.addEventListener('click', hidFillSection);

//OCULTA SECCIÓN SHARE
const getShareTitle = document.querySelector('.js-share-title');
const getShareSection = document.querySelector('.js-share--div');

function hidShareSection(ev) {
  getShareSection.classList.toggle('hidden');
  arrows[2].classList.toggle('closed');
}

getShareTitle.addEventListener('click', hidShareSection);
