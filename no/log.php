<?php
session_start();

// Подключение к базе данных MySQL
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_db_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Функция для проверки существования пользователя в базе данных
function authenticateUser($conn, $username, $password) {
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);
    
    $sql = "SELECT * FROM users WHERE username='$username' AND password=MD5('$password')";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        return $result->fetch_assoc();
    } else {
        return false;
    }
}

// Обработка входа пользователя
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = authenticateUser($conn, $username, $password);

    if ($user) {
        $_SESSION['user'] = $user;
        header("Location: profile.php");
        exit();
    } else {
        $error_message = "Invalid username or password";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($error_message)) { ?>
        <p><?php echo $error_message; ?></p>
    <?php } ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
