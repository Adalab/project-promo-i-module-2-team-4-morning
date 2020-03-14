const getInputName = document.querySelector('.js-fill-name');
const getInputJob = document.querySelector('.js-fill-job');
// const getInputImg = document.querySelector('.js-fill-file');
const getInputMail = document.querySelector('.js-fill-email');
const getInputPhone = document.querySelector('.js-fill-tel');
const getInputLinkedin = document.querySelector('.js-fill-linkedin');
const getInputGithub = document.querySelector('.js-fill-github');

const btn = document.querySelector('.js-btn');
// const getAllInputs = getInputGithub + getInputImg + getInputJob + getInputLinkedin + getInputMail + getInputPhone + getInputName;
function addClassBtn() {
  if (getInputGithub.value === '' || getInputJob.value === '' || getInputName.value === '' || getInputPhone.value === '' || getInputMail.value === '' || getInputLinkedin.value === '') {
    btn.classList.remove('js-share--button');
  } else {
    btn.classList.add('js-share--button');
  }
}

btn.addEventListener('click', addClassBtn);
