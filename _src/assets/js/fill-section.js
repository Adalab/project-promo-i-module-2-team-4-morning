//FILL SECTION

//leo mi boton desencadenante
const btnInput = document.querySelector(".form");

//Recibo el valor de cada imput
const nameFill = document.querySelector(".js-fill-name");
const jobFill = document.querySelector(".js-fill-job");
const imgFill = "./assets/images/preview-photo.jpg";
const emailFill = document.querySelector(".js-fill-email");
const telFill = document.querySelector(".js-fill-tel");
const linkedinFill = document.querySelector(".js-fill-linkedin");
const githubFill = document.querySelector(".js-fill-github");

//Objeto para utilizar en la funcion los valores sin repetirlos
let clientData = {
  name: nameFill.value,
  job: jobFill.value,
  imgURL: imgFill.src,
  email: emailFill.value,
  tel: telFill.value,
  linkedin: linkedinFill.value,
  github: githubFill.value
};
//Creo la funcion para sustituir los datos en la tarjeta preview
function changePreview(clientData) {
  let htmlText = ` <div class="card-sample--container">
  <button class="card-sample--button"><i class="far fa-trash-alt"></i> Reset</button>
  <div class="card-sample--card">
    <h2 class="card-sample--card__title js-card-sample--card__title ">${clientData.name}</h2>
    <h3 class="card-sample--card__subtitle js-card-sample--card__subtitle">${clientData.job}</h3>
    <img src="${clientData.imgURL}" />

    <div class="card-sample--item">
      <a class="card-sample--item__link1 js-card-sample--item__link" href="${clientData.tel}"><i class="fas fa-mobile-alt"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link2 js-card-sample--item__link" href="${clientData.email}"><i class="far fa-envelope"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link3 js-card-sample--item__link" href="${clientData.linkedin}"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <div class="card-sample--item">
      <a class="card-sample--item__link4 js-card-sample--item__link" href="${clientData.github}"><i class="fab fa-github-alt"></i></a>
    </div>`;
  return htmlText;
}
//prueba para ver que obtengo de los datos del formulario

btnInput.addEventListener("change", changePreview);

//////////Traer el preview
function changePreview2(clientData) {
  let previewText = ` <div class="card-sample--container">
    <button class="card-sample--button"><i class="far fa-trash-alt"></i> Reset</button>
    <div class="card-sample--card">
      <h2 class="card-sample--card__title js-card-sample--card__title ">${clientData.name}</h2>
      <h3 class="card-sample--card__subtitle js-card-sample--card__subtitle">${clientData.job}</h3>
      <img src="${clientData.imgURL}" />

      <div class="card-sample--item">
        <a class="card-sample--item__link1 js-card-sample--item__link" href="${clientData.tel}"><i class="fas fa-mobile-alt"></i></a>
      </div>
      <div class="card-sample--item">
        <a class="card-sample--item__link2 js-card-sample--item__link" href="${clientData.email}"><i class="far fa-envelope"></i></a>
      </div>
      <div class="card-sample--item">
        <a class="card-sample--item__link3 js-card-sample--item__link" href="${clientData.linkedin}"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="card-sample--item">
        <a class="card-sample--item__link4 js-card-sample--item__link" href="${clientData.github}"><i class="fab fa-github-alt"></i></a>
      </div>
    </div>
  </div>`;
  return previewText;
}

//////NO SE QUE QUIERO HACER AQUI
// const getPreviewData = document.querySelector(".card-sample--card");
// getPreviewData.innerHTML = changePreview2();
