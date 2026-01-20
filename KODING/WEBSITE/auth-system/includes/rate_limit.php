<?php
/**
 * Login Rate Limiter 2026 - Fixed & Robust
 */

if (!defined('MAX_LOGIN_ATTEMPTS')) define('MAX_LOGIN_ATTEMPTS', 5);
if (!defined('LOGIN_BLOCK_SECONDS')) define('LOGIN_BLOCK_SECONDS', 60);

if (!function_exists('is_login_blocked')) {

    function is_login_blocked(string $username, string $ip): bool {
        $db = db();
        $sql = "SELECT blocked_until FROM login_attempts WHERE username = ? AND ip_address = ? LIMIT 1";
        
        $stmt = mysqli_prepare($db, $sql);
        
        // Debugging jika tabel belum ada
        if (!$stmt) {
            error_log("Rate Limit Error: " . mysqli_error($db));
            return false; 
        }

        mysqli_stmt_bind_param($stmt, 'ss', $username, $ip);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $blocked_until);
        mysqli_stmt_fetch($stmt);
        mysqli_stmt_close($stmt);

        if (!$blocked_until) return false;
        return strtotime($blocked_until) > time();
    }

    function record_failed_login(string $username, string $ip): void {
        $db = db();
        
        // 1. Ambil data attempts saat ini
        $stmt = mysqli_prepare($db, "SELECT attempts FROM login_attempts WHERE username = ? AND ip_address = ?");
        mysqli_stmt_bind_param($stmt, 'ss', $username, $ip);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_bind_result($stmt, $current_attempts);
        $found = mysqli_stmt_fetch($stmt);
        mysqli_stmt_close($stmt);

        if ($found) {
            $new_attempts = $current_attempts + 1;
            $blocked_until = null;

            // 2. Jika sudah mencapai atau melewati batas, set waktu blokir
            if ($new_attempts >= MAX_LOGIN_ATTEMPTS) {
                $blocked_until = date('Y-m-d H:i:s', time() + LOGIN_BLOCK_SECONDS);
            }

            $stmt = mysqli_prepare($db, "UPDATE login_attempts SET attempts = ?, last_attempt = NOW(), blocked_until = ? WHERE username = ? AND ip_address = ?");
            mysqli_stmt_bind_param($stmt, 'isss', $new_attempts, $blocked_until, $username, $ip);
        } else {
            // Percobaan pertama kali
            $stmt = mysqli_prepare($db, "INSERT INTO login_attempts (username, ip_address, attempts, last_attempt) VALUES (?, ?, 1, NOW())");
            mysqli_stmt_bind_param($stmt, 'ss', $username, $ip);
        }
        
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
    }

    function clear_login_attempts(string $username, string $ip): void {
        $stmt = mysqli_prepare(db(), "DELETE FROM login_attempts WHERE username = ? AND ip_address = ?");
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, 'ss', $username, $ip);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);
        }
    }
}
