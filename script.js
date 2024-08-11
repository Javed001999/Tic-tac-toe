let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cellIndex) {
    const cell = document.querySelectorAll('.cell')[cellIndex];

    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        gameActive = false;
        showResult(`${currentPlayer} wins! 🏆`);
        return;
    }

    if (!gameState.includes('')) {
        gameActive = false;
        showResult("It's a draw! 😨");
        document.getElementById("result").style.color = "#1f15ad";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `${currentPlayer}'s Turn`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function showResult(resultText) {
    const gameScreen = document.getElementById('game-screen');
    const result = document.getElementById('result');
    result.textContent = resultText;
    gameScreen.classList.remove('hidden');
}

function startNewGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').textContent = "X's Turn";
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    const gameScreen = document.getElementById('game-screen');
    const result = document.getElementById('result');
    result.textContent = '';
    gameScreen.classList.add('hidden');
}




