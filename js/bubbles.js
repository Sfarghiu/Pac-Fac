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

	// //add Heinz

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


	 
	 

	// //add 2K

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

	 SUPER_BUBBLES[0] = 2 + ";" + 42 + ";" + parseInt(correctionX(60, 42)) + "," + parseInt(170) + ";0";

	 BUBBLES_ARRAY.push( parseInt(correctionX(60, 42)) + "," + parseInt(170) + ";" + 1 + ";" + 42 + ";" + "s" + ";0" );

	 BUBBLES_COUNTER = 63;


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

	if (SUPER_BUBBLES[0] || SUPER_BUBBLES[1]) {
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