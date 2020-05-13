let currentPlayer = "X";
let gameStatus =""; //"" - continue, "Tie", "X Wins", "O Wins"
let numTurns = 0;
let idNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let cb = []; //current board

for (var i = 1; i< cb.length; i++) {
				//rand = parseInt(Math.random()*9) + 1;
			cb[i] = "";
			}
				

// reset board and all variables
function newGame() {
	
	//reset board 
	for (i = 0; i < idNames.length; i++) {
		document.getElementById(idNames[i]).innerHTML = "";
	} //for 
	
	numTurns = 0;
	gameStatus = "";
	currentPlayer = "X";
	
	changeVisibility("controls");
} // newGame


//randomly chooses a free box for computer
function computerTakeTurn(){	
	
	let idName = "";
	
	do {
		if(cb[1] == "O" && cb[2] == "O" && cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[1] == "O" && cb[4] == "O"&& cb[7] == "") {
			idName = idNames[6];
		}
		else if(cb[1] == "O" && cb[5] == "O"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[2] == "O" && cb[5] == "O" && cb[8] == "") {
			idName = idNames[7];
		}
		else if(cb[3] == "O" && cb[6] == "O"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[1] == "O" && cb[3] == "O"&& cb[2] == "") {
			idName = idNames[1];
		}
		else if(cb[2] == "O" && cb[3] == "O"&& cb[1] == "") {
			idName = idNames[0];
		}
		else if(cb[1] == "O" && cb[7] == "O"&& cb[4] == "") {
			idName = idNames[3];
		}
		else if(cb[1] == "O" && cb[9] == "O"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[1] == "O" && cb[4] == "O"&& cb[7] == "") {
			idName = idNames[6];
		}
		else if(cb[4] == "O" && cb[5] == "O"&& cb[6] == "") {
			idName = idNames[5];
		}
		else if(cb[7] == "O" && cb[8] == "O"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[4] == "O" && cb[6] == "O"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[7] == "O" && cb[9] == "O"&& cb[8] == "") {
			idName = idNames[7];
		}
		else if(cb[3] == "O" && cb[9] == "O"&& cb[6] == "") {
			idName = idNames[5];
		}
		else if(cb[8] == "O" && cb[9] == "O"&& cb[7] == "") {
			idName = idNames[6];
		}
		
		else if(cb[2] == "O" && cb[8] == "O"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[3] == "O" && cb[7] == "O"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[7] == "O" && cb[5] == "O"&& cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[9] == "O" && cb[5] == "O"&& cb[1] == "") {
			idName = idNames[0];
		
		}
		else if(cb[6] == "O" && cb[9] == "O"&& cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[5] == "O" && cb[6] == "O"&& cb[4] == "") {
			idName = idNames[3];
		}
		else if(cb[5] == "O" && cb[8] == "O"&& cb[2] == "") {
			idName = idNames[1];
		}
		else if(cb[4] == "O" && cb[7] == "O"&& cb[1] == "") {
			idName = idNames[0];
			
		}
		else if(cb[3] == "O" && cb[5] == "O"&& cb[7] == "") {
			idName = idNames[6];
			
		}
		else if (cb[5] == "") {
			idName = idNames[4];
			cb[5] = "O";
			console.log(cb[5]);
		}else if(cb[1] == "X" && cb[2] == "X" && cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[1] == "X" && cb[4] == "X"&& cb[7] == "") {
			idName = idNames[6];
		}
		else if(cb[1] == "X" && cb[5] == "X"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[2] == "X" && cb[5] == "X" && cb[8] == "") {
			idName = idNames[7];
		}
		else if(cb[3] == "X" && cb[6] == "X"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[1] == "X" && cb[3] == "X"&& cb[2] == "") {
			idName = idNames[1];
		}
		else if(cb[2] == "X" && cb[3] == "X"&& cb[1] == "") {
			idName = idNames[0];
		}
		else if(cb[1] == "X" && cb[7] == "X"&& cb[4] == "") {
			idName = idNames[3];
		}
		else if(cb[1] == "X" && cb[9] == "X"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[1] == "X" && cb[4] == "X"&& cb[7] == "") {
			idName = idNames[6];
		}
		else if(cb[4] == "X" && cb[5] == "X"&& cb[6] == "") {
			idName = idNames[5];
		}
		else if(cb[7] == "X" && cb[8] == "X"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[4] == "X" && cb[6] == "X"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[7] == "X" && cb[9] == "X"&& cb[8] == "") {
			idName = idNames[7];
		}
		else if(cb[3] == "X" && cb[9] == "X"&& cb[6] == "") {
			idName = idNames[5];
		}
		else if(cb[8] == "X" && cb[9] == "X"&& cb[7] == "") {
			idName = idNames[6];
		}
		
		else if(cb[2] == "X" && cb[8] == "X"&& cb[5] == "") {
			idName = idNames[4];
		}
		else if(cb[3] == "X" && cb[7] == "X"&& cb[9] == "") {
			idName = idNames[8];
		}
		else if(cb[7] == "X" && cb[5] == "X"&& cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[9] == "X" && cb[5] == "X"&& cb[1] == "") {
			idName = idNames[0];
		
		}
		else if(cb[3] == "O" && cb[5] == "O"&& cb[7] == "") {
			idName = idNames[6];
			
		}
		else if(cb[6] == "X" && cb[9] == "X"&& cb[3] == "") {
			idName = idNames[2];
		}
		else if(cb[5] == "X" && cb[6] == "X"&& cb[4] == "") {
			idName = idNames[3];
		}
		else if(cb[5] == "X" && cb[8] == "X"&& cb[2] == "") {
			idName = idNames[1];
		}
		else if(cb[4] == "X" && cb[7] == "X"&& cb[1] == "") {
			idName = idNames[0];
		}else{
		
			A:for (var i = 1; i< 10; i++) {

			if (cb[i] == "") {
					idName = idNames[i-1];
					cb[i] = "O";
					break A;
			}
			}
		
				
			
				
			
		} 
	
		
		//check if chosen box is empty
		if (document.getElementById(idName).innerHTML == "") {
			document.getElementById(idName).innerHTML = currentPlayer;
			break;
		}//if
	} while(numTurns < 9);

	
}

// take player turn
function playerTakeTurn(e){
	
	if (e.innerHTML == "") {
	  e.innerHTML = currentPlayer;
	  checkGameStatus();
	  
	  // if game not over, computer goes
	  if (gameStatus == "") {
		  setTimeout(function() {
		  computerTakeTurn();
		  checkGameStatus();
		  }, 500
		  );
	  }
	  
	} else {
		showLightBox("This box is already selected.", "Please try another.");
	  return;
	}// else
	
	
}//playerTakeTurn


//after each turn, check for a winner, a tie, or continue playing
function checkGameStatus() {
	numTurns++; //count number ofturns

//check for win
	if (checkWin()) {
		gameStatus = currentPlayer + " wins!";
}

// check for tie/win on 9th turn
	if (numTurns == 9 && checkWin()) {
		gameStatus = currentPlayer + " wins!";
	}else{
	if (numTurns == 9){
		gameStatus = "Tie game!";
	}//if
}//else


currentPlayer = (currentPlayer == "X" ? "O" : "X" );

// game is over
if (gameStatus != "") {
setTimeout(function(){showLightBox(gameStatus, "Game Over.");}, 500);

}
}//checkGameStatus

// check for a Win, there are 8 win paths
function checkWin () {
	
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
	if (gameStatus != "") {
		changeVisibility("controls");
	}
	
}
