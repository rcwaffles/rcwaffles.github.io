//global variables
var speedOfPaddle1 = 0;
const startPositionOfPaddle1 = document.getElementById("paddle1").offsetTop;
var positionOfPaddle1 = document.getElementById("paddle1").offsetTop;
var speedOfPaddle2 = 0;
const startPositionOfPaddle2 = document.getElementById("paddle2").offsetTop;
var positionOfPaddle2 = document.getElementById("paddle2").offsetTop;

var counter1 = 0;
var counter2 = 0;

var paddleHeight = document.getElementById("paddle1").offsetHeight;

var paddleWidth = document.getElementById("paddle1").offsetWidth;

const gameBoardHeight = document.getElementById("gameBoard").offsetHeight;

const gameBoardWidth = document.getElementById("gameBoard").offsetWidth;

var ballHeight = document.getElementById("ball").offsetHeight;

const startTopPositionOfBall = document.getElementById("ball").offsetTop;
const startLeftPositionOfBall = document.getElementById("ball").offsetLeft;



var topPositionOfBall = startTopPositionOfBall;
var leftPositionOfBall = startLeftPositionOfBall;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;


var bounce = new sound("bounce.mp3");
var ding = new sound("ding.mp3");
var shrink = new sound("shrink.mp3");

// used to control game start/stop
var controlPlay;

var rally = 0;



// start ball motion
/*window.addEventListener('load', function() {
	startBall();
} );*/


//Move Paddles
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 87 || e.which == 87){ //W
		speedOfPaddle1 = -10; 
	}
	if(e.keyCode == 83 || e.which == 83) {//A
		speedOfPaddle1 = 10;
	}
	if(e.keyCode == 38 || e.which == 38) {//Up
		speedOfPaddle2 = -10;
	}
	if(e.keyCode == 40 || e.which == 40){//Down
		speedOfPaddle2 = 10;
	}
	
});

//Stop Paddle
document.addEventListener('keyup', function(e) {
	if (e.keyCode == 87 || e.which == 87){ //W
		speedOfPaddle1 = 0;
	}
	if(e.keyCode == 83 || e.which == 83) {//A
		speedOfPaddle1 = 0;
	}
	if(e.keyCode == 38 || e.which == 38) {//Up
		speedOfPaddle2 = 0;
	}
	if(e.keyCode == 40 || e.which == 40){//Down
		speedOfPaddle2 = 0;
	}
	

});

//object constructor to play sounds
//https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

// starts ball 
function startBall() {
	let direction = 1;
	topPositionOfBall = startTopPositionOfBall;
	leftPositionOfBall = startLeftPositionOfBall;
	document.getElementById("ball").style.height = 30 + "px";
	document.getElementById("ball").style.width = 30 + "px";
	document.getElementById("paddle1").style.height = 150 + "px";
	document.getElementById("paddle2").style.height = 150 + "px";
	rally = 0;
	ballHeight = 30;
	paddleHeight = 150;
	
	
	//50% chance of going right or left
	if (Math.random() < 0.5) {
		direction = 1;
	} else {
		direction = -1;
	}
	topSpeedOfBall = Math.random() * 2 + 3;
	leftSpeedOfBall = direction * (Math.random() * 2 + 3);
	ding.play();

}



// update locations of paddles and ball
function show(){
	
	
	
	// update positions of all elements
	positionOfPaddle1 += speedOfPaddle1
	positionOfPaddle2 += speedOfPaddle2
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;

	//stop paddle from leaving top of gameboard
	if(positionOfPaddle1 <= 0){
		positionOfPaddle1 = 0;
	}

	//stop the paddle from leaving bottom of gameboard
	if (positionOfPaddle1 >= gameBoardHeight - paddleHeight){
		positionOfPaddle1 = gameBoardHeight - paddleHeight;
	}

	//stop paddle from leaving top of gameboard
	if(positionOfPaddle2 <= 0){
		positionOfPaddle2 = 0;
	}

	//stop the paddle from leaving bottom of gameboard
	if (positionOfPaddle2 >= gameBoardHeight - paddleHeight){
		positionOfPaddle2 = gameBoardHeight - paddleHeight;
	}
	
	// if ball hits top, or bottom, of gameboard, change direction
	if (topPositionOfBall <= 0 || topPositionOfBall >= gameBoardHeight - ballHeight) {
		topSpeedOfBall *= -1;
		
		
	}
	// ball on left edge of gamebaord
	if (leftPositionOfBall <= paddleWidth) {
		
		// if ball hits left paddle rebound
		if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			bounce.play();
			rally++;
			topSpeedOfBall *= 1.1;
			leftSpeedOfBall *= 1.1;
			leftSpeedOfBall *= -1;
		} else {
			counter1++
			rally = 0;
			document.getElementById("score2").innerHTML = counter1;
			startBall();
		
			
		}//else 
	}// if 

	// ball on right edge of gameBoard
	if (leftPositionOfBall >= gameBoardWidth - paddleWidth - ballHeight) {
		
		// if ball hits right paddle rebound
		if (topPositionOfBall > positionOfPaddle2 &&
			topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			bounce.play();
			rally++;
			topSpeedOfBall *= 1.1;
			leftSpeedOfBall *= 1.1;
			leftSpeedOfBall *= -1;
		} else {
			counter2++
			rally = 0;
			document.getElementById("score1").innerHTML = counter2;
			
			startBall();
			
		}//else 

		
	}//if 
		if (topSpeedOfBall > 8) {
				topSpeedOfBall = 8;
			}// if 
	if (topSpeedOfBall < -8) {
		topSpeedOfBall = -8;
	} // if 
	if (leftSpeedOfBall > 8) {
				leftSpeedOfBall = 8;
			} // if 
	if (leftSpeedOfBall < -8) {
		leftSpeedOfBall = -8;
	}

	//shrink ball and paddles if the rally counter hits 10 
	if (rally % 10 == 0 && rally != 0) {
	if (ballHeight > 10) {
	ballHeight -= 1;
	paddleHeight = 75;
	shrink.play();
	document.getElementById("ball").style.height = ballHeight + "px";
	document.getElementById("ball").style.width = ballHeight + "px";
	document.getElementById("paddle1").style.height = paddleHeight + "px";
	document.getElementById("paddle2").style.height = paddleHeight + "px";
	
	}
}

	document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
	document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";
	document.getElementById("ball").style.top = topPositionOfBall + "px";
	document.getElementById("ball").style.left = leftPositionOfBall + "px";
}// show

// resume game play
function resumeGame() {
	if(!controlPlay) {
		controlPlay = window.setInterval(show, 1000/60);
	}
}//resumeGame

function pauseGame() {
	window.clearInterval(controlPlay);
	controlPlay = false;
}//pauseGame

// start game play
function startGame() {
	//reset scores, ball and paddle locations
	counter1 = 0;
	counter2 = 0;
	positionOfPaddle1 = startPositionOfPaddle1;
	positionOfPaddle2 = startPositionOfPaddle2;
	
	startBall();
	
	
	
	if(!controlPlay) {
		controlPlay = window.setInterval(show, 1000/60);
	}
}

//stop game play
function stopGame() {
	window.clearInterval(controlPlay);
	controlPlay = false;
	
	//show lightbox with score
	let message1 = "Tie Game";
	let message2 = "Close to continue.";
	
	if (counter2 > counter1) {
		message1 = "Player 1 wins with " + counter2 + " points!";
		message2 = "Player 2 had " + counter1 + " points!";
	} else if (counter1 > counter2) {
		message1 = "Player 2 wins with " + counter1 + " points!";
		message2 = "Player 1 had " + counter2 + " points!";
	} //else
		
	showLightBox(message1, message2);
		
	
	
}//stopGame

function showControls() {
	let message1 = "Player 1 use (W, A), Player 2 use arrow keys";
	let message2 = "Once the rally reaches 10, the paddles and the ball will shrink to make the game more challenging.";
	
	showLightBox(message1, message2);
}


//lightbox CODE
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
	
}


