<?php

if (isset($_POST["submit"])) {

    $username = $_POST["username"];
    $password = $_POST["password"];

    require_once 'dbh.inc.php';
    
    session_start();
    $_SESSION["ID"] = "ID";
    $_SESSION["Username"] = "Username";

} else {
    header("location: ../login.php");
    exit();
}

function uidExists($conn, $username) {
    $sql = "SELECT * FROM users WHERE ID = ?";
}

?>