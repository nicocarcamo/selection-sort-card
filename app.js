// const suits = ['♥', '♦', '♣', '♠'];
// const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// const input = document.querySelector('#num-cards');
// const drawButton = document.querySelector('#draw-button');
// const sortButton = document.querySelector('#sort-button');
// const cardContainer = document.querySelector('#card-container');
// const sortContainer = document.querySelector('#sort-container');
// let cardArray = [];

// function generateCards(numCards) {

//   const cardDeck = [];

//   for (let i = 0; i < numCards; i++) {
//     let suit = suits[Math.floor(Math.random() * suits.length)];
//     let card = cards[Math.floor(Math.random() * cards.length)];
//     cardDeck.push(card + " " + suit);
//   }

//   cardArray = cardDeck;
//   console.log(cardArray);
//   return cardDeck;
// }



// function clearCards() {
//   let cardsContainer = document.getElementById("card-container");

//   while (cardsContainer.firstChild) {
//     cardsContainer.removeChild(cardsContainer.firstChild);
//   }

// }

// function clearSort() {
//   let sortContainer = document.getElementById("sort-container");

//   while (sortContainer.firstChild) {
//     sortContainer.removeChild(sortContainer.firstChild);
//   }
// }

// drawButton.addEventListener('click', () => {
//   clearCards();
//   clearSort();

//   let numCards = input.value;
//   let cardDeck = generateCards(numCards);

//   cardDeck.forEach(card => {

//     let cardParts = card.split(" ");
//     let cardElement = document.createElement('div');
//     cardElement.classList.add('card');

//     cardElement.innerHTML = `
//       <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
//       <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
//       <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
//     `;

//     if (card.includes("♥") || card.includes("♦")) {
//       cardElement.style.color = "red";
//     } else {
//       cardElement.style.color = "black";
//     }

//     cardContainer.appendChild(cardElement);
//   });
// });


// //find a way for the function to print the right order (ex: 10 > 6, Q < K, A > K)
// //find a way for the function to render every step of the bubble sort algorithm
// const bubbleSort = cards => {
//   let stop = cards.length - 1;

//   for (let i = 0; i <= stop; i++) {
//     for (let j = 0; j <= stop; j++) {
//       if (cards[j] > cards[j + 1]) {
//         let aux = cards[j];
//         cards[j] = cards[j + 1];
//         cards[j + 1] = aux;
//       }
//     }
//   }

//   return cards;
// }

// sortButton.addEventListener('click', () => {
//   clearSort();

//   let sortedCards = bubbleSort(cardArray);
//   console.log(sortedCards);

//   sortedCards.forEach(card => {

//     let cardParts = card.split(" ");
//     let cardElement = document.createElement('div');
//     cardElement.classList.add('card');

//     cardElement.innerHTML = `
//       <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
//       <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
//       <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
//     `;

//     if (card.includes("♥") || card.includes("♦")) {
//       cardElement.style.color = "red";
//     } else {
//       cardElement.style.color = "black";
//     }

//     sortContainer.appendChild(cardElement);
//   });
// });






const suits = ['♥', '♦', '♣', '♠'];
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const input = document.querySelector('#num-cards');
const drawButton = document.querySelector('#draw-button');
const sortButton = document.querySelector('#sort-button');
const cardContainer = document.querySelector('#card-container');
const sortContainer = document.querySelector('#sort-container');
let cardArray = [];

function generateCards(numCards) {

  const cardDeck = [];

  for (let i = 0; i < numCards; i++) {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let card = cards[Math.floor(Math.random() * cards.length)];
    cardDeck.push(card + " " + suit);
  }

  cardArray = cardDeck;
  console.log(cardArray);
  return cardDeck;
}



function clearCards() {
  let cardsContainer = document.getElementById("card-container");

  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

}

function clearSort() {
  let sortContainer = document.getElementById("sort-container");

  while (sortContainer.firstChild) {
    sortContainer.removeChild(sortContainer.firstChild);
  }
}

drawButton.addEventListener('click', () => {
  clearCards();
  clearSort();

  let numCards = input.value;
  let cardDeck = generateCards(numCards);

  cardDeck.forEach(card => {

    let cardParts = card.split(" ");
    let cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
      <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
      <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
    `;

    if (card.includes("♥") || card.includes("♦")) {
      cardElement.style.color = "red";
    } else {
      cardElement.style.color = "black";
    }

    cardContainer.appendChild(cardElement);
  });
});


// find a way for the function to print the right order (ex: 10 > 6, Q < K, A > K)
// find a way for the function to render every step of the bubble sort algorithm
const bubbleSort = cards => {
  let stop = cards.length - 1;

  for (let i = 0; i <= stop; i++) {
    for (let j = 0; j <= stop; j++) {
      if (cards[j] > cards[j + 1]) {
        let aux = cards[j];
        cards[j] = cards[j + 1];
        cards[j + 1] = aux;
      }
    }
  }

  return cards;
}


// const bubbleSort = cards => {
//   let stop = cards.length - 1;

//   for (let i = 0; i <= stop; i++) {
//     for (let j = 0; j <= stop; j++) {
//       if (cards[j] > cards[j + 1]) {
//         let aux = cards[j];
//         cards[j] = cards[j + 1];
//         cards[j + 1] = aux;
//       }

//       // Create a new div element for each step of the sorting algorithm
//       let stepElement = document.createElement('div');

//       // Set the inner HTML of the element to the current state of the cards array
//       stepElement.innerHTML = cards.join(', ');

//       // Append the element to the sort-container div
//       sortContainer.appendChild(stepElement);
//     }
//   }

//   return cards;
// }

sortButton.addEventListener('click', () => {
  clearSort();

  let sortedCards = bubbleSort(cardArray);
  console.log(sortedCards);

  sortedCards.forEach(card => {

    let cardParts = card.split(" ");
    let cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
      <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
      <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
    `;

    if (card.includes("♥") || card.includes("♦")) {
      cardElement.style.color = "red";
    } else {
      cardElement.style.color = "black";
    }

    sortContainer.appendChild(cardElement);
  });
});




