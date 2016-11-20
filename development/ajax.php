<?php
session_start();
error_reporting(0);
// include_once "./inc/db_conf.php";
//include_once "./inc/mysql.php";
// include_once "./inc/pdo.php";
include_once "./inc/def.php";

include_once "./lib/phpmailer/config.php";
include_once "./lib/phpmailer/class.phpmailer.php";

include_once "./inc/functions.php";


if(isset($_POST['form_task'])){ $task = trim($_POST['form_task']);} else{
  echo "У Вас слишком медленный интернет либо Вы пытаетесь заполучить доступ к запрещенному файлу. Вернитесь на сайт и повторите попытку";
  die();
}


$admin_emails = Array("7iomka@gmail.com");

// $sql_emails = "SELECT `emails` FROM `admins` WHERE `id` =1 LIMIT 1 ";
// $row_emails = $DBH->query($sql_emails)->fetch();
// $admin_emails = explode(";", $row_emails['emails']);


switch($task){

  // Форма с шапки - обратный звонок
  case "get_callback":

  $user_name = trim($_POST['user_name--callback']); //имя
  $user_phone = trim($_POST['user_phone--callback']); //тел
  $task_name = "Заявка на обратный звонок (первый экран-модалка)";
  break;

  // Форма с шапки - подробности об акции
  case "get_promotion_info":

  $user_name = trim($_POST['user_name--promotion']); //имя
  $user_phone = trim($_POST['user_phone--promotion']); //тел
  $task_name = "Заявка 'подробности об акции' (первый экран-модалка)";
  break;

  // Форма с модалки - Условия получения гранта
  case "get_grant":

  $user_name = trim($_POST['user_name--grant']); //имя
  $user_phone = trim($_POST['user_phone--grant']); //тел
  $user_email = trim($_POST['user_email--grant']); //email
  $user_site = trim($_POST['user_site--grant']); //сайт
  $task_name = "Заявка на получения гранта";
  break;

  // Форма с экрана - Проведем аудит сайта
  case "get_audit":

  $user_name = trim($_POST['user_name--audit']); //имя
  $user_phone = trim($_POST['user_phone--audit']); //тел
  $task_name = "Заявка на проведение аудита сайта";
  break;

  // Форма с модалки - Seo-лендинг - расчёт стоимости
  case "get_seo_landing":

  $user_name = trim($_POST['user_name--seo-landing']); //имя
  $user_phone = trim($_POST['user_phone--seo-landing']); //тел
  $task_name = "Заявка на расчёт стоимости сео-лендинга";
  break;

  // Форма с модалок - Заказ разных пакетных планов
  case "get_order":
  $tarif_number = intval(trim($_POST['tarif']));
  if($tarif_number == 1) {
    $tarif = "Пакет «Начальный»";
  } elseif($tarif_number == 2) {
    $tarif = "Пакет «Бизнес»";
  } elseif($tarif_number == 3) {
    $tarif = "Пакет «Премиум»";
  }
  $user_name = trim($_POST['user_name--order']); //имя
  $user_phone = trim($_POST['user_phone--order']); //тел
  $task_name = "Заказ - " . $tarif;
  break;

  }
  // turn on for bots with disabled javascript to prevent spambot actions
    // if($user_name == ""){
    //  $data['is_err'] = 1;
    //  $data['err'] = "Не указано имя";
    //  echo json_encode($data);
    //  exit;
    // }

    // if($user_phone == ""){
    //  $data['is_err'] = 1;
    //  $data['err'] = "Не указан телефон";
    //  echo json_encode($data);
    //  exit;
    // }
    // if($user_email == ""){
    //  $data['is_err'] = 1;
    //  $data['err'] = "Не указан email";
    //  echo json_encode($data);
    //  exit;
    // }

    $subj = "Сообщение с сайта SEOSINTEZ ".$task_name;
    $mes = "";
    $mes .= "<html>
                      <head>
                        <title>Сообщение с сайта SEOSINTEZ ".$task_name."</title>
                      </head>
                    <body>";
    $mes .= "<table>";
    $mes .= "<tr><th colspan='2'>Данные с формы</th></tr>";
    $mes .= "<tr><td>Имя:</td><td>".$user_name."</td></tr>";
    $mes .= "<tr><td>Тел.:</td><td>".$user_phone."</td></tr>";
    if($user_email!=""){
        $mes .= "<tr><td>Вопрос:</td><td>".$user_email."</td></tr>";
    }
    if($user_site!=""){
        $mes .= "<tr><td>Сайт:</td><td>".$user_site."</td></tr>";
    }
    if($tarif!=""){
        $mes .= "<tr><td>Тариф:</td><td>".$tarif."</td></tr>";
    }
    $mes .= "<tr><td>Форма:</td><td>".$task_name."</td></tr>";

    $mes .= "</table>";
    $mes .= "</body></html>";

    foreach($admin_emails as $email){
     $email = trim($email);
     notify_admin($email,$subj,$mes);
    }
    $data['is_err'] = 0;
    echo json_encode($data);
    exit;





  ?>
