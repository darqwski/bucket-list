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

    function confirmInfoPage(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("UPDATE info_pages SET confirmed = 1 WHERE infoPageId=:infoPageId", ["infoPageId"=>$data['infoPageId']]);
        return Response::message("Info page is now visible for people");
    }

    switch ($method){
        case "POST":
            echo confirmInfoPage();
            break;
    }
