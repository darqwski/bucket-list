<?php


include_once "../../PHP/Database/PDOController.php";
include_once "../../PHP/Utils/DataStream.php";
include_once "../../PHP/Utils/RequestAPI.php";
include_once "../../PHP/Utils/Response.php";

function getCommentsForArticle(){
    return (new DataStream())
        ->getFromQuery(
        "SELECT comments.*, users.login, users.firstName, users.lastName, users.temporary 
                FROM comments 
                INNER JOIN users ON users.userId = comments.authorId
                WHERE articleId = :articleId", ['articleId'=>$_GET['articleId']]
        )
        ->toJson();
}

function getUserInfo(){
    if(isset($_SESSION['userId'])){
        return $_SESSION['userId'];
    }
    if(isset($_COOKIE['temporaryUserId'])){
       return $_COOKIE['temporaryUserId'];
    }
    $newId = PDOController::insertCommand("
INSERT INTO `users` (`userId`, `login`, `password`, `firstName`, `lastName`, `temporary`, `joined`) 
VALUES (NULL, '0', '0', '0', '0', '1', :creationDate);", ['creationDate'=>date('Y-m-d')]);
    setcookie("temporaryUserId",$newId, time()+3600*24*30*12*10);
    print_r($newId);
    return $newId;
}
function addCommentToArticle(){
    $data = RequestAPI::getJSON();
    $userId = getUserInfo();

    PDOController::putCommand("
    INSERT INTO `comments` (`commentId`, `text`, `authorId`, `articleId`, `datetime`, `pluses`, `minuses`) 
    VALUES (NULL, :text, :userId, :articleId, NOW(), '0', '0');",[
        'text'=>$data['text'],
        'articleId'=>$data['articleId'],
        'userId' => $userId
    ]);

    return Response::message("Komentarz dodano poprawnie");
}
switch (RequestAPI::getMethod()) {
    case "GET":
        echo getCommentsForArticle();
        break;
    case "POST":
        echo addCommentToArticle();
        break;
    case "PUT":
        break;
    case "DELETE":
        break;
    default:
        break;
}
