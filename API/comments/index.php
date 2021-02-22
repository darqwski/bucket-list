<?php


include_once "../../PHP/Database/PDOController.php";
include_once "../../PHP/Utils/DataStream.php";
include_once "../../PHP/Utils/RequestAPI.php";
include_once "../../PHP/Utils/Response.php";

session_start();
function getCommentsForArticle(){
    return (new DataStream())
        ->getFromQuery(
        "SELECT comments.*, users.login, users.firstName, users.lastName, users.temporary 
                FROM comments 
                INNER JOIN users ON users.userId = comments.authorId
                WHERE articleId = :articleId
                LIMIT ".(25*$_GET['page']).", 25
                ", ['articleId'=>$_GET['articleId']]
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

    return $newId;
}
function addCommentToArticle(){
    $data = RequestAPI::getJSON();
    $userId = getUserInfo();
    $userCommentsForArticle = PDOController::getCommand("SELECT count(*) as amount FROM comments WHERE articleId=:articleId AND authorId=:userId",
        [
            'articleId'=>$data['articleId'],
            'userId' => $userId
        ])[0]['amount'];
    if($userCommentsForArticle >= 20){
        return Response::message("Dodano maksymalną ilość komentarzy", 401);
    }
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
