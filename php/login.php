<?php
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

// Получение данных из POST-запроса
$email = $_POST['email'];
$userPassword = $_POST['password'];

// Проверка существования пользователя
$stmt = $conn->prepare("SELECT * FROM userlogins WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Проверка пароля
    if (password_verify($userPassword, $user['password'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['username'] = $user['username'];

        // Запись сессии в базу данных
        $session_id = session_id();
        $stmt = $conn->prepare("INSERT INTO user_sessions (user_id, session_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE session_id = VALUES(session_id), last_activity = CURRENT_TIMESTAMP");
        $stmt->bind_param("is", $user['id'], $session_id);
        $stmt->execute();

        header("Location: welcome.php");
        exit();
    } else {
        echo "Неверный пароль.";
    }
} else {
    echo "Пользователь с таким email не найден.";
}

$conn->close();

