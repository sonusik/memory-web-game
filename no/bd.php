<?php
// Подключение к базе данных MySQL
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "dbname";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Маршрут для входа пользователя
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    } else {
        echo json_encode(["message" => "Invalid username or password"]);
    }
}

// Маршрут для обновления профиля пользователя
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username']) && isset($_POST['level']) && isset($_POST['rating'])) {
    $username = $_POST['username'];
    $level = $_POST['level'];
    $rating = $_POST['rating'];

    $sql = "UPDATE users SET level=$level, rating=$rating WHERE username='$username'";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Profile updated successfully"]);
    } else {
        echo json_encode(["message" => "Error updating profile: " . $conn->error]);
    }
}

// Маршрут для получения рейтинга пользователей
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT username, rating FROM users ORDER BY rating DESC";
    $result = $conn->query($sql);

    $users = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }

    echo json_encode($users);
}

$conn->close();

