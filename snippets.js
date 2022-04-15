// ["#one", "#two", "#three"].forEach((item) => {
//   const divList = document.querySelectorAll(`${item} div`);
//   divList.forEach((_, divListIndex) => {
//     const {
//       dataset: { choiceId: dlChoiceId, questionId: dlQuestionId },
//     } = divList[divListIndex];

//     if (dlChoiceId !== choiceId && dlQuestionId === questionId) {
//       const unselected = divList[divListIndex].querySelector(".checkbox");
//       unselected.src = "images/unchecked.png";
//       divList[divListIndex].classList.add("noselected-image");
//     } else {
//       checkedCardCheckbox.src = "images/checked - Copia.png";
//       checkedCard.classList.add("selected-image");
//       checkedCard.classList.remove("noselected-image");
//     }
//   });
// });

// for (let c = 0; c < divCount.length; c++) {
//   for (let i = 0; i < divList.length; i++) {
//     if (
//       divList[i].dataset.choiceId !== checkedCard.dataset.choiceId &&
//       divList[i].dataset.questionId == checkedCard.dataset.questionId
//     ) {
//       const unselected = divList[i].querySelector(".checkbox");
//       unselected.src = "images/unchecked.png";
//       divList[i].classList.add("noselected-image");
//     } else {
//       checkedCardCheckbox.src = "images/checked - Copia.png";
//       checkedCard.classList.add("selected-image");
//       checkedCard.classList.remove("noselected-image");
//     }
//   }
// }
