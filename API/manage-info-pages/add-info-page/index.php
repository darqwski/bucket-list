<?php
    include_once "../../../PHP/Database/PDOController.php";
    include_once "../../../PHP/Permission/SessionPermission.php";
    include_once "../../../PHP/Utils/Response.php";
    include_once "../../../PHP/Utils/RequestAPI.php";
    include_once "../../../PHP/Utils/DataStream.php";
    session_start();
    if(!isAdmin()){
        echo Response::message("Permissions Denied", 403);
    }
    $method = RequestAPI::getMethod();

    function addInfoPage(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("INSERT INTO `info_pages` (
            `infoPageId`,`content`, `footerColumns`, `title`, `type`, `confirmed`
        ) VALUES (NULL, :content, :footerColumns, :title, :type, 0);",
            [
                "content"=>$data["content"],
                "footerColumns"=>$data["footerColumns"],
                "title"=>$data["title"],
                "type"=>$data["type"]
            ]
        );
        return Response::message("Article added correctly");
    }

    switch ($method){
        case "POST":
            echo addInfoPage();
            break;
    }
