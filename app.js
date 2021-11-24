// const cards = document.querySelectorAll(".memory-card");

// let cardIsFlipped = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   // this.classList.toggle("flip");
//   this.classList.add("flip");

//   if (!cardIsFlipped) {
//     // first click -> first card
//     cardIsFlipped = true;
//     firstCard = this;
//     return;
//   }
//   // second click -> second card
//   secondCard = this;

//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatched = firstCard.dataset.name === secondCard.dataset.name;
//   isMatched ? disableCards() : unFlipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);

//   resetBoard();
// }

// function unFlipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//   [cardIsFlipped, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// // IIFE -> Immediately Invoked Function Expression => function is called immediately after its definition
// (function shuffle() {
//   cards.forEach(function (card) {
//     let randomPositions = Math.floor(Math.random() * 12);
//     card.style.order = randomPositions;
//   });
// })();

// cards.forEach(function (card) {
//   card.addEventListener("click", flipCard);
// });

// fall down 7 times, get up 8
// value yourself

/*
my code below
 */

const cards = document.querySelectorAll(".memory-card");

let cardIsFlipped = false;
let firstCard, secondCard;

function flipCard() {
  // console.log(this);
  this.classList.toggle("flip");

  if (!cardIsFlipped) {
    // first click and first card
    cardIsFlipped = true;
    firstCard = this;
  } else {
    // second click and second card
    cardIsFlipped = false;
    secondCard = this;

    // check whether the cards match
  }
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
