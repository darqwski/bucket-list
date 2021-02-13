<?php
    include_once "../../../PHP/Database/PDOController.php";
    include_once "../../../PHP/Permission/SessionPermission.php";
    include_once "../../../PHP/Utils/RequestAPI.php";
    include_once "../../../PHP/Utils/DataStream.php";

    $method = RequestAPI::getMethod();

    function getInfoPage(){
        return (new DataStream())
            ->getFromQuery("SELECT * FROM info_pages WHERE infoPageId = :pageId", ["pageId"=>$_GET['pageId']])
            ->singleIndex(0)
            ->toJson();
    }

    switch ($method){
        case "GET":
            echo getInfoPage();
            break;
    }
