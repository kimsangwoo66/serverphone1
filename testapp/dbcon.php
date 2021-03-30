<?php
    require_once "dbcon.php";
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);     
    
    $username->obj('username');
    $password->obj('password');
    $email->obj('email');

    $query = "SELECT * FROM puser where email = '{$email}'";
    $query_output = mysqli_query($conn, $query);
    $count = mysqli_num_rows($query_output);

    if($conn == 1)
    {
        $arr = array("result"=> "email_already_present");
        echo json_encode($arr);
    }elseif($count==0)
    {
        $query1 = "INSERT INTO `puser` (`email`, `password`, `username`) VALUE ('{$email}', '{$password}', '{$username}')";
        $query_output1 = mysqli_query($conn, $query1);
        $arr = array('result'=>'ok');
        echo json_encode($arr);
    }else
    {
        $arr = array('result'=>'fail');
        echo json_encode($arr);
    }

    


?>