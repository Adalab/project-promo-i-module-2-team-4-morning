/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
'use strict';

const buttonReset = document.querySelector('.js-card-sample--button');
document.getElementById('js-radio-design-palette-1').checked = true;

function confirmReset() {
  Swal.fire({
    html:
      ' <h2 class="swal2-title" id="swal2-title" style="display: flex; font-size:1.25em; font-family: merriweather;">Se van a borrar los cambios, ¿está seguro?</h2>',
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
  if ((previewData.name.innerHTML = '')) {
    clientData.name.value != '';
  } else {
    previewData.name.innerHTML = 'Nombre Apellido';
    clientData.name.value = '';
  }
  if ((previewData.job.innerHTML = '')) {
    clientData.job.value != '';
  } else {
    previewData.job.innerHTML = 'Front-end developer';
    clientData.job.value = '';
  }
  if ((previewData.email.setAttribute = '')) {
    clientData.email.value != '';
  } else {
    previewData.email.value = '';
    clientData.email.value = '';
  }
  if ((previewData.tel.setAttribute = '')) {
    clientData.tel.value != '';
  } else {
    previewData.tel.value = '';
    clientData.tel.value = '';
  }
  if ((previewData.linkedin.setAttribute = '')) {
    clientData.linkedin.value != '';
  } else {
    previewData.linkedin.value = '';
    clientData.linkedin.value = '';
  }
  if ((previewData.github.setAttribute = '')) {
    clientData.github.value != '';
  } else {
    previewData.github.value = '';
    clientData.github.value = '';
  }
  if (previewData.name.classList != 'title--palette-1') {
    document.getElementById('js-radio-design-palette-1').checked = true;
    previewData.name.classList.add('title--palette-1');
    previewData.name.classList.remove('title--palette-2', 'title--palette-3');
  }
  if (previewData.job.classList != 'subtitle--palette-1') {
    previewData.job.classList.add('subtitle--palette-1');
    previewData.job.classList.remove(
      'subtitle--palette-2',
      'subtitle--palette-3'
    );
  }
  for (let i = 0; i < linksCard.length; i++) {
    document.getElementById('js-radio-design-palette-1').checked = true;
    linksCard[i].classList.add('link--palette-1');
    linksCard[i].classList.remove('link--palette-2', 'link--palette-3');
  }
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
getFillTitle = document.querySelector('.js-fill-title');
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

// const arrows = document.querySelectorAll('.js-arrow');
// console.log(arrows);

// function handleArrows(ev) {
//   for (let arrow of arrows) {
//     arrow.classList.toggle('closed');
//     return ev.currentTarget.arrowClose;
//   }
// }

// const getDesignTitle = document.querySelector('.design--container__1');
// const getFillTitle = document.querySelector('.js-fill-title');
// const getShareTitle = document.querySelector('.js-share-title');
// const getDesignSection = document.querySelector('.design--container__2');
// const getFillSection = document.querySelector('.js-fill--div');
// const getShareSection = document.querySelector('.js-share--div');

// function handleCollapsables(ev) {
//   ev.currentTarget.classList.toggle('.hidden');
// }

// getDesignTitle.addEventListener('click', handleArrows, handleCollapsables);
// getFillTitle.addEventListener('click', handleArrows, handleCollapsables);
// getShareTitle.addEventListener('click', handleArrows, handleCollapsables);
