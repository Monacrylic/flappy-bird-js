
var birdX = 200;
var birdY = 200;

//var birdVelX = 0;
var birdVelY = 0;

//var birdAccX = 0;
var birdAccY = 1;

var birdRadius = 13;

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	document.addEventListener('keydown', keyPush);

	framesPerSecond = 30;
	setInterval(function(){
		drawEverything();
		moveEverything();
	},1000/framesPerSecond);
	}

function drawEverything(){
	//	Drawing the background of canvas
	colorRect(0, 0, canvas.width, canvas.height, 'black');

	//	Drawing player (bird) sprite
	colorCircle(birdX, birdY, birdRadius, 'lime');

	}

function moveEverything(){
	//	Moving the bird
	birdY += birdVelY;
	birdVelY += birdAccY;
	checkCollision();
	}

function checkCollision(){
	//	Bird with bottom
	if(birdY + birdRadius >= canvas.height){
		birdVelY = -birdVelY;
	}
	}

function colorCircle(centerX, centerY, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	canvasContext.fill();
	}

function colorRect(leftX, topY, width, height, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX, topY, width, height);
	}

function keyPush(evt){
	switch(evt.keyCode){
		case 38:  //up
			birdVelY = -12;
			break;
		}
	}