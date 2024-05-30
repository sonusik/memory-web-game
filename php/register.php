<?php


$servername = "localhost";
$dbusername = "root"; 
$dbpassword = "root";
$dbname = "diplom";
$port = 80;

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Соединение с базой данных установлено успешно.<br>";
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';


    if ($password !== $confirm_password) {
        echo "Пароли не совпадают.<br>";
        exit;
    }


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Некорректный email.<br>";
        exit;
    }


    $sql = "SELECT user_id FROM userregistrations WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        echo "Ошибка подготовки запроса: " . $conn->error;
        exit;
    }
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Пользователь с таким логином или email уже существует.<br>";
        exit;
    } else {
        echo "Логин и email уникальны.<br>";
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO userregistrations (username, email, password) VALUES (?, ?, ?)");
    if (!$stmt) {
        echo "Ошибка подготовки запроса: " . $conn->error;
        exit;
    }
    $stmt->bind_param("sss", $username, $email, $hashed_password);
    if ($stmt->execute()) {
        echo "Регистрация прошла успешно.<br>";
        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        header('Location: welcome.php'); 
        exit;
    } else {
        echo "Ошибка при регистрации: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Данные не были отправлены методом POST.";
}

$conn->close();

