/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const sectionIds = ["one", "two", "three"];

let selectedAnswers = [];

const divList = document.querySelectorAll(".choice-grid div"); /*per creare la variabile divList */

for (const checkk of divList) {
  /*per scorrere tutta la lista */
  checkk.addEventListener("click", onClick);
}

const reset = document.querySelector("button");
reset.addEventListener("click", clickReset);


function onClick(event) {
  const checkedCard = event.currentTarget;
  const checkedCardCheckbox = checkedCard.querySelector(".checkbox");
  const { dataset: { choiceId, questionId } } = checkedCard; //destrutturazione

  for (let c = 0; c < sectionIds.length; c++) {
    if (sectionIds[c] === questionId) { //analizzo ogni gruppo di div alla volta
      const cards = "#" + sectionIds[c] + " div";
      const checkboxs = document.querySelectorAll(cards);
      for (let i = 0; i < checkboxs.length; i++) {
        const { dataset: { choiceId: dlChoiceId } } = checkboxs[i]; // assegno dlChoiceId a il valore dataset.choiceId contenuto in checkbox

        if (dlChoiceId !== choiceId) {
          const unselected = checkboxs[i].querySelector(".checkbox");
          unselected.src = "images/unchecked.png";
          checkboxs[i].classList.add("noselected-image");
          checkboxs[i].classList.remove("selected-image");
        } else {
          checkedCardCheckbox.src = "images/checked - Copia.png";
          checkedCard.classList.add("selected-image");
          checkedCard.classList.remove("noselected-image");

          removeFromArray(selectedAnswers, questionId); // se ho selezionato un div diverso da un altro nella stessa section mi permette di rimuoverlo
          
          selectedAnswers.push({ // qua memorizzo i div selezionati
            data_question_id: questionId,
            data_choice_id: choiceId,
          });
        }
      }
    }
  }
  if(selectedAnswers.length === 3)  Finals();
}

function removeFromArray(answerArray, questionId) {
  for (let c = 0; c < answerArray.length; c++) {
    if (answerArray[c].data_question_id === questionId) answerArray.splice(c);
  }
}
const resultElement = document.querySelector('#result');

function Results (titolo, descrizione){
  let tit = resultElement.querySelector('h1');
  let parag = resultElement.querySelector('p');
  let button = resultElement.querySelector('button');
  resultElement.classList.remove('hidden');
  tit.textContent = titolo;
  parag.textContent = descrizione;
  button.addEventListener('click', clickReset);
}


function Finals(){
  console.log(selectedAnswers);
  let index;
  if(selectedAnswers[0].data_choice_id === selectedAnswers[1].data_choice_id || selectedAnswers[0].data_choice_id === selectedAnswers[2].data_choice_id){
      index = selectedAnswers[0].data_choice_id;
      Results (RESULTS_MAP[index].title, RESULTS_MAP[index].contents)
  }
  else if(selectedAnswers[1].data_choice_id === selectedAnswers[2].data_choice_id) {
      index = selectedAnswers[1].data_choice_id;
      Results (RESULTS_MAP[index].title, RESULTS_MAP[index].contents)
  }
  else {
      index = selectedAnswers[0].data_choice_id;
      console.log(index);  
      Results (RESULTS_MAP[index].title, RESULTS_MAP[index].contents)
  }
}


function clickReset() {
  for (const div of divList) {
    /*per scorrere tutta la lista e aggiungere il checked a ogni elemento */
    resultElement.classList.add('hidden');
    div.classList.remove("selected-image");
    div.classList.remove("noselected-image");
    div.querySelector(".checkbox").src = "images/unchecked.png";
  }
}

