<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "diplom";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Имя: " . $row["name"]."<br>";
    }
} else {
    echo "0 результатов";
}
$conn->close();
