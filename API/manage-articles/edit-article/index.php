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

    function editArticle(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("
            UPDATE `articles` 
            SET 
                `title` = :title, 
                `shortDescription` = :shortDescription, 
                `previewPhoto`=:previewPhoto, 
                `previewCredits`=:previewCredits, 
                `article`=:article, 
                `cost`=:cost, 
                `date`=:date
            WHERE articleId=:articleId
                ",
            [
                "articleId"=>$data["title"],
                "title"=>$data["title"],
                "shortDescription"=>$data["shortDescription"],
                "previewPhoto"=>$data["previewPhoto"],
                "previewCredits"=>$data["previewCredits"],
                "article"=>$data["article"],
                "cost"=>$data["cost"],
                "date"=>$data["date"],
            ]
        );
        return Response::message("Article updated");
    }

    switch ($method){
        case "POST":
            echo editArticle();
            break;
    }
