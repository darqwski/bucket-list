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

    function addArticle(){
        $data = RequestAPI::getJSON();
        PDOController::putCommand("INSERT INTO `articles` (
        `articleId`, `title`, `shortDescription`, `previewPhoto`, `previewCredits`, `article`, `cost`, `date`, 
        `creationDate`, `authorId`, `confirmed`
        ) VALUES (NULL, :title, :shortDescription, :previewPhoto, :previewCredits, :article, :cost, :date, NOW(), :authorId, '0');",
            [
                "title"=>$data["title"],
                "shortDescription"=>$data["shortDescription"],
                "previewPhoto"=>$data["previewPhoto"],
                "previewCredits"=>$data["previewCredits"],
                "article"=>$data["article"],
                "cost"=>$data["cost"],
                "date"=>$data["date"],
                "authorId"=>$_SESSION['userId']
            ]
        );
        return "";
    }

    switch ($method){
        case "POST":
            echo addArticle();
            break;
    }
