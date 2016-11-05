<?php
/**
 * PHPMailer multiple files upload and send example
 */
$msg = '';

$type = strip_tags($_POST['form_type']);

if (!isset($_POST['submit-btn'])) {
   die('Сработала защита');
}

if($type === 'popup') {
  /**
   * SETTINGS for POPUP forms
   */
   $type_popup = strip_tags($_POST['form_number']);
   $name = strip_tags($_POST['user_name_popup']);
   $phone = strip_tags($_POST['user_phone_popup']);
   $subject = ($type_popup === "popup-1") ? "Заказ на обратный звонок" : "Заказ на бесплатную консультацию (Popup)";
}
else {

   $formId = strip_tags($_POST['form_number']);
   //primary full name of fields
   $name = 'user_name'.$formId;
   $phone = 'user_phone'.$formId;
   //secondary - it values
   $name = strip_tags($_POST[$name]);
   $phone = strip_tags($_POST[$phone]);
   $subject = "Заказ на бесплатную консультацию, форма (" . $formId . ")";
}

$message_body = "Данные с формы:
<br />Имя: ".$name."

<br />Телефон: ".$phone."<br />";

    require_once('lib/phpmailer/config.php'); //Файл конфигурации для вашего smtp сервера
    require_once('lib/phpmailer/PHPMailerAutoload.php'); //Файл автоматической подгрузки классов PHPMailer


    $mail = new PHPMailer;
    $mail->setFrom('from@example.com', 'First Last');
    $mail->addAddress('7iomka@gmail.com', 'John Doe');
    $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    $mail->msgHTML($message_body);

    if (!$mail->send()) {
        $msg .= "Mailer Error: " . $mail->ErrorInfo;
    } else {
        $msg .= "Message sent!";
    }

?>
