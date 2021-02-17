<?php
include_once "$_SERVER[DOCUMENT_ROOT]/bucket-list/PHP/Database/PDOController.php";
include_once "$_SERVER[DOCUMENT_ROOT]/bucket-list/PHP/Utils/DataStream.php";

function getFooterContent(){
    $jsonData = (new DataStream())
        ->getFromQuery("SELECT footerColumns, title, infoPageId FROM info_pages WHERE confirmed = 1")
        ->groupBy("footerColumns")
        ->toJson();

    return "<template id='react-footer-content'>".($jsonData)."</template>";
}
function getUserData(){
    $extraData = [];
    if(isset($_SESSION['adminId'])){
        $extraData['adminId'] = $_SESSION['adminId'];
    }
    $jsonData = (new DataStream(
        [
            'userId' => isset($_SESSION['userId']) ? $_SESSION['userId'] : null,
            'login' => isset($_SESSION['login']) ? $_SESSION['login'] : null,
        ]
    ))
        ->join($extraData)
        ->toJson();

    return "<template id='react-user-data'>".($jsonData)."</template>";
}


function getInitialData(){
    return getFooterContent().getUserData();
}
