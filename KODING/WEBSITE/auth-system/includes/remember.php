<?php
/**
 * Remember Me (Persistent Login) - Final Optimized 2026
 */

define('REMEMBER_ME_DAYS', 7);

if (!function_exists('set_remember_me')) {

    function set_remember_me(int $user_id): void {
        $token = bin2hex(random_bytes(32));
        $hash  = hash('sha256', $token);
        $exp   = date('Y-m-d H:i:s', time() + (86400 * REMEMBER_ME_DAYS));

        $stmt = mysqli_prepare(db(), "UPDATE users SET remember_token = ?, remember_expired = ? WHERE id = ?");
        mysqli_stmt_bind_param($stmt, 'ssi', $hash, $exp, $user_id);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);

        setcookie('remember_me', $token, [
            'expires'  => time() + (86400 * REMEMBER_ME_DAYS),
            'path'     => '/',
            'secure'   => isset($_SERVER['HTTPS']),
            'httponly' => true,
            'samesite' => 'Lax'
        ]);
    }

    function check_remember_me(): ?array {
        if (empty($_COOKIE['remember_me'])) return null;

        $hash = hash('sha256', $_COOKIE['remember_me']);
        // Ambil ID, Username, DAN Role agar session lengkap
        $sql = "SELECT id, username, role FROM users WHERE remember_token = ? AND remember_expired > NOW() LIMIT 1";

        $stmt = mysqli_prepare(db(), $sql);
        mysqli_stmt_bind_param($stmt, 's', $hash);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);
        $user = mysqli_fetch_assoc($res);
        mysqli_stmt_close($stmt);

        if ($user) {
            set_remember_me($user['id']); // Rotate token untuk keamanan
            return $user;
        }

        return null;
    }

    function clear_remember_me(int $user_id): void {
        $stmt = mysqli_prepare(db(), "UPDATE users SET remember_token = NULL, remember_expired = NULL WHERE id = ?");
        mysqli_stmt_bind_param($stmt, 'i', $user_id);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);

        setcookie('remember_me', '', time() - 3600, '/');
    }
}
