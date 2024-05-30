<?php
session_start();

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    // Подключение к базе данных
    $host = "localhost"; // или IP-адрес сервера
    $dbname = "diplom";
    $dbUsername = "root";
    $dbPassword = "root";
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    // Проверка соединения
    if ($conn->connect_error) {
        die("Ошибка подключения: " . $conn->connect_error);
    }

    // Удаление всех сессий пользователя
    $stmt = $conn->prepare("DELETE FROM user_sessions WHERE user_id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $stmt->close();

    // Закрытие подключения к базе данных
    $conn->close();
}

// Уничтожение сессии
session_unset(); // Очищаем все переменные сессии
session_destroy(); // Уничтожаем сессию

header("Location: index.php"); // Перенаправляем пользователя на главную страницу
exit();

