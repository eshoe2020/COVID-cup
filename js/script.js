// Constants
const SHUFFLED_DECK = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const DRAW_DECK = 'https://deckofcardsapi.com/api/deck/';

// Variables
let Kings = [];
let pile = [];
let DECK_ID;
let cardDetail;
let cardImage;
let cardValue = '';
let selectedCard;

// Cached Element References
const $card = $('#card');
const $cardImage = $('#card-image');
const $kings = $('#kings-count');
const $modal = $('#modal');


// Event Listeners
$card.on('click', handleClickCard);


// Functions
init();

function init() {}


function handleClickCard() {
    if (!DECK_ID) {
        $.ajax(SHUFFLED_DECK)

            .then(function (response) {
                console.log(response);
                DECK_ID = response.deck_id;
                $cardImage.attr('src', response.cards[0].image);
                console.log(response.cards[0].value)

                cardValue = response.cards[0].value;
                selectedCard = $(`#${cardValue}`);
                selectedCard.toggle('hidden');
                $modal.modal();
            
                const $closeBtn = $('.close-modal');
                $closeBtn.on('click', function () {
                    selectedCard.toggle('hidden')
                });

            })
    } else {
        $.ajax(`${DRAW_DECK}${DECK_ID}/draw/?count=1`)
            .then(function (response) {
                cardDetail = response;
                console.log(cardDetail);
                render(cardDetail);
            })

    }

};



function render() {
    cardImage = cardDetail.cards[0].image;


    $cardImage.attr('src', cardImage);


    cardValue = cardDetail.cards[0].value;
    selectedCard = $(`#${cardValue}`);
    selectedCard.toggle('hidden');
    $modal.modal();

    const $closeBtn = $('.close-modal');
    $closeBtn.on('click', function () {
        console.log('Selected Card: ', selectedCard);
        selectedCard.toggle('hidden')
    });



    if (cardDetail.cards[0].value === "KING") {
        Kings.push(cardDetail.cards[0].value);
        $kings.text(Kings.length);
    } else if (cardDetail.cards[0].value ===! "King") {
        pile.push(cardDetail.cards[0].value);
    } else if (Kings.length === 4) {
        alert('THE GAME IS OVER! Yuo aRe Durnk!');
        return;
    }

    
}