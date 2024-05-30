<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "diplom";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_POST['user_id'];
$level = $_POST['level'];
$game_progress = $_POST['game_progress'];
$statistics = $_POST['statistics'];

$stmt = $conn->prepare("UPDATE rankings SET level = ?, game_progress = ?, statistics = ? WHERE user_id = ?");
$stmt->bind_param("iisi", $level, $game_progress, $statistics, $user_id);
$stmt->execute();

$stmt->close();
$conn->close();
