<?php

// Query pentru crearea tabelei : CREATE TABLE HighScores (NumeUser varchar2(25),Scor int NOT NULL);

$conn = oci_connect('vladut', 'LAB11', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'INSERT INTO HighScores VALUES(:user, :scor)');
$user=_$GET["username"]; //din jquery primeste username-ul
$scor=_$GET["scor"]; //idem

oci_bind_by_name($stid, ':user', $user);
oci_bind_by_name($stid, ':scor', $scor);

oci_execute($stid); 

oci_free_statement($stid);
oci_close($conn);

?>