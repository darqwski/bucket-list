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

    function hideArticle(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand(
            "UPDATE articles SET confirmed = 0 WHERE articleId=:articleId",
            ["articleId"=>$data['articleId']]
        );

        return Response::message("Article is now not visible for people");
    }

    switch ($method){
        case "POST":
            echo hideArticle();
            break;
    }
