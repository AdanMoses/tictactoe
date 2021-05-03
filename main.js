// Add event listeners --done
// declare variables --done?? maybe add variables for each box?
// create main loop --done
// turns, inside event listener function or outside of it?

const xoBoxes = document.querySelectorAll(".board div");
const xPlayer = "X";
const oPlayer = "O";
let currentPlayer = oPlayer;

for (let i = 0; i < xoBoxes.length; i++) {
	let currentBox = xoBoxes[i];

	currentBox.addEventListener("click", function (event) {
		currentPlayer = currentPlayer === oPlayer ? xPlayer : oPlayer;
		currentBox.textContent = currentPlayer;
	});
}
