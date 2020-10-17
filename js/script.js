// Constants
const SHUFFLED_DECK = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const DRAW_DECK = 'https://deckofcardsapi.com/api/deck/';

// const BASE_SPOTIFY = 'https://api.spotify.com';
// const SPOTIFY_ID = '1390430476e44483b3c6580d1f76696e';
// const SPOTIFY_KEY = '9938199a313f413fb791c2309bc7d4a5';
// const TRACK = '4bHsxqR3GMrXTxEPLuK5ue';


// Variables
let Kings = [];
let pile = [];
let DECK_ID;
let cardDetail;
let cardImage;

// Cached Element References
const $card = $('#card');
const $cardImage = $('#card-image');

// Event Listeners
$card.on('click', handleClickCard);



// Functions
init();

function init() {
}


function handleClickCard() {
  if (!DECK_ID) {
    $.ajax(SHUFFLED_DECK)

    .then(function(response) {
    console.log(response);
    DECK_ID = response.deck_id;
    
   })
  } else {
  $.ajax(`${DRAW_DECK}${DECK_ID}/draw/?count=1`)
    .then(function(response) {
        cardDetail = response;
    console.log(cardDetail);
    render(cardDetail);
    })
    
  }
  
};


// handleClickCard(DECK_ID);
// $card.on('click', handleClickCard);

//render();


function reset () {
    

}




function render(cardDetail) {
    cardImage = cardDetail.cards[0].image;
    $cardImage.attr('src', cardImage);
    

    if (cardDetail.cards[0].value === "KING") {
        Kings.push(cardDetail.cards[0].value);
    } else if (Kings.length === 4) {
        alert('THE GAME IS OVER! You win! Play again?');
        return;

    } else {pile.push(cardDetail.cards[0].value);}
}



// function getSong () {
//     $http.post(BASE_SPOTIFY, {
//         json: {

//         }
//     })

// }





/*
  $.post('https://deckofcardsapi.com/api/deck',
    {
        deck_count: "1",
        deck_id: "new",
    },
    function(data,status) {
        console.log(data)
    })
*/