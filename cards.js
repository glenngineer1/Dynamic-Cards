var newSubmit = document.getElementById("submit").addEventListener("click", createCard);
var newCards = document.getElementById("cards");
var inputText = document.getElementById("input");
var counter = 0;

function createCard() {
  counter++;
  var outputEl = inputText.value;
  var card = `<div class="cards"><p class="cardNumber">I am card #${counter}</p><p class="userInput">${outputEl}</p><button id="delete--${counter}">Delete</button></div>`

  var newDiv = document.createElement("article");
  newDiv.innerHTML = card;
  var newAttr = document.createAttribute("id");
  newAttr.value = `cardwrapper--${counter}`;
  newDiv.setAttributeNode(newAttr);
  newCards.appendChild(newDiv);

  var thisCard = document.getElementById(`delete--${counter}`).addEventListener("click", deleteCard);
}
  function deleteCard() {
    var clickDelete = event.target.id.split("--")[1];
    var cardToDelete = document.getElementById(`cardwrapper--${clickDelete}`);
    newCards.removeChild(cardToDelete);
}




