/* eslint-disable no-debugger */
/* eslint-disable no-console */
//FILL SECTION

// eslint-disable-next-line strict
const selectPalette1 = document.querySelector('.js-radio-design-palette-1');
const selectPalette2 = document.querySelector('.js-radio-design-palette-2');
const selectPalette3 = document.querySelector('.js-radio-design-palette-3');

let clientData = {
  palette: [selectPalette1, selectPalette2, selectPalette3],
  name: document.querySelector('.js-fill-name'),
  job: document.querySelector('.js-fill-job'),
  imgURL: document.querySelector('.js-fill-file'),
  email: document.querySelector('.js-fill-email'),
  tel: document.querySelector('.js-fill-tel'),
  linkedin: document.querySelector('.js-fill-linkedin'),
  github: document.querySelector('.js-fill-github')
};

let previewData = {
  name: document.querySelector('.js-card-sample--card__title'),
  job: document.querySelector('.js-card-sample--card__subtitle'),
  imgURL: document.querySelector('.js-card-sample--card__img'),
  email: document.querySelector('.js-email-preview'),
  tel: document.querySelector('.js-tel-preview'),
  linkedin: document.querySelector('.js-linkedin-preview'),
  github: document.querySelector('.js-github-preview')
};

function paintForm(ev) {
  if (clientData.name.value === '') {
    previewData.name.innerHTML = 'Nombre Apellido';
  } else {
    previewData.name.innerHTML = clientData.name.value;
  }
  if (clientData.job.value === '') {
    previewData.job.innerHTML = 'Front-end developer';
  } else {
    previewData.job.innerHTML = clientData.job.value;
  }
  if (ev.currentTarget.classList.contains('js-fill-file')) {
    previewData.imgURL.setAttribute('src', clientData.imgURL);
  } else if (ev.currentTarget.classList.contains('js-fill-email')) {
    previewData.email.setAttribute('href', `mailto: ${clientData.email.value}`);
  } else if (ev.currentTarget.classList.contains('js-fill-tel')) {
    previewData.tel.setAttribute('href', `tel: +34 ${clientData.tel.value}`);
  } else if (ev.currentTarget.classList.contains('js-fill-linkedin')) {
    previewData.linkedin.setAttribute('href', clientData.linkedin.value);
  } else if (ev.currentTarget.classList.contains('js-fill-github')) {
    previewData.github.setAttribute('href', clientData.github.value);
  }
}
clientData.name.addEventListener('keyup', paintForm);
clientData.job.addEventListener('keyup', paintForm);

clientData.imgURL.addEventListener('change', paintForm);
clientData.email.addEventListener('keyup', paintForm);
clientData.tel.addEventListener('keyup', paintForm);
clientData.linkedin.addEventListener('keyup', paintForm);
clientData.github.addEventListener('keyup', paintForm);

function paintColorsPalette(event) {
  const currentTarget = event.currentTarget;
  if (currentTarget.classList.contains('js-radio-design-palette-1')) {
    addPalette1();
  } else if (currentTarget.classList.contains('js-radio-design-palette-2')) {
    addPalette2();
  } else if (currentTarget.classList.contains('js-radio-design-palette-3')) {
    addPalette3();
  }
}

selectPalette1.addEventListener('change', paintColorsPalette);
selectPalette2.addEventListener('change', paintColorsPalette);
selectPalette3.addEventListener('change', paintColorsPalette);

const linksCard = document.querySelectorAll('.js-card-sample--item__link');

function addPalette1() {
  previewData.name.classList.add('title--palette-1');
  previewData.name.classList.remove('title--palette-2', 'title--palette-3');
  previewData.job.classList.add('subtitle--palette-1');
  previewData.job.classList.remove('subtitle--palette-2', 'subtitle--palette-3');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-1');
    linksCard[i].classList.remove('link--palette-2', 'link--palette-3');
  }
}

function addPalette2() {
  previewData.name.classList.add('title--palette-2');
  previewData.name.classList.remove('title--palette-1', 'title--palette-3');
  previewData.job.classList.add('subtitle--palette-2');
  previewData.job.classList.remove('subtitle--palette-1', 'subtitle--palette-3');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-2');
    linksCard[i].classList.remove('link--palette-1', 'link--palette-3');
  }
}

function addPalette3() {
  previewData.name.classList.add('title--palette-3');
  previewData.name.classList.remove('title--palette-1', 'title--palette-2');
  previewData.job.classList.add('subtitle--palette-3');
  previewData.job.classList.remove('subtitle--palette-1', 'subtitle--palette-2');
  for (let i = 0; i < linksCard.length; i++) {
    linksCard[i].classList.add('link--palette-3');
    linksCard[i].classList.remove('link--palette-1', 'link--palette-2');
  }
}

//LOCAL-STORAGE

// function setData() {
//   clientData.name = clientData.name.value;
//   clientData.job = clientData.job.value;
//   clientData.email = clientData.email.value;
//   clientData.tel = clientData.tel.value;
//   clientData.linkedin = clientData.linkedin.value;
//   clientData.github = clientData.github.value;
//   localStorage.setItem('User info', JSON.stringify(clientData));
// }
