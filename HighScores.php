<?php 
 session_start();
 $userName = isset($_SESSION['userName']) ? $_SESSION['userName'] : NULL;
 //echo $userName;
 ?>

 <!DOCTYPE html>
<html lang="en">

<head>
	<title> HighScores </title>
	<link rel = "stylesheet" type = "text/css" href = "css/StyleVladut.css">
	<meta name="viewport" content="width=device-width" />
</head>
<body>

	<div class = "header">
		<img id="fii" src = "fii.png">
	</img>

	<div class="but">
		<a href="Game.php"><button>Return to game</button>
		</a>
	</div>
</div>

<div class="col-12 col-m-12">
	<div class = "pac-fac">
		<p> HighScores </p>
	</div>

	<div class = "scores">
		<a href="#popup1"><button>MyScores</button>
		</a>

		<div id="popup1" class="overlay">
			<div class="popup">
				<a class="close" href="#">&times;</a>
				<a class="content" > <h1>MyScores</h1> 
				<?php

$conn = oci_connect('student', 'STUDENT', 'localhost/XE'); //schimbam cu conexiunea actuala aici
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
/**
*$myusername=$_GET["userid"]
*aici primeste usernameul jucatorului ca sa afiseze doar scorurile lui
*in interogarea sql mai trebuie adaugat dupa where NumeUser=:myusername
*/;
$stid = oci_parse($conn, 'SELECT * FROM(select * from HighScores WHERE NumeUser=:userName order by Scor desc) where ROWNUM<10'); 
oci_bind_by_name($stid, ':userName', $userName);
if (!$stid) {
    $e = oci_error($conn);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Perform the logic of the query
$r = oci_execute($stid);
if (!$r) {
    $e = oci_error($stid);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Fetch the results of the query
print "<table border='0'>\n";
echo "<tr><th><b>UserName</b></th><th><b>Score</b></th></tr>";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    print "<tr>\n";
    foreach ($row as $item) {
        print "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . "</td>\n";
    }
    print "</tr>\n";
}
print "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?>  </a>
			</div>
		</div>
		<br><br>
		<a href="#popup2"><button>AllScores</button>
		</a>
		<div id="popup2" class="overlay">
			<div class="popup">
				<a class="close" href="#">&times;</a>
				<a class="content">
				<h1> All Scores</h1>
							<?php

$conn = oci_connect('student', 'STUDENT', 'localhost/XE'); //schimbam cu conexiunea actuala aici
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
// Prepare the statement
$stid = oci_parse($conn, 'SELECT * FROM(select* from HighScores order by Scor desc ) WHERE ROWNUM<10 '); //asta ramane asa
if (!$stid) {
    $e = oci_error($conn);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Perform the logic of the query
$r = oci_execute($stid);
if (!$r) {
    $e = oci_error($stid);
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

// Fetch the results of the query
print "<table border='0'>\n";
echo "<tr><th><b>UserName</b></th><th><b>Score</b></th></tr>";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    print "<tr>\n";
    foreach ($row as $item) {
        print "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . "</td>\n";
    }
    print "</tr>\n";
}
print "</table>\n";

oci_free_statement($stid);
oci_close($conn);

?> 
				</a>
			</div>
		</div>

	</div>

	<div class = "pac-fac">
		<p> Pac-Fac </p>
	</div>

	<img id="pacman" src = "pac-man.png">
	

</div>
</body>
</html>