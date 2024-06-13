<?php
header("Access-Control-Allow-Origin: *");

$name=$_POST["name"];
$attend=$_POST["selected"];
$comment=$_POST["comment"];

$conn = new mysqli("localhost", "riss7587_ace", "wfREBoalM@GL", "riss7587_married");

$result = $conn->query("INSERT INTO db_comments VALUES('null','".$name."','".$attend."','".$comment."')");

$conn -> close();

header("Location: index.html");
?>