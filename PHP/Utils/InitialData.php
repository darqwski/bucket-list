<?php
include_once "$_SERVER[DOCUMENT_ROOT]/bucket-list/PHP/Database/PDOController.php";
include_once "$_SERVER[DOCUMENT_ROOT]/bucket-list/PHP/Utils/DataStream.php";

function getFooterContent(){
    $jsonData = (new DataStream())
        ->getFromQuery("SELECT footerColumns, title, infoPageId FROM info_pages")
        ->groupBy("footerColumns")
        ->toJson();

    return "<template id='react-footer-content'>".($jsonData)."</template>";
}

function getInitialData(){
    return getFooterContent();
}
