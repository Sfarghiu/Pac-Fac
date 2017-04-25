<?php

session_start();


$conn = oci_connect('STUDENT', 'STUDENT', 'localhost/xe');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}



$offset  = 0;  // skip this many rows
$numrows = 20;  // return 20 rows
if (isset($_GET["page"])) { $page  = $_GET["page"]; } else { $page=1; };
$offset = ($page-1) * $numrows;


$sql='SELECT * FROM Student';

$sql = "SELECT * FROM (SELECT a.*, ROWNUM AS my_rnum
                           FROM ($sql) a
                           WHERE ROWNUM <= :offset + :numrows)
            WHERE my_rnum > :offset";

// Prepare the statement
///aici am facut altfel parse-ul, intai am bagat select-ul in sql
$stid = oci_parse($conn, $sql);

oci_bind_by_name($stid, ':numrows', $numrows);
oci_bind_by_name($stid, ':offset', $offset);


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
print "<pre><p2><big>  NrMatricol  /    Nume       /           Prenume       /  An / 	Grupa /   DataNastere   / Antecedente</big></p2></pre>";
// Fetch the results of the query
print "<table border='1'>\n";
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
    print "<tr>\n";
    foreach ($row as $item) {
        print "    <td><pre><p1>	" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . " 	</p1></pre></td>\n";
    }
    print "</tr>\n";
}
print "</table>\n";


$sql = "SELECT NrMatricol FROM Student";
$result = oci_parse($conn, $sql);
oci_execute($result);
$numrw = oci_fetch_all($result, $res);

$total_pages = ceil($numrw / $numrows);
$start = $offset + 1;
$end = min(($offset + $numrows), $numrw);
 // The "back" link
    $prevlink = ($page > 1) ? '<a href="?page=1" title="First page">&laquo;</a> <a href="?page=' . ($page - 1) . '" title="Previous page">&lsaquo;</a>' : '<span class="disabled">&laquo;</span> <span class="disabled">&lsaquo;</span>';

    // The "forward" link
    $nextlink = ($page < $total_pages) ? '<a href="?page=' . ($page + 1) . '" title="Next page">&rsaquo;</a> <a href="?page=' . $total_pages . '" title="Last page">&raquo;</a>' : '<span class="disabled">&rsaquo;</span> <span class="disabled">&raquo;</span>';

    // Display the paging information
    echo '<div id="paging"><p>', $prevlink, ' Page ', $page, ' of ', $total_pages, ' pages, displaying ', $start, '-', $end, ' of ', $numrw, ' results ', $nextlink, ' </p></div>';


oci_free_statement($stid);
oci_close($conn);
?>