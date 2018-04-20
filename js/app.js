// Create an array that holds all cards as objects
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

// Duplicate the array/cards to get a pair of all 8 cards and then randomize all cards
let gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

// Declare variables in the Global Scope
let firstGuess = ''; // to compare with secondGuess
let secondGuess = ''; // to compare with firstGuess
let count = 0; // Guess counter goes till 2.
let previousTarget = null;
const delay = 1200;
const delayLong = 2400;
let matchCount = 0; // counter for amounth of matches goes till 16
const move = document.getElementById('move');
const moveModal = document.getElementById('move-modal');
let moves = 0; // counter for all moves, so 2 cards turned = 1 move
const stars = document.getElementById('stars');
const starsModal = document.getElementById('stars-modal');
let starCounter = 0;
const starOne = document.getElementById('star-one'); // Create reference to #stars
const starTwo = document.getElementById('star-two');
const starThree = document.getElementById('star-three');
const starOneModal = document.getElementById('star-one-modal'); // Create reference to #stars on the modal screen
const starTwoModal = document.getElementById('star-two-modal');
const starThreeModal = document.getElementById('star-three-modal');
const deck = document.getElementById('game');

// var for timer
let timer = new Timer();

// variables for DOM selection
const scorePanel = document.querySelector(".score-panel");
const modal = document.querySelector(".modal-done");
const modalStart = document.querySelector(".modal-start");
const modalDone = document.querySelector(".modal-done");
const startButton = document.querySelectorAll(".start-button");

// create grid
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

/**
 * @description Loop over all cards to create/shuffle/place them on the grid
 */
// loop through the cards
gameGrid.forEach(function (item) {
  const name = item.name,
      img = item.img;

  // create the cards with a div and add a class
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  // create frontside
  const front = document.createElement('div');
  front.classList.add('front');
  // create backside
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';
  //  append card to grid, front and back
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// add class to style selected cards when they match
const match = function match() {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
    matchCount = matchCount +1;
  });
};

/**
 * @description Reset function after the player selected 2 cards.
 */
const resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  // remove selection
  const selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
};

/**
* @description Eventlistener for the cards
*
*/
function gameInit() {
    // add eventlistener to grid to flip the cards when a card is clicked
    grid.addEventListener('click', function (event) {

    // event target is the clicked item
    let clicked = event.target;

    // Do not allow the grid section to get selected, only the divs inside the grid
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    // matching logic
    // function for matching cards
    if (count < 2) {
        count++;
        if (count === 1) {
        // assign first guess
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
            } else {
        // assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
        // set innerText to moves
        move.innerText = moves;
        }
        // if both guesses are not empty
        if (firstGuess && secondGuess) {
        starRating();
        // and the first guess matches the second guess
        if (firstGuess === secondGuess) {
            // then run the match function with a little delay
            console.log("You've got a match!");
            setTimeout(match(), delay);
            // write a function to show the winning screen/modal when all 16 cards match
            // When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
            if (matchCount === 16) {
                setTimeout(match(), delay);
                setTimeout(modal.classList.remove('hidden'), delayLong);
                const cardElement = document.querySelectorAll('.card');
                //  append card to grid, front and back
                cardElement.remove('.card');console.log('cardClear');
                // clicked = "";
                // previousTarget = "";
                // cardClear.classList.remove('selected', 'match', 'front', 'back');console.log("all .selected and .match classes cleared");
                deck.classList.add('hidden');console.log('remove deck');
                console.log("Win screen pops up");
                timer.pause();
                $('#show-timer-score .values').html(
                    'It took you ' + timer.getTimeValues().toString(['hours', 'minutes', 'seconds']) + ' to win the game with a total of ' + moves + ' moves ' + 'and your star rating is: ');
                    gameInit();
            }
        }
        setTimeout(resetGuesses, delay);
        } else { // count +1 on moves
        moves++;
        }
        previousTarget = clicked;
    }
    });
}
gameInit();

/**
 * @description Create the star rating: loop over the moves variable and remove one or more stars
 */
function starRating (){
  if (moves === 8) {
    stars.removeChild(starThree);
    starsModal.removeChild(starThreeModal);
    starCounter++;
    console.log("star three removed");
  } else if (moves === 16) {
    stars.removeChild(starTwo);
    starsModal.removeChild(starTwoModal);
    starCounter++;
    console.log("star two removed");
  } else if (moves === 34) {
    stars.removeChild(starOne);
    starsModal.removeChild(starOneModal);
    starCounter++;
    console.log("star one removed");
  }
}

/**
 * @description Loop over the startButtons (start and restart) to add the eventlistener for the buttons to start/reset the game and start the timer
 */
//
//
// this gives me a jshint warning: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (W083)
// but in dev tools it works ok without errors, I don't know if that is ok? Would be nice to have a comment about that
for (let i = 0; i < startButton.length; i++) {
  startButton[i].addEventListener('click',function () {
    gameInit();
    modalStart.classList.add('hidden');
    modalDone.classList.add('hidden');
    deck.classList.remove('hidden');
    console.log("Game starts now, good luck!");
    timer.start({callback: function (timer) {
      $('#callbackExample .values').html(
        timer.getTimeValues().toString(['minutes', 'seconds'])
      );
    }});
    console.log("timer is gestart!");
    });
}