var BOARD_CANVAS_CONTEXT = null;

function initBoard() { 
	var canvas = document.getElementById('canvas-board');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		BOARD_CANVAS_CONTEXT = canvas.getContext('2d');
	}
}

function getBoardCanevasContext() { 
	return BOARD_CANVAS_CONTEXT;
}

function drawBoard(alternate) { 
	var ctx = getBoardCanevasContext();
	
	if (alternate && alternate === true) { 
		ctx.strokeStyle = "#fff";
	} else { 
		ctx.strokeStyle = "#874d11";
	}
	
	ctx.lineWidth = "4";
	ctx.beginPath();
	
	//Map drawing

	ctx.moveTo(0, 50);
	ctx.lineTo(140, 50);
	ctx.moveTo(180, 50);
	ctx.lineTo(270, 50);
	ctx.lineTo(270, 190);
	ctx.lineTo(0, 190);
	ctx.moveTo(270, 190);
	ctx.lineTo(270, 290);
	ctx.moveTo(270, 330);
	ctx.lineTo(270, 540);
	ctx.lineTo(0, 540);
	ctx.moveTo(400, 5);
	ctx.lineTo(400, 60);
	ctx.moveTo(400, 100);
	ctx.lineTo(400, 160);
	ctx.lineTo(550, 160);
	ctx.moveTo(500, 160);
	ctx.lineTo(500, 540);
	ctx.lineTo(200, 540);
	ctx.moveTo(40, 90);
	ctx.lineTo(70, 90);
	ctx.lineTo(70, 105);
	ctx.lineTo(40, 105);
	ctx.lineTo(40, 88);
	ctx.moveTo(30, 145);
	ctx.lineTo(200, 145);
	ctx.lineTo(200, 150);
	ctx.lineTo(30, 150);
	ctx.lineTo(30, 143);
	ctx.moveTo(200, 60);
	ctx.lineTo(260, 60);
	ctx.lineTo(260, 90);
	ctx.lineTo(200, 90);
	ctx.lineTo(200, 58);
	ctx.moveTo(90, 90);
	ctx.lineTo(140, 90);
	ctx.lineTo(140, 105);
	ctx.lineTo(90, 105);
	ctx.lineTo(90, 88);
	ctx.moveTo(10, 162);
	ctx.lineTo(40, 162);
	ctx.lineTo(40, 175)
	ctx.lineTo(10, 175);
	ctx.lineTo(10, 160);
	ctx.moveTo(10, 140);
	ctx.lineTo(20, 140);
	ctx.lineTo(20, 150);
	ctx.lineTo(10, 150);
	ctx.lineTo(10, 138);
	ctx.moveTo(320, 20);
	ctx.lineTo(340, 20);
	ctx.lineTo(340, 280);
	ctx.lineTo(320, 280);
	ctx.lineTo(320, 18);
	ctx.moveTo(50, 340);
	ctx.lineTo(240, 340);
	ctx.lineTo(240, 350);
	ctx.lineTo(50, 350);
	ctx.lineTo(50, 338);
	ctx.moveTo(50, 360);
	ctx.lineTo(240, 360);
	ctx.lineTo(240, 370);
	ctx.lineTo(50, 370);
	ctx.lineTo(50, 358);
	ctx.moveTo(50, 320);
	ctx.lineTo(160, 320);
	ctx.lineTo(160, 330);
	ctx.lineTo(50, 330);
	ctx.lineTo(50, 318);
	ctx.moveTo(50, 300);
	ctx.lineTo(160, 300);
	ctx.lineTo(160, 310);
	ctx.lineTo(50, 310);
	ctx.lineTo(50, 298);
	ctx.moveTo(220, 200);
	ctx.lineTo(260, 200);
	ctx.lineTo(260, 280);
	ctx.lineTo(220, 280);
	ctx.lineTo(220, 198);
	ctx.moveTo(50, 240);
	ctx.lineTo(160, 240);
	ctx.lineTo(160, 255);
	ctx.lineTo(50, 255);
	ctx.lineTo(50, 238);
	ctx.moveTo(5, 415);
	ctx.lineTo(150, 415);
	ctx.lineTo(150, 435);
	ctx.lineTo(5, 435);
	ctx.lineTo(5, 413);
	ctx.moveTo(195, 415);
	ctx.lineTo(225, 415);
	ctx.lineTo(225, 435);
	ctx.lineTo(195, 435);
	ctx.lineTo(195, 413);
	ctx.moveTo(50, 480);
	ctx.lineTo(225, 480);
	ctx.lineTo(225, 490);
	ctx.lineTo(50, 490);
	ctx.lineTo(50, 478);
	ctx.moveTo(400, 200);
	ctx.lineTo(450, 200);
	ctx.lineTo(450, 280);
	ctx.lineTo(400, 280);
	ctx.lineTo(400, 198);
	ctx.moveTo(400, 350);
	ctx.lineTo(450, 350);
	ctx.lineTo(450, 430);
	ctx.lineTo(400, 430);
	ctx.lineTo(400, 348);
	ctx.moveTo(320, 480);
	ctx.lineTo(450, 480);
	ctx.lineTo(450, 490);
	ctx.lineTo(320, 490);
	ctx.lineTo(320, 478);
	ctx.moveTo(320, 350);
	ctx.lineTo(340, 350);
	ctx.lineTo(340, 430);
	ctx.lineTo(320, 430);
	ctx.lineTo(320, 348);

	ctx.font="12px Consolas";
	ctx.fillText("C114", 147, 55);
	ctx.fillText("Restroom", 5, 45);
	ctx.fillText("ASII", 410, 50);
	ctx.fillText("HQ", 416, 60);
	ctx.fillText("C112", 258, 302);
	ctx.stroke();

	ctx.closePath();
}

function drawBoardDoor() { 
	var ctx = getBoardCanevasContext();
	
	ctx.strokeStyle = "brown";
	ctx.lineWidth = "5";
	
	ctx.beginPath();
	ctx.moveTo(400, 60);
	ctx.lineTo(400, 100);
	ctx.stroke();
	
	ctx.closePath();
}
function eraseBoardDoor() { 
	var ctx = getBoardCanevasContext();
	//ctx.translate(FRUITS_POSITION_X - (FRUITS_SIZE / 2), FRUITS_POSITION_Y - (FRUITS_SIZE / 2));
	//ctx.save();
	//ctx.globalCompositeOperation = "destination-out";
	
	//ctx.beginPath();
	//ctx.translate(FRUITS_POSITION_X - (FRUITS_SIZE / 2), FRUITS_POSITION_Y - (FRUITS_SIZE / 2));
	ctx.clearRect(255, 220, 40, 10);
	//ctx.fill();
	//ctx.closePath();
	
	//ctx.restore();
}