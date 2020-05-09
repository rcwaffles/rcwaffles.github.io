let currentPlayer = "X";
let gameStatus =""; //"" - continue, "Tie", "X Wins", "O Wins"
let numTurns = 0;

// take player turn
function playerTakeTurn(e){
	
	if (e.innerHTML == "") {
	  e.innerHTML = currentPlayer;
	  checkGameStatus();
	} else {
		showLightBox("This box is already selected.", "Please try another.");
		console.log("This box is already selected, please try another.");
	  return;
	}// else
	
// game is over 
	if (gameStatus != "") {
		showLightBox(gameStatus + "GAME OVER!", "*Click here to Play Again!*");
		console.log("Game Over, " + gameStatus);
	}
	
}//playerTakeTurn


//after each turn, check for a winner, a tie, or continue playing
function checkGameStatus() {
	numTurns++; //count turns
	
	//check for a winS
	if (checkWin()) {
		gameStatus = currentPlayer + " wins!";
		return;
}
	
	// check for tie
	if (numTurns == 9) {
		gameStatus = "Tie Game";
		console.log("Game status: " + gameStatus);
	}// numb
	
	currentPlayer = (currentPlayer == "X" ? "O" : "X" );
	
}//checkGameStatus

// check for a Win, there are 8 win paths
function checkWin () {
	let cb = []; //current board
	cb[0] = ""; // not going to use
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("three").innerHTML;
	cb[4] = document.getElementById("four").innerHTML;
	cb[5] = document.getElementById("five").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("seven").innerHTML;
	cb[8] = document.getElementById("eight").innerHTML;
	cb[9] = document.getElementById("nine").innerHTML;
	
	// top row
	if (cb[1] != "" && cb[1] == cb[2] && cb[2] == cb[3]) {
		return true;
	}
	
	// middle row
	if (cb[4] != "" && cb[4] == cb [5] && cb [5] == cb[6]) {
		return true;
	}
	
	//bottom row 
	if (cb[7] != "" && cb[7] == cb [8] && cb [8] == cb[9]) {
		return true;
	}
	//Top left to bottom right 
	if (cb[1] != "" && cb[1] == cb [5] && cb [5] == cb[9]) {
		return true;
	}
	//Top right to bottom left 
	if (cb[3] != "" && cb[3] == cb [5] && cb [5] == cb[7]) {
		return true;
	}
	//left horizontal 
	if (cb[1] != "" && cb[1] == cb [4] && cb [4] == cb[7]) {
		return true;
	}
	//middle horizontal 
	if (cb[2] != "" && cb[2] == cb [5] && cb [5] == cb[8]) {
		return true;
	}
	//right horizontal 
	if (cb[3] != "" && cb[3] == cb [7] && cb [7] == cb[9]) {
		return true;
	}
	
}//checkWin

//change the visibility of ID
function changeVisibility(divID) {
	var element = document.getElementById(divID);
	
	//if element exists, it is considered true
	if (element) {
		element.className = (element.className == 'hidden') ? 'unhidden' : 'hidden';
	}//if
}//changeVisibility

// display in lightbox
function showLightBox(message, message2) {
	
	//set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;

	// show lightbox
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
}//showlightbox

//close light box
function continueGame() {
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
	
	//if the game is over, show controls
	
}
