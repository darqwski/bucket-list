<?php
    include_once "../../PHP/Database/PDOController.php";

    $method = RequestAPI::getMethod();

    switch ($method){
        case "GET":
            if(isset($_GET['newest'])){
                echo (new DataStream(PDOController::getCommand("SELECT * FROM articles")))->get();
            }

    }
