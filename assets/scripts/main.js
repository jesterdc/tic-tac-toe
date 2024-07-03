// Game Board object and functions
const gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    // Display the tic tac toe board
    const getBoard = () => board;

    // Update the board with the given index and marker
    const updateBoard = (index, marker) => {
        if (board[index] === '') {
            board[index] = marker;
            return true;
        }
        return false;
    };

    // Resets the board
    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return { getBoard, updateBoard, resetBoard };
})();

// Factory function for creating players
const createPlayer = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
};

// Game object to control the flow of the game
const game = (() => {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
    let currentPlayer = player1;

    const playTurn = (index) => {
        if (gameboard.updateBoard(index, currentPlayer.getMarker())) {
            if (checkWin()) {
                alert(`${currentPlayer.getName()} wins!`);
                gameboard.resetBoard();
                displayBoard();
            } else {
                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
        }
    };

    const getCurrentPlayer = () => currentPlayer;

    return { playTurn, getCurrentPlayer };
})();

// Function to display the board in the console (FOR TESTING ONLY)
// const displayBoard = () => {
//     const board = gameboard.getBoard();
//     console.log(`
//      ${board[0]} | ${board[1]} | ${board[2]}
//     -----------
//      ${board[3]} | ${board[4]} | ${board[5]}
//     -----------
//      ${board[6]} | ${board[7]} | ${board[8]}
//     `);
// };

// Function to check for a win
const checkWin = () => {
    const board = gameboard.getBoard();
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        if (board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]] &&
            board[combination[0]] !== '') {
            return true;
        }
    }
    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            game.playTurn(index);
            displayBoard();
        });
    });

    resetButton.addEventListener('click', () => {
        gameboard.resetBoard();
        displayBoard();
    });

    displayBoard();
});

// Function to display the board on the webpage
const displayBoard = () => {
    const board = gameboard.getBoard();
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
};

