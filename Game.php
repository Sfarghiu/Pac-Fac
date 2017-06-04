<!DOCTYPE html>
<html>
<head>
	<title> Pac-Fac </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="GameStyle.css">
</head>

<body>
	<div class="header">
		<img id="fii" src="fii.png" alt="Fii" height="100" width="100">
	</div>
	

	<div class="col-4 col-m-12 mobile">

		<div id="game_title"> Pac-Fac </div>
		<canvas id="game">
		</canvas>
	</div>

	<div class="col-4 ">

		<div id="rulesRectangle">
			<div class="rulesTitle">
				<p>Rules:</p>
			</div>
			<div class="rules">
				<ul>
					<li>eat all the memory pills </li>
					<li>avoid the evil teachers </li>
					<li>eat cheat sheets to make the teachers vulnerable </li>
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
					<li>arrow keys to move </li>
				</ul>
			</div>	
		</div>

		<div class="story">
			<p> For more information about how Pac-Fac came to be, click the memory pill: </p>
			<div>
				<a href="http://localhost:8181/Pac-Fac/Description.html">
					<img id="pill" src="pill.jpg" alt="Memory Pill" height="50" width="50">
				</a>
			</div>
		</div>


	</div>

	<div class="col-4 col-m-12 desktop">

		<div id="game_title"> Pac-Fac </div>
		<canvas id="game">
		</canvas>
	</div>


	<div class="col-4 ">
		<div class="player">
			Player 
		</div>
		<canvas id="playerIcon">
		</canvas>

		<br>
		<div class="logout">
			<a href="http://localhost:8181/Pac-Fac/login.php"><button>Logout</button>
			</a>

		</div>
		<div class="highscores">
			<p> Always up for a challenge? Check out your and other players' highscores: </p>
		</div>
		<a href="http://localhost:8181/Pac-Fac/HighScores.html"><button>View Highscores</button></a>

	</div>
</body>
</html>