const gameboard = (() => {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    //Display the tic tac toe board
    const getBoard = () => board;

    //Updated the board with the given index and marker
    const updateBoard = (index, marker) => {
        board[index] = marker;
    };

    //Resets the board
    const resetBoard = () => {
        for(let i = 0; i < board.length; i++){
            board[i] = 0;
        }
    };

    return { getBoard, updateBoard, resetBoard }
})();

//Factory function for creating player
function createPlayer(name) {

    const username = '@' + name;

    return { username };
}

//Function to create Player1 object
const Player1 = (name) => {
    const player1Name = createPlayer(name)
    const marker = 'X';

    return { player1Name, marker }
}

//Function to create Player2 object
const Player2 = (name) => {
    const player2Name = createPlayer(name);
    const marker = 'O';

    return { player2Name, marker }
}

updateBoard(0, 'X');

console.log(gameboard.getBoard());

console.log("------");

gameboard.resetBoard();

console.log("After reset");
console.log(gameboard.getBoard());