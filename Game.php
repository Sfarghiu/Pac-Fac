<!DOCTYPE html>
<html>
<head>

	<?php 
	session_start();
	$accessToken = isset($_SESSION['accessToken']) ? $_SESSION['accessToken'] : NULL;
	//echo $fbToken;
	$playerIcon = isset($_SESSION['playerIcon']) ? $_SESSION['playerIcon'] : NULL;
	//echo $playerIcon;?>
	
	<title> Pac-Fac </title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="GameStyle.css">
	<link rel="stylesheet" type="text/css" href="css/pacman.css" />
	<link rel="stylesheet" type="text/css" href="css/pacman-home.css" />

<script>

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
    	console.log("cv");
    } else {
      //document.getElementById('status').innerHTML = 'Please log ' +
        //'into this app.';   
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if(response.status==="connected"){
      	console.log("cv");
		  logout();
	 }
      //else
      //login();
      //smt();
      //statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1366424746780074',
    cookie     : true,  // enable cookies to allow the server to access 
    status     :true,  // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  FB.getLoginStatus(function(response) {
   
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  function logout()
  {
    FB.logout(function(response) {
    	 window.location.replace("login.php");
      console.log('Bye, ' + response.name + '.');
});
  }</script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery-buzz.js"></script>
	<!--<script type="text/javascript" src="Game.js"></script>-->
	<script type="text/javascript" src="js/game.js"></script>
	<script type="text/javascript" src="js/tools.js"></script>
	<script type="text/javascript" src="js/board.js"></script>
	<script type="text/javascript" src="js/paths.js"></script>
	<script type="text/javascript" src="js/bubbles.js"></script>
	<script type="text/javascript" src="js/fruits.js"></script>
	<script type="text/javascript" src="js/pacman.js"></script>
	<script type="text/javascript" src="js/ghosts.js"></script>
	<script type="text/javascript" src="js/home.js"></script>
	<script type="text/javascript" src="js/sound.js"></script>

	<script type="text/javascript">		
			
			function simulateKeyup(code) { 
				var e = jQuery.Event("keyup");
				e.keyCode = code;
				jQuery('body').trigger(e);
			}
			function simulateKeydown(code) { 
				var e = jQuery.Event("keydown");
				e.keyCode = code;
				jQuery('body').trigger(e);
			}
			
			$(document).ready(function() { 
				//$.mobile.loading().hide();
				// loadAllSound();
				
				HELP_TIMER = setInterval('blinkHelp()', HELP_DELAY);
				
				initHome();
				
				// $(".sound").click(function(e) { 
				// 	e.stopPropagation();
					
				// 	var sound = $(this).attr("data-sound");
				// 	if ( sound === "on" ) { 
				// 		$(".sound").attr("data-sound", "off");
				// 		$(".sound").find("img").attr("src", "img/sound-off.png");
				// 		GROUP_SOUND.mute();
				// 	} else { 
				// 		$(".sound").attr("data-sound", "on");
				// 		$(".sound").find("img").attr("src", "img/sound-on.png");
				// 		GROUP_SOUND.unmute();
				// 	}
				// });
				
				// $(".help-button, #help").click(function(e) { 
				// 	e.stopPropagation();
				// 	if (!PACMAN_DEAD && !LOCK && !GAMEOVER) { 
				// 		if ( $('#help').css("display") === "none") { 
				// 			$('#help').fadeIn("slow");
				// 			$(".help-button").hide();
				// 			if ( $("#panel").css("display") !== "none") { 
				// 				pauseGame();
				// 			}
				// 		} else { 
				// 			$('#help').fadeOut("slow");
				// 			$(".help-button").show();
				// 		}
				// 	}
				// });
				
				// $(".github").click(function(e) { 
				// 	e.stopPropagation();
				// });
				
				$("#home").on("click touchstart", function(e) { 
					if ( $('#help').css("display") === "none") { 
						e.preventDefault();
						simulateKeydown(13);
					}
				});
				$("#control-up, #control-up-second, #control-up-big").on("mousedown touchstart", function(e) { 
					e.preventDefault();
					simulateKeydown(38);
					simulateKeyup(13);
				});
				$("#control-down, #control-down-second, #control-down-big").on("mousedown touchstart", function(e) { 
					e.preventDefault();
					simulateKeydown(40);
					simulateKeyup(13);
				});
				$("#control-left, #control-left-big").on("mousedown touchstart", function(e) { 
					e.preventDefault();
					simulateKeydown(37);
					simulateKeyup(13);
				});
				$("#control-right, #control-right-big").on("mousedown touchstart", function(e) { 
					e.preventDefault();
					simulateKeydown(39);
					simulateKeyup(13);
				});
				
				$("body").keyup(function(e) { 
					KEYDOWN = false;
				});
				
				$("body").keydown(function(e) { 
				
					if (HOME) { 
						
						initGame(true);
						
					} else { 				
						//if (!KEYDOWN) { 
							KEYDOWN = true;
							if (PACMAN_DEAD && !LOCK) { 
								erasePacman();
								resetPacman();
								drawPacman();
								
								eraseGhosts();
								resetGhosts();
								drawGhosts();
								moveGhosts();
								
								blinkSuperBubbles();
								
							} else if (e.keyCode >= 37 && e.keyCode <= 40 && !PAUSE && !PACMAN_DEAD && !LOCK) { 
								if ( e.keyCode === 39 ) { 
									movePacman(1);
								} else if ( e.keyCode === 40 ) { 
									movePacman(2);
								} else if ( e.keyCode === 37 ) { 
									movePacman(3);
								} else if ( e.keyCode === 38 ) { 
									movePacman(4);
								}
							} else if (e.keyCode === 68 && !PAUSE) { 
								/*if ( $("#canvas-paths").css("display") === "none" ) { 
									$("#canvas-paths").show();
								} else { 
									$("#canvas-paths").hide();
								}*/
							} else if (e.keyCode === 80 && !PACMAN_DEAD && !LOCK) { 
								if (PAUSE) { 
									resumeGame();
								} else { 
									pauseGame();
								}
							} else if (GAMEOVER) { 
								initHome();
							}
						//}
					}
				});
			});
	</script>
</head>

<body>
<!--<script>
window.onload = function() {
    var c = document.getElementById("playerIcon");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src="<?php //echo $pathimage1?>";
    ctx.drawImage(img, 1, 1, 300, 150);
}
</script>-->
	<div class="header">
		<img id="fii" src="fii.png" alt="Fii" height="100" width="100">
	</div>

	<!-- Game -->

	<!--<div id="sound"></div>
	
		<div id="help">
			<h2>Help</h2>
			<table align="center" border="0" cellPadding="2" cellSpacing="0">
				<tbody>
					<tr><td>Arrow Left : </td><td>Move Left</td></tr>
					<tr><td>Arrow Right : </td><td>Move Right</td></tr>
					<tr><td>Arrow Down : </td><td>Move Down</td></tr>
					<tr><td>Arrow Up : </td><td>Move Up</td></tr>
					<tr><td colspan="2">&nbsp;</td></tr>
					<tr><td>P : </td><td>PAUSE</td></tr>
				</tbody>
			</table>
		</div>-->

	

	<div class="col-4 ">

		<div id="rulesRectangle">
			<div class="rulesTitle">
				<p>Rules:</p>
			</div>
			<div class="rules">
				<ul>
					<li>eat all the memory pills </li>
					<li>avoid the evil teachers </li>
					<li>eat piracetam to make the teachers vulnerable </li>
					<li>eat the good grade for bonus score </li>
				</ul>
			</div>

		</div>

		<br><br>
		<div id="controlsRectangle">
			<div class="controlsTitle">
				<p>Controls:</p>
			</div>

			<div class="controls">
				<ul>
					<li>use arrow keys to move </li>
					<li>press 'P' to pause/resume </li>
				</ul>
			</div>	
		</div>

		<div class="story">
			<p> For more information about how Pac-Fac came to be, click the memory pill: </p>
			<div>
				<a href="http://localhost:8181/Pac-Fac/Description.php">
					<img id="pill" src="pill.jpg" alt="Memory Pill" height="50" width="50">
				</a>
			</div>
		</div>


	</div>
		<div class="col-4 col-m-12 ">

		<!--<div id="game_title"> Pac-Fac </div>
		<canvas id="game">
		</canvas>-->
		<div id="home"><br><br><br>
			<h1>pac-fac</h1>
			<!--<h3>Lucio PANEPINTO<br><em>2015</em></h3>-->
			<canvas id="canvas-home-title-pacman"></canvas>
			<div id="presentation">
				<!--<div id="presentation-titles">character &nbsp;/&nbsp; nickname</div>-->
				<canvas id="canvas-presentation-blinky"></canvas><div id="presentation-character-blinky">- busaco</div><div id="presentation-name-blinky">"blinky"</div>
				<canvas id="canvas-presentation-pinky"></canvas><div id="presentation-character-pinky">- radu</div><div id="presentation-name-pinky">"pinky"</div>
				<canvas id="canvas-presentation-inky"></canvas><div id="presentation-character-inky">- tuplea</div><div id="presentation-name-inky">"inky"</div>
				<canvas id="canvas-presentation-clyde"></canvas><div id="presentation-character-clyde">- ifte</div><div id="presentation-name-clyde">"clyde"</div>
			</div>
			<!--<canvas id="trailer"></canvas>
			<div class="help-button">- help -</div>
			<a class="sound" href="javascript:void(0);" data-sound="on"><img src="img/sound-on.png" alt="" border="0"></a>
			<a class="github" target="_blank" href="https://github.com/luciopanepinto/pacman"><img src="img/github.png" alt="GitHub - Lucio PANEPINTO - Pac-Man"></a>-->
		</div>

		<img id="head" src="pac-man.PNG">
		<img id="busaco" src="buraga.png">
		<img id="tuplea" src="tuplea.png">
		<img id="radulescu" src="radulescu.png">
		<img id="iftene" src="iftene.png">
	
		<div id="panel">
			<h1>pac-fac</h1>
			<canvas id="canvas-panel-title-pacman"></canvas>
			<div id="score"><h2>1UP</h2><span>00</span></div>
			<div id="highscore"><h2>High Score</h2><span>00</span></div>
			<div id="board">
				<canvas id="canvas-board"></canvas>
				<canvas id="canvas-paths"></canvas>
				<canvas id="canvas-bubbles"></canvas>
				<canvas id="canvas-fruits"></canvas>
				<canvas id="canvas-pacman"></canvas>
				<canvas id="canvas-ghost-busaco"></canvas>
				
				<div id="control-up-big"></div>
				<div id="control-down-big"></div>
				<div id="control-left-big"></div>
				<div id="control-right-big"></div>
			</div>
			<div id="control">
				<div id="control-up"></div>
				<div id="control-up-second"></div>
				<div id="control-down"></div> 
				<div id="control-down-second"></div>
				<div id="control-left"></div>
				<div id="control-right"></div>
			</div>
			<canvas id="canvas-lifes"></canvas>
			<canvas id="canvas-level-fruits"></canvas>
			<div id="message"></div>
			<!--<div class="help-button">- help -</div>-->
			<!--<a class="sound" href="javascript:void(0);" data-sound="on"><img src="img/sound-on.png" alt="" border="0"></a>-->
		</div>
	</div>
	<!-- Game -->


	

	<div class="col-4 ">
		<div class="player">
			Player 
		</div>
		<img src="<?php echo $playerIcon?>" id="playerIcon">
		<!--<canvas id="playerIcon">
		</canvas>-->
		

		<br>
		<div class="logout">
			<button onclick="checkLoginState();">Logout</button>
			

		</div>
		<div class="highscores">
			<p> Always up for a challenge? Check out your and other players' highscores: </p>
		</div>
		<a href="http://localhost:8181/Pac-Fac/HighScores.php"><button>View Highscores</button></a>

	</div>

</body>
</html>