//Declaring Constants and Variables
const xoBoxes = document.querySelectorAll(".board div");
const boxesArray = Array.from(xoBoxes);
const xPlayer = "X";
const oPlayer = "O";
let gameActive = true;
let currentPlayer = oPlayer;
let clickCounter = 0;

// Player's Turn
const playerTurn = document.querySelector("#player-turn");

if (currentPlayer == oPlayer) {
	playerTurn.textContent = `X Player's Turn`;
} else if (currentPlayer == xPlayer) {
	playerTurn.textContent = `O Player's Turn`;
}

// Initialize Scoreboard
const xPlayerScore = document.querySelector("#x-score-span");
const oPlayerScore = document.querySelector("#o-score-span");
xPlayerScore.textContent = 0;
oPlayerScore.textContent = 0;

// Main Loop, Click Event, and Restart Button inside
for (let i = 0; i < boxesArray.length; i++) {
	let currentBox = boxesArray[i];
	const restartBtn = document.querySelector("#restart-btn");

	restartBtn.addEventListener("click", restartGame);
	currentBox.addEventListener("click", clickEvent, { once: true });

	function clickEvent() {
		if (gameActive) {
			currentPlayer = currentPlayer === oPlayer ? xPlayer : oPlayer;
			currentBox.textContent = currentPlayer;

			if (currentPlayer == oPlayer) {
				playerTurn.textContent = `X Player's Turn`;
			} else if (currentPlayer == xPlayer) {
				playerTurn.textContent = `O Player's Turn`;
			}

			winningCombinations();
			clickCounter++;
			if (gameActive == true && clickCounter == 9) {
				alert("It's a draw!");
			}
		}
	}

	function restartGame() {
		currentBox.addEventListener("click", clickEvent, { once: true });
		for (let i = 0; i < boxesArray.length; i++) {
			boxesArray[i].textContent = " ";
		}
		clickCounter = 0;
		return (gameActive = true);
	}
}

// Scoreboard Function
function scoreBoard() {
	if (currentPlayer == xPlayer) {
		xPlayerScore.textContent++;
	} else if (currentPlayer == oPlayer) {
		oPlayerScore.textContent++;
	}
}

// Winning Combinations Function
function winningCombinations() {
	if (
		boxesArray[0].textContent === currentPlayer &&
		boxesArray[1].textContent === currentPlayer &&
		boxesArray[2].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[3].textContent === currentPlayer &&
		boxesArray[4].textContent === currentPlayer &&
		boxesArray[5].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[6].textContent === currentPlayer &&
		boxesArray[7].textContent === currentPlayer &&
		boxesArray[8].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[0].textContent === currentPlayer &&
		boxesArray[3].textContent === currentPlayer &&
		boxesArray[6].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[1].textContent === currentPlayer &&
		boxesArray[4].textContent === currentPlayer &&
		boxesArray[7].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[2].textContent === currentPlayer &&
		boxesArray[5].textContent === currentPlayer &&
		boxesArray[8].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[0].textContent === currentPlayer &&
		boxesArray[4].textContent === currentPlayer &&
		boxesArray[8].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	} else if (
		boxesArray[2].textContent === currentPlayer &&
		boxesArray[4].textContent === currentPlayer &&
		boxesArray[6].textContent === currentPlayer
	) {
		alert(`${currentPlayer} Player Wins!`);
		scoreBoard();
		return (gameActive = false);
	}
}
