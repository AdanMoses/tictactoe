// Add event listeners --done
// declare variables --done?? maybe add variables for each box?
// create main loop --done
// turns, inside event listener function or outside of it?

const xoBoxes = document.querySelectorAll(".board div");
const xPlayer = "X";
const oPlayer = "O";
let currentPlayer = oPlayer;
// const winningCombinations = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];

for (let i = 0; i < xoBoxes.length; i++) {
	let currentBox = xoBoxes[i];

	currentBox.addEventListener("click", clickEvent, { once: true });

	function clickEvent() {
		currentPlayer = currentPlayer === oPlayer ? xPlayer : oPlayer;
		currentBox.textContent = currentPlayer;
	}
}
