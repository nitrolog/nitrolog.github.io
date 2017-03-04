<?php
 require 'connection.php';
$conn    = Connect();
$pname    = $conn->real_escape_string($_POST['p_name']);
$name    = $conn->real_escape_string($_POST['name']);
$age    = $conn->real_escape_string($_POST['age']);
$course    = $conn->real_escape_string($_POST['course']);
$area   = $conn->real_escape_string($_POST['area']);
$day   = $conn->real_escape_string($_POST['day']);
$phone   = $conn->real_escape_string($_POST['phone']);
$email   = $conn->real_escape_string($_POST['email']);
$query   = "INSERT into tb_cform (p_name,name,age,course,area,day,phone,email) VALUES('" . $pname . "','" . $name . "','" . $age . "','" . $course . "','" . $area . "','" . $day . "','" . $phone . "','" . $email . "')";
$success = $conn->query($query);
 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 }
 echo "Спасибо за реестрацию! В ближайшее время с Вами свяжется наш менеджер. <br>";
 $conn->close();
 ?>
 
 
 
 <?
$pname = @ trim ($_POST['p_name']);
$name = @ trim ($_POST['name']);
$age = @ trim ($_POST['age']);
$course = @ trim ($_POST['course']);
$area = @ trim ($_POST['area']);
$day = @ trim ($_POST['day']);
$phone = @ trim ($_POST['phone']);
$email = @ trim ($_POST['email']);
if (! $pname or ! $name or ! $age or ! $course or ! $area or ! $day or ! $phone or ! $email) exit ('Необходимо заполнить все поля, вернитесь');
mail ("info@kids-code.com.ua",
      "Сообщение с сайта (отправитель: $pname)",
      "$course \n\n Возраст ребенка: \n $age \n Время проведения: \n $day \n Место проведения: \n $area \n Контакты: \n $email \n $phone",
      "Content-type:text/plain; charset=utf-8");
?>