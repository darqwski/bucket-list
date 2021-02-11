<?php
    include_once "../../../PHP/Database/PDOController.php";
    include_once "../../../PHP/Permission/SessionPermission.php";
    include_once "../../../PHP/Utils/RequestAPI.php";
    include_once "../../../PHP/Utils/DataStream.php";
    session_start();
    if(!isAdmin()){
        echo Response::message("Permissions Denied", 403);
    }
    $method = RequestAPI::getMethod();

    function getArticleList(){
        return (
            (new DataStream())
                ->getFromQuery("SELECT title, articleId, confirmed FROM articles")
                ->toJson()
        );
    }

    switch ($method){
        case "GET":
            echo getArticleList();
            break;
    }
