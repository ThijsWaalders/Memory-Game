// get all star items
const starOne = document.getElementById('star-one');
const starTwo = document.getElementById('star-two');
const starThree = document.getElementById('star-three');

const starOneEmpty = document.getElementById('star-one-o');
const starTwoEmpty = document.getElementById('star-two-o');
const starThreeEmpty = document.getElementById('star-three-o');


function startGame() {
    // ?????
    // // adds fa-star class to the star elements
    // starThree.classList.add('fa-star');
    // starTwo.classList.add('fa-star');
    // starOne.classList.add('fa-star');

    // adds fa-star-o class to the star elements
    starThreeEmpty.classList.add('fa-star-o');
    starTwoEmpty.classList.add('fa-star-o');
    starOneEmpty.classList.add('fa-star-o');

    // // little timeout before game board and score board are shown
    // setTimeout(function() {
    //     game.classList.add('game-show');
    //     score.classList.add('score-show');
    // }, 400);

    // // start the timer
    // start();

    // make sure moves are 0
    moves = 0;

    // set innerText to moves
    move.innerText = moves;

    // // store shuffled cards in temp array
    // shuffledArray = shuffle(cards);
}





// add one to the moves
moves = moves + 1;

// update moves inner text
move.innerText = moves;

// call count stars to update the scoreboard stars
countStars(moves);


// check how many moves the user made if less than 18 3 stars else between 18-22 2 stars and above 23 1 start
if (moves < 18) {
// full star
starThreeEmpty.classList.add('fa-star');
// full star
starTwoEmpty.classList.add('fa-star');
// full star
starOneEmpty.classList.add('fa-star');

result = `Awesome!!!! ${userEmpty} you master this.`;

points = Math.floor(11000 / moves);
} else if (moves >= 18 && moves <= 22) {
// no star
starThreeEmpty.classList.remove('fa-star');
// full star
starTwoEmpty.classList.add('fa-star');
// full star
starOneEmpty.classList.add('fa-star');

result = `Great Job, ${userEmpty} you Won!!!`;

points = Math.floor(10000 / moves);
} else if (moves >= 23) {
// no star
starThreeEmpty.classList.remove('fa-star');
// no star
starTwoEmpty.classList.remove('fa-star');
// full star
starOneEmpty.classList.add('fa-star');

result = `Nice ${userEmpty}, keep practicing!`;

points = Math.floor(9000 / moves);
}


/**
 * @description when called all values are set back to basic values
 */
function reset() {
// three full stars
starThree.classList.add('fa-star');
starTwo.classList.add('fa-star');
starOne.classList.add('fa-star');

// empty card deck
cardDeck.innerHTML = '';

// empty shuffledArray
shuffledArray = [];

// remove the Empty modal
Emptygame.classList.remove('modal-show');

// empty openCards
openCards = [];
// empty matchedCards
matchedCards = [];

// timerTime back to 0
timerTime = 0;

// seconds back to 0
seconds = 0;

// moves back to 0
moves = 0;

// points back to 0
points = 0;

// show the card deck and scoreboard
setTimeout(function() {
    game.classList.add('game-show');
    score.classList.add('score-show');
}, 400);

// call start game
startGame();
// start the timer
start();
}


/**
 * @description updates stars on the scoreboard during the game
 */
function countStars(moves) {
    if (moves >= 18) {
      starThree.classList.remove('fa-star');

      if (moves >= 23) {
        starTwo.classList.remove('fa-star');
      }
    }
  }





