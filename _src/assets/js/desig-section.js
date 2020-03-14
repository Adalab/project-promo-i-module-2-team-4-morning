// /* eslint-disable no-console */
// 'use strict';

// // data
// const selectPalette1 = document.querySelector('.js-radio-design-palette-1');
// const selectPalette2 = document.querySelector('.js-radio-design-palette-2');
// const selectPalette3 = document.querySelector('.js-radio-design-palette-3');

// //listen events
// function handlePreviewCard(event) {
//   const currentTarget = event.currentTarget;
//   if (currentTarget.classList.contains('js-radio-design-palette-1')) {
//     console.log(event);
//     addPalette1();
//   } else if (currentTarget.classList.contains('js-radio-design-palette-2')) {
//     console.log(event);
//     addPalette2();
//   } else if (currentTarget.classList.contains('js-radio-design-palette-3')) {
//     console.log(event);
//     addPalette3();
//   }
// }

// selectPalette1.addEventListener('change', handlePreviewCard);
// selectPalette2.addEventListener('change', handlePreviewCard);
// selectPalette3.addEventListener('change', handlePreviewCard);

// //styles preview card

// const titleCard = document.querySelector('.js-card-sample--card__title');

// const subtitleCard = document.querySelector('.js-card-sample--card__subtitle');

// const linksCard = document.querySelectorAll('.js-card-sample--item__link');

// function addPalette1() {
//   titleCard.classList.add('title--palette-1');
//   titleCard.classList.remove('title--palette-2', 'title--palette-3');
//   subtitleCard.classList.add('subtitle--palette-1');
//   subtitleCard.classList.remove('subtitle--palette-2', 'subtitle--palette-3');
//   for (let i = 0; i < linksCard.length; i++) {
//     linksCard[i].classList.add('link--palette-1');
//     linksCard[i].classList.remove('link--palette-2', 'link--palette-3');
//   }
// }

// function addPalette2() {
//   titleCard.classList.add('title--palette-2');
//   titleCard.classList.remove('title--palette-1', 'title--palette-3');
//   subtitleCard.classList.add('subtitle--palette-2');
//   subtitleCard.classList.remove('subtitle--palette-1', 'subtitle--palette-3');
//   for (let i = 0; i < linksCard.length; i++) {
//     linksCard[i].classList.add('link--palette-2');
//     linksCard[i].classList.remove('link--palette-1', 'link--palette-3');
//   }
// }

// function addPalette3() {
//   titleCard.classList.add('title--palette-3');
//   titleCard.classList.remove('title--palette-1', 'title--palette-2');
//   subtitleCard.classList.add('subtitle--palette-3');
//   subtitleCard.classList.remove('subtitle--palette-1', 'subtitle--palette-2');
//   for (let i = 0; i < linksCard.length; i++) {
//     linksCard[i].classList.add('link--palette-3');
//     linksCard[i].classList.remove('link--palette-1', 'link--palette-2');
//   }
// }
