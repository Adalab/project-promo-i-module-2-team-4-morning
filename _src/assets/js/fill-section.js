//FILL SECTION

//leo mi boton desencadenante
// const btnInput = document.querySelector(".form");

let clientData = {
  name: document.querySelector('.js-fill-name'),
  job: document.querySelector('.js-fill-job'),
  imgURL: "./assets/images/preview-photo.jpg",
  email: document.querySelector('.js-fill-email'),
  tel: document.querySelector('.js-fill-tel'),
  linkedin: document.querySelector('.js-fill-linkedin'),
  github: document.querySelector('.js-fill-github')
};

let previewData = {
  namePrev = document.querySelector ('.js-card-sample--card__title'),
  jobPrev = document.querySelector ('.js-card-sample--card__subtitle'),
  // imgPrev = document.querySelector ('.js-card-sample--card__'),
  emailPrev = document.querySelector ('.js-email-preview'),
  telPrev = document.querySelector ('.js-tel-preview'),
  linkedinPrev = document.querySelector ('.js-linkedin-preview'),
  githubPrev = document.querySelector ('.js-github-preview'),
}
clientData.name.addEventListener ('keyup', paintForm)

function paintForm (ev){
  if (ev.currentTarget.classList.contains('.js-fill-name') ) {
    previewData.namePrev.innerHTML = ev.currentTarget.value;
  } 
}






// btnInput.addEventListener("change", changePreview);
