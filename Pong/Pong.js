// global varialbles
var speedOfPaddle1 = 0;
var positionOfPaddle1 = document.getElementById("paddle1").offsetTop;

//Move paddle
document.addEventListener('keydown', function(e) {
	//console.log("key down" + e.keyCode);
if (e.keyCode == 87 || e.which == 87) {	
	speedOfPaddle1 = -10;
}
if (e.keyCode == 83 || e.which == 83) {	
	speedOfPaddle1 = 10;
}
		show();
});

// Stop paddles 
document.addEventListener('keyup', function(e) {
	//console.log("key up" + e.keyCode);		
if (e.keyCode == 87 || e.which == 87) {
	speedOfPaddle1 = 0;
}
	show();
});

//updates location of paddles and ball
function show() {
	let paddleHeight = document.getElementById("paddle1").offsetHeight;
	let gameboardHeight = document.getElementById("gameBoard").offsetHeight;
	
	positionOfPaddle1 += speedOfPaddle1;
	document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
	
	if(positionOfPaddle1 <= 0) {
		positionOfpaddle1 = 0;
	}
	
	if (positionOfPaddle1 >= gameboardHeight - paddleHeight) {
		positionOfPaddle1 = gameboardHeight - paddleHeight;
	}
}