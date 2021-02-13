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

    function getInfoPagesList(){
        return (
            (new DataStream())
                ->getFromQuery("SELECT title, infoPageId, footerColumns FROM info_pages")
                ->toJson()
        );
    }

    switch ($method){
        case "GET":
            echo getInfoPagesList();
            break;
    }
