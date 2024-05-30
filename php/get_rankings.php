<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "diplom";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT user_id, level, game_progress, statistics FROM rankings ORDER BY statistics DESC");

$rankings = [];
while ($row = $result->fetch_assoc()) {
    $rankings[] = $row;
}

echo json_encode($rankings);

$conn->close();
