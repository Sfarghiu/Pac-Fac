var PATHS = new Array();
var PATHS_CANVAS_CONTEXT = null;

function initPaths() { 
	var canvas = document.getElementById('canvas-paths');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		PATHS_CANVAS_CONTEXT = canvas.getContext('2d');
	}

	// // CENTER
	// PATHS.push("128,416-422,416");
	// PATHS.push("30,98-518,98");
	// PATHS.push("2,258-186,258");
	// PATHS.push("362,258-548,258");
	// PATHS.push("186,204-362,204");
	// PATHS.push("186,310-362,310");
	// PATHS.push("30,522-518,522");
	// PATHS.push("238,258-314,258");
	// PATHS.push("276,204-276,258");
	
	// // LEFT
	// PATHS.push("128,26-128,470");
	// PATHS.push("30,26-244,26");
	// PATHS.push("30,26-30,150");
	// PATHS.push("30,150-128,150");
	// PATHS.push("244,26-244,98");
	// PATHS.push("186,204-186,364");
	// PATHS.push("30,364-244,364");
	// PATHS.push("244,364-244,416");
	// PATHS.push("30,364-30,416");
	// PATHS.push("30,416-70,416");
	// PATHS.push("70,416-70,470");
	// PATHS.push("30,470-128,470");
	// PATHS.push("30,470-30,522");
	// PATHS.push("244,150-244,204");
	// PATHS.push("186,150-244,150");
	// PATHS.push("186,98-186,150");
	// PATHS.push("244,470-244,522");
	// PATHS.push("186,470-244,470");
	// PATHS.push("186,416-186,470");
	
	// // RIGHT
	// PATHS.push("422,26-422,470");
	// PATHS.push("304,26-518,26");
	// PATHS.push("518,26-518,150");
	// PATHS.push("304,26-304,98");
	// PATHS.push("422,150-518,150");
	// PATHS.push("362,204-362,364");
	// PATHS.push("304,364-518,364");
	// PATHS.push("304,364-304,416");
	// PATHS.push("518,364-518,416");
	// PATHS.push("480,416-518,416");
	// PATHS.push("480,416-480,470");
	// PATHS.push("422,470-518,470");
	// PATHS.push("518,470-518,522");
	// PATHS.push("304,150-304,204");
	// PATHS.push("304,150-362,150");
	// PATHS.push("362,98-362,150");	
	// PATHS.push("304,470-304,522");
	// PATHS.push("304,470-362,470");
	// PATHS.push("362,416-362,470");

	//cross path

	//  PATHS.push("276,0-276,550");
	//  PATHS.push("0,416-550,416");

	PATHS.push("15,20-300,20");
	PATHS.push("299,20-300,520");
	PATHS.push("160,20-162,128");
	//PATHS.push("15,68-163,71");
	PATHS.push("15,70-160,70");
	PATHS.push("15,70-15,125");
	PATHS.push("15,125-240,126");
	PATHS.push("30,140-190,145");
	PATHS.push("238,125-241,172");
	PATHS.push("52,172-244,172");
	// PATHS.push("335,75-500,80");

	PATHS.push("490,20-490,140");
	PATHS.push("185,310-485,310");
	PATHS.push("184,210-186,310");	
	PATHS.push("20,210-186,211");
	PATHS.push("20,278-186,279");
	PATHS.push("20,210-21,392");
	PATHS.push("20,392-250,393");
	PATHS.push("173,393-174,460");
	PATHS.push("20,460-250,460");
	PATHS.push("249,393-250,520");
	PATHS.push("20,520-250,520");
	PATHS.push("21,460-21,520");

	//PATHS.push("300,300-500,300");
	PATHS.push("370,20-371,460");
	PATHS.push("370,180-480,180");
	PATHS.push("479,180-480,520");
	PATHS.push("300,455-480,456");
	PATHS.push("300,520-480,520");

	PATHS.push("370,75-500,76");
}

function getPathsCanevasContext() { 
	return PATHS_CANVAS_CONTEXT;
}

function drawPaths() { 
	var ctx = getPathsCanevasContext();
	
	ctx.strokeStyle = "red";
	
	for (var i = 0, imax = PATHS.length; i < imax; i ++) { 
	
		var p = PATHS[i];
	
		var startX = p.split("-")[0].split(",")[0];
		var startY = p.split("-")[0].split(",")[1];
		var endX = p.split("-")[1].split(",")[0];
		var endY = p.split("-")[1].split(",")[1];
		
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
		ctx.closePath();
	}
}