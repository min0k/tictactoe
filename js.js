// grab html elements

// Maybe move these to relevant factory functions/modules?
const board = document.querySelector(".board-container");
const boardTiles = document.querySelectorAll(".play-tile");
const body = document.querySelector("body");




// Players

// Implement ability to choose username
const Player = (playerName) => {
    const getName = () => console.log(playerName);
    return {getName}
};


// Game Logic
const ticTacToe = (() => {
    const play = () => console.log("play was made");
    return {play};
})();


// Game board

// Move a bunch of stuff here to Game Logic.
const gameBoard = (() => {

    const newGameButton = document.querySelector("button");
    newGameButton.addEventListener("click", resetGame);
    let winDisplay = document.createElement("h1");
    
    let gameEnded = false;

    let option = "O";

    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];

    function resetGame() {
        gameBoardArray = ["", "", "", "", "", "", "", "", ""];
        boardTiles.forEach(tile => {
            tile.textContent = "";
        })
        gameEnded = false
        winDisplay.remove();
    }

    const updateGameBoard = (e) => {

        if (boardTiles[e.target.dataset.value].textContent) {
            return
        }

        if (gameEnded) {
            return
        }

        let newChoice = xOrO();

        // Update to be X or O depending on which user
        gameBoardArray[e.target.dataset.value] = newChoice;
        console.log(gameBoardArray);

        // Update to be X or O depending on which user
        boardTiles[e.target.dataset.value].textContent = newChoice;

        if (doesWinnerExist() === true) {
            gameEnded = true;
            winDisplay.textContent = "Winner!";
            body.appendChild(winDisplay);
        } 


    }

    function doesWinnerExist() {
        if ((gameBoardArray[0] !== "") && (gameBoardArray[1] === gameBoardArray[0]) &&
            (gameBoardArray[2] === gameBoardArray[1])) {return true} else if 
            ((gameBoardArray[0] !== "") && (gameBoardArray[4] === gameBoardArray[0]) &&
            (gameBoardArray[8] === gameBoardArray[4])) {return true} else if 
            ((gameBoardArray[0] !== "") && (gameBoardArray[3] === gameBoardArray[0]) &&
            (gameBoardArray[6] === gameBoardArray[3])) {return true} else if 
            ((gameBoardArray[3] !== "") && (gameBoardArray[4] === gameBoardArray[3]) &&
            (gameBoardArray[5] === gameBoardArray[4])) {return true} else if
            ((gameBoardArray[6] !== "") && (gameBoardArray[7] === gameBoardArray[6]) &&
            (gameBoardArray[8] === gameBoardArray[7])) {return true} else if
            ((gameBoardArray[6] !== "") && (gameBoardArray[4] === gameBoardArray[6]) &&
            (gameBoardArray[2] === gameBoardArray[4])) {return true} else if
            ((gameBoardArray[6] !== "") && (gameBoardArray[4] === gameBoardArray[6]) &&
            (gameBoardArray[2] === gameBoardArray[4])) {return true} else if
            ((gameBoardArray[7] !== "") && (gameBoardArray[4] === gameBoardArray[7]) &&
            (gameBoardArray[1] === gameBoardArray[4])) {return true} else if 
            ((gameBoardArray[2] !== "") && (gameBoardArray[5] === gameBoardArray[2]) &&
            (gameBoardArray[8] === gameBoardArray[5])) {return true} else {
                return false
            }
    }

    function xOrO() {
        (option === "X") ? option = "O" : option = "X";
        return option;
    }   

    function addListenersToTiles () {
        boardTiles.forEach(tile => tile.addEventListener("click", updateGameBoard)); 
    }

    addListenersToTiles();

return {};
})();


