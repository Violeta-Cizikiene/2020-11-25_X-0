let gridContainer = document.getElementById("gridContainer");
let winMessage = document.getElementById("winMessage");

let playerTurn = 0;

let gameEnded = false;

if (Math.random() > 0.5) {
	playerTurn = 1;
}

function clickCell(clicked) {
	if (gameEnded) {
		return;
	}

	let cell = document.querySelectorAll("#gridContainer .cell")[clicked];

	if (cell.className.indexOf("clicked") === -1) {
		//indexOf - stringo viduje ieskomas kito stringo

		cell.className += " clicked";

		if (playerTurn === 0) {
			cell.innerHTML = `<span>X</span>`;
			playerTurn = 1;
			cell.className += " clicked-x";
		} else {
			cell.innerHTML = `<span>0</span>`;
			playerTurn = 0;
			cell.className += " clicked-0";
		}

		checkForWin("x");
		if (gameEnded === false) {
			checkForWin("0");
		}
	}
}

function checkForWin(player) {
	let cells = document.querySelectorAll("#gridContainer .cell");

	if (
		cells[0].className.indexOf(`clicked-${player}`) > -1 &&
		cells[1].className.indexOf(`clicked-${player}`) > -1 &&
		cells[2].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[0].className += " win";
		cells[1].className += " win";
		cells[2].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[3].className.indexOf(`clicked-${player}`) > -1 &&
		cells[4].className.indexOf(`clicked-${player}`) > -1 &&
		cells[5].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[3].className += " win";
		cells[4].className += " win";
		cells[5].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[6].className.indexOf(`clicked-${player}`) > -1 &&
		cells[7].className.indexOf(`clicked-${player}`) > -1 &&
		cells[8].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[6].className += " win";
		cells[7].className += " win";
		cells[8].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[0].className.indexOf(`clicked-${player}`) > -1 &&
		cells[3].className.indexOf(`clicked-${player}`) > -1 &&
		cells[6].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[0].className += " win";
		cells[3].className += " win";
		cells[6].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[1].className.indexOf(`clicked-${player}`) > -1 &&
		cells[4].className.indexOf(`clicked-${player}`) > -1 &&
		cells[7].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[1].className += " win";
		cells[4].className += " win";
		cells[7].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[2].className.indexOf(`clicked-${player}`) > -1 &&
		cells[5].className.indexOf(`clicked-${player}`) > -1 &&
		cells[8].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[2].className += " win";
		cells[5].className += " win";
		cells[8].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[6].className.indexOf(`clicked-${player}`) > -1 &&
		cells[4].className.indexOf(`clicked-${player}`) > -1 &&
		cells[2].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[6].className += " win";
		cells[4].className += " win";
		cells[2].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[0].className.indexOf(`clicked-${player}`) > -1 &&
		cells[4].className.indexOf(`clicked-${player}`) > -1 &&
		cells[8].className.indexOf(`clicked-${player}`) > -1
	) {
		gameEnded = true;

		cells[0].className += " win";
		cells[4].className += " win";
		cells[8].className += " win";

		winMessage.style.display = "block";
	} else if (
		cells[0].className.indexOf(`clicked`) > -1 &&
		cells[1].className.indexOf(`clicked`) > -1 &&
		cells[2].className.indexOf(`clicked`) > -1 &&
		cells[3].className.indexOf(`clicked`) > -1 &&
		cells[4].className.indexOf(`clicked`) > -1 &&
		cells[5].className.indexOf(`clicked`) > -1 &&
		cells[6].className.indexOf(`clicked`) > -1 &&
		cells[7].className.indexOf(`clicked`) > -1 &&
		cells[8].className.indexOf(`clicked`) > -1
	) {
		gameEnded = true;

		winMessage.style.display = "block";
		winMessage.innerHTML = "NOBODY WINS";
	}
}
