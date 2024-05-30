<?php
session_start();
include 'db.php'; // Подключение к базе данных

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $userId = $_SESSION['user_id']; // ID пользователя из сессии

    // Обновление данных пользователя
    $query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssi", $name, $email, $userId);
    $stmt->execute();

    // Обработка загрузки файла
    if ($_FILES['avatar']['error'] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["avatar"]["name"]);
        if (move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file)) {
            $query = "UPDATE users SET avatar = ? WHERE id = ?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("si", $target_file, $userId);
            $stmt->execute();
        }
    }

    // Обновление сессии
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;

    header("Location: profile.php"); // Перенаправление обратно на страницу профиля
    exit();
}
