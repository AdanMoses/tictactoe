// Add event listeners --done
// declare variables --done?? maybe add variables for each box?
// create main loop --done
// turns, inside event listener function or outside of it?
// -----------
// add Restart function -- done
// add scoreboard
// if there's a winner you can't click anymore

const xoBoxes = document.querySelectorAll(".board div");
const boxesArray = Array.from(xoBoxes);
const xPlayer = "X";
const oPlayer = "O";
let currentPlayer = oPlayer;
let clickCounter = 0;

const playerTurn = document.querySelector("#player-turn");
playerTurn.textContent = `${currentPlayer} Player Turn`;

for (let i = 0; i < xoBoxes.length; i++) {
	let currentBox = xoBoxes[i];
	const restartBtn = document.querySelector("#restart-btn");
	restartBtn.addEventListener("click", restartGame);
	currentBox.addEventListener("click", clickEvent, { once: true });

	function clickEvent() {
		currentPlayer = currentPlayer === oPlayer ? xPlayer : oPlayer;
		currentBox.textContent = currentPlayer;
		playerTurn.textContent = `${currentPlayer} Player Turn`;
		winningCombinations();
		clickCounter++;
		if (clickCounter == 9) {
			alert("It's a draw!");
		}
	}

	function restartGame() {
		currentBox.addEventListener("click", clickEvent, { once: true });
		for (let i = 0; i < boxesArray.length; i++) {
			boxesArray[i].textContent = " ";
		}
		clickCounter = 0;
	}

	function removeClick() {
		for (let i = 0; i < xoBoxes.length; i++) {
			xoBoxes[i].removeEventListener("click", clickEvent);
		}
	}

	function winningCombinations() {
		if (
			boxesArray[0].textContent === currentPlayer &&
			boxesArray[1].textContent === currentPlayer &&
			boxesArray[2].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[3].textContent === currentPlayer &&
			boxesArray[4].textContent === currentPlayer &&
			boxesArray[5].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[6].textContent === currentPlayer &&
			boxesArray[7].textContent === currentPlayer &&
			boxesArray[8].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[0].textContent === currentPlayer &&
			boxesArray[3].textContent === currentPlayer &&
			boxesArray[6].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[1].textContent === currentPlayer &&
			boxesArray[4].textContent === currentPlayer &&
			boxesArray[7].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[2].textContent === currentPlayer &&
			boxesArray[5].textContent === currentPlayer &&
			boxesArray[8].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[0].textContent === currentPlayer &&
			boxesArray[4].textContent === currentPlayer &&
			boxesArray[8].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		} else if (
			boxesArray[2].textContent === currentPlayer &&
			boxesArray[4].textContent === currentPlayer &&
			boxesArray[6].textContent === currentPlayer
		) {
			alert(`${currentPlayer} Player Wins!`);
			removeClick();
		}
	}
}
