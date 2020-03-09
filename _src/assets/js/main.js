'use strict';

const buttonReset = document.querySelector('.js-card-sample--button');

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
			url("../images/nyan-cat-2.gif")
			left top
			no-repeat
		`
  }).then(resetForm);
}
function resetForm(result) {
  if (result.value) {
    document.querySelector('.form').reset();
  }
}

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
