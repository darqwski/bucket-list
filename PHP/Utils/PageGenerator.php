<?php
define("BUILD_PATH","bucket-list/react/build/");
include_once "$_SERVER[DOCUMENT_ROOT]/bucket-list/PHP/Utils/InitialData.php";
session_start();

function clearURLParams(){
    return explode("?",$_SERVER['REQUEST_URI'])[0];
}

if(isset($_GET['logout'])){
    print_r($_SERVER);
    session_destroy();
    header("location: ".clearURLParams());
}

function generatePage($path = '/'){
    echo "
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>My bucket list</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='stylesheet' href='".$path.BUILD_PATH."materialize.min.css' />
        <style>
            #react-app, body, html {
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div id='react-app'></div>
        <script type='application/javascript'>
            window.serverData = ".json_encode([
                'login'=> isset($_SESSION['login']) ? $_SESSION['login'] : null,
                'admin' => isset($_SESSION['adminId']) ? 1 : 0
        ])."
        </script>
        ".getInitialData()."
        <script src='".$path.BUILD_PATH."bundle.js'></script>
        <script src='".$path.BUILD_PATH."main.bundle.js'></script>
    </body>
</html>
    ";
} ?>

