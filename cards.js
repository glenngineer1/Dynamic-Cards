var newSubmit = document.getElementById("submit");
var newCards = document.getElementById("cards");
var inputText = document.getElementById("input");
var counter = 1;

newSubmit.addEventListener("click", createCard);
// document.body.addEventListener("click", function(event){
//   console.log(event.target)
//   console.log(event)
// });

function createCard() {
  var outputEl = inputText.value;

  newCards.innerHTML +=
  '<div id="card-' + counter + '" class="cardDimensions">' +
    '<div class="output">' + outputEl + '</div>' +
    '<button class="buttonLocation" type="submit">Delete</button>' +
  '</div>';

  var thisCard = document.getElementById(`card-${counter}`);
  thisCard.addEventListener("click", deleteCard);
  counter++;
  // console.log(thisCard);
};

function deleteCard(event) {
  newCards.removeChild(event.currentTarget);
}



