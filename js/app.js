// Create an array that holds all cards
const cardsArray = [{
  'name' : 'chrome',
  'img': 'img/chrome.png',
},
{
  'name': 'earlybirds',
  'img': 'img/earlybirds.png',
},
{
  'name': 'bomb',
  'img': 'img/bomb.png',
},
{
  'name': 'stack-overflow',
  'img': 'img/stack.png',
},
{
  'name': 'slack',
  'img': 'img/slack.png',
},
{
  'name': 'headphones',
  'img': 'img/headphones.png',
},
{
  'name': 'drupal',
  'img': 'img/drupal.png',
},
{
  'name': 'windows',
  'img': 'img/windows.png',
},
];

//Create grid that represents the cards
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
var name = item.name,
    img = item.img;


var card = document.createElement('div');
card.classList.add('card');
card.dataset.name = name;

var front = document.createElement('div');
front.classList.add('front');

var back = document.createElement('div');
 back.classList.add('back');
 back.style.backgroundImage = 'url(' + img + ')';

grid.appendChild(card);
card.appendChild(front);
card.appendChild(back);
});

var match = function match() {
var selected = document.querySelectorAll('.selected');
selected.forEach(function (card) {
  card.classList.add('match');
});
};

var resetGuesses = function resetGuesses() {
firstGuess = '';
secondGuess = '';
count = 0;

var selected = document.querySelectorAll('.selected');
selected.forEach(function (card) {
  card.classList.remove('selected');
});
};

grid.addEventListener('click', function (event) {

var clicked = event.target;

if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
  return;
}

if (count < 2) {
  count++;
  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name;
    console.log(firstGuess);
    clicked.parentNode.classList.add('selected');
  } else {
    secondGuess = clicked.parentNode.dataset.name;
    console.log(secondGuess);
    clicked.parentNode.classList.add('selected');
  }

  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(match, delay);
    }
    setTimeout(resetGuesses, delay);
  }
  previousTarget = clicked;
}
});































/*
1. create an array to hold the cards
2. change the  name of the array in the shuffle function to the list array
3. create a loop that loops true each card and create it's html and stop at the last one?


* Create a list that holds all of your cards



* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page


// Shuffle function from http://stackoverflow.com/a/2450976


/*function shuffle(cardsList) {
var currentIndex = cardsList.length,
  temporaryValue, randomIndex;
while (currentIndex !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = cardsList[currentIndex];
  cardsList[currentIndex] = cardsList[randomIndex];
  cardsList[randomIndex] = temporaryValue;
}
return cardsList;
}
*/


//   - loop through each card and create its HTML


/*
* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/