/* eslint-disable strict */
//coge los inputs de texto (falta la imagen)
const getInputName = document.querySelector('.js-fill-name');
const getInputJob = document.querySelector('.js-fill-job');
// const getInputImg = document.querySelector('.js-fill-file');
const getInputMail = document.querySelector('.js-fill-email');
const getInputPhone = document.querySelector('.js-fill-tel');
const getInputLinkedin = document.querySelector('.js-fill-linkedin');
const getInputGithub = document.querySelector('.js-fill-github');
//Coge el botón de comparte
const btn = document.querySelector('.js-btn');

// handle el botón de comparte
function handleButton() {
  if (
    getInputGithub.value === '' ||
    getInputJob.value === '' ||
    getInputName.value === '' ||
    getInputPhone.value === '' ||
    getInputMail.value === '' ||
    getInputLinkedin.value === ''
  ) {
    btn.classList.remove('js-share--button');
  } else {
    btn.classList.add('js-share--button');
  }
}

function hide() {
  const getCardCreated = document.querySelector('.js-card-created');
  getCardCreated.classList.remove('hidden');
}

handleButton();
//observa el botón de comparte
btn.addEventListener('click', hide);
