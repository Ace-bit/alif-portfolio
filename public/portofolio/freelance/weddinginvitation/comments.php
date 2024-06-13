<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "riss7587_ace", "wfREBoalM@GL", "riss7587_married");

$result = $conn->query("SELECT * FROM db_comments order by id DESC");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Name":"'  . $rs["name"] . '",';
  $outp .= '"Attend":"'   . $rs["attend"]        . '",';
  $outp .= '"Comment":"'. $rs["comment"]     . '"}';
	
  $outp = str_replace("\r", "&nbsp;", $outp);
  $outp = str_replace("\t", "&nbsp;", $outp);
  $outp = str_replace("\n", "<br>", $outp);
  $outp = str_replace("\b", "&nbsp;", $outp);
  $outp = str_replace("\f", "&nbsp;", $outp);
  $outp = str_replace("\v", "&nbsp;", $outp);
  $outp = str_replace("\\", "&#92;", $outp);
  $outp = str_replace("\'", "&#39;", $outp);
  $outp = str_replace("\?", "&#63;", $outp);
  $outp = str_replace("\0", "%nbsp;", $outp);
}
$outp ='{"comments":['.$outp.']}';

$conn->close();

echo($outp);
?>