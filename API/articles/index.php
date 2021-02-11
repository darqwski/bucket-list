<?php
    include_once "../../PHP/Database/PDOController.php";
    include_once "../../PHP/Utils/RequestAPI.php";
    include_once "../../PHP/Utils/DataStream.php";
    $method = RequestAPI::getMethod();

    switch ($method){
        case "GET":
            if(isset($_GET['newest'])){
                echo (new DataStream(PDOController::getCommand("
                    SELECT title,shortDescription, previewPhoto, previewCredits, articleId, cost, date FROM articles
                    WHERE confirmed = 1
                ")))->toJson();
            }
            if(isset($_GET['id'])){
                echo (new DataStream(PDOController::getCommand("
                    SELECT * FROM articles WHERE articleId = :articleId
                ", ['articleId'=>$_GET['id']])[0]))->toJson();
            }

    }
