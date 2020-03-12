//FILL SECTION

let clientData = {
  name: document.querySelector(".js-fill-name"),
  job: document.querySelector(".js-fill-job"),
  // imgURL: "./assets/images/preview-photo.jpg",
  email: document.querySelector(".js-fill-email"),
  tel: document.querySelector(".js-fill-tel"),
  linkedin: document.querySelector(".js-fill-linkedin"),
  github: document.querySelector(".js-fill-github")
};

let previewData = {
  //llamar namePrev --- name
  namePrev: document.querySelector(".js-card-sample--card__title"),
  jobPrev: document.querySelector(".js-card-sample--card__subtitle"),
  // imgPrev = document.querySelector ('.js-card-sample--card__'),
  emailPrev: document.querySelector(".js-email-preview"),
  telPrev: document.querySelector(".js-tel-preview"),
  linkedinPrev: document.querySelector(".js-linkedin-preview"),
  githubPrev: document.querySelector(".js-github-preview")
};

function paintForm(ev) {
  if (clientData.name.value === "") {
    previewData.namePrev.innerHTML = "Nombre Apellido";
  } else {
    previewData.namePrev.innerHTML = clientData.name.value;
  }
  // if (ev.currentTarget.classList.contains("js-fill-name")) {
  // }
  if (ev.currentTarget.classList.contains("js-fill-job")) {
    previewData.jobPrev.innerHTML = clientData.job.value;
  } else if (ev.currentTarget.classList.contains("js-fill-email")) {
    previewData.emailPrev.setAttribute(
      "href",
      `mailto: ${clientData.email.value}`
    );
  } else if (ev.currentTarget.classList.contains("js-fill-tel")) {
    previewData.telPrev.setAttribute(
      "href",
      `tel: +34 ${clientData.tel.value}`
    );
  } else if (ev.currentTarget.classList.contains("js-fill-linkedin")) {
    previewData.linkedinPrev.setAttribute("href", clientData.linkedin.value);
  } else if (ev.currentTarget.classList.contains("js-fill-github")) {
    previewData.githubPrev.setAttribute("href", clientData.github.value);
  }
}
clientData.name.addEventListener("keyup", paintForm);
clientData.job.addEventListener("keyup", paintForm);
clientData.email.addEventListener("keyup", paintForm);
clientData.tel.addEventListener("keyup", paintForm);
clientData.linkedin.addEventListener("keyup", paintForm);
clientData.github.addEventListener("keyup", paintForm);

// btnInput.addEventListener("change", changePreview);
