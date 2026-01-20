<?php
if (!function_exists('user_exists')) {
    function user_exists(string $username): bool {
        $stmt = mysqli_prepare(db(), "SELECT id FROM users WHERE username = ? LIMIT 1");
        mysqli_stmt_bind_param($stmt, 's', $username);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $exists = mysqli_stmt_num_rows($stmt) > 0;
        mysqli_stmt_close($stmt);
        return $exists;
    }

    function register_user(string $username, string $password, string $role = 'user'): bool {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (username, password_hash, role, created_at) VALUES (?, ?, ?, NOW())";
        $stmt = mysqli_prepare(db(), $sql);
        mysqli_stmt_bind_param($stmt, 'sss', $username, $hash, $role);
        $ok = mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        return $ok;
    }

    function login_user(string $username, string $password): ?array {
        $stmt = mysqli_prepare(db(), "SELECT id, username, password_hash, role FROM users WHERE username = ? LIMIT 1");
        mysqli_stmt_bind_param($stmt, 's', $username);
        mysqli_stmt_execute($stmt);
        $res  = mysqli_stmt_get_result($stmt);
        $user = mysqli_fetch_assoc($res);
        mysqli_stmt_close($stmt);

        if ($user && password_verify($password, $user['password_hash'])) {
            return $user;
        }
        return null;
    }

    // Fungsi tambahan untuk mempermudah pengecekan login dasar
    function require_login(): void {
        if (!isset($_SESSION['user_id'])) {
            header('Location: /login.php');
            exit;
        }
    }
}
