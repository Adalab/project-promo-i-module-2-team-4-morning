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
  if (getInputGithub.value === '' || getInputJob.value === '' || getInputName.value === '' || getInputPhone.value === '' || getInputMail.value === '' || getInputLinkedin.value === '') {
    btn.classList.remove('js-share--button');
  } else {
    btn.classList.add('js-share--button');
  }
}

function hide() {
  const getCardCreated = document.querySelector('.js-card-created');
  getCardCreated.classList.remove('hidden');
  createCardURL();
}

//observa el botón de comparte
btn.addEventListener('click', hide);
paletteA.addEventListener('change', handleButton);
paletteB.addEventListener('change', handleButton);
paletteC.addEventListener('change', handleButton);
name.addEventListener('keyup', handleButton);
job.addEventListener('keyup', handleButton);
img.addEventListener('change', handleButton);
email.addEventListener('keyup', handleButton);
phone.addEventListener('keyup', handleButton);
linkedin.addEventListener('keyup', handleButton);
github.addEventListener('keyup', handleButton);

//Crear url tarjeta
function createCardURL() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(clientData),
    headers: { 'content-type': 'application/json' }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}
const shareURL = document.querySelector('.js-share-url');
function showURL(result) {
  if (result.success) {
    shareURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    shareURL.innerHTML = 'ERROR:' + result.error;
  }
}
