<?php
 function Connect()
{
 $dbhost = "localhost";
 $dbuser = "u_kidscode";
 $dbpass = "EY7KeSuM";
 $dbname = "kidscode";
 
 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);
 
 return $conn;
}
 ?>