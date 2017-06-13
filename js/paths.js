var PATHS = new Array();
var PATHS_CANVAS_CONTEXT = null;

function initPaths() { 
	var canvas = document.getElementById('canvas-paths');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		PATHS_CANVAS_CONTEXT = canvas.getContext('2d');
	}

	//Path Construction


	//C110
	PATHS.push("15,20-300,20");
	PATHS.push("299,20-300,520");
	PATHS.push("160,20-162,128");
	PATHS.push("15,70-160,70");
	PATHS.push("15,70-15,125");
	PATHS.push("15,125-240,126");
	PATHS.push("30,140-190,145");
	PATHS.push("238,125-241,172");
	PATHS.push("52,172-244,172");

	//C112
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

	//Hol
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