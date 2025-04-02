let currentPlayer = 'X';
const squares = document.querySelectorAll('.square');
const statusDisplay = document.getElementById('currentPlayer');
const playButton = document.getElementById('playButton');
const resetButton = document.getElementById('resetButton');

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWin() {
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (
            squares[a].textContent &&
            squares[a].textContent === squares[b].textContent &&
            squares[a].textContent === squares[c].textContent
        ) {
            alert(currentPlayer + ' wins!');
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return [...squares].every(cell => cell.textContent);
}

function handleClick(event) {
    const cell = event.target;
    if (cell.textContent) return;
    cell.textContent = currentPlayer;
    if (checkWin()) return;
    if (checkDraw()) {
        alert('Draw!');
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = currentPlayer;
}

squares.forEach(cell => cell.addEventListener('click', handleClick));

playButton.addEventListener('click', () => {
    squares.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    statusDisplay.textContent = currentPlayer;
});

resetButton.addEventListener('click', () => {
    squares.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    statusDisplay.textContent = currentPlayer;
});