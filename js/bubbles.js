var BUBBLES_ARRAY = new Array();
var BUBBLES_CANVAS_CONTEXT = null;
var BUBBLES_X_START = 30;
var BUBBLES_X_END = 518;
var BUBBLES_GAP = ((BUBBLES_X_END - BUBBLES_X_START) / 25);
var BUBBLES_Y_START = 26;
var BUBBLES_Y_END = 522;
var BUBBLES_SIZE = 3;
var BUBBLES_COUNTER = 0;

var SUPER_BUBBLES = [];
var SUPER_BUBBLES_SIZE = 8;
var SUPER_BUBBLES_BLINK = false;
var SUPER_BUBBLES_BLINK_STATE = 0;
var SUPER_BUBBLES_BLINK_TIMER = -1;
var SUPER_BUBBLES_BLINK_SPEED = 525;

function initBubbles() { 
	BUBBLES_COUNTER = 0;
	BUBBLES_ARRAY.length = 0;

	var canvas = document.getElementById('canvas-bubbles');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		BUBBLES_CANVAS_CONTEXT = canvas.getContext('2d');
	}
}

function getBubblesCanevasContext() { 
	return BUBBLES_CANVAS_CONTEXT;
}

function drawBubbles() { 

	var ctx = getBubblesCanevasContext();
	ctx.fillStyle = "#CD5C5C";
	
	// for (var line = 1, linemax = 29, i = 0, s = 0; line <= linemax; line ++) { 
	// 	var y = getYFromLine(line);
	// 	for (var x = BUBBLES_X_START, xmax = BUBBLES_X_END, bubble = 1 ; x < xmax; bubble ++, x += BUBBLES_GAP) { 
	// 		if (canAddBubble(line, bubble)) { 
	// 			var type = "";
	// 			var size = "";
	// 			if (isSuperBubble(line, bubble)) { 
	// 				type = "s";
	// 				size = SUPER_BUBBLES_SIZE;
	// 				SUPER_BUBBLES[s] = line + ";" + bubble + ";" + parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";0";
	// 				s ++;
	// 			} else { 
	// 				type = "b";
	// 				size = BUBBLES_SIZE;
	// 			}
	// 			BUBBLES_COUNTER ++;
	// 			ctx.beginPath();
	// 			ctx.arc(correctionX(x, bubble), y, size, 0, 2 * Math.PI, false);
	// 			ctx.fill();
	// 			ctx.closePath();
				
	// 			BUBBLES_ARRAY.push( parseInt(correctionX(x, bubble)) + "," + parseInt(y) + ";" + line + ";" + bubble + ";" + type + ";0" );
	// 			i ++;
	// 		}
	// 	}
	// }

	// //add small bubble

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 1), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 1)) + "," + parseInt(20) + ";" + 1 + ";" + 1 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 2), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 2)) + "," + parseInt(20) + ";" + 1 + ";" + 2 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 3), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 3)) + "," + parseInt(20) + ";" + 1 + ";" + 3 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 4), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 1)) + "," + parseInt(20) + ";" + 1 + ";" + 4 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 5), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 5)) + "," + parseInt(20) + ";" + 1 + ";" + 5 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 6), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 6)) + "," + parseInt(20) + ";" + 1 + ";" + 6 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 7), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 7)) + "," + parseInt(20) + ";" + 1 + ";" + 7 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 8), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 8)) + "," + parseInt(20) + ";" + 1 + ";" + 8 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 10), 40, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 10)) + "," + parseInt(40) + ";" + 1 + ";" + 10 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 11), 60, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 11)) + "," + parseInt(60) + ";" + 1 + ";" + 11 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 12), 80, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 12)) + "," + parseInt(80) + ";" + 1 + ";" + 12 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 13), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 13)) + "," + parseInt(70) + ";" + 1 + ";" + 13 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 14), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 14)) + "," + parseInt(70) + ";" + 1 + ";" + 14 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 15), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 15)) + "," + parseInt(70) + ";" + 1 + ";" + 15 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 16), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 16)) + "," + parseInt(70) + ";" + 1 + ";" + 16 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 17), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 17)) + "," + parseInt(70) + ";" + 2 + ";" + 17 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 18), 70, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 18)) + "," + parseInt(70) + ";" + 2 + ";" + 18 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 19), 100, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 19)) + "," + parseInt(100) + ";" + 2 + ";" + 19 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 20), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 20)) + "," + parseInt(120) + ";" + 2 + ";" + 20 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 21), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 21)) + "," + parseInt(120) + ";" + 2 + ";" + 21 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 22), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 22)) + "," + parseInt(120) + ";" + 2 + ";" + 22 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 23), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 23)) + "," + parseInt(120) + ";" + 2 + ";" + 23 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 24), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 24)) + "," + parseInt(120) + ";" + 2 + ";" + 24 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 25), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 25)) + "," + parseInt(120) + ";" + 2 + ";" + 25 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 26), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 26)) + "," + parseInt(120) + ";" + 2 + ";" + 26 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 26), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 26)) + "," + parseInt(120) + ";" + 2 + ";" + 26 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(15, 27), 100, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(15, 27)) + "," + parseInt(100) + ";" + 2 + ";" + 27 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 28), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 28)) + "," + parseInt(120) + ";" + 2 + ";" + 28 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 29), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 29)) + "," + parseInt(120) + ";" + 2 + ";" + 29 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 29), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 29)) + "," + parseInt(120) + ";" + 2 + ";" + 29 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 30), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 30)) + "," + parseInt(120) + ";" + 2 + ";" + 30 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 31), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 31)) + "," + parseInt(120) + ";" + 2 + ";" + 31 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 32), 140, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 32)) + "," + parseInt(140) + ";" + 2 + ";" + 32 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 33), 160, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 33)) + "," + parseInt(160) + ";" + 2 + ";" + 33 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 34), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 34)) + "," + parseInt(170) + ";" + 2 + ";" + 34 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 35), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 35)) + "," + parseInt(170) + ";" + 2 + ";" + 35 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 36), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 36)) + "," + parseInt(170) + ";" + 2 + ";" + 36 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 37), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 37)) + "," + parseInt(170) + ";" + 2 + ";" + 37 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 38), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 38)) + "," + parseInt(170) + ";" + 2 + ";" + 38 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 39), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 39)) + "," + parseInt(170) + ";" + 2 + ";" + 39 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 40), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 40)) + "," + parseInt(170) + ";" + 2 + ";" + 40 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 41), 170, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 41)) + "," + parseInt(170) + ";" + 2 + ";" + 41 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 43), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 43)) + "," + parseInt(20) + ";" + 2 + ";" + 43 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 44), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 44)) + "," + parseInt(20) + ";" + 3 + ";" + 44 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 45), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 45)) + "," + parseInt(20) + ";" + 3 + ";" + 45 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(260, 46), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(260, 46)) + "," + parseInt(20) + ";" + 3 + ";" + 46 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(280, 47), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(280, 47)) + "," + parseInt(20) + ";" + 3 + ";" + 47 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 48), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 48)) + "," + parseInt(20) + ";" + 3 + ";" + 48 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 49), 40, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 49)) + "," + parseInt(40) + ";" + 3 + ";" + 49 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 50), 60, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 50)) + "," + parseInt(60) + ";" + 3 + ";" + 50 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 51), 80, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 51)) + "," + parseInt(80) + ";" + 3 + ";" + 51 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 52), 100, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 52)) + "," + parseInt(100) + ";" + 3 + ";" + 52 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 53), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 53)) + "," + parseInt(120) + ";" + 3 + ";" + 53 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 54), 140, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 54)) + "," + parseInt(140) + ";" + 3 + ";" + 54 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 55), 160, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 55)) + "," + parseInt(160) + ";" + 3 + ";" + 55 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 56), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 56)) + "," + parseInt(180) + ";" + 3 + ";" + 56 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 57), 200, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 57)) + "," + parseInt(200) + ";" + 3 + ";" + 57 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 58), 220, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 58)) + "," + parseInt(220) + ";" + 3 + ";" + 58 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 59), 240, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 59)) + "," + parseInt(240) + ";" + 3 + ";" + 59 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 60), 260, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 60)) + "," + parseInt(260) + ";" + 3 + ";" + 60 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 61), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 61)) + "," + parseInt(280) + ";" + 3 + ";" + 61 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 62), 300, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 62)) + "," + parseInt(300) + ";" + 3 + ";" + 62 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(280, 63), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(280, 63)) + "," + parseInt(310) + ";" + 3 + ";" + 63 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(260, 64), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(260, 64)) + "," + parseInt(310) + ";" + 3 + ";" + 64 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 65), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 65)) + "," + parseInt(310) + ";" + 3 + ";" + 65 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 66), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 66)) + "," + parseInt(310) + ";" + 3 + ";" + 66 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 67), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 67)) + "," + parseInt(310) + ";" + 3 + ";" + 67 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 68), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 68)) + "," + parseInt(310) + ";" + 3 + ";" + 68 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 69), 300, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 69)) + "," + parseInt(300) + ";" + 3 + ";" + 69 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 70), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 70)) + "," + parseInt(280) + ";" + 3 + ";" + 70 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 71), 260, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 71)) + "," + parseInt(260) + ";" + 3 + ";" + 71 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 72), 240, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 72)) + "," + parseInt(240) + ";" + 3 + ";" + 72 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 73), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 73)) + "," + parseInt(210) + ";" + 3 + ";" + 73 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 74), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 74)) + "," + parseInt(210) + ";" + 3 + ";" + 74 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 75), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 75)) + "," + parseInt(210) + ";" + 3 + ";" + 75 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 76), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 76)) + "," + parseInt(210) + ";" + 3 + ";" + 76 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 77), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 77)) + "," + parseInt(210) + ";" + 3 + ";" + 77 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 78), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 78)) + "," + parseInt(210) + ";" + 3 + ";" + 78 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 79), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 79)) + "," + parseInt(210) + ";" + 3 + ";" + 79 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 80), 210, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 80)) + "," + parseInt(210) + ";" + 3 + ";" + 80 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 82), 240, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 82)) + "," + parseInt(240) + ";" + 3 + ";" + 82 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 81), 211, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 81)) + "," + parseInt(211) + ";" + 3 + ";" + 81 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 83), 260, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 83)) + "," + parseInt(260) + ";" + 3 + ";" + 83 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 84), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 84)) + "," + parseInt(280) + ";" + 3 + ";" + 84 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 85), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 85)) + "," + parseInt(280) + ";" + 3 + ";" + 85 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 86), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 86)) + "," + parseInt(280) + ";" + 3 + ";" + 86 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 87), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 87)) + "," + parseInt(280) + ";" + 3 + ";" + 87 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 88), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 88)) + "," + parseInt(280) + ";" + 3 + ";" + 88 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 89), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 89)) + "," + parseInt(280) + ";" + 3 + ";" + 89 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 90), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 90)) + "," + parseInt(280) + ";" + 3 + ";" + 90 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 91), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 91)) + "," + parseInt(280) + ";" + 3 + ";" + 91 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 92), 300, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 92)) + "," + parseInt(300) + ";" + 3 + ";" + 92 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 93), 320, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 93)) + "," + parseInt(320) + ";" + 3 + ";" + 93 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 94), 340, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 94)) + "," + parseInt(340) + ";" + 3 + ";" + 94 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 95), 360, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 95)) + "," + parseInt(360) + ";" + 3 + ";" + 95 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 96), 380, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 96)) + "," + parseInt(380) + ";" + 3 + ";" + 96 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(20, 97), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(20, 97)) + "," + parseInt(395) + ";" + 3 + ";" + 97 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 98), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 98)) + "," + parseInt(395) + ";" + 3 + ";" + 98 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 99), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 99)) + "," + parseInt(395) + ";" + 3 + ";" + 99 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 100), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 100)) + "," + parseInt(395) + ";" + 3 + ";" + 100 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 101), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 101)) + "," + parseInt(395) + ";" + 3 + ";" + 101 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 102), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 102)) + "," + parseInt(395) + ";" + 3 + ";" + 102 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 103), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 103)) + "," + parseInt(395) + ";" + 3 + ";" + 103 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 104), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 104)) + "," + parseInt(395) + ";" + 3 + ";" + 104 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 105), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 105)) + "," + parseInt(395) + ";" + 3 + ";" + 105 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 106), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 106)) + "," + parseInt(395) + ";" + 3 + ";" + 106 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 107), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 107)) + "," + parseInt(395) + ";" + 3 + ";" + 107 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(240, 108), 395, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(240, 108)) + "," + parseInt(395) + ";" + 3 + ";" + 108 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(175, 109), 415, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(175, 109)) + "," + parseInt(415) + ";" + 3 + ";" + 109 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(175, 110), 435, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(175, 110)) + "," + parseInt(435) + ";" + 3 + ";" + 110 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(175, 111), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(175, 111)) + "," + parseInt(455) + ";" + 3 + ";" + 111 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(195, 112), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(195, 112)) + "," + parseInt(455) + ";" + 3 + ";" + 112 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(215, 113), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(215, 113)) + "," + parseInt(455) + ";" + 3 + ";" + 113 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(235, 114), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(235, 114)) + "," + parseInt(455) + ";" + 3 + ";" + 114 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 115), 435, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 115)) + "," + parseInt(435) + ";" + 3 + ";" + 115 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 116), 415, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 116)) + "," + parseInt(415) + ";" + 3 + ";" + 116 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 117), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 117)) + "," + parseInt(455) + ";" + 3 + ";" + 117 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 118), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 118)) + "," + parseInt(455) + ";" + 3 + ";" + 118 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 119), 475, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 119)) + "," + parseInt(475) + ";" + 3 + ";" + 119 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 120), 495, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 120)) + "," + parseInt(495) + ";" + 3 + ";" + 120 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(220, 122), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(220, 122)) + "," + parseInt(520) + ";" + 3 + ";" + 122 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(200, 123), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(200, 123)) + "," + parseInt(520) + ";" + 3 + ";" + 123 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(180, 124), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(180, 124)) + "," + parseInt(520) + ";" + 3 + ";" + 124 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 125), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 125)) + "," + parseInt(520) + ";" + 3 + ";" + 125 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 126), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 126)) + "," + parseInt(520) + ";" + 3 + ";" + 126 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 127), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 127)) + "," + parseInt(520) + ";" + 3 + ";" + 127 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 128), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 128)) + "," + parseInt(520) + ";" + 3 + ";" + 128 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 129), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 129)) + "," + parseInt(520) + ";" + 3 + ";" + 129 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 130), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 130)) + "," + parseInt(520) + ";" + 3 + ";" + 130 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 131), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 131)) + "," + parseInt(520) + ";" + 3 + ";" + 131 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(25, 132), 509, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(25, 132)) + "," + parseInt(509) + ";" + 4 + ";" + 132 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(25, 133), 500, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(25, 133)) + "," + parseInt(500) + ";" + 4 + ";" + 133 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(25, 134), 480, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(25, 134)) + "," + parseInt(480) + ";" + 4 + ";" + 134 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(25, 135), 480, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(25, 135)) + "," + parseInt(480) + ";" + 4 + ";" + 135 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(40, 136), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(40, 136)) + "," + parseInt(455) + ";" + 4 + ";" + 136 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 137), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 137)) + "," + parseInt(455) + ";" + 4 + ";" + 137 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(80, 138), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(80, 138)) + "," + parseInt(455) + ";" + 4 + ";" + 138 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(100, 139), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(100, 139)) + "," + parseInt(455) + ";" + 4 + ";" + 139 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(120, 140), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(120, 140)) + "," + parseInt(455) + ";" + 4 + ";" + 140 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(140, 141), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(140, 141)) + "," + parseInt(455) + ";" + 4 + ";" + 141 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 142), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 142)) + "," + parseInt(455) + ";" + 4 + ";" + 142 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(160, 143), 455, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(160, 143)) + "," + parseInt(455) + ";" + 4 + ";" + 143 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 144), 320, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 144)) + "," + parseInt(320) + ";" + 4 + ";" + 144 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 145), 340, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 145)) + "," + parseInt(340) + ";" + 4 + ";" + 145 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 146), 360, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 146)) + "," + parseInt(360) + ";" + 4 + ";" + 146 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 147), 380, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 147)) + "," + parseInt(380) + ";" + 4 + ";" + 147 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 148), 400, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 148)) + "," + parseInt(400) + ";" + 4 + ";" + 148 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 149), 420, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 149)) + "," + parseInt(420) + ";" + 4 + ";" + 149 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 150), 440, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 150)) + "," + parseInt(440) + ";" + 4 + ";" + 150 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 151), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 151)) + "," + parseInt(460) + ";" + 4 + ";" + 151 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 152), 480, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 152)) + "," + parseInt(480) + ";" + 4 + ";" + 152 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 153), 500, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 153)) + "," + parseInt(500) + ";" + 4 + ";" + 153 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(300, 154), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(300, 154)) + "," + parseInt(520) + ";" + 4 + ";" + 154 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(320, 155), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(320, 155)) + "," + parseInt(520) + ";" + 4 + ";" + 155 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(340, 156), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(340, 156)) + "," + parseInt(520) + ";" + 4 + ";" + 156 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(360, 157), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(360, 157)) + "," + parseInt(520) + ";" + 4 + ";" + 157 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(380, 158), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(380, 158)) + "," + parseInt(520) + ";" + 4 + ";" + 158 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(400, 159), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(400, 159)) + "," + parseInt(520) + ";" + 4 + ";" + 159 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(420, 160), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(420, 160)) + "," + parseInt(520) + ";" + 4 + ";" + 160 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(440, 161), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(440, 161)) + "," + parseInt(520) + ";" + 4 + ";" + 161 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(460, 163), 520, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(460, 163)) + "," + parseInt(520) + ";" + 4 + ";" + 163 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 164), 500, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 164)) + "," + parseInt(500) + ";" + 4 + ";" + 164 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 165), 480, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 165)) + "," + parseInt(480) + ";" + 4 + ";" + 165 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 166), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 166)) + "," + parseInt(460) + ";" + 4 + ";" + 166 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 167), 440, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 167)) + "," + parseInt(440) + ";" + 4 + ";" + 167 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 168), 420, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 168)) + "," + parseInt(420) + ";" + 4 + ";" + 168 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 169), 400, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 169)) + "," + parseInt(400) + ";" + 4 + ";" + 169 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 170), 380, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 170)) + "," + parseInt(380) + ";" + 4 + ";" + 170 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 171), 360, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 171)) + "," + parseInt(360) + ";" + 4 + ";" + 171 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 172), 340, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 172)) + "," + parseInt(340) + ";" + 4 + ";" + 172 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 173), 320, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 173)) + "," + parseInt(320) + ";" + 4 + ";" + 173 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 174), 300, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 174)) + "," + parseInt(300) + ";" + 4 + ";" + 174 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 175), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 175)) + "," + parseInt(280) + ";" + 4 + ";" + 175 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 176), 260, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 176)) + "," + parseInt(260) + ";" + 4 + ";" + 176 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 177), 240, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 177)) + "," + parseInt(240) + ";" + 4 + ";" + 177 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 178), 220, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 178)) + "," + parseInt(220) + ";" + 4 + ";" + 178 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 179), 200, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 179)) + "," + parseInt(200) + ";" + 4 + ";" + 179 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 180), 200, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 180)) + "," + parseInt(200) + ";" + 4 + ";" + 180 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 181), 20, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 181)) + "," + parseInt(20) + ";" + 4 + ";" + 181 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 182), 40, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 182)) + "," + parseInt(40) + ";" + 4 + ";" + 182 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 183), 60, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 183)) + "," + parseInt(60) + ";" + 4 + ";" + 183 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 184), 80, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 184)) + "," + parseInt(80) + ";" + 4 + ";" + 184 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 185), 100, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 185)) + "," + parseInt(100) + ";" + 4 + ";" + 185 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 186), 120, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 186)) + "," + parseInt(120) + ";" + 4 + ";" + 186 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 187), 140, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 187)) + "," + parseInt(140) + ";" + 4 + ";" + 187 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 188), 160, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 188)) + "," + parseInt(160) + ";" + 4 + ";" + 186 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 189), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 189)) + "," + parseInt(180) + ";" + 4 + ";" + 189 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 190), 200, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 190)) + "," + parseInt(200) + ";" + 4 + ";" + 190 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 191), 220, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 191)) + "," + parseInt(220) + ";" + 4 + ";" + 191 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 192), 240, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 192)) + "," + parseInt(240) + ";" + 4 + ";" + 192 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 193), 260, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 193)) + "," + parseInt(260) + ";" + 4 + ";" + 193 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 194), 280, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 194)) + "," + parseInt(280) + ";" + 4 + ";" + 194 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 195), 300, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 195)) + "," + parseInt(300) + ";" + 4 + ";" + 195 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 196), 320, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 196)) + "," + parseInt(320) + ";" + 4 + ";" + 196 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 197), 340, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 197)) + "," + parseInt(340) + ";" + 4 + ";" + 197 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 198), 360, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 198)) + "," + parseInt(360) + ";" + 4 + ";" + 198 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 199), 380, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 199)) + "," + parseInt(380) + ";" + 4 + ";" + 199 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 200), 400, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 200)) + "," + parseInt(400) + ";" + 4 + ";" + 200 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 201), 420, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 201)) + "," + parseInt(420) + ";" + 4 + ";" + 201 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 202), 440, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 202)) + "," + parseInt(440) + ";" + 4 + ";" + 202 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(370, 203), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(370, 203)) + "," + parseInt(460) + ";" + 4 + ";" + 203 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(350, 204), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(350, 204)) + "," + parseInt(460) + ";" + 4 + ";" + 204 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(330, 205), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(330, 205)) + "," + parseInt(460) + ";" + 4 + ";" + 205 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(430, 206), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(430, 206)) + "," + parseInt(460) + ";" + 4 + ";" + 206 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(390, 207), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(390, 207)) + "," + parseInt(460) + ";" + 4 + ";" + 207 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(410, 208), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(410, 208)) + "," + parseInt(460) + ";" + 4 + ";" + 208 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(450, 209), 460, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(450, 209)) + "," + parseInt(460) + ";" + 4 + ";" + 209 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(350, 210), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(350, 210)) + "," + parseInt(310) + ";" + 4 + ";" + 210 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(330, 211), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(330, 211)) + "," + parseInt(310) + ";" + 4 + ";" + 211 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(390, 212), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(390, 212)) + "," + parseInt(310) + ";" + 4 + ";" + 212 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(410, 213), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(410, 213)) + "," + parseInt(310) + ";" + 4 + ";" + 213 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(430, 214), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(430, 214)) + "," + parseInt(310) + ";" + 4 + ";" + 214 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(450, 215), 310, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(450, 215)) + "," + parseInt(310) + ";" + 4 + ";" + 215 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(450, 216), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(450, 216)) + "," + parseInt(180) + ";" + 4 + ";" + 216 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(430, 217), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(430, 217)) + "," + parseInt(180) + ";" + 4 + ";" + 217 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(410, 218), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(410, 218)) + "," + parseInt(180) + ";" + 4 + ";" + 218 + ";" + "b" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(390, 219), 180, 3, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 BUBBLES_ARRAY.push( parseInt(correctionX(390, 219)) + "," + parseInt(180) + ";" + 4 + ";" + 219 + ";" + "b" + ";0" );
	 

	//add big bubble

	 ctx.beginPath();
	 ctx.arc(correctionX(15, 9), 70, 8, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 SUPER_BUBBLES[0] = 1 + ";" + 9 + ";" + parseInt(correctionX(15, 9)) + "," + parseInt(70) + ";0";

	 BUBBLES_ARRAY.push( parseInt(correctionX(15, 9)) + "," + parseInt(70) + ";" + 1 + ";" + 9 + ";" + "s" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(60, 42), 170, 8, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 SUPER_BUBBLES[1] = 2 + ";" + 42 + ";" + parseInt(correctionX(60, 42)) + "," + parseInt(170) + ";0";

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 42)) + "," + parseInt(170) + ";" + 1 + ";" + 42 + ";" + "s" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(250, 121), 520, 8, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 SUPER_BUBBLES[2] = 3 + ";" + 121 + ";" + parseInt(correctionX(250, 121)) + "," + parseInt(520) + ";0";

	 BUBBLES_ARRAY.push( parseInt(correctionX(250, 121)) + "," + parseInt(520) + ";" + 1 + ";" + 121 + ";" + "s" + ";0" );

	 ctx.beginPath();
	 ctx.arc(correctionX(480, 162), 520, 8, 0, 2 * Math.PI, false);
	 ctx.fill();
	 ctx.closePath();

	 SUPER_BUBBLES[3] = 3 + ";" + 162 + ";" + parseInt(correctionX(480, 162)) + "," + parseInt(520) + ";0";

	 BUBBLES_ARRAY.push( parseInt(correctionX(480, 162)) + "," + parseInt(520) + ";" + 1 + ";" + 162 + ";" + "s" + ";0" );

	 BUBBLES_COUNTER = 214;
	 


}

function stopBlinkSuperBubbles() { 
	clearInterval(SUPER_BUBBLES_BLINK_TIMER);
	SUPER_BUBBLES_BLINK_TIMER = -1;
	SUPER_BUBBLES_BLINK = false;
}

function blinkSuperBubbles() { 

	if (SUPER_BUBBLES_BLINK === false) { 
		SUPER_BUBBLES_BLINK = true;
		SUPER_BUBBLES_BLINK_TIMER = setInterval('blinkSuperBubbles()', SUPER_BUBBLES_BLINK_SPEED);
	} else { 
		
		if (SUPER_BUBBLES_BLINK_STATE === 0) { 
			SUPER_BUBBLES_BLINK_STATE = 1;
		} else { 
			SUPER_BUBBLES_BLINK_STATE = 0;
		}
		
		var clone = SUPER_BUBBLES.slice(0);
		
		for (var i = 0, imax = clone.length; i < imax; i ++) { 
		
			var s = clone[i];
		
			if ( s.split(";")[3] === "0" ) { 
			
				var sx = parseInt(s.split(";")[2].split(",")[0]);
				var sy = parseInt(s.split(";")[2].split(",")[1]);
			
				if (SUPER_BUBBLES_BLINK_STATE === 1) { 
					eraseBubble("s", sx, sy);
				} else { 
					var ctx = getBubblesCanevasContext();
					ctx.fillStyle = "#CD5C5C";
					ctx.beginPath();
					ctx.arc(sx, sy, SUPER_BUBBLES_SIZE, 0, 2 * Math.PI, false);
					ctx.fill();
					ctx.closePath();
				}

			}
		}
	}
}

function setSuperBubbleOnXY( x, y, eat ) { 

	for (var i = 0, imax = SUPER_BUBBLES.length; i < imax; i ++) { 
		var bubbleParams = SUPER_BUBBLES[i].split( ";" );
		var testX = parseInt(bubbleParams[2].split( "," )[0]);
		var testY = parseInt(bubbleParams[2].split( "," )[1]);
		if ( testX === x && testY === y ) { 
			SUPER_BUBBLES[i] = SUPER_BUBBLES[i].substr( 0, SUPER_BUBBLES[i].length - 1 ) + "1";
			break;
		}
	}
}

function getBubbleOnXY( x, y ) { 

	var bubble = null;
	for (var i = 0, imax = BUBBLES_ARRAY.length; i < imax; i ++) { 
		var bubbleParams = BUBBLES_ARRAY[i].split( ";" );
		var testX = parseInt(bubbleParams[0].split( "," )[0]);
		var testY = parseInt(bubbleParams[0].split( "," )[1]);
		if ( testX === x && testY === y ) { 
			bubble = BUBBLES_ARRAY[i];
			break;
		}
	}
	return bubble;
}

function eraseBubble(t, x, y) { 

	var ctx = getBubblesCanevasContext();

	var size = "";
	if (t === "s") { 
		size = SUPER_BUBBLES_SIZE;
	} else { 
		size = BUBBLES_SIZE;
	}

	ctx.clearRect(x - size, y - size, (size + 1) * 2, (size + 1) * 2);
}

function isSuperBubble(line, bubble) { 
	// if ( (line === 23 || line === 4) && (bubble === 1 || bubble === 26)) { 
	// 	return true;
	// }

	if (SUPER_BUBBLES[0] || SUPER_BUBBLES[1] || SUPER_BUBBLES[2] || SUPER_BUBBLES[3]) {
		return true;
	}
	
	return false;
}

function canAddBubble(line, bubble) { 
	
	if ( ( ( line >= 1 && line <= 4) || (line >= 9 && line <= 10) || (line >= 20 && line <= 22) || (line >= 26 && line <= 28) ) && (bubble === 13 || bubble === 14)) {
		return false;
	} else if ( ( (line >= 2 && line <= 4) || (line >= 21 && line <= 22) ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) { 
		return false;
	} else if ( ( line >= 6 && line <= 7 ) && ( (bubble >= 2 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) ||  (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 25) ) ) { 
		return false;
	} else if ( ( line === 8 ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 13 && bubble <= 14) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( (( line >= 9 &&  line <= 19) ) && ( (bubble >= 1 && bubble <= 5) || (bubble >= 22 && bubble <= 26) ) ) { 
		return false;
	} else if ( ( line === 11 || line === 17 ) && ( (bubble >= 7 && bubble <= 20) ) ) { 
		return false;
	} else if ( ( line === 9 || line === 10 ) && ( (bubble === 12 || bubble === 15) ) ) { 
		return false;
	} else if ( ( (line >= 12 && line <= 13) || (line >= 15 && line <= 16) ) && ( (bubble === 9 || bubble === 18) ) ) { 
		return false;
	} else if ( line === 14 && ( (bubble >= 7 && bubble <= 9) || (bubble >= 18 && bubble <= 20) ) ) { 
		return false;
	} else if ( (line === 18 || line === 19) && ( bubble === 9 || bubble === 18) ) { 
		return false;
	} else if ( ( line >= 9 && line <= 10 ) && ( (bubble >= 7 && bubble <= 11) || (bubble >= 16 && bubble <= 20) ) ) { 
		return false;
	} else if ( (( line >= 11 && line <= 13) || (line >= 15 && line <= 19) ) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( ( (line >= 12 && line <= 16) || (line >= 18 && line <= 19) ) && ( bubble >= 10 && bubble <= 17) ) { 
		return false;
	} else if ( (line === 23) && ( (bubble >= 4 && bubble <= 5) || (bubble >= 22 && bubble <= 23) ) ) { 
		return false;
	} else if ( (line >= 24 && line <= 25) && ( (bubble >= 1 && bubble <= 2) || (bubble >= 4 && bubble <= 5) || (bubble >= 7 && bubble <= 8) || (bubble >= 10 && bubble <= 17) || (bubble >= 19 && bubble <= 20) || (bubble >= 22 && bubble <= 23) || (bubble >= 25 && bubble <= 26) ) ) { 
		return false;
	} else if ( (line === 26) && ( (bubble >= 7 && bubble <= 8) || (bubble >= 19 && bubble <= 20) ) ) { 
		return false;
	} else if ( (line >= 27 && line <= 28) && ( (bubble >= 2 && bubble <= 11) || (bubble >= 16 && bubble <= 25) ) ) { 
		return false;
	}
	
	return true;
}

function correctionX(x, bubble) { 
	
	if (bubble === 3) { 
		return x + 1;
	} else if (bubble === 6) { 
		return x + 1;
	} else if (bubble === 15) { 
		return x + 1;
	} else if (bubble === 18) { 
		return x + 1;
	} else if (bubble === 21) { 
		return x + 2;
	} else if (bubble === 24) { 
		return x + 2;
	} else if (bubble === 26) { 
		return x + 1;
	}
	return x;
}

function getYFromLine(line) { 
	var y = BUBBLES_Y_START;
	if (line < 8) { 
		y = BUBBLES_Y_START + ( (line - 1) * 18 );
	} else if (line > 7 && line < 15) { 
		y = 150 + ( (line - 8) * 18 );
	} else if (line > 14 && line < 21) { 
		y = 256 + ( (line - 14) * 18 );
	} else if (line > 20 && line < 26) { 
		y = 362 + ( (line - 20) * 18 );
	} else if (line > 25 && line < 29) { 
		y = 452 + ( (line - 25) * 18 );
	} else if (line === 29) { 
		y = BUBBLES_Y_END;
	}

	return y;
}