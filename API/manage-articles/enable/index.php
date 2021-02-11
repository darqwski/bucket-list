<?php
    include_once "../../../PHP/Database/PDOController.php";
    include_once "../../../PHP/Permission/SessionPermission.php";
    include_once "../../../PHP/Utils/RequestAPI.php";
    include_once "../../../PHP/Utils/Response.php";
    include_once "../../../PHP/Utils/DataStream.php";
    session_start();
    if(!isAdmin()){
        echo Response::message("Permissions Denied", 403);
    }
    $method = RequestAPI::getMethod();

    function confirmArticle(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("UPDATE articles SET confirmed = 1 WHERE articleId=:articleId", ["articleId"=>$data['articleId']]);
        return Response::message("Article is now visible for people");
    }

    switch ($method){
        case "POST":
            echo confirmArticle();
            break;
    }
