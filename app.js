
const suits = ['♥', '♦', '♣', '♠'];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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

    if (card.includes("♥") || card.includes("♦")) {
      cardElement.style.color = "red";
    } else {
      cardElement.style.color = "black";
    }

    if (cardParts[0] == 1) {
      cardParts[0] = "A"
    } else if (cardParts[0] == 11) {
      cardParts[0] = "J"
    } else if (cardParts[0] == 12) {
      cardParts[0] = "Q"
    } else if (cardParts[0] == 13) {
      cardParts[0] = "K"
    }

    cardElement.innerHTML = `
      <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
      <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
    `;

    cardContainer.appendChild(cardElement);
  });
});


const bubbleSort = cards => {
  let stop = cards.length - 1;

  for (let i = 0; i <= stop; i++) {
    for (let j = 0; j <= stop; j++) {
      if (parseInt(cards[j]) > parseInt(cards[j + 1])) {
        let aux = cards[j];
        cards[j] = cards[j + 1];
        cards[j + 1] = aux;

        let iterationContainer = document.createElement('div');
        iterationContainer.classList.add('iteration-container');

        cards.forEach(card => {
          let cardParts = card.split(" ");
          let cardElement = document.createElement('div');
          cardElement.classList.add('card');

          if (card.includes("♥") || card.includes("♦")) {
            cardElement.style.color = "red";
          } else {
            cardElement.style.color = "black";
          }

          if (cardParts[0] == 1) {
            cardParts[0] = "A"
          } else if (cardParts[0] == 11) {
            cardParts[0] = "J"
          } else if (cardParts[0] == 12) {
            cardParts[0] = "Q"
          } else if (cardParts[0] == 13) {
            cardParts[0] = "K"
          }

          cardElement.innerHTML = `
            <div style="position: absolute; top: 0; left: 0;">${cardParts[1]}</div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: black;">${cardParts[0]}</div>
            <div style="position: absolute; bottom: 0; right: 0;">${cardParts[1]}</div>
          `;

          iterationContainer.appendChild(cardElement);
        });

        sortContainer.appendChild(iterationContainer);
      }
    }
  }

  return cards;
}


sortButton.addEventListener('click', () => {

  clearSort();
  bubbleSort(cardArray);
});