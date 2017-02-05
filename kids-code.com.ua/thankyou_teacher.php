<?php
 require 'connection.php';
$conn    = Connect();
$t_name    = $conn->real_escape_string($_POST['t_name']);
$t_sname   = $conn->real_escape_string($_POST['t_sname']);
$t_phone   = $conn->real_escape_string($_POST['t_phone']);
$t_email   = $conn->real_escape_string($_POST['t_email']);
$t_city   = $conn->real_escape_string($_POST['t_city']);
$t_company   = $conn->real_escape_string($_POST['t_company']);
$t_specialty   = $conn->real_escape_string($_POST['t_specialty']);
$t_course   = $conn->real_escape_string($_POST['t_course']);
$query   = "INSERT into tb_teacher (t_name,t_sname,t_phone,t_email,t_city,t_company,t_specialty,t_course) VALUES('" . $t_name . "','" . $t_sname . "','" . $t_phone . "','" . $t_email . "','" . $t_city . "','" . $t_company . "','" . $t_specialty . "','" . $t_course . "')";
$success = $conn->query($query);
 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 }
 echo "Спасибо за вопрос! В ближайшее время мы предоставим Вам ответ.<br>";
 $conn->close();
 ?>
 <?

mail ("info@kids-code.com.ua",
      "Новый преподаватель (отправитель: $t_name)",
      "$t_course \n\n Город: \n $t_city Контакты: \n $t_phone",
      "Content-type:text/plain; charset=utf-8");
?>