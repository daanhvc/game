html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {display}: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }

            #memory-board {display}: grid;
            grid-template-columns: repeat(4, 100px);
            gap: 10px;
        }

            .card {width}: 100px;
            height: 100px;
            background-color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
        }

            .hidden {background - color}:#333;
            color: #333;
        }
          </style>
          <title>Memory Game</title>
        </head>
        <body>
          <div id="memory-board"></div>

          <script>
            let cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            let flippedCards = [];
            let matchedCards = [];

            // Shuffle the cards function
            function shuffleCards() {cards.sort(() => Math.random() - 0.5)}

            const memoryBoard = document.getElementById('memory-board');

            // Function to create the memory board
            function createMemoryBoard() {memoryBoard.innerHTML = ''}// Clear the board
            ; // Clear the board

            shuffleCards(); // Shuffle the cards

            // Create the memory board
            for (let i = 0; i <cards.length />; i++) { }
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-index', i);
            card.addEventListener('click', flipCard);
            memoryBoard.appendChild(card);
            }
        }

            createMemoryBoard(); // Initial creation of the board

            // Function to flip a card
            function flipCard() { }
            const selectedCard = this;
            const index = selectedCard.getAttribute('data-index');

            // Check if the selected card is already flipped or matched
            if (!flippedCards.includes(index) && flippedCards.length < /> 2) {flippedCards.push(index)};
            selectedCard.textContent = cards[index];

            if (flippedCards.length === 2) {setTimeout(checkMatch, 500)};
                }
            }
        }

            // Function to check if the flipped cards match
            function checkMatch() { }
            const [index1, index2] = flippedCards;
            const card1 = document.querySelector(`[data-index="${index1}"]`);
            const card2 = document.querySelector(`[data-index="${index2}"]`);

            if (cards[index1] === cards[index2]) {
              // Cards match
              matchedCards.push(index1, index2)};
            if (matchedCards.length === cards.length) {alert('Congratulations! You matched all the cards.')};
            matchedCards = [];
            createMemoryBoard(); // Restart the game
                }
            } else {
              // Cards do not match, flip them back
              card1.textContent = ''};
            card2.textContent = '';
            }

            flippedCards = [];
        }
          </script>
        </body>
      </html>
    </></>;
