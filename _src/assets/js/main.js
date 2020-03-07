'use strict';
//OCULTA SECCIÓN DESIGN
const getDesignArrow = document.querySelector('.js-arrow');
const getDesignSection = document.querySelector('.design--container__2');

function hidDesignSection(ev) {
  getDesignSection.classList.toggle('hidden');
  getDesignArrow.classList.toggle('closed');
}

getDesignArrow.addEventListener('click', hidDesignSection);

//OCULTA SECCIÓN FILL
const getFillArrow = document.querySelector('.js-arrow-fill');
const getFillSection = document.querySelector('.js-fill--div');

function hidFillSection(ev) {
  getFillSection.classList.toggle('hidden');
  getFillArrow.classList.toggle('closed');
}

getFillArrow.addEventListener('click', hidFillSection);

//OCULTA SECCIÓN SHARE
const getShareArrow = document.querySelector('.js-arrow-share');
const getShareSection = document.querySelector('.js-share--div');

function hidShareSection(ev) {
  getShareSection.classList.toggle('hidden');
  getShareArrow.classList.toggle('closed');
}

getShareArrow.addEventListener('click', hidShareSection);
