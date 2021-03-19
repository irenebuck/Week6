const rank = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'Jack': 11,
    'Queen': 12,
    'King': 13,
    'Ace': 14,
};
const suit = [' of Clubs', ' of Diamonds', ' of Hearts', ' of Spades'];

let deck = [];
let player1Hand = [];
let player2Hand = [];
let player1Score = 0;
let player2Score = 0;

function makeCards() {
        let i=0;
        for (i in rank) {
            deck.push({ rank: rank[i], suit: suit[0] });
        }
        for (i in rank) {
            deck.push( { rank: rank[i], suit: suit[1]});
        }
        for (i in rank) {
            deck.push({ rank: rank[i], suit: suit[2]});
        }
        for (i in rank) {
            deck.push({ rank: rank[i], suit: suit[3]});
        }
    }
makeCards();

function shuffle() {
        deck.sort(() => Math.random() - 0.5);
        }

shuffle();
 
function dealAllCards() {
        for (i=0; i < deck.length; i++) {
            if (i%2 === 0) {
                player1Hand.push(deck[i]);
            } else {
                player2Hand.push(deck[i]);
            }
        }
    }

function compareCards(p1card, p2card) {
    if (p1card.rank > p2card.rank) {
        player1Score++;
    } else if (p1card.rank < p2card.rank) {
        player2Score++;
    }
}

function getWinner() {
    if (player1Score > player2Score) {
        return ('Player 1 is the winner');
    } else if (player2Score > player1Score) {
        return ('Player 2 is the winner'); 
    } else {
        return ('It is a tie');    
    }
}

function playWar () {
    dealAllCards();
    for (i=0; i < deck.length/2; i++); {
        const player1Card = player1Hand.splice(0, 1)[0];
        const player2Card = player2Hand.splice(0, 1)[0];
        compareCards(player1Card, player2Card);
    }
    console.log(getWinner());
}

playWar ();

console.log(`Player 1 scored ${player1Score} points  
Player 2 scored ${ player2Score} points`);
