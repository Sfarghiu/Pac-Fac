<!DOCTYPE html>
<html>
<head>

	<?php 
	session_start();
	$accessToken = isset($_SESSION['accessToken']) ? $_SESSION['accessToken'] : NULL;
	//echo $fbToken;
	$playerIcon = isset($_SESSION['playerIcon']) ? $_SESSION['playerIcon'] : NULL;
	$userName = isset($_SESSION['userName']) ? $_SESSION['userName'] : NULL;
	//echo $playerIcon;?>
	
	<title> Pac-Fac </title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="css/GameStyle.css">
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

	<div class="header">
		<img id="fii" src="img/fii.png" alt="Fii" height="100" width="100">
	</div>

	<!-- Game -->

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
					<li>eat the special pill for bonus score </li>
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
					<img id="pill" src="img/pill.jpg" alt="Memory Pill" height="50" width="50">
				</a>
			</div>
		</div>


	</div>
		<div class="col-4 col-m-12 ">
		<div id="home"><br><br><br>
			<h1>pac-fac</h1>
			<canvas id="canvas-home-title-pacman"></canvas>
			<div id="presentation">
				<canvas id="canvas-presentation-blinky"></canvas><div id="presentation-character-blinky">- busaco</div><div id="presentation-name-blinky">"blinky"</div>
				<canvas id="canvas-presentation-pinky"></canvas><div id="presentation-character-pinky">- radu</div><div id="presentation-name-pinky">"pinky"</div>
				<canvas id="canvas-presentation-inky"></canvas><div id="presentation-character-inky">- tuplea</div><div id="presentation-name-inky">"inky"</div>
				<canvas id="canvas-presentation-clyde"></canvas><div id="presentation-character-clyde">- ifte</div><div id="presentation-name-clyde">"clyde"</div>
			</div>
		</div>

		<img id="head" src="img/pac-man.PNG">
		<img id="busaco" src="img/buraga.png">
		<img id="tuplea" src="img/tuplea.png">
		<img id="radulescu" src="img/radulescu.png">
		<img id="iftene" src="img/iftene.png">
	
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
		</div>
	</div>
	<!-- Game -->


	

	<div class="col-4 ">
		<div class="player">
			<?php echo $userName?> 
		</div>
		<img src="<?php echo $playerIcon?>" id="playerIcon">
		
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