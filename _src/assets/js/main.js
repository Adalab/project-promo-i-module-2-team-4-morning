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
debugger;
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
  if (titleCard.classList != 'title--palette-1') {
    document.getElementById('js-radio-design-palette-1').checked = true;
    titleCard.classList.add('title--palette-1');
    titleCard.classList.remove('title--palette-2', 'title--palette-3');
  }
  if (subtitleCard.classList != 'subtitle--palette-1') {
    subtitleCard.classList.add('subtitle--palette-1');
    subtitleCard.classList.remove('subtitle--palette-2', 'subtitle--palette-3');
  }
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-1');
    linksCard[i].classList.remove('link--palette-2', 'link--palette-3');
  }
}

//comentario

buttonReset.addEventListener('click', confirmReset);

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
