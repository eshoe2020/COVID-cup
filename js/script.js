// Constants
const BASE_DECK = 'https://deckofcardsapi.com/api/deck';
const BASE_SPOTIFY = 'https://api.spotify.com';
const SPOTIFY_ID = '1390430476e44483b3c6580d1f76696e';
const SPOTIFY_KEY = '9938199a313f413fb791c2309bc7d4a5';
const TRACK = '4bHsxqR3GMrXTxEPLuK5ue';

// Variables
let shuffle, draw, deckID;
let Kings = [];
let pile = [];

// Cached Element References
const $card = $('#card');
const $cardImage = $('#card-image');

// Event Listeners
$card.on('click', handleClick)



// Functions

function init () {
   
 }


function handleClick () {

// Start a new deck, <<deck_id>> is set to new, this makes a shuffled deck to draw from

    $.ajax('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then (function (data) {
        drawCard = data
        console.log(drawCard)
        render()
        
    }, function(error) {
        console.log('Error', error)
    });

}

function getSong () {
    $http.post(BASE_SPOTIFY, {
        json: {
            
        }
    })

}


// function getDeckID () {
//     $.ajax('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     deckID = deck_id
// }

function render () {

    
    var cardImage = drawCard.cards[0].image
    $cardImage.attr('src', cardImage);

    if (drawCard.cards[0].value === "K") {
        Kings.push()
    } else { pile.push() }
    if (Kings.length === 4) {
        return;
    }
}   


//SHUFFLE: https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

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