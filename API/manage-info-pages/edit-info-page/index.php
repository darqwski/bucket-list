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

    function editInfoPage(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("
                UPDATE `info_pages` 
                SET 
                    `title` = :title, 
                    `footerColumns` = :footerColumns, 
                    `content`=:content, 
                    `type`=:type
                WHERE infoPageId=:infoPageId
                    ",
            [
                "infoPageId"=>$data["infoPageId"],
                "content"=>$data["content"],
                "footerColumns"=>$data["footerColumns"],
                "title"=>$data["title"],
                "type"=>$data["type"]
            ]
        );
        return Response::message("Info page updated");
}


    switch ($method){
        case "POST":
            echo editInfoPage();
            break;
    }
