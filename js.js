// grab html elements

const board = document.querySelector(".board-container");
const boardTiles = document.querySelectorAll(".play-tile");

// Players
const Player = (playerName) => {
    let getName = console.log(playerName);
    return {getName}
};

// Game Logic
const ticTacToe = (() => {
    const play = () => console.log("play was made");
    return {play};
})();


// Game board
const gameBoard = (() => {
    
const gameBoardArray = ["", "", "", "", "", "", "", "", ""];

let updateGameBoard = (e) => {
    console.log(e.target.dataset.value);

    // Update to be X or O depending on which user
    gameBoardArray[e.target.dataset.value] = "X";
    console.log(gameBoardArray);

    // Update to be X or O depending on which user
    boardTiles[e.target.dataset.value].textContent = "X";
}

let addListenersToTiles = () => {
    boardTiles.forEach(tile => tile.addEventListener("click", updateGameBoard)); 
}

addListenersToTiles();

return {};
})();

