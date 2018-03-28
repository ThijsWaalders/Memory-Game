/*
1. create an array to hold the cards
2. change the  name of the array in the shuffle function to the list array
3. create a loop that loops true each card and create it's html and stop at the last one?
*/
/*
 * Create a list that holds all of your cards
 */

 //let cardsList = [];

 /*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
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
/* for (let i = 0; i < shuffledArray.length; i++) {
    // create li
    let item = document.createElement('li');

    // create div
    let innerItem = document.createElement('div');

    // set class to li
    item.setAttribute('class', 'game-deck-card');

    // set id to li
    item.setAttribute('id', 'game-card');

    // add img to div as background
    innerItem.style = `background-image: url('${shuffledArray[i]}');`;

    // give each card an id the same as the img name
    innerItem.setAttribute('id', shuffledArray[i].substring(4, 8));

    // add class card to div
    innerItem.setAttribute('class', 'card');

    // add div to li
    item.appendChild(innerItem);

    // add li to ul card-deck
    cardDeck.appendChild(item);

    // add an event listener to the card
    item.addEventListener('click', click);
}
*/
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
//  Jquery toevoegen in html!!! en vars vervangen voor let of const
// Jquery code;
/*
$(document).ready(function(){
    car app = {
        cards: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8],
        init: function() {
            app.shuffle();
        },
        shuffle: function() {
            var random = 0;
            var temp = 0;
            for(i = 1; i < app.cards.length; i++) {
                random = Math.round(Math.random() * i);
                temp = app.cards[i];
                app.cards[i] = app.cards[random];
                app.cards[random] = temp;
            }
            app.assignCards();
            console.log('Shuffled Card Array: '+app.cards);
        },
        assignCards: function() {
            $('.card').each(function(index) {
                $(this).attr('data-card-value', app.cards[index]);
            });
            app.clickHandlers();
        },
        clickHandlers: function() {
            $('.card').on('click', funcion() {
                $(this).html('<p>'+$(this).data('cardValue')+'</p>')..addClass('selected');
                app.checkMatch();
            });
        },
        checkMatch: function() {
            if($('.selected').length == 2) {
                if ($('.selected').first().data('cardValue')) {
                    $('.selected').each(funcion() {
                        $(this).animate({opacity: 0});
                    })
                }
            }
        }
        }
    }
});

*/



const cardsArray = [{
    'name': 'angellist',
  },
  {
    'name': 'earlybirds',
    //'img': 'img/star.png',
  },
  {
    'name': 'bomb',
    //'img': 'img/bobomb.png',
  },
  {
    'name': 'stack-overflow',
    //'img': 'img/mario.png',
  },
  {
    'name': 'slack',
    //'img': 'img/luigi.png',
  },
  {
    'name': 'soundcloud',
    //'img': 'img/peach.png',
  },
  {
    'name': 'drupal',
    //'img': 'img/1up.png',
  },
  {
    'name': 'windows',
    //'img': 'img/mushroom.png',
  },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
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