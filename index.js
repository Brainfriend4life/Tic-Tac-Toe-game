// i make the current player to be X
let currentPlayer = "X";

// i firts get the elements:
const squares = document.querySelectorAll(".square");
const resetButton = document.getElementById("resetButton");
const playButton = document.getElementById("playButton");


squares.forEach(cell => {
    cell.addEventListener("click", function () {
    if (!this.textContent) {
        this.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
});


});
// play button
playButton.addEventListener("click", function ()  {
    squares.forEach(cell => {
        cell.textContent = ""; // reset the starting player
    });
    currentPlayer = "X";
});

// the reset button
resetButton.addEventListener("click", function ()  {
    squares.forEach(cell => {
        cell.textContent = "";
    });
    currentPlayer = "X"; // reset the starting player
});