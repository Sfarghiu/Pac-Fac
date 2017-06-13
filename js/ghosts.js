var GHOST_BUSACO_CANVAS_CONTEXT = null;
//var GHOST_BUSACO_POSITION_X = 276;
//var GHOST_BUSACO_POSITION_Y = 204;
var GHOST_BUSACO_POSITION_X = 490;
var GHOST_BUSACO_POSITION_Y = 20;
var GHOST_BUSACO_DIRECTION = 1;
var GHOST_BUSACO_COLOR = "#ed1b24";
var GHOST_BUSACO_MOVING_TIMER = -1;
var GHOST_BUSACO_MOVING = false;
var GHOST_BUSACO_BODY_STATE = 0;
var GHOST_BUSACO_STATE = 0;
var GHOST_BUSACO_EAT_TIMER = null;
var GHOST_BUSACO_AFFRAID_TIMER = null;
var GHOST_BUSACO_AFFRAID_STATE = 0;
var GHOST_BUSACO_TUNNEL = false;

var GHOST_RADU_CANVAS_CONTEXT = null;
//var GHOST_RADU_POSITION_X = 276;
//var GHOST_RADU_POSITION_Y = 258;
var GHOST_RADU_POSITION_X = 490;
var GHOST_RADU_POSITION_Y = 60;
var GHOST_RADU_DIRECTION = 2;
var GHOST_RADU_COLOR = "#feaec9";
var GHOST_RADU_MOVING_TIMER = -1;
var GHOST_RADU_MOVING = false;
var GHOST_RADU_BODY_STATE = 1;
var GHOST_RADU_STATE = 0;
var GHOST_RADU_EAT_TIMER = null;
var GHOST_RADU_AFFRAID_TIMER = null;
var GHOST_RADU_AFFRAID_STATE = 0;
var GHOST_RADU_TUNNEL = false;

var GHOST_TUPLEA_CANVAS_CONTEXT = null;
//var GHOST_TUPLEA_POSITION_X = 238;
//var GHOST_TUPLEA_POSITION_Y = 258;
var GHOST_TUPLEA_POSITION_X = 490;
var GHOST_TUPLEA_POSITION_Y = 100;
var GHOST_TUPLEA_DIRECTION = 3;
var GHOST_TUPLEA_COLOR = "#4adecb";
var GHOST_TUPLEA_MOVING_TIMER = -1;
var GHOST_TUPLEA_MOVING = false;
var GHOST_TUPLEA_BODY_STATE = 2;
var GHOST_TUPLEA_STATE = 0;
var GHOST_TUPLEA_EAT_TIMER = null;
var GHOST_TUPLEA_AFFRAID_TIMER = null;
var GHOST_TUPLEA_AFFRAID_STATE = 0;
var GHOST_TUPLEA_TUNNEL = false;

var GHOST_IFTE_CANVAS_CONTEXT = null;
//var GHOST_IFTE_POSITION_X = 314;
//var GHOST_IFTE_POSITION_Y = 258;
var GHOST_IFTE_POSITION_X = 490;
var GHOST_IFTE_POSITION_Y = 140;
var GHOST_IFTE_DIRECTION = 4;
var GHOST_IFTE_COLOR = "#f99c00";
var GHOST_IFTE_MOVING_TIMER = -1;
var GHOST_IFTE_MOVING = false;
var GHOST_IFTE_BODY_STATE = 3;
var GHOST_IFTE_STATE = 0;
var GHOST_IFTE_EAT_TIMER = null;
var GHOST_IFTE_AFFRAID_TIMER = null;
var GHOST_IFTE_AFFRAID_STATE = 0;
var GHOST_IFTE_TUNNEL = false;

var GHOST_AFFRAID_COLOR = "#2d3eff";
var GHOST_AFFRAID_FINISH_COLOR = "#fff";
var GHOST_POSITION_STEP = 2;
var GHOST_MOVING_SPEED = 15;
var GHOST_TUNNEL_MOVING_SPEED = 35;
var GHOST_AFFRAID_MOVING_SPEED = 40;
var GHOST_EAT_MOVING_SPEED = 6;
var GHOST_AFFRAID_TIME = 8500;
var GHOST_EAT_TIME = 5500;
var GHOST_BODY_STATE_MAX = 6;

var busaco=new Image();
busaco.src="buraga_small.png";
var radu=new Image();
radu.src="radulescu_small.png";
var tuplea=new Image();
tuplea.src="tuplea_small.png";
var ifte=new Image();
ifte.src="iftene_small.png";

var busaco_afraid=new Image();
busaco_afraid.src="buraga_afraid.png";
var radu_afraid=new Image();
radu_afraid.src="radulescu_afraid.png";
var tuplea_afraid=new Image();
tuplea_afraid.src="tuplea_afraid.png";
var ifte_afraid=new Image();
ifte_afraid.src="iftene_afraid.png";

var busaco_eaten=new Image();
busaco_eaten.src="buraga_eaten.png";
var radu_eaten=new Image();
radu_eaten.src="radulescu_eaten.png";
var tuplea_eaten=new Image();
tuplea_eaten.src="tuplea_eaten.png";
var ifte_eaten=new Image();
ifte_eaten.src="iftene_eaten.png";

function initGhosts() { 
	initGhost('busaco');
	initGhost('radu');
	initGhost('tuplea');
	initGhost('ifte');
}
function initGhost(ghost) { 
	var canvas = document.getElementById('canvas-ghost-busaco');
	canvas.setAttribute('width', '550');
	canvas.setAttribute('height', '550');
	if (canvas.getContext) { 
		eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT = canvas.getContext("2d")');
	}
}
function resetGhosts() { 
	stopGhosts();

	GHOST_BUSACO_POSITION_X = 490;
	GHOST_BUSACO_POSITION_Y = 20;

	GHOST_BUSACO_DIRECTION = 1;
	GHOST_BUSACO_MOVING_TIMER = -1;
	GHOST_BUSACO_MOVING = false;
	GHOST_BUSACO_BODY_STATE = 0;
	GHOST_BUSACO_STATE = 0;
	GHOST_BUSACO_EAT_TIMER = null;
	GHOST_BUSACO_AFFRAID_TIMER = null;
	GHOST_BUSACO_AFFRAID_STATE = 0;

	GHOST_RADU_POSITION_X = 490;
	GHOST_RADU_POSITION_Y = 60;
	GHOST_RADU_DIRECTION = 2;
	GHOST_RADU_MOVING_TIMER = -1;
	GHOST_RADU_MOVING = false;
	GHOST_RADU_BODY_STATE = 1;
	GHOST_RADU_STATE = 0;
	GHOST_RADU_EAT_TIMER = null;
	GHOST_RADU_AFFRAID_TIMER = null;
	GHOST_RADU_AFFRAID_STATE = 0;

	GHOST_TUPLEA_POSITION_X = 490;
	GHOST_TUPLEA_POSITION_Y = 100;
	GHOST_TUPLEA_DIRECTION = 3;
	GHOST_TUPLEA_MOVING_TIMER = -1;
	GHOST_TUPLEA_MOVING = false;
	GHOST_TUPLEA_BODY_STATE = 2;
	GHOST_TUPLEA_STATE = 0;
	GHOST_TUPLEA_EAT_TIMER = null;
	GHOST_TUPLEA_AFFRAID_TIMER = null;
	GHOST_TUPLEA_AFFRAID_STATE = 0;

	GHOST_IFTE_POSITION_X = 490;
	GHOST_IFTE_POSITION_Y = 140;
	GHOST_IFTE_DIRECTION = 4;
	GHOST_IFTE_MOVING_TIMER = -1;
	GHOST_IFTE_MOVING = false;
	GHOST_IFTE_BODY_STATE = 3;
	GHOST_IFTE_STATE = 0;
	GHOST_IFTE_EAT_TIMER = null;
	GHOST_IFTE_AFFRAID_TIMER = null;
	GHOST_IFTE_AFFRAID_STATE = 0;
}
function getGhostCanevasContext(ghost) { 
	return eval('GHOST_' + ghost.toUpperCase() + '_CANVAS_CONTEXT');
}

function drawGhosts() { 
	drawGhost("busaco");
	drawGhost('radu');
	drawGhost('tuplea');
	drawGhost("ifte");
}
function drawGhost(ghost) { 

	var ctx = getGhostCanevasContext("busaco");
	//console.log(ctx);
	
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0')) { 
		//eval('ctx.fillStyle = GHOST_' + ghost.toUpperCase() + '_COLOR');
		ctx.drawImage(eval(ghost), eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X-17'),eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y-8'),35,40);
	} else { 
		if (eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE === 1')) { 
		} else 
		if(eval('GHOST_' + ghost.toUpperCase() + '_STATE===-1')){
			ctx.drawImage(eval(ghost+'_eaten'), eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X-17'),eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y-8'),35,40);
		}
		else { 
			ctx.drawImage(eval(ghost+'_afraid'), eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X-17'),eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y-8'),35,40);
		}
	}
	
	eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X');
	var y=eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
	
}

function affraidGhosts() { 
	
	playWazaSound();
	
	SCORE_GHOST_COMBO = 200;

	affraidGhost("busaco");
	affraidGhost("radu");
	affraidGhost("tuplea");
	affraidGhost("ifte");
}
function affraidGhost(ghost) { 
	if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null') ) { 
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
	}
	eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 0');
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0') || eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 1');
		moveGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = new Timer("cancelAffraidGhost(\'' + ghost + '\')", GHOST_AFFRAID_TIME)');
	}
}
function cancelAffraidGhost(ghost) { 
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
		moveGhost(ghost);
		testStateGhosts();
	}
}
function testStateGhosts() { 

	if ( GHOST_BUSACO_STATE === 1 ||  
		GHOST_RADU_STATE === 1 ||  
		GHOST_TUPLEA_STATE === 1 ||  
		GHOST_IFTE_STATE === 1 
		) { 
		playWazaSound();
} else if ( GHOST_BUSACO_STATE === -1 ||  
	GHOST_RADU_STATE === -1 ||  
	GHOST_TUPLEA_STATE === -1 ||  
	GHOST_IFTE_STATE === -1 
	) { 
	playGhostEatenSound();		
} else { 
	playSirenSound();
}
}

function startEatGhost(ghost) { 
	
	if ( !LOCK ) { 
		playEatGhostSound();

		LOCK = true;
		
		if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null') ) { 
			eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
			eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		}
		
		score(SCORE_GHOST_COMBO, ghost);
		
		pauseGhosts();
		pausePacman();
		
		setTimeout('eatGhost(\''+ ghost + '\')', 600);
	}
}

function eatGhost(ghost) { 

	playGhostEatenSound();
	
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		$("#board span.combo").remove();
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = new Timer("cancelEatGhost(\'' + ghost + '\')", GHOST_EAT_TIME)');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.pause()');
	}
	resumeGhosts();
	resumePacman();
	LOCK = false;
}
function cancelEatGhost(ghost) { 
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) { 
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = null');
		stopGhost(ghost);
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
		moveGhost(ghost);
		testStateGhosts();
	}
}

function moveGhosts() { 
	moveGhost("busaco");
	moveGhost('radu');
	moveGhost('tuplea');
	moveGhost("ifte");
}
function moveGhost(ghost) {

	if (eval('GHOST_' + ghost.toUpperCase() + '_MOVING === false')) { 
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = true;');

		var speed = -1;
		if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
			speed =  GHOST_AFFRAID_MOVING_SPEED;
		} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0')) { 
			if (eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === false')) { 
				speed =  GHOST_MOVING_SPEED;
			} else { 
				speed =  GHOST_TUNNEL_MOVING_SPEED;
			}
		} else { 
			speed =  GHOST_EAT_MOVING_SPEED;
		}
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = setInterval("moveGhost(\'' + ghost + '\')", ' + speed + ');');
	} else { 
		
		changeDirection(ghost);
		
		if ( eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null')) { 
			var remain = eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.remain();');
			if ((remain >= 2500 && remain < 3000) || (remain >= 1500 && remain <= 2000) || (remain >= 500 && remain <= 1000) || (remain < 0)) { 
				eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 1;')
			} else if ((remain > 2000 && remain < 2500) || (remain > 1000 && remain < 1500) || (remain >= 0 && remain < 500)) { 
				eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_STATE = 0;')
			}
		}
		
		if (canMoveGhost(ghost)) { 
			eraseGhost(ghost);
			
			if (eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE < GHOST_BODY_STATE_MAX')) { 
				eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE ++;');
			} else { 
				eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE = 0;');
			}
			
			if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 1') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X += GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 2') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y += GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 3') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X -= GHOST_POSITION_STEP;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION === 4') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y -= GHOST_POSITION_STEP;');
			}
			
			if ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X === 2') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X = 548;');
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y = 258;');
			} else if ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X === 548') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) { 
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X = 2;');
				eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y = 258;');
			}
			
			drawGhost(ghost);
			
			if (eval('GHOST_' + ghost.toUpperCase() + '_BODY_STATE === 3') && eval('GHOST_' + ghost.toUpperCase() + '_STATE != -1')) { 
				if ( !PACMAN_MOVING ) { 
					testGhostPacman(ghost);
				}
				testGhostTunnel(ghost);
			}
		} else { 
			eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = oneDirection();');
		}
	}
}

function testGhostTunnel(ghost) { 
	if ( eval('GHOST_' + ghost.toUpperCase() + '_STATE === 0') ) { 
		if (isInTunnel(ghost) && eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === false')) { 
			stopGhost(ghost);
			eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL = true');
			moveGhost(ghost);
		} else if (!isInTunnel(ghost) && eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL === true')) { 
			stopGhost(ghost);
			eval('GHOST_' + ghost.toUpperCase() + '_TUNNEL = false');
			moveGhost(ghost);
		}
	}
}
function isInTunnel(ghost) { 
	if ( ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X >= 2') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X <= 106') ) && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) { 
		return true;
	} else if ( ( eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X >= 462') && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_X <= 548') ) && eval('GHOST_' + ghost.toUpperCase() + '_POSITION_Y === 258') ) { 
		return true;
	}
}


function changeDirection(ghost) { 
	eval('var direction = GHOST_' + ghost.toUpperCase() + '_DIRECTION');
	eval('var state = GHOST_' + ghost.toUpperCase() + '_STATE');
	eval('var ghostX = GHOST_' + ghost.toUpperCase() + '_POSITION_X');
	eval('var ghostY = GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
	
	var tryDirection = oneDirection();
	
	if (state === 0 || state === 1) { 
		if (ghostX != 276 && ghostY != 258) { 
			var pacmanX = PACMAN_POSITION_X;
			var pacmanY = PACMAN_POSITION_Y;
			var axe = oneAxe();
			if (ghost === "blinky") { 
				
				var nothing = whatsYourProblem();
				if (nothing < 6) { 
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) { 
						axe ++;
						if (axe > 2) axe = 1; 
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}
				
			} else if (ghost === "radu") { 
				
				var nothing = whatsYourProblem();
				if (nothing < 3) { 
					
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) { 
						axe ++;
						if (axe > 2) axe = 1; 
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
					tryDirection = reverseDirection(tryDirection);
				}
				
			} else if (ghost === "tuplea") { 
				var good = anyGoodIdea();
				if (good < 3) { 
					tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					if ( !(canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) ) { 
						axe ++;
						if (axe > 2) axe = 1; 
						tryDirection = getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY);
					}
				}
			}
		}
		if (state === 1) { 
			tryDirection = reverseDirection(tryDirection);
		}
	} else { 
		var axe = oneAxe();
		tryDirection = getRightDirectionForHome(axe, ghostX, ghostY);
		if (canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) { 
			
		} else { 
			axe ++;
			if (axe > 2) axe = 1; 
			tryDirection = getRightDirectionForHome(axe, ghostX, ghostY);
		}
	}
	
	if (canMoveGhost(ghost, tryDirection) && (direction != tryDirection -2 && direction != tryDirection + 2)) { 
		eval('GHOST_' + ghost.toUpperCase() + '_DIRECTION = tryDirection');
	}
}

function getRightDirectionForHome(axe, ghostX, ghostY) { 
	var homeX = 276;
	var homeY = 204;
	
	if (ghostY === 204 && ghostX === 276) { 	
		return 2;
	} else if (ghostX === 276 && ghostY === 258) { 
		return oneDirectionX();
	} else { 
		if (axe === 1) { 
			if (ghostX > homeX) { 
				return 3;
			} else { 
				return 1;
			}
		} else { 
			if (ghostY > homeY) { 
				return 4;
			} else { 
				return 2;
			}
		}
	}
}
function getRightDirection(axe, ghostX, ghostY, pacmanX, pacmanY) { 
	if (axe === 1) { 
		if (ghostX > pacmanX) { 
			return 3;
		} else { 
			return 1;
		}
	} else { 
		if (ghostY > pacmanY) { 
			return 4;
		} else { 
			return 2;
		}
	}
}
function reverseDirection(direction) { 
	if (direction > 2) return direction - 2;
	else return direction + 2;
}

function eraseGhost(ghost) { 

	var ctx = getGhostCanevasContext(ghost);
	
	eval('ctx.clearRect(GHOST_' + ghost.toUpperCase() + '_POSITION_X-17, GHOST_' + ghost.toUpperCase() + '_POSITION_Y-8, 35, 40)');
}
function eraseGhosts() { 

	eraseGhost('busaco');
	eraseGhost('radu');
	eraseGhost('tuplea');
	eraseGhost('ifte');
}

function canMoveGhost(ghost, direction) { 
	if (!direction) { 
		eval('var direction = GHOST_' + ghost.toUpperCase() + '_DIRECTION');
	}
	eval('var positionX = GHOST_' + ghost.toUpperCase() + '_POSITION_X');
	eval('var positionY = GHOST_' + ghost.toUpperCase() + '_POSITION_Y');
	eval('var state = GHOST_' + ghost.toUpperCase() + '_STATE');
	
	if (positionX === 276 && positionY === 204 && direction === 2 && state === 0) return false;

	if ( direction === 1 ) { 
		positionX += GHOST_POSITION_STEP;
	} else if ( direction === 2 ) { 
		positionY += GHOST_POSITION_STEP;
	} else if ( direction === 3 ) { 
		positionX -= GHOST_POSITION_STEP;
	} else if ( direction === 4 ) { 
		positionY -= GHOST_POSITION_STEP;
	}
	
	for (var i = 0, imax = PATHS.length; i < imax; i ++) { 
		
		var p = PATHS[i];
		
		var startX = p.split("-")[0].split(",")[0];
		var startY = p.split("-")[0].split(",")[1];
		var endX = p.split("-")[1].split(",")[0];
		var endY = p.split("-")[1].split(",")[1];

		if (positionX >= startX && positionX <= endX && positionY >= startY && positionY <= endY) { 
			return true;
		}
	}
	
	return false;
}

function oneDirection() { 
	return Math.floor( Math.random() * ( 4 - 1 + 1 ) + 1 );
}
function oneDirectionX() { 
	var direction = oneDirection();
	if (direction === 4 || direction === 2) direction -= 1;
	return direction;
}
function oneDirectionY() { 
	var direction = oneDirection();
	if (direction === 3 || direction === 1) direction -= 1;
	return direction;
}

function stopGhost(ghost) { 

	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER = null');
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.cancel()');
		eval('GHOST_' + ghost.toUpperCase() + '_EAT_TIMER = null');
		eval('GHOST_' + ghost.toUpperCase() + '_STATE = 0');
	}

	if ( eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER != -1') ) { 
		eval('clearInterval(GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER)');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = false');
	}
}
function stopGhosts() { 
	stopGhost('busaco');
	stopGhost('radu');
	stopGhost('tuplea');
	stopGhost('ifte');
}

function pauseGhost(ghost) { 
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.pause()');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.pause()');
	}
	
	if ( eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER != -1') ) { 
		eval('clearInterval(GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER)');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING_TIMER = -1');
		eval('GHOST_' + ghost.toUpperCase() + '_MOVING = false');
	}
}
function pauseGhosts() { 
	pauseGhost('busaco');
	pauseGhost('radu');
	pauseGhost('tuplea');
	pauseGhost('ifte');
}

function resumeGhost(ghost) { 
	if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === 1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_AFFRAID_TIMER.resume()');
	} else if (eval('GHOST_' + ghost.toUpperCase() + '_STATE === -1')) { 
		eval('if(GHOST_' + ghost.toUpperCase() + '_EAT_TIMER !== null) GHOST_' + ghost.toUpperCase() + '_EAT_TIMER.resume()');
	}
	moveGhost(ghost);
}
function resumeGhosts() { 
	resumeGhost('busaco');
	resumeGhost('radu');
	resumeGhost('tuplea');
	resumeGhost('ifte');
}

