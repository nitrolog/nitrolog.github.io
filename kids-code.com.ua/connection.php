<?php
 function Connect()
{
 $dbhost = "localhost";
 $dbuser = "b1957729_kids";
 $dbpass = "EY7KeSuM";
 $dbname = "b1957729_kidscode";
 
 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);
 
 return $conn;
}
 ?>