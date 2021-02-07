<?php
include_once("../PHP/Utils/PageGenerator.php");
generatePage();
if(isset($_SESSION['adminId'])){
    header('Location: dashboard/');
}
