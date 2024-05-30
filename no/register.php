<?php
    // Проверяем, были ли переданы данные методом POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Получаем значения из формы
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $repeatPassword = $_POST["repeatPassword"];

        // Выводим полученные данные
        echo "<h2>Данные пользователя:</h2>";
        echo "<p>Имя пользователя: " . $username . "</p>";
        echo "<p>E-mail: " . $email . "</p>";
        // Можно также вывести другие данные, например, дату регистрации и т.д.
    } else {
        // Если данные не были переданы методом POST, выводим сообщение об ошибке
        echo "<h2>Ошибка: данные не были отправлены через метод POST.</h2>";
    }
    