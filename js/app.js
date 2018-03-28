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
    'name': 'napster',
    //'img': 'img/star.png',
  },
  {
    'name': 'bobomb',
    //'img': 'img/bobomb.png',
  },
  {
    'name': 'mario',
    //'img': 'img/mario.png',
  },
  {
    'name': 'luigi',
    //'img': 'img/luigi.png',
  },
  {
    'name': 'peach',
    //'img': 'img/peach.png',
  },
  {
    'name': '1up',
    //'img': 'img/1up.png',
  },
  {
    'name': 'mushroom',
    //'img': 'img/mushroom.png',
  },
  {
    'name': 'thwomp',
    //'img': 'img/thwomp.png',
  },
  {
    'name': 'bulletbill',
   // 'img': 'img/bulletbill.png',
  },
  {
    'name': 'coin',
   // 'img': 'img/coin.png',
  },
  {
    'name': 'goomba',
   // 'img': 'img/goomba.png',
  },
];




// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);



// For each item in the cardsArray array...
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div');
  
    // Apply a card class to that div
    card.classList.add('card');
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;
  
//     // Append the div to the grid section
//     grid.appendChild(card);
//   });
});



// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);



// For each item in the cardsArray array...
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div');
  
    // Apply a card class to that div
    card.classList.add('card');
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;
  
    // Append the div to the grid section
    grid.appendChild(card);
  });


// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());




// Add event listener to grid so anytime an element is clicked, the selected class will be applied to it
grid.addEventListener('click', function (event) {
    // The event target is our clicked item
    let clicked = event.target;
  
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION') { return; }
    
    // Add selected class
    clicked.classList.add('selected');
   });