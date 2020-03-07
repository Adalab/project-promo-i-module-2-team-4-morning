'use strict';

const getDesignArrow = document.querySelector('.fa-angle-up');
const getDesignSection = document.querySelector('.design--container__2');

function hidSection(ev) {
  getDesignSection.classList.toggle('hidden');
  getDesignArrow.classList.toggle('closed');
}
console.log(hidSection);
getDesignArrow.addEventListener('click', hidSection);
