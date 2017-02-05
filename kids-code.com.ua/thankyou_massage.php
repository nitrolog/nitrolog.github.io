<?php
 require 'connection.php';
$conn    = Connect();
$m_name    = $conn->real_escape_string($_POST['m_name']);
$m_email   = $conn->real_escape_string($_POST['m_email']);
$massage   = $conn->real_escape_string($_POST['massage']);
$query   = "INSERT into tb_massage (m_name,m_email,massage) VALUES('" . $m_name . "','" . $m_email . "','" . $massage . "')";
$success = $conn->query($query);
 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 }
 echo "Спасибо за вопрос! В ближайшее время мы предоставим Вам ответ.<br>";
 $conn->close();
 ?>
 <?
$m_name = @ trim ($_POST['m_name']);
$m_email = @ trim ($_POST['m_email']);
$message = @ trim ($_POST['message']);
if (! $m_name or ! $m_email or ! $massage) exit ('Необходимо заполнить все поля, вернитесь');
mail ("info@kids-code.com.ua",
      "Сообщение с сайта (отправитель: $m_name)",
      "$massage \n\n Контакты: \n $m_email",
      "Content-type:text/plain; charset=utf-8");
?>