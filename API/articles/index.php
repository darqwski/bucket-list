<?php
    include_once "../../PHP/Database/PDOController.php";
    include_once "../../PHP/Utils/RequestAPI.php";
    include_once "../../PHP/Utils/DataStream.php";
    $method = RequestAPI::getMethod();

    switch ($method){
        case "GET":
            if(isset($_GET['newest'])){
                echo (new DataStream(PDOController::getCommand("
                    SELECT 
                           title,shortDescription, previewPhoto, previewCredits, 
                           articles.articleId, cost, 
                           date, creationDate, viewed, users.login, 
                           count(c.commentId) - IF(c.commentId = NULL, 1, 0) as comments
                    FROM articles
                    INNER JOIN users ON articles.authorId = users.userId
                    LEFT JOIN comments c on articles.articleId = c.articleId
                    WHERE confirmed = 1
                    GROUP BY articleId
                ")))->toJson();
            }
            if(isset($_GET['id'])){
                echo (new DataStream(PDOController::getCommand("
                    SELECT articles.*, users.login FROM articles 
                    INNER JOIN users ON articles.authorId = users.userId
                    WHERE articleId = :articleId
                ", ['articleId'=>$_GET['id']])[0]))->toJson();
                if(!isset($_GET['without-view'])){
                    PDOController::putCommand("
                        UPDATE articles SET viewed = viewed+1 WHERE articleId = :articleId", ['articleId' => $_GET['id']]
                    );
                }
            }

    }
