
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
let gameBoardArray = [];

return {gameBoardArray};

})();

const player1 = Player("mino");

player1.getName;